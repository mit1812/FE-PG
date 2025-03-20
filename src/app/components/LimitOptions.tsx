import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export interface limitOptionsProps {
  limit: number;
  setLimit: (value: number) => void;
  setPage: (value: number) => void;
}

export default function LimitOptions({
  limit,
  setLimit,
  setPage,
}: limitOptionsProps) {
  const handleLimit = (event: SelectChangeEvent<number>) => {
    setLimit(Number(event.target.value));
    setPage(1);
  };
  return (
    <Select value={limit} onChange={handleLimit}>
      <MenuItem value={5}>5</MenuItem>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={50}>50</MenuItem>
    </Select>
  );
}
