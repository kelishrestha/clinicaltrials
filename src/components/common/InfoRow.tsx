interface InfoRowProps {
  label: string;
  value?: React.ReactNode;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-muted py-3 last:border-0">
      <span className="text-sm text-muted-foreground">{label}</span>

      <span className="text-right font-medium">{value ?? "—"}</span>
    </div>
  );
}
