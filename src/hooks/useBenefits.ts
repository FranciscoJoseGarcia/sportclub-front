import { useState, useCallback } from 'react';
import { BenefitsController } from '../controllers/BenefitsController';
import type { Benefit, BenefitSearchResult } from '../types/types';

const benefitsController = new BenefitsController();

export const useBenefits = () => {
  const [benefits, setBenefits] = useState<(Benefit | BenefitSearchResult)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(0);

  const fetchBenefits = useCallback(async (page?: number) => {
    setLoading(true);
    setError(null);
    
    const result = await benefitsController.getAllBenefits(page);
    
    if (result.error) {
      setError(result.error);
    } else {
      setBenefits(result.benefits);
      setTotalPages(result.totalPages);
    }
    
    setLoading(false);
  }, []);

  const searchBenefits = useCallback(async (value: string) => {
    setLoading(true);
    setError(null);
    
    const result = await benefitsController.searchBenefits(value);
    
    if (result.error) {
      setError(result.error);
    } else {
      setBenefits(result.benefits);
      setTotalPages(1); 
    }
    
    setLoading(false);
  }, []);

  const getBenefitById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    
    const result = await benefitsController.getBenefitById(id);
    
    setLoading(false);
    
    if (result.error) {
      setError(result.error);
      return null;
    }
    
    return result.benefit;
  }, []);

  return {
    benefits,
    loading,
    error,
    totalPages,
    fetchBenefits,
    searchBenefits,
    getBenefitById
  };
}; 