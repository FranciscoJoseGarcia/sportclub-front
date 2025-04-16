import { BenefitsController } from './BenefitsController';
import { getBenefits, getBenefitDetails, getByValue } from '../services/api';

// Mock the api module
jest.mock('../services/api', () => ({
  getBenefits: jest.fn(),
  getBenefitDetails: jest.fn(),
  getByValue: jest.fn()
}));

describe('BenefitsController', () => {
  let controller: BenefitsController;

  beforeEach(() => {
    controller = new BenefitsController();
    jest.clearAllMocks();
  });

  describe('getAllBenefits', () => {
    it('should return benefits and totalPages when API call succeeds', async () => {
      const mockData = {
        beneficios: [
          { id: 1, comercio: 'Test Commerce', descripcion: 'Test Description' }
        ],
        totalPages: 2
      };

      (getBenefits as jest.Mock).mockResolvedValueOnce(mockData);

      const result = await controller.getAllBenefits(1);

      expect(result).toEqual({
        benefits: mockData.beneficios,
        totalPages: mockData.totalPages,
        error: null
      });
      expect(getBenefits).toHaveBeenCalledWith(1);
    });

    it('should return empty array and error when API call fails', async () => {
      (getBenefits as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      const result = await controller.getAllBenefits();

      expect(result).toEqual({
        benefits: [],
        totalPages: 0,
        error: 'Error al cargar los beneficios'
      });
    });
  });

  describe('getBenefitById', () => {
    it('should return benefit when API call succeeds', async () => {
      const mockBenefit = {
        id: 1,
        comercio: 'Test Commerce',
        descripcion: 'Test Description'
      };

      (getBenefitDetails as jest.Mock).mockResolvedValueOnce({
        body: mockBenefit
      });

      const result = await controller.getBenefitById('1');

      expect(result).toEqual({
        benefit: mockBenefit,
        error: null
      });
      expect(getBenefitDetails).toHaveBeenCalledWith('1');
    });

    it('should return null and error when API call fails', async () => {
      (getBenefitDetails as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      const result = await controller.getBenefitById('1');

      expect(result).toEqual({
        benefit: null,
        error: 'Error al cargar el beneficio'
      });
    });
  });

  describe('searchBenefits', () => {
    it('should return benefits when API call succeeds', async () => {
      const mockBenefits = [
        { id: 1, comercio: 'Test Commerce', descripcion: 'Test Description' }
      ];

      (getByValue as jest.Mock).mockResolvedValueOnce({
        beneficios: mockBenefits
      });

      const result = await controller.searchBenefits('test');

      expect(result).toEqual({
        benefits: mockBenefits,
        error: null
      });
      expect(getByValue).toHaveBeenCalledWith('test');
    });

    it('should return empty array and error when API call fails', async () => {
      (getByValue as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      const result = await controller.searchBenefits('test');

      expect(result).toEqual({
        benefits: [],
        error: 'Error al buscar beneficios'
      });
    });
  });
}); 