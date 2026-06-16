import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    name: "Email",
    icon: "/images/envelope.svg",
    url: "mailto:matteoferigo@gmail.com",
    title: "Write me an email",
  },
  {
    name: "LinkedIn",
    icon: "/images/linkedin.svg",
    url: "https://www.linkedin.com/in/matteo-ferigo",
    title: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    icon: "/images/github.svg",
    url: "https://github.com/matteoferigo",
    title: "Check out my GitHub",
  },
] as const;

export default function ContactInfo({
  id,
}: Pick<React.HtmlHTMLAttributes<HTMLDivElement>, "id">) {
  const backgroundClass =
    "bg-linear-to-b from-taupe-0 to-taupe-150  dark:text-white dark:from-zinc-900 dark:to-zinc-800";

  return (
    <section
      id={id}
      className={`w-screen h-screen p-5 md:p-20 flex flex-col justify-center gap-y-10 ${backgroundClass}`}
    >
      <header className="flex flex-col justify-end text-center space-y-2 mix-blend-luminosity">
        <h2 className="font-signature text-2xl md:text-3xl">Contact Me</h2>
        <p className="text-lg/7 text-zinc-500">
          {"Looking forward to hearing from you"}
        </p>
      </header>

      <ol className="w-full flex justify-center gap-x-8 md:gap-x-15">
        {contacts.map((contact) => (
          <li key={contact.name}>
            <Link href={contact.url} title={contact.title} target="_blank">
              <Image
                className={`size-12 md:size-20 object-cover transition-transform duration-300 hover:scale-120 ${contact.name === "GitHub" ? "dark:invert" : ""}`}
                src={contact.icon}
                alt={contact.name}
                width={80}
                height={80}
              />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
