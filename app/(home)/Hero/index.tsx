import TextGradient from "@/components/text/TextGradient";
import TextPopup from "@/components/text/TextPopup";
import Image from "next/image";

export default function Hero({
  id,
}: Pick<React.HtmlHTMLAttributes<HTMLDivElement>, "id">) {
  return (
    <section
      id={id}
      className="w-screen h-screen flex flex-col justify-between p-8 bg-linear-to-b from-taupe-0 to-taupe-150"
    >
      <div />

      <main className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4">
        <div className="group relative size-xl md:size-2xl rounded-2xl overflow-hidden shadow-xl">
          <Image
            className="absolute top-0 z-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            src="/matrix.jpg"
            alt="Matteo Ferigo with Matrix filter"
            width={200}
            height={200}
          />
          <Image
            className="-z-1 grayscale-25"
            src="/avatar.jpg"
            alt="Matteo Ferigo avatar"
            width={200}
            height={200}
            priority
          />
        </div>

        <div className="text-center md:text-start space-y-2">
          <TextPopup
            as="h1"
            className="font-medium text-3xl md:text-4xl overflow-hidden"
            delay={100}
          >
            {"Hi, I'm "}
            <strong className="font-signature">Matteo</strong>
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
              {"Senior Frontend Engineer"}
            </TextGradient>
          </TextPopup>
        </div>
      </main>

      <footer className="text-center text-lg md:text-2xl">
        <TextGradient
          className="text-shadow-xs text-shadow-zinc-50"
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
