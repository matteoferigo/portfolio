"use client";

import ThemeToggle from "@/components/buttons/ThemeToggle";
import TextHoverHighlight from "@/components/text/TextHoverHighlight";

export type MenuItem = {
  label: string;
  id: string;
};

const colors = ["#fc5c7d", "#7dd7ff", "#c06cb0", "#6a82fb"];

export default function NavBar({ menu }: { menu: MenuItem[] }) {
  return (
    <nav className="fixed top-5 w-full z-50 px-8 grid grid-cols-3">
      <div />

      <ul className="flex justify-center space-x-3">
        {menu.map((item, index) => (
          <li key={item.id}>
            <a
              className="group text-sm md:text-base uppercase"
              href={`#${item.id}`}
              title={`Read more about ${item.label}`}
              onClick={(event) => {
                event.preventDefault();

                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <TextHoverHighlight
                className="text-mauve-500 text-shadow-lg text-shadow-mauve-50 group-hover:text-shadow-none dark:text-zinc-300 dark:text-shadow-zinc-800"
                hoverTextColor="#ffffff"
                hoverBgColor={colors.at(index) || "#6a82fb"}
              >
                {item.label}
              </TextHoverHighlight>
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}
