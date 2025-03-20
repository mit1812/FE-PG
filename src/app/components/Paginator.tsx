import { Pagination } from "@mui/material";

interface PaginatorProps {
  totalPages: number;
  page: number;
  setPage: (value: number) => void;
}

export default function Paginator({
  totalPages,
  page,
  setPage,
}: PaginatorProps) {
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };
  return (
    <Pagination count={totalPages} page={page} onChange={handlePagination} />
  );
}
