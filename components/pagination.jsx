"use client";

import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between" id="pagination">
      <button
      disabled={ !hasPrev}
        className="paginationBtn bg-red-500 hover:scale-110 disabled:cursor-not-allowed disabled:bg-red-800"
        onClick={() => router.push(`?page=${page - 1}#menu`)}
      >
        Previous
      </button>
      <button
      disabled={ !hasNext}
        className="paginationBtn bg-red-500 hover:scale-110 disabled:cursor-not-allowed disabled:bg-red-800"
        onClick={() => router.push(`?page=${page + 1}#menu`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
