import AppLayout from "@/layouts/AppLayout";
import { useStudyMetadata } from "@/hooks/useStudyMetadata";
import { ApiResponseCard } from "@/components/studies/detail/ApiResponseCard";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MetadataExplorer() {
  const {
    data,
    isLoading,
    isError,
  } = useStudyMetadata();

  return (
    <AppLayout>
      <div className="space-y-6">
        <Link
          to="/"
          className="bg-secondary p-2 mb-3 rounded-sm inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <h1 className="text-3xl font-bold text-primary!">
          Study Metadata
        </h1>

        {isLoading && <p>Loading...</p>}

        {isError && (
          <p>Unable to load metadata.</p>
        )}

        {data && (
          <ApiResponseCard
            data={data}
          />
        )}
      </div>
    </AppLayout>
  );
}
