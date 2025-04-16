import { getBenefits, getBenefitDetails, getByValue } from '../services/api';

export class BenefitsController {
  async getAllBenefits(page?: number) {
    try {
      const data = await getBenefits(page);
      return {
        benefits: data.beneficios,
        totalPages: data.totalPages,
        error: null
      };
    } catch {
      return {
        benefits: [],
        totalPages: 0,
        error: 'Error al cargar los beneficios'
      };
    }
  }

  async getBenefitById(id: string) {
    try {
      const data = await getBenefitDetails(id);
      return {
        benefit: data.body,
        error: null
      };
    } catch {
      return {
        benefit: null,
        error: 'Error al cargar el beneficio'
      };
    }
  }

  async searchBenefits(value: string) {
    try {
      const data = await getByValue(value);
      return {
        benefits: data.beneficios,
        error: null
      };
    } catch {
      return {
        benefits: [],
        error: 'Error al buscar beneficios'
      };
    }
  }
} 