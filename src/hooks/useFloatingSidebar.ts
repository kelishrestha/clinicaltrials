import { useEffect, useRef, useState } from "react";

const TOP_OFFSET = 96;

export function useFloatingSidebar() {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLElement>(null);

  const [style, setStyle] = useState({});

  useEffect(() => {
    const update = () => {
      if (!sidebarRef.current || !containerRef.current || !contentRef.current) {
        return;
      }

      const sidebar = sidebarRef.current;
      const container = containerRef.current;
      const content = contentRef.current;

      const containerRect = container.getBoundingClientRect();
      const contentRect = content.getBoundingClientRect();

      const sidebarHeight = sidebar.offsetHeight;

      const start = window.scrollY + containerRect.top - TOP_OFFSET;

      const end = window.scrollY + contentRect.bottom - sidebarHeight - TOP_OFFSET;

      const scroll = window.scrollY;

      if (scroll < start) {
        setStyle({
          position: "relative",
          top: 0,
          width: "100%",
        });

        return;
      }

      if (scroll > end) {
        setStyle({
          position: "absolute",
          bottom: 0,
          top: "auto",
          width: "100%",
        });

        return;
      }

      setStyle({
        position: "fixed",
        top: TOP_OFFSET,
        width: `${container.offsetWidth}px`,
      });
    };

    update();

    const resizeObserver = new ResizeObserver(() => {
      update();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(frame);

      resizeObserver.disconnect();

      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("resize", update);
    };
  }, []);

  return {
    sidebarRef,
    containerRef,
    contentRef,
    style,
  };
}
