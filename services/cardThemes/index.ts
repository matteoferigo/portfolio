export const cardThemes = [
  "orange",
  "sky-navy",
  "lime-emerald",
  "violet",
  "blue",
  "pink-green",
] as const;

export type CardTheme = (typeof cardThemes)[number];

export function getCardTheme(theme: CardTheme): string {
  const gradient = "bg-linear-to-br";
  const whiteIcons = "[&_.card-icon]:brightness-0 [&_.card-icon]:invert";

  switch (theme) {
    case "orange":
      return `text-white ${gradient} [&_.text-inverted]:text-amber-900 from-orange-300 to-amber-600 ${whiteIcons}`;
    case "sky-navy":
      return `text-white ${gradient} [&_.text-inverted]:text-sky-900 from-sky-400 to-indigo-800 ${whiteIcons}`;
    case "lime-emerald":
      return `text-white ${gradient} [&_.text-inverted]:text-lime-900 from-lime-300 to-emerald-600 ${whiteIcons}`;
    case "violet":
      return `text-white ${gradient} [&_.text-inverted]:text-violet-900 from-indigo-400 to-violet-900 ${whiteIcons}`;
    case "blue":
      return `text-white ${gradient} [&_.text-inverted]:text-blue-900 from-indigo-300 to-blue-600 ${whiteIcons}`;
    case "pink-green":
      return `text-white ${gradient} [&_.text-inverted]:text-teal-900 from-violet-300 to-teal-600 ${whiteIcons}`;
    default:
      return `text-black ${gradient} [&_.text-inverted]:text-taupe-900 from-taupe-300 to-taupe-600 ${whiteIcons}`;
  }
}

export function getThemeBackground(theme: CardTheme): string[] {
  switch (theme) {
    case "orange":
      return ["var(--color-orange-100)", "var(--color-amber-200)"];
    case "sky-navy":
      return ["var(--color-sky-100)", "var(--color-indigo-200)"];
    case "lime-emerald":
      return ["var(--color-lime-100)", "var(--color-emerald-200)"];
    case "violet":
      return ["var(--color-indigo-100)", "var(--color-violet-200)"];
    case "blue":
      return ["var(--color-indigo-100)", "var(--color-blue-200)"];
    case "pink-green":
      return ["var(--color-pink-100)", "var(--color-teal-200)"];
    default:
      return ["var(--color-taupe-0)", "var(--color-taupe-150)"];
  }
}
