import { InfoRow } from "@/components/common/InfoRow";
import type { MeshTerm } from "@/types/study";

interface MeshCardProps {
  meshDetails: MeshTerm[];
}

export function MeshCard({ meshDetails }: MeshCardProps) {
  if(!meshDetails.length){ return (<span className="text-right">{"—"}</span>)}
  return (
    <div>
      { meshDetails?.map((meshDetail, index) => (
        <InfoRow key={`mesh-${index}-${meshDetail.id}`} label={meshDetail.term || ''} value={meshDetail.id} />
      ))}
    </div>
  )
}
