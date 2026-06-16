import Hero from "./Hero";
import WorkExperiences from "./WorkExperiences";
import EducationHistory from "./EducationHistory";
import ContactInfo from "./ContactInfo";
import ScrollTopButton from "@/components/buttons/ScrollTop";
import NavBar, { type MenuItem } from "./NavBar";
import ThemeContext from "@/components/theme/ThemeContext";
import info from "@/services/info.json";

const menu: MenuItem[] = [
  { label: "Me", id: "hero" },
  { label: "Experience", id: "work-experiences" },
  { label: "Education", id: "education-history" },
  { label: "Contact", id: "contact" },
] as const;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${info.firstName} ${info.lastName}`,
    gender: info.gender,
    image: info.image,
    email: info.email,
    url: info.url,
    sameAs: Object.values(info.socials),
    jobTitle: info.jobTitle,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "Next.js",
      "Node.js",
      "Tailwind CSS",
    ],
  };

  return (
    <ThemeContext>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <NavBar menu={menu} />
      <ScrollTopButton />
      <Hero id={menu[0].id} />
      <WorkExperiences id={menu[1].id} />
      <EducationHistory id={menu[2].id} />
      <ContactInfo id={menu[3].id} />
    </ThemeContext>
  );
}
