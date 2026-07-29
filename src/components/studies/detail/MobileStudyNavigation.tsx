import { studyNavigation } from "@/constants/studySections";
import { cn } from "@/lib/utils";

interface Props {
  activeSection: string;
}

export function MobileStudyNavigation({ activeSection }: Props) {
  return (
    <div className="sticky top-16 z-40 -mx-6 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
      <nav className="overflow-x-auto">
        <ul className="flex min-w-max gap-2 px-6 py-3">
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
