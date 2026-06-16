export const tags = [
  "typescript",
  "react",
  "nextjs",
  "reactrouter",
  "tailwind",
  "shopify",
  "graphql",
  "algolia",
  "supabase",
  "playwright",
  "git",
  "scss",
  "jest",
  "redux",
  "angular",
  "ionic",
  "mithril",
  "cypress",
  "jquery",
  "php",
  "mysql",
  "photoshop",
  "illustrator",
] as const;

export type Tag = (typeof tags)[number];

export function getTagIcon(tag: Tag): string | undefined {
  if (tags.includes(tag)) {
    return `/icons/${tag}.svg`;
  }
  return;
}

export function getTagName(tag: Tag): string {
  if (tag === "reactrouter") {
    return "React Router";
  }
  if (tag === "nextjs") {
    return "Next.js";
  }
  if (tag === "graphql") {
    return "GraphQL";
  }
  if (tag === "mysql") {
    return "MySQL";
  }
  if (tag === "scss") {
    return "SCSS";
  }
  if (tag === "php") {
    return "PHP";
  }
  // Generic first letter capitalized
  return tag[0].toUpperCase() + tag.slice(1);
}
