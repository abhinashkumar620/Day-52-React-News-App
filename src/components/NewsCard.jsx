import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className=" rounded-lg shadow-lg overflow-hidden flex flex-col h-full">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4 flex flex-col flex-grow bg-black">
        <h2 className="font-bold text-lg mb-2 line-clamp-2 text-white">{article.title}</h2>
        {article.source?.name && (
          <p className="text-sm text-gray-200 mb-2">Source: {article.source.name}</p>
        )}
        <p className="text-gray-400 flex-grow line-clamp-3">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
