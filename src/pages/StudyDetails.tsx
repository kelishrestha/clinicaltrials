import { useParams } from "react-router-dom";

import { useStudy } from "../hooks/useStudy";

export default function StudyDetails() {
  const { nctId = "" } = useParams();

  const { data, isLoading, error } = useStudy(nctId);

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Unable to load study.</h2>;

  const study = data.protocolSection;

  return (
    <div style={{ padding: 24 }}>
      <h1>{study.identificationModule.briefTitle}</h1>

      <p>
        <strong>NCT ID:</strong>{" "}
        {study.identificationModule.nctId}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {study.statusModule.overallStatus}
      </p>

      <p>
        <strong>Conditions:</strong>{" "}
        {study.conditionsModule?.conditions?.join(", ")}
      </p>

      <p>
        <strong>Brief Summary:</strong>
      </p>

      <p>
        {study.descriptionModule?.briefSummary}
      </p>
    </div>
  );
}
