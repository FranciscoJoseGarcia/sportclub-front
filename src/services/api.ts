import axios from "axios";
import type { Benefit, BenefitSearchResult } from "../types/types";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBenefits = async (
  page?: number
): Promise<{ beneficios: Benefit[]; totalPages: number }> => {
  const url = page ? `/beneficios?page=${page}` : "/beneficios";
  const response = await apiClient.get(url);
  return response.data;
};

export const getBenefitDetails = async (
  id: string
): Promise<{ body: Benefit }> => {
  const response = await apiClient.get(`/beneficios/${id}`);
  return response.data;
};

export const getByValue = async (
  value: string
): Promise<{ beneficios: BenefitSearchResult[] }> => {
  const response = await apiClient.get(
    `/beneficios/comercio/${encodeURIComponent(value)}`
  );
  return response.data;
};

export default apiClient;
