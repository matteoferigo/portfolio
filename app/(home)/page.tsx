import Hero from "./Hero";
import WorkExperiences from "./WorkExperiences";
import EducationHistory from "./EducationHistory";
import ContactInfo from "./ContactInfo";
import ScrollTopButton from "@/components/buttons/ScrollTop";
import NavBar, { type MenuItem } from "./NavBar";

const menu: MenuItem[] = [
  { label: "Me", id: "hero" },
  { label: "Experience", id: "work-experiences" },
  { label: "Education", id: "education-history" },
  { label: "Contact", id: "contact" },
] as const;

export default function Home() {
  return (
    <>
      <NavBar menu={menu} />
      <ScrollTopButton />
      <Hero id={menu[0].id} />
      <WorkExperiences id={menu[1].id} />
      <EducationHistory id={menu[2].id} />
      <ContactInfo id={menu[3].id} />
    </>
  );
}
