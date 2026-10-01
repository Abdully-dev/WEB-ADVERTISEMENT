export function ViewerControls({ hint = "Move your pointer to orbit the piece" }: { hint?: string }) {
  return <p className="mt-4 text-xs uppercase tracking-[0.15em] text-muted-foreground">{hint}</p>;
}
