export type LanguageLevel = {
  name: string;
  level: string;
  levelCode?: string;
  flagUrl: string;
  certificateUrl?: string;
};

export function getLanguages(): LanguageLevel[] {
  return [
    {
      name: "Italian",
      level: "Native",
      flagUrl: "/flags/it.svg",
    },
    {
      name: "English",
      level: "Advanced",
      levelCode: "C1",
      flagUrl: "/flags/uk.svg",
      certificateUrl:
        "https://api.busuu.com/anon/certificates/c07dae32280590dc164f4eb17696554e",
    },
    {
      name: "Spanish",
      level: "Intermediate",
      levelCode: "B2",
      flagUrl: "/flags/es.svg",
      certificateUrl:
        "https://api.busuu.com/anon/certificates/deacbae1315c4114beb4a1cc8addea51",
    },
    {
      name: "French",
      level: "Basic",
      levelCode: "A1",
      flagUrl: "/flags/fr.svg",
    },
  ];
}
