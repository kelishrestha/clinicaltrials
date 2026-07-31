interface FlexRowProps {
  label: string;
  value?: React.ReactNode;
}

export function FlexRow({ label, value }: FlexRowProps) {
  return (
    <div>
      <dt className="text-sm font-medium text-muted-foreground">{label}</dt>

      <dd className="mt-1">
        {value ?? "—"}
      </dd>
    </div>
  );
}
