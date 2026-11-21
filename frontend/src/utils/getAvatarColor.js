export function getAvatarColor(input) {
  if (!input || typeof input !== "string") {
    return "#006C47";
  }

  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
  }

  const colors = [
    "#2563EB", // Blue
    "#4F46E5", // Indigo
    "#E11D48", // Rose
    "#059669", // Emerald
    "#D97706", // Amber
    "#0D9488", // Teal
    "#7C3AED", // Violet
  ];

  return colors[Math.abs(hash) % colors.length];
}
