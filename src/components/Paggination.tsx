import { useState } from "react";

const ITEMS_PER_PAGE = 50;

const Paggination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Вычисляем диапазон элементов для текущей страницы
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const itemsForCurrentPage = itemsIdsPaggination.result.slice(
    startIndex,
    endIndex
  );

  return (
    <div>
      {Array(Math.ceil(itemsIdsPaggination.result.length / ITEMS_PER_PAGE))
        .fill(null)
        .map((_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export { Paggination };
