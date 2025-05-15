import { ChevronFirst, ChevronLast, ChevronLeft, ChevronRight } from 'lucide-react';

type PaginationProps = {
  page: number;
  totalPages: number;
  limit: number;
  setLimit: (limit: number) => void;
  setPage: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  limit,
  setLimit,
  setPage,
}: PaginationProps) {
  return (
    <div className="bg-background rounded-b-2xl border-t px-6 pt-8 pb-4">
      <div className="flex items-center justify-end gap-8 text-sm">
        <label>
          <span className="mr-3">Items per page: </span>
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1);
            }}
            className="focus:border-accent focus:ring-accent h-10 cursor-pointer rounded-md border px-4 text-sm leading-none transition duration-75 outline-none focus:ring-1 focus:ring-inset"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
        <p>
          Page {page} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="cursor-pointer disabled:text-[#98A4AE]"
            aria-label="First page"
          >
            <ChevronFirst className="h-5 w-5" />
          </button>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="cursor-pointer disabled:text-[#98A4AE]"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="cursor-pointer disabled:text-[#98A4AE]"
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(totalPages)}
            className="cursor-pointer disabled:text-[#98A4AE]"
            aria-label="Last page"
          >
            <ChevronLast className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
