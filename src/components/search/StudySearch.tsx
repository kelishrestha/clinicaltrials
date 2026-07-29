import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange(value: string): void;
}

export default function StudySearch({
  value,
  onChange,
}: Props) {
  return (
    <Input
      value={value}
      placeholder="Search studies..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
