import axios from "axios";
import React, { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";

const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const PAGE_SIZE = 12;

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get("/api/news", {
        params: {
          category,
          page: currentPage,
          pageSize: PAGE_SIZE,
        },
      });


      const articles = response.data.articles || [];
      setNews(articles);
      setTotalResults(response.data.totalResults || 0);
      setTotalPages(Math.ceil((response.data.totalResults || 0) / PAGE_SIZE));
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, currentPage]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-500 p-4 shadow-md">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
            News App
          </h1>

          <CategorySelector category={category} onCategoryChange={setCategory} />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="text-center mt-4 text-gray-200 font-medium">
          Total results: {totalResults}
        </div>

        {loading && (
          <div className="flex justify-center items-center mt-10">
            <span className="loading loading-spinner text-4xl text-indigo-500"></span>
          </div>
        )}

        {error && (
          <div className="alert alert-error mt-5 text-center">{error}</div>
        )}

        {!loading && !error && (
          <>
            <NewsList articles={news} />

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={() => setCurrentPage((p) => p - 1)}
                onNext={() => setCurrentPage((p) => p + 1)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default App;
