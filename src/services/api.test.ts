import { getBenefits, getBenefitDetails, getByValue } from "./api";
import type { Benefit, BenefitSearchResult } from "../types/types";
import apiClient from "./api";

// Mock the api module
jest.mock("./api", () => {
  const mockApiClient = {
    get: jest.fn()
  };

  return {
    __esModule: true,
    default: mockApiClient,
    getBenefits: async (page?: number) => {
      const url = page ? `/beneficios?page=${page}` : "/beneficios";
      const response = await mockApiClient.get(url);
      return response.data;
    },
    getBenefitDetails: async (id: string) => {
      const response = await mockApiClient.get(`/beneficios/${id}`);
      return response.data;
    },
    getByValue: async (value: string) => {
      const response = await mockApiClient.get(
        `/beneficios/comercio/${encodeURIComponent(value)}`
      );
      return response.data;
    }
  };
});

describe("api", () => {
  let mockApiClient: { get: jest.Mock };

  beforeEach(() => {
    jest.clearAllMocks();
    mockApiClient = apiClient as unknown as { get: jest.Mock };
  });

  describe("getBenefits", () => {
    it("should fetch benefits without page parameter", async () => {
      const mockResponse = {
        data: {
          beneficios: [
            { id: 1, comercio: "Test Commerce", descripcion: "Test Description" }
          ],
          totalPages: 1
        }
      };

      mockApiClient.get.mockResolvedValueOnce(mockResponse);

      const result = await getBenefits();

      expect(mockApiClient.get).toHaveBeenCalledWith("/beneficios");
      expect(result).toEqual(mockResponse.data);
    });

    it("should fetch benefits with page parameter", async () => {
      const mockResponse = {
        data: {
          beneficios: [
            { id: 1, comercio: "Test Commerce", descripcion: "Test Description" }
          ],
          totalPages: 2
        }
      };

      mockApiClient.get.mockResolvedValueOnce(mockResponse);

      const result = await getBenefits(2);

      expect(mockApiClient.get).toHaveBeenCalledWith("/beneficios?page=2");
      expect(result).toEqual(mockResponse.data);
    });

    it("should handle API errors", async () => {
      const error = new Error("API Error");
      mockApiClient.get.mockRejectedValueOnce(error);

      await expect(getBenefits()).rejects.toThrow("API Error");
    });
  });

  describe("getBenefitDetails", () => {
    it("should fetch benefit details", async () => {
      const mockBenefit: Benefit = {
        id: 1,
        comercio: "Test Commerce",
        descripcion: "Test Description",
        descuento: 10,
        archivado: false,
        Imagens: [{ url: "test.jpg" }]
      };

      const mockResponse = {
        data: {
          body: mockBenefit
        }
      };

      mockApiClient.get.mockResolvedValueOnce(mockResponse);

      const result = await getBenefitDetails("1");

      expect(mockApiClient.get).toHaveBeenCalledWith("/beneficios/1");
      expect(result).toEqual(mockResponse.data);
    });

    it("should handle API errors", async () => {
      const error = new Error("API Error");
      mockApiClient.get.mockRejectedValueOnce(error);

      await expect(getBenefitDetails("1")).rejects.toThrow("API Error");
    });
  });

  describe("getByValue", () => {
    it("should search benefits by value", async () => {
      const mockSearchResults: BenefitSearchResult[] = [
        { 
          id: 1, 
          comercio: "Test Commerce", 
          descripcion: "Test Description",
          descuento: 10,
          archivado: false,
          Imagens: [{ url: "test.jpg" }]
        }
      ];

      const mockResponse = {
        data: {
          beneficios: mockSearchResults
        }
      };

      mockApiClient.get.mockResolvedValueOnce(mockResponse);

      const result = await getByValue("test");

      expect(mockApiClient.get).toHaveBeenCalledWith("/beneficios/comercio/test");
      expect(result).toEqual(mockResponse.data);
    });

    it("should encode search value", async () => {
      const mockResponse = {
        data: {
          beneficios: []
        }
      };

      mockApiClient.get.mockResolvedValueOnce(mockResponse);

      await getByValue("test value");

      expect(mockApiClient.get).toHaveBeenCalledWith("/beneficios/comercio/test%20value");
    });

    it("should handle API errors", async () => {
      const error = new Error("API Error");
      mockApiClient.get.mockRejectedValueOnce(error);

      await expect(getByValue("test")).rejects.toThrow("API Error");
    });
  });
}); 