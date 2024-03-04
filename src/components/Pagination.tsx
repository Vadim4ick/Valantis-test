import { memo } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectPagination } from "@/redux/pagination/selectors";
import { paginationActions } from "@/redux/pagination/slice/paginationSlice";
import { getVisiblePages } from "@/shared/helpers/getVisiblePages";

const Pagination = memo(() => {
  const dispatch = useAppDispatch();
  const { page, totalPages } = useAppSelector(selectPagination);

  const maxVisiblePages = 5;

  let startPage = Math.max(1, page - 2);
  let endPage = Math.min(totalPages, page + 2);

  if (page <= 3) {
    startPage = 1;
    endPage = Math.min(totalPages, maxVisiblePages);
  } else if (totalPages - page < 2) {
    startPage = Math.max(1, totalPages - maxVisiblePages + 1);
    endPage = totalPages;
  }

  const pages = [...Array(endPage - startPage + 1).keys()].map(
    (_, index) => startPage + index
  );

  const visiblePages = getVisiblePages(pages, totalPages);

  return (
    <div className="flex justify-center gap-3 mt-5">
      {visiblePages.map((pageNumber, index) => (
        <button
          key={index}
          disabled={pageNumber === "..."}
          onClick={() =>
            pageNumber !== "..." &&
            dispatch(paginationActions.setPage(pageNumber))
          }
          style={{ fontWeight: pageNumber === page ? "bold" : "normal" }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
});

export { Pagination };
