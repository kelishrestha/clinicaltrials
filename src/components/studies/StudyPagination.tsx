import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Props {
  hasPrevious: boolean;
  hasNext: boolean;
  loading?: boolean;

  onPrevious(): void;
  onNext(): void;
}

export function StudyPagination({
  hasPrevious,
  hasNext,
  loading = false,
  onPrevious,
  onNext,
}: Props) {
  return (
    <div className="flex items-center justify-end gap-3 border-t pt-6">
      <Button
        variant="outline"
        disabled={!hasPrevious || loading}
        onClick={onPrevious}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Previous
      </Button>

      <Button
        disabled={!hasNext || loading}
        onClick={onNext}
      >
        Next
        <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
