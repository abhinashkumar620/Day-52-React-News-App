import React from "react";

const Pagination = ({ currentPage, totalPages, onPrev, onNext }) => {
  return (
    <div className="flex justify-center items-center gap-3 mt-6 mb-6">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded bg-indigo-500 text-white font-medium transition hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500"
      >
        Previous
      </button>

      <span className="font-medium">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded bg-indigo-500 text-white font-medium transition hover:bg-indigo-600 disabled:bg-gray-300 disabled:text-gray-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
