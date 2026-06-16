import type { Tag } from "../tags";
import type { CardTheme } from "../cardThemes";

export type WorkExperience = {
  company: {
    name: string;
    logo: string;
    location: string;
  };
  role: string;
  startDate: string;
  endDate: string | null;
  duties: string[];
  tags: Tag[];
  theme: CardTheme;
};

export function getWorkExperiences(): WorkExperience[] {
  return [
    {
      company: {
        name: "Orange IT Services",
        logo: "/companies/orange.png",
        location: "Chiasso, TI (CH)",
      },
      role: "Senior Fullstack Developer",
      startDate: "2023-01-01",
      endDate: null,
      duties: [
        "Developed headless e-commerce websites with Next.js framework, interfacing with Shopify using GraphQL queries and Algolia indexes for fast navigation.",
        "Styled components and pages with JSX and Tailwind CSS to ensure clean, maintainable, and responsive UI.",
        "Adopted TDD practices for unit test and E2E testing with Playwright to guarantee application reliability.",
        "Developed Shopify applications leveraging Remix and Shopify’s Hydrogen framework to integrate third- party applications.",
        "Built custom platforms using Makerkit framework, based on Remix.",
        "Designed and managed Supabase database, implementing RLS policies to ensure data integrity and security.",
      ],
      tags: [
        "typescript",
        "react",
        "nextjs",
        "reactrouter",
        "tailwind",
        "shopify",
        "graphql",
        "algolia",
        // "supabase",
        "playwright",
        "git",
      ],
      theme: "orange",
    },
    {
      company: {
        name: "Sailogy",
        logo: "/companies/sailogy.svg",
        location: "Chiasso, TI (CH)",
      },
      role: "Lead Fullstack Developer",
      startDate: "2019-03-01",
      endDate: "2022-12-31",
      duties: [
        "Collaborated closely with UX designers and backend developers to design intuitive interfaces and ensure seamless software integration.",
        "Led frontend development efforts, leveraging pair-programming practices and mentoring junior developers to foster growth and code quality.",
        "Developed high-performance SSR, SSG, and CSR pages using Next.js, with a strong focus on cached data for cost-efficiency.",
        "Maintained and optimized core libraries, implementing function components, pure functions, and custom Hooks for modular and maintainable code.",
        "Ensured robust quality assurance through TypeScript annotations, comprehensive BDD-driven unit tests, and end-to-end testing with high code coverage.",
        "Implemented CI/CD pipelines to enable secure and efficient application deployment on Kubernetes infrastructure.",
      ],
      tags: ["typescript", "react", "nextjs", "scss", "jest", "cypress", "git"],
      theme: "sky-navy",
    },
    {
      company: {
        name: "MV Labs",
        logo: "/companies/mvlabs.svg",
        location: "Codroipo, UD (IT)",
      },
      role: "Senior Frontend Developer",
      startDate: "2018-09-01",
      endDate: "2019-02-28",
      duties: [
        "Designed and developed a web-based ERP system using the React-Redux-TypeScript stack, ensuring scalability and maintainability.",
        "Maintained and enhanced micro-frontend architectures to support modular and efficient development.",
        "Implemented comprehensive unit and integration tests, defined CI/CD pipelines to ensure reliability and streamlined deployments.",
      ],
      tags: ["typescript", "react", "redux", "jest", "git"],
      theme: "lime-emerald",
    },
    {
      company: {
        name: "Quokky",
        logo: "/companies/quokky.svg",
        location: "Udine, UD (IT)",
      },
      role: "Senior Javascript Developer",
      startDate: "2017-10-01",
      endDate: "2018-08-31",
      duties: [
        "Maintained a shared TypeScript library with a strong focus on functional programming principles to ensure reusability and clarity.",
        "Collaborated on ES- Next single page applications using MithrilJS and Meiosis for efficient state management.",
        "Applied TDD / BDD methodologies to achieve a 95 % code coverage target, ensuring high - quality and reliable code.",
        "Developed Cordova and Electron wrappers to facilitate the creation of maintainable and performant hybrid applications.",
        "Wrote robust Bash scripts to streamline and accelerate continuous delivery processes on the AWS platform.",
      ],
      tags: [
        "typescript",
        "angular",
        "ionic",
        "mithril",
        "jest",
        "cypress",
        "git",
      ],
      theme: "violet",
    },
    {
      company: {
        name: "Unidea",
        logo: "/companies/unidea.svg",
        location: "Udine, UD (IT)",
      },
      role: "Full Stack Developer",
      startDate: "2014-05-01",
      endDate: "2017-09-30",
      duties: [
        "Designed and developed structured hybrid mobile applications using Ionic, integrating plugins such as geolocation, accelerometer, push notifications, TouchID, Facebook, and more.",
        "Prototyped and built single - page applications with angular, leveraging ES6 and SASS for clean, maintainable code.",
        "Analyzed and developed e- commerce solutions integrated with PayPal, eBay, and Amazon APIs, while creating custom tablet tools for efficient warehouse management.",
        "Built lightweight Node.js services using Express and MongoDB to support backend functionality and data management.",
      ],
      tags: ["angular", "jquery", "ionic", "php", "mysql", "git"],
      theme: "blue",
    },
    {
      company: {
        name: "DigitLife",
        logo: "/companies/digitlife.svg",
        location: "Udine, UD (IT)",
      },
      role: "Web Developer",
      startDate: "2010-04-01",
      endDate: "2014-04-30",
      duties: [
        "Developed responsive and dynamic websites using HTML5, CSS3, and jQuery.",
        "Designed and maintained a scalable, flexible PHP - based CMS to support content management needs.",
        "Built hybrid mobile applications with angular and PhoneGap, adhering to MVC principles for clean and modular architecture.",
      ],
      tags: ["angular", "jquery", "php", "mysql", "photoshop", "illustrator"],
      theme: "pink-green",
    },
  ];
}
