import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
