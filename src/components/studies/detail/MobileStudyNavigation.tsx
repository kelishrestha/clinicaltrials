import { studyNavigation } from "@/constants/studySections";
import { cn } from "@/lib/utils";
import { useActiveStudySection } from "@/hooks/useActiveStudySection";

export function MobileStudyNavigation() {
  const activeSection = useActiveStudySection();

  return (
    <div className="border-b border-secondary bg-slate-50 lg:hidden">
      <nav className="overflow-x-auto">
        <ul className="flex min-w-max gap-2 py-3">
          {studyNavigation.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors",
                    activeSection === item.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:bg-accent",
                  )}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
