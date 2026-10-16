import { StudyCardSkeleton } from "./StudyCardSkeleton";

interface Props {
  count?: number;
}

export function StudyGridSkeleton({
  count = 9,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <StudyCardSkeleton key={index} />
      ))}
    </div>
  );
}
