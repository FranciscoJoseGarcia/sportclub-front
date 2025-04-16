import { useState, useEffect } from "react";
import { getBenefitDetails } from "../services/api";
import { isFavorite, addFavorite, removeFavorite } from "../utils/favoritesHelpers";
import type { Benefit } from "../types/types";

export const useBenefitDetails = (id: string | undefined) => {
  const [benefit, setBenefit] = useState<Benefit | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [favorite, setFavorite] = useState(false);

  //Check if benefit is favorite when id changes
  useEffect(() => {
    if (id) {
      setFavorite(isFavorite(id));
    }
  }, [id]);

  //Toggle favorite status
  const toggleFavorite = () => {
    if (!id) return;
    if (favorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
    setFavorite(!favorite);
  };

  //Fetch benefit details
  useEffect(() => {
    const fetchBenefit = async () => {
      if (!id) return;
      
      setLoading(true);
      setError("");
      
      try {
        const response = await getBenefitDetails(id);
        setBenefit(response as unknown as Benefit);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error al cargar el beneficio");
      } finally {
        setLoading(false);
      }
    };

    fetchBenefit();
  }, [id]);

  return {
    benefit,
    loading,
    error,
    favorite,
    toggleFavorite,
  };
}; 