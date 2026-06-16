"use client";

import { getWorkExperiences, type WorkExperience } from "@/services/jobs";
import Image from "next/image";
import { getTagIcon, getTagName } from "@/services/tags";
import { getCardTheme, getThemeBackground } from "@/services/cardThemes";
import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";

export default function WorkExperiences({
  id,
}: Pick<React.HtmlHTMLAttributes<HTMLDivElement>, "id">) {
  const jobs = getWorkExperiences();
  const bgColor =
    "bg-linear-to-b from-(--from-color) to-(--to-color) dark:from-(--from-color)/20 dark:to-(--to-color)/20";

  const [current, setCurrent] = useState(0);
  const [pending, setPending] = useState(false);
  const slidesRef = useRef<HTMLDivElement[]>(
    Array.from({ length: jobs.length }),
  );

  const [fromBg, toBg] = getThemeBackground(jobs[current].theme);
  const yearClass = (active: boolean) =>
    `cursor-pointer w-fit text-sm uppercase mix-blend-luminosity ${active ? "text-zinc-700 dark:text-zinc-200" : "text-zinc-400 dark:text-zinc-500"}`;
  const backgroundClass = "dark:text-white dark:bg-black";

  return (
    <div id={id} className={`relative ${backgroundClass}`}>
      <section
        className={`sticky top-0 w-screen h-screen p-5 md:p-20 grid grid-rows-[15%_min-content_1fr] gap-y-10 md:gap-y-12 ${bgColor}`}
        style={
          {
            "--from-color": fromBg,
            "--to-color": toBg,
          } as React.CSSProperties
        }
      >
        <header className="flex flex-col justify-end text-center space-y-2 mix-blend-luminosity">
          <h2 className="font-signature text-2xl md:text-3xl">
            My Work Experience
          </h2>
          <p className="hidden md:block text-lg/7 text-zinc-500">
            Web developer for over 10 years, 7 of which mastering{" "}
            <strong>React</strong> and <strong>TypeScript</strong>
          </p>
        </header>

        <nav className="flex gap-2 justify-center">
          <button className={yearClass(!current)} onClick={() => setCurrent(0)}>
            Today
          </button>
          {jobs.map((job, index) => (
            <button
              key={job.startDate}
              className={yearClass(index === current)}
              onClick={() => {
                setPending(false);
                setCurrent(index);

                slidesRef.current
                  .at(index)
                  ?.scrollIntoView({ behavior: "instant", block: "start" });
              }}
            >
              {job.startDate.slice(0, 4)}
            </button>
          ))}
        </nav>

        <ul className="relative w-full h-fit">
          {jobs.map((job, index) => (
            <li
              key={job.company.name}
              className="absolute top-0 w-full h-full grid grid-cols-[min(90%,384px)] md:grid-cols-[min(33%,384px)_1fr] gap-12 justify-center items-start *:duration-500"
            >
              <JobCard job={job} step={index - current} />
              <JobDescription job={job} visible={index === current} />
            </li>
          ))}
        </ul>
      </section>

      {jobs.map((job, index) => (
        <InView
          key={index}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ref={(el: any) => {
            if (el?.node) slidesRef.current[index] = el.node;
          }}
          as="div"
          className="w-screen h-[60vh] -z-1"
          onChange={(inView) => {
            if (pending || !inView) return;

            if (!pending) setCurrent(index);
            if (index === current) setPending(false);
          }}
          threshold={0.9}
          delay={100}
          title={`${job.company.name} - ${job.role}`}
        />
      ))}
      <div className="w-screen h-[40vh] -z-1" />
    </div>
  );
}

function JobCard({ job, step }: { job: WorkExperience; step: number }) {
  const { company, role, startDate, endDate, tags, theme } = job;
  const from = new Date(startDate).getFullYear();
  const to = endDate ? new Date(endDate).getFullYear() : "Today";

  const animationClass =
    "opacity-(--opacity) scale-(--scale) translate-y-(--translate) transition-all";

  return (
    <article
      className={`w-full h-96 flex flex-col justify-between space-y-5 p-5 rounded-lg ${getCardTheme(theme)} ${animationClass}`}
      style={
        {
          zIndex: step >= 0 ? 10 - step : -1,
          "--opacity":
            step === 0 ? 1 : step > 0 ? (1 - step * 0.2).toFixed(2) : 0,
          "--scale": step > 0 ? (1 - step * 0.07).toFixed(2) : 1,
          "--translate": step > 0 ? `-${step * 20.07}px` : "0",
        } as React.CSSProperties
      }
    >
      <main className="space-y-0.5">
        <h3
          className="text-xl text-inverted mix-blend-multiply"
          data-testid="company-name"
        >
          {company.name}
        </h3>
        <h4 className="text-2xl font-semibold" data-testid="job-role">
          {role}
        </h4>
        <p className="text-inverted mix-blend-multiply opacity-75">
          {from} - {to}
        </p>
      </main>
      <footer className="space-y-2">
        <h5 className="text-xs text-inverted opacity-75 mix-blend-multiply">
          Technologies:
        </h5>
        <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
          {tags.map((tag) => (
            <li key={tag}>
              <Image
                className="card-icon object-center object-cover opacity-80"
                src={getTagIcon(tag) ?? "#"}
                alt={`${tag} icon`}
                title={getTagName(tag)}
                width={16}
                height={16}
              />
            </li>
          ))}
        </ul>
      </footer>
    </article>
  );
}

function JobDescription({
  job,
  visible,
}: {
  job: WorkExperience;
  visible: boolean;
}) {
  return (
    <section
      className={`hidden md:block text-base/7 text-zinc-600 dark:text-zinc-50  space-y-5 ${visible ? "opacity-100" : "opacity-0"} transition-opacity`}
    >
      {job.duties.map((duty) => (
        <p key={duty}>{duty}</p>
      ))}
    </section>
  );
}
