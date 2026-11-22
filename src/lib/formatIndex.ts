// Pads list positions to two digits ("01", "02") to match the editorial numbering.
export function formatIndex(position: number) {
  return String(position).padStart(2, "0");
}
