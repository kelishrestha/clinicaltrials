import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  className?: string;
}

/**
 * Renders a MeSH descriptor id as a link to the NLM MeSH browser, opened in a
 * new tab. Falls back to plain text when there is no real id.
 */
export function MeshLink({ id, className }: Props) {
  if (!id || id === "-") {
    return <span className={className}>{id ?? "-"}</span>;
  }

  return (
    <a
      href={`https://meshb-prev.nlm.nih.gov/record/ui?ui=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("text-primary! hover:underline", className)}
    >
      {id}
    </a>
  );
}
