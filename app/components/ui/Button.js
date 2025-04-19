"use client";

export default function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
}) {
  const baseClass = "button";
  const variantClass = `button-${variant}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {children}
    </button>
  );
}
