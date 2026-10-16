import AppLayout from "@/layouts/AppLayout";
import { useStudyMetadata } from "@/hooks/useStudyMetadata";
import { ApiResponseCard } from "@/components/common/ApiResponseCard";
import { Button } from "@/components/ui/button";
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
        <header className="flex items-center justify-between gap-4">
          <h1 className="mb-0 text-3xl font-bold leading-tight text-primary!">
            Study Metadata
          </h1>

          <Link to="/">
            <Button variant="outline" size="xs">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </header>

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
