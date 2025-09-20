# 🎵 Cartel del Ritmo

> **La calle a du talent** - Cartel del Ritmo produit le son de Nuevo Mexico

## 📖 À propos

**Cartel del Ritmo** est une plateforme musicale dédiée à un label de musique pour l'univers GTA RP (Grand Theft Auto Role Play). Cette plateforme web moderne permet de découvrir, écouter et partager les productions musicales du label, offrant une expérience similaire aux plateformes de streaming comme Spotify ou Deezer.

### 🎯 Mission

Notre mission est de mettre en avant les talents musicaux de l'univers GTA RP, en créant une vitrine professionnelle pour les artistes et leurs productions. Cartel del Ritmo s'impose comme la référence pour découvrir le son authentique de Nuevo Mexico.

## ✨ Fonctionnalités

### 🎧 Lecteur Audio Avancé

- **Contrôles complets** : Play/Pause, navigation dans la piste, contrôle du volume
- **Interface responsive** : Optimisé pour desktop et mobile
- **Gestion intelligente du buffering** : Lecture fluide même sur connexions lentes
- **Contrôle du volume** : Slider interactif avec icônes dynamiques
- **Affichage du temps** : Durée totale et temps écoulé en temps réel

### 📚 Catalogue Musical

- **Galerie de musiques** : Découverte visuelle des productions
- **Cartes musicales** : Interface élégante avec couvertures d'albums
- **Navigation intuitive** : Accès rapide aux morceaux
- **Informations détaillées** : Artiste, titre, date de sortie

### 🎨 Design & UX

- **Interface moderne** : Design épuré et professionnel
- **Thème cohérent** : Identité visuelle du label Cartel del Ritmo
- **Navigation fluide** : Menu header et footer intégrés
- **Responsive design** : Adaptation automatique à tous les écrans

## 🛠️ Stack Technique

### Frontend

- **Next.js 15.3.0** - Framework React pour le rendu côté serveur et la performance
- **React 19.1.0** - Bibliothèque UI pour l'interface utilisateur
- **React Icons 5.5.0** - Icônes SVG optimisées
- **CSS Modules** - Styles modulaires et maintenables

### Backend & Services

- **Next.js API Routes** - API intégrée pour la gestion des données
- **Cloudinary** - Hébergement et optimisation des médias (audio/images)
- **JSON** - Base de données légère pour les métadonnées musicales

### Outils de Développement

- **TypeScript 5.8.3** - Typage statique pour une meilleure maintenabilité
- **Sharp 0.34.1** - Optimisation des images
- **ESLint** - Linting et qualité du code

### Architecture

```
app/
├── components/          # Composants réutilisables
│   ├── layout/         # Header, Footer
│   ├── music/          # Lecteur audio, cartes musicales
│   └── ui/             # Composants d'interface
├── catalog/            # Page catalogue
├── music/[slug]/       # Pages dynamiques des morceaux
├── contact/            # Page contact
└── styles/             # Styles globaux

public/
├── images/             # Images statiques
├── musics.json         # Base de données musicale
└── logo.ico           # Favicon
```

## 🚀 Installation & Démarrage

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone https://github.com/SarouleLamoule/CartelDelRitmo.git

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 🎵 Catalogue Actuel

Le catalogue inclut des productions d'artistes talentueux :

- **Génézio** - Toxic Boy
- **Maeve** - Distance, Perdue
- **Flaco** - Casa, Cartel Del Ritmo
- **Salva** - Caliente, Treinta
- **S'Kudo** - V4

## 🌐 Déploiement

Le projet est optimisé pour le déploiement sur :

- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **Heroku**
- Tout hébergeur supportant Node.js

## 📱 Compatibilité

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Mobile (iOS Safari, Chrome Mobile)
- ✅ Tablette
- ✅ PWA ready

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence ISC. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Contact

- **Repository** : [GitHub - CartelDelRitmo](https://github.com/SarouleLamoule/CartelDelRitmo)
- **Issues** : [Signaler un bug](https://github.com/SarouleLamoule/CartelDelRitmo/issues)

---

_Développé avec ❤️ pour la communauté GTA RP_
