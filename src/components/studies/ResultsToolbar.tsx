interface Props {
  total?: number;
}

export function ResultsToolbar({
  total = 0,
}: Props) {
  return (
    <p className="text-right text-sm italic text-muted-foreground py-2">
      {total.toLocaleString()} studies listed
    </p>
  );
}
