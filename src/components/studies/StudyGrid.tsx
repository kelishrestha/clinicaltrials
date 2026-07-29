import { type Study } from "@/types/study";
import { StudyCard } from "./StudyCard";

interface Props {
  studies: Study[];
}

export function StudyGrid({ studies }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 text-left">
      {studies.map((study) => (
        <StudyCard key={study.protocolSection.identificationModule.nctId} study={study} />
      ))}
    </div>
  );
}
