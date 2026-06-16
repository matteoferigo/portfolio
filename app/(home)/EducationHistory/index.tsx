import Image from "next/image";
import { getEducationHistory } from "@/services/schools";
import { getLanguages } from "@/services/languages";
import TextHoverHighlight from "@/components/text/TextHoverHighlight";

export default function EducationHistory({
  id,
}: Pick<React.HtmlHTMLAttributes<HTMLDivElement>, "id">) {
  const degrees = getEducationHistory();
  const languages = getLanguages();
  const backgroundClass =
    "bg-linear-to-b from-taupe-0 to-taupe-150  dark:text-white dark:from-zinc-900 dark:to-zinc-800";

  return (
    <div
      id={id}
      className={`w-screen h-screen p-5 md:p-20 flex flex-col justify-center gap-y-25 ${backgroundClass}`}
    >
      <section className="flex flex-col gap-y-5 md:gap-y-10">
        <header className="flex flex-col justify-end text-center space-y-2 mix-blend-luminosity">
          <h2 className="font-signature text-2xl md:text-3xl">My Education</h2>
          <p className="hidden md:block text-lg/7 text-zinc-500">
            {"A lifelong learner, from "}
            <strong>Graphic Design</strong>
            {" to "}
            <strong>Computer Science</strong>
          </p>
        </header>

        <ol className="w-full max-w-96 mx-auto grid gap-y-7 md:gap-y-10">
          {degrees.map((degree) => (
            <li
              key={degree.startDate}
              className="group grid grid-cols-[auto_1fr] justify-start items-center gap-x-5"
              style={
                {
                  "--theme": degree.theme,
                } as React.CSSProperties
              }
            >
              <Image
                className="size-10 md:size-14 rounded-lg shadow-md overflow-hidden object-fill"
                src={degree.school.logo}
                alt={`${degree.school.name} logo`}
                width={56}
                height={56}
              />

              <div className="space-y-0.25">
                <p className="text-xs uppercase text-zinc-400 -mb-0.5 dark:text-zinc-500">
                  {new Date(degree.startDate).getFullYear()}
                  {" – "}
                  {degree.endDate
                    ? new Date(degree.endDate).getFullYear()
                    : "Today"}
                </p>

                <div>
                  <h3>
                    <TextHoverHighlight
                      className="text-lg md:text-xl font-semibold text-zinc-800 dark:text-white"
                      hoverTextColor="#fff"
                      hoverBgColor={degree.theme}
                    >
                      {degree.fieldOfStudy}
                    </TextHoverHighlight>
                  </h3>
                </div>

                <h4 className="text-sm space-x-1.5">
                  <span className="text-zinc-400">{degree.degree}</span>
                  <span className="hidden md:inline-block text-zinc-600  dark:text-zinc-400">
                    {degree.school.name}
                  </span>
                </h4>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-y-7">
        <header className="flex flex-col justify-end text-center space-y-2">
          <h2 className="font-signature text-2xl md:text-3xl">
            My Language Skills
          </h2>
        </header>

        <ul className="flex justify-center gap-x-10">
          {languages.map((language) => (
            <li
              key={language.name}
              className="group grid justify-center text-center gap-y-1 transition-transform duration-300 hover:scale-110"
            >
              <Image
                className="w-10 h-7 rounded-md shadow-md overflow-hidden object-cover"
                src={language.flagUrl}
                alt={language.name}
                width={40}
                height={28}
              />

              <span
                className="text-xs uppercase text-zinc-500 dark:text-zinc-400"
                title={language.level}
              >
                {language.levelCode || language.level}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
