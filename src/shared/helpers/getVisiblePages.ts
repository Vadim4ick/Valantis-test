export function getVisiblePages(
  pages: number[],
  totalPages: number
): (number | string)[] {
  const visiblePages = [1, ...pages, totalPages].reduce(
    (
      acc: (number | string)[],
      curr: number,
      idx: number,
      src: (number | string)[]
    ) => {
      const prevPage = Number(acc[acc.length - 1]);
      const isSequential = typeof curr === "number" && curr - prevPage === 1;
      const isLastPage = curr === totalPages && prevPage !== totalPages;
      const isEllipsisCondition =
        src[idx + 1] !== totalPages && curr !== totalPages && curr !== 1;

      if (acc.length === 0 || isSequential || isLastPage) {
        return [...acc, curr];
      }

      if (isEllipsisCondition) {
        return [...acc, "...", curr];
      }

      return acc;
    },
    []
  );

  const lastPageInPages = pages[pages.length - 1];
  const isFirstPageInPages = pages[0] === 1;
  const isLastPageInPages = lastPageInPages === totalPages;
  const isPageBeforeLast = lastPageInPages + 1 !== totalPages;

  if (isPageBeforeLast) {
    if (isLastPageInPages) {
      return visiblePages;
    }

    if (isFirstPageInPages) {
      visiblePages.splice(pages.length, 0, "...");
    } else if (pages[0] === 2) {
      visiblePages.splice(pages.length + 1, 0, "...");
    } else {
      visiblePages.splice(pages.length + 2, 0, "...");
    }
  }

  return visiblePages;
}
