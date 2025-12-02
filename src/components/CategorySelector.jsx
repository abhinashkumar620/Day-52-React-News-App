import React from "react";

const CategorySelector = ({ category, onCategoryChange }) => {
  const categories = [
    { id: "general", name: "General" },
    { id: "business", name: "Business" },
    { id: "entertainment", name: "Entertainment" },
    { id: "health", name: "Health" },
    { id: "science", name: "Science" },
    { id: "sports", name: "Sports" },
    { id: "technology", name: "Technology" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-4">
      {categories.map((item) => (
        <button
          key={item.id}
          onClick={() => onCategoryChange(item.id)}
          className={`px-4 py-2 rounded-full font-medium transition ${
            category === item.id
              ? "bg-indigo-600 text-white shadow-md"
              : "bg-white text-gray-700 hover:bg-indigo-100"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
