import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { DetailCard } from "@/components/common/DetailCard";


interface Props {
  data: unknown;
}

export function ApiResponseCard({
  data,
}: Props) {
  const [copied, setCopied] = useState(false);

  const json = JSON.stringify(
    data,
    null,
    2,
  );

  async function copyResponse() {
    await navigator.clipboard.writeText(json);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <DetailCard
      id="api-response"
      title="API Response"
    >
      <div className="relative">
        <Button
          variant="outline"
          size="sm"
          className="absolute right-3 top-3 z-10"
          onClick={copyResponse}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </>
          )}
        </Button>

        <pre className="max-h-150 overflow-auto rounded-lg border bg-muted p-4 pt-14 text-xs leading-relaxed">
          <code>
            {json}
          </code>
        </pre>
      </div>
    </DetailCard>
  );
}
