import { useEffect, useState } from "react";

export function useActiveStudySection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("[data-study-section]");

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length) {
          setActiveSection((visible[0].target as HTMLElement).id);
        }
      },
      {
        // The study detail body scrolls inside its own panel (not the window),
        // so the observer must use that panel as the intersection root.
        root: document.querySelector<HTMLElement>("[data-scroll-root]"),
        rootMargin: "0px 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}
