import { getAvailableDays } from "./dateHelpers";
import type { Dium } from "../types/types";

describe("dateHelpers", () => {
  it("should return all days when all are available", () => {
    const dium: Dium = {
      id: 1,
      BeneficioId: 1,
      lunes: true,
      martes: true,
      miercoles: true,
      jueves: true,
      viernes: true,
      sabado: true,
      domingo: true,
      feriados: true
    };

    const result = getAvailableDays(dium);
    expect(result).toEqual([
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
      "Feriados"
    ]);
  });

  it("should return only available days", () => {
    const dium: Dium = {
      id: 1,
      BeneficioId: 1,
      lunes: true,
      martes: false,
      miercoles: true,
      jueves: false,
      viernes: true,
      sabado: false,
      domingo: true,
      feriados: false
    };

    const result = getAvailableDays(dium);
    expect(result).toEqual([
      "Lunes",
      "Miércoles",
      "Viernes",
      "Domingo"
    ]);
  });

  it("should return empty array when no days are available", () => {
    const dium: Dium = {
      id: 1,
      BeneficioId: 1,
      lunes: false,
      martes: false,
      miercoles: false,
      jueves: false,
      viernes: false,
      sabado: false,
      domingo: false,
      feriados: false
    };

    const result = getAvailableDays(dium);
    expect(result).toEqual([]);
  });

  it("should handle partial Dium object", () => {
    const dium = {
      id: 1,
      BeneficioId: 1,
      lunes: true,
      martes: false
    } as Dium;

    const result = getAvailableDays(dium);
    expect(result).toEqual(["Lunes"]);
  });
}); 