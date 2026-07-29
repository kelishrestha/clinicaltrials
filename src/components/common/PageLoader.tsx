import { Loader } from "./Loader";

interface Props {
  text?: string;
}

export function PageLoader({ text = "Loading..." }: Props) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader size="lg" text={text} />
    </div>
  );
}
