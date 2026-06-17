import TextGradient from "@/components/text/TextGradient";
import TextPopup from "@/components/text/TextPopup";
import Image from "next/image";
import info from "@/services/info.json";

export default function Hero({
  id,
}: Pick<React.HtmlHTMLAttributes<HTMLDivElement>, "id">) {
  const backgroundClass =
    "bg-linear-to-b from-taupe-0 to-taupe-150  dark:text-white dark:from-zinc-900 dark:to-zinc-800";
  return (
    <section
      id={id}
      className={`w-screen h-screen flex flex-col justify-between p-8 ${backgroundClass}`}
    >
      <div />

      <main className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4">
        <div className="group relative size-xl md:size-2xl rounded-2xl overflow-hidden shadow-xl *:transition-opacity *:duration-500">
          <Image
            className="absolute top-0 z-1 opacity-0 group-hover:opacity-100 dark:relative dark:z-0 dark:opacity-100"
            src="/matrix.jpg"
            alt={`${info.firstName} ${info.lastName} with Matrix filter`}
            width={200}
            height={200}
          />
          <Image
            className="z-0 grayscale-25 dark:absolute dark:top-0 dark:z-1 dark:opacity-0 group-hover:opacity-100"
            src="/avatar.jpg"
            alt={`${info.firstName} ${info.lastName} avatar`}
            width={200}
            height={200}
            priority
            fetchPriority="high"
          />
        </div>

        <div className="text-center md:text-start space-y-2">
          <TextPopup
            as="h1"
            className="font-medium text-3xl md:text-4xl overflow-hidden"
            delay={100}
          >
            {"Hi, I'm "}
            <strong className="font-signature dark:font-semibold">
              {info.firstName}
            </strong>
          </TextPopup>
          <TextPopup
            as="h2"
            className="font-black text-2xl md:text-3xl overflow-hidden"
            delay={200}
          >
            <TextGradient
              className="text-shadow-xs"
              startColor="#fc5c7d"
              middleColor="#c06cb0"
              endColor="#6a82fb"
              animate
            >
              {info.jobTitle}
            </TextGradient>
          </TextPopup>
        </div>
      </main>

      <footer className="text-center text-lg md:text-2xl">
        <TextGradient
          className="text-shadow-xs text-shadow-zinc-100 dark:invert dark:opacity-50"
          startColor="#6b7280"
          middleColor="#e1e2e5"
          endColor="#6b7280"
          animate
        >
          Scroll down to read more
        </TextGradient>
      </footer>
    </section>
  );
}
