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

  const menuItemValues = [5, 10, 20, 50];

  return (
    <Select value={limit} onChange={handleLimit}>
      {menuItemValues.map((menuItemValue) => (
        <MenuItem key={menuItemValue} value={menuItemValue}>
          {menuItemValue}
        </MenuItem>
      ))}
    </Select>
  );
}
