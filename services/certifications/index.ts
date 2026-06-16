export type Certification = {
  organization: {
    name: string;
    logo: string;
    location?: string;
  };
  title: string;
  releaseDate: string;
  grade?: string;
  url?: string;
};

export function getCertifications(): Certification[] {
  return [
    {
      organization: {
        name: "ENAIP FVG",
        logo: "/companies/enaip.png",
        location: "Pasian di Prato, UD (IT)",
      },
      title: "Web Application Development",
      releaseDate: "2010-04-01",
      grade: "10/10",
    },
    {
      organization: {
        name: "IAL FVG",
        logo: "/companies/ial.png",
        location: "Pordenone, PN (IT)",
      },
      title: "WebApp Academy",
      releaseDate: "2013-12-01",
    },
    {
      organization: {
        name: "MongoDB University",
        logo: "/companies/mongodb.png",
      },
      title: "MongoDB for Node.js Developers",
      releaseDate: "2016-03-01",
      url: "https://learn.mongodb.com/c/TjRiQfdgUeOeNZ0kqkCM_w",
    },
    {
      organization: {
        name: "Avanscoperta",
        logo: "/companies/avanscoperta.png",
        location: "Bologna, BO (IT)",
      },
      title: "Node.js Workshop",
      releaseDate: "2018-10-17",
    },
  ];
}
