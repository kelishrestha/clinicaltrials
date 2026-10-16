import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function LocationFilter({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Location
      </label>

      <p className="text-xs text-muted-foreground pb-3">
        Show only studies with a matching country, city, or state
      </p>

      <Input
        className="h-auto w-full rounded-md border border-secondary border-b-secondary px-3 py-1.5 text-xs md:text-xs focus-visible:border-ring"
        placeholder="Country, city, state..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
      />
    </div>
  );
}
