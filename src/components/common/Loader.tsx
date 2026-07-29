import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  text?: string;
}

const sizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-10 w-10",
};

export function Loader({ className, size = "md", text }: LoaderProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <LoaderCircle className={cn("animate-spin text-primary", sizes[size])} />

      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}
