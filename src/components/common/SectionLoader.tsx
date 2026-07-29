import { Loader } from "./Loader";

interface Props {
  title: string;
}

export function SectionLoader({ title }: Props) {
  return (
    <div className="space-y-4 rounded-lg p-8">
      <Loader text={`Loading ${title}...`} />
    </div>
  );
}
