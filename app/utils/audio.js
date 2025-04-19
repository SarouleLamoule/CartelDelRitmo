const DRIVE_WORKER_URL = "/api/audio";

/**
 * Vérifie si une URL est une URL Google Drive valide
 * @param {string} url - L'URL à vérifier
 * @returns {boolean}
 */
export function isGoogleDriveUrl(url) {
  return url.startsWith(DRIVE_WORKER_URL) || url.includes("drive.google.com");
}

/**
 * Convertit une URL Google Drive en URL de streaming via l'API
 * @param {string} url - L'URL Google Drive originale
 * @returns {string} L'URL de streaming
 */
export function getStreamingUrl(url) {
  if (!url) {
    throw new Error("URL non fournie");
  }

  if (url.startsWith(DRIVE_WORKER_URL)) {
    return url; // Déjà une URL de streaming
  }

  // Extraction de l'ID depuis une URL Google Drive classique
  const match = url.match(/[-\w]{25,}/);
  if (!match) {
    throw new Error("URL Google Drive invalide");
  }

  const fileId = match[0];
  return `${DRIVE_WORKER_URL}/${fileId}`;
}

/**
 * Vérifie si une URL est une URL Cloudinary
 * @param {string} url - L'URL à vérifier
 * @returns {boolean}
 */
export function isCloudinaryUrl(url) {
  return url.includes("res.cloudinary.com");
}

/**
 * Vérifie si l'audio est disponible en utilisant l'élément Audio natif
 * @param {string} url - L'URL à vérifier
 * @returns {Promise<string>} L'URL validée
 */
export async function validateAudioUrl(url) {
  if (!url) {
    throw new Error("URL non fournie");
  }

  return new Promise((resolve, reject) => {
    const audio = new Audio();
    let timeoutId;

    const cleanup = () => {
      if (timeoutId) clearTimeout(timeoutId);
      audio.removeEventListener("canplaythrough", onSuccess);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("loadedmetadata", onMetadata);
      audio.src = "";
      audio.load();
    };

    const onSuccess = () => {
      cleanup();
      resolve(url);
    };

    const onMetadata = () => {
      if (audio.duration > 0) {
        cleanup();
        resolve(url);
      }
    };

    const onError = (error) => {
      cleanup();
      console.error("Erreur de validation audio:", {
        name: error.type,
        message: error.message || "Erreur inconnue",
        url: url,
      });
      reject(new Error("Audio non disponible"));
    };

    timeoutId = setTimeout(() => {
      cleanup();
      reject(new Error("Délai d'attente dépassé pour la validation audio"));
    }, 20000);

    audio.addEventListener("canplaythrough", onSuccess);
    audio.addEventListener("error", onError);
    audio.addEventListener("loadedmetadata", onMetadata);

    try {
      audio.crossOrigin = "anonymous";
      audio.preload = "metadata";
      audio.src = url;
      audio.load();
    } catch (error) {
      cleanup();
      reject(error);
    }
  });
}

/**
 * Précharge l'audio pour une lecture plus rapide
 * @param {string} url - L'URL de l'audio à précharger
 */
export function preloadAudio(url) {
  if (!url) return;

  const audio = new Audio();
  audio.crossOrigin = "anonymous";
  audio.preload = "metadata";
  audio.src = url;
  audio.load();
}

/**
 * Optimise le chargement de l'audio avec préchargement et mise en cache
 * @param {string} url - L'URL de l'audio à charger
 * @returns {Promise<string>} - L'URL validée
 */
export async function optimizeAudioLoading(url) {
  if (!url) throw new Error("URL audio manquante");

  // Création d'un cache pour les URLs audio
  const audioCache = new Map();

  // Vérifier si l'URL est dans le cache
  if (audioCache.has(url)) {
    return audioCache.get(url);
  }

  try {
    // Valider l'URL
    const validUrl = await validateAudioUrl(url);

    // Précharger l'audio
    const audio = new Audio();
    audio.preload = "auto"; // Force le préchargement complet
    audio.crossOrigin = "anonymous";

    // Promesse de préchargement
    const preloadPromise = new Promise((resolve, reject) => {
      audio.onloadeddata = () => resolve(validUrl);
      audio.onerror = () => reject(new Error("Erreur de préchargement audio"));
    });

    audio.src = validUrl;
    audio.load();

    // Attendre le préchargement et mettre en cache
    const cachedUrl = await preloadPromise;
    audioCache.set(url, cachedUrl);

    return cachedUrl;
  } catch (error) {
    throw new Error(`Erreur de chargement audio: ${error.message}`);
  }
}

/**
 * Gère le buffering de l'audio
 * @param {HTMLAudioElement} audio - L'élément audio
 * @returns {Promise<void>}
 */
export function handleBuffering(audio) {
  return new Promise((resolve) => {
    const checkBuffer = () => {
      const buffered = audio.buffered;
      if (buffered.length > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1);
        const duration = audio.duration;
        if (bufferedEnd >= duration) {
          resolve();
          return;
        }
      }
      requestAnimationFrame(checkBuffer);
    };
    checkBuffer();
  });
}

/**
 * Nettoie les ressources audio
 * @param {HTMLAudioElement} audio - L'élément audio à nettoyer
 */
export function cleanupAudio(audio) {
  if (!audio) return;

  // Arrêter la lecture
  audio.pause();

  // Vider les buffers
  audio.src = "";
  audio.load();

  // Supprimer les événements
  audio.onloadeddata = null;
  audio.onerror = null;
  audio.ontimeupdate = null;
  audio.onended = null;

  // Libérer la mémoire
  URL.revokeObjectURL(audio.src);
}
