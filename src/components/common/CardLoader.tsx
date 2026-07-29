import { Loader } from "./Loader";

export function CardLoader() {
  return (
    <div className="flex h-48 items-center justify-center rounded-lg border border-secondary bg-card">
      <Loader />
    </div>
  );
}
