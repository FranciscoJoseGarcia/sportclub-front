import { useNavigate } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";

const Search = () => {
  const navigate = useNavigate();
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    error,
    clearSearch,
  } = useSearch();

  const handleBenefitSelect = (id: number) => {
    setSearchQuery("");
    navigate(`/beneficio/${id}`);
  };

  return (
    <div className="md:min-w-[380px] relative">
      <div className="relative flex w-full">
        <div className="flex min-h-[40px] w-full md:py-3 items-center overflow-hidden rounded-full border-[2px] md:border-[3px] border-gray-500 text-sm md:text-lg text-gray-900 focus:outline-none relative hover:border-gray-600 focus-within:border-gray-700">
          <input
            autoComplete="off"
            id="search-navbar"
            type="text"
            placeholder="Busca tu beneficio"
            className="h-full w-full pl-8 pr-10 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-2 mt-2">
          <p className="text-gray-500 text-center">Buscando...</p>
        </div>
      )}

      {error && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg p-2 mt-2">
          <p className="text-red-500 text-center">{error}</p>
        </div>
      )}

      {searchResults.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg max-h-96 overflow-auto z-20 mt-2 p-2 space-y-2">
          {searchResults.map((result) => (
            <li
              key={result.id}
              onClick={() => handleBenefitSelect(result.id)}
              className="flex items-center gap-3 p-2 md:p-3 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all duration-200 cursor-pointer border border-gray-100"
            >
              <div className="relative">
                <img
                  src={result.Imagens?.[0]?.url}
                  alt={result.comercio}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
                />
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-blue-500 text-white rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center font-bold text-xs md:text-sm">
                  {result.descuento}%
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 truncate text-sm md:text-base">
                  {result.comercio}
                </p>
                <p className="text-xs md:text-sm text-gray-500 hidden md:block">
                  Descuento exclusivo para socios
                </p>
              </div>

              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
