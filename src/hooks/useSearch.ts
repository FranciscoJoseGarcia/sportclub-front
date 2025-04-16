import { useState, useEffect } from "react";
import { getByValue } from "../services/api";
import type { BenefitSearchResult } from "../types/types";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BenefitSearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const results = await getByValue(searchQuery);
        setSearchResults(results?.beneficios || []);
      } catch {
        setError("No encontramos ningún beneficio");
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(fetchSearchResults, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
  };

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
    isLoading,
    error,
    clearSearch,
  };
}; 