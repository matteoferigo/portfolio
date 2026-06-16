export type EducationDegree = {
  school: {
    name: string;
    logo: string;
    location: string;
  };
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string | null;
  grade: string | number;
  theme: string;
};

export function getEducationHistory(): EducationDegree[] {
  return [
    {
      school: {
        name: "Università degli Studi Guglielmo Marconi",
        logo: "/logos/unimarconi.svg",
        location: "Roma, RM (IT)",
      },
      degree: "Bachelor of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2019-09-01",
      endDate: "2024-06-01",
      grade: "105/110",
      theme: "#369a76",
    },
    {
      school: {
        name: "ENAIP FVG",
        logo: "/logos/enaip.svg",
        location: "Pasian di Prato, UD (IT)",
      },
      degree: "Advanced Diploma",
      fieldOfStudy: "Web Application Development",
      startDate: "2009-09-01",
      endDate: "2010-04-01",
      grade: "10/10",
      theme: "#004182",
    },
    {
      school: {
        name: "Istituto Statale d'Arte G. Sello",
        logo: "/logos/repubblica_italiana.svg",
        location: "Udine, UD (IT)",
      },
      degree: "High School",
      fieldOfStudy: "Graphic Design",
      startDate: "1999-09-01",
      endDate: "2004-06-01",
      grade: "98/100",
      theme: "#2564c6",
    },
  ];
}
