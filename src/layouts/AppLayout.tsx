import { type ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip"

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-slate-50">
      <TooltipProvider>
        <div className="mx-auto max-w-7xl px-6 py-8">{children}</div>
      </TooltipProvider>
    </main>
  );
}
