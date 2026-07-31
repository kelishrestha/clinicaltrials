import { InfoHeading } from "@/components/common/InfoHeading";
import type { BrowseLeafModule } from "@/types/studyModules";
import { MeshCard } from "./MeshCard";
import { EmptyState } from "@/components/common/EmptyState";
import { DetailCard } from "@/components/common/DetailCard";
import { InfoRow } from "@/components/common/InfoRow";
import { FlexRow } from "@/components/common/FlexRow";

interface MeshCardProps {
  browseLeafModule: BrowseLeafModule;
  type: 'conditions' | 'interventions';
}

export function MeshBrowseModuleCard({ browseLeafModule, type }: MeshCardProps) {
  return (
    <DetailCard id={`${type}-mesh`} title={`${type} Mesh`}>
      {
        !browseLeafModule ? (
          <EmptyState title={`No ${type} mesh details`}
          description=""
          />
        ) : (
        <div>
          <InfoHeading title="Meshes" />
          <MeshCard meshDetails={browseLeafModule.meshes || []} />
          <InfoHeading title="Ancestor Meshes" />
          <MeshCard meshDetails={browseLeafModule.ancestors || []} />
          <FlexRow label="Browse Leaf" value={
            browseLeafModule.browseLeaves?.length && (
              browseLeafModule.browseLeaves.map((browseLeaf, index) => (
                <div key={index}>
                  <InfoRow label="Id" value={browseLeaf.id} />
                  <InfoRow label="Name" value={browseLeaf.name} />
                  <InfoRow label="as Found" value={browseLeaf.asFound} />
                  <InfoRow label="Relevance" value={browseLeaf.relevance} />
                </div>
              ))
            )
          }
          />
          <FlexRow label="Browse Branches" value={
            browseLeafModule.browseBranches?.length && (
              browseLeafModule.browseBranches.map((browseBranch, index) => (
                <div key={index}>
                  <InfoRow label="Abbreviation" value={browseBranch.abbrev} />
                  <InfoRow label="Name" value={browseBranch.name} />

                </div>
              ))
            )
          }
          />
        </div>
        )
      }
    </DetailCard>
  )
}
