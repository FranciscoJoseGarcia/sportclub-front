export type Dium = {
  id: number;
  lunes: boolean;
  martes: boolean;
  miercoles: boolean;
  jueves: boolean;
  viernes: boolean;
  sabado: boolean;
  domingo: boolean;
  feriados: boolean;
  BeneficioId: number;
};

export interface BenefitSearchResult {
  id: number;
  comercio: string;
  descripcion: string;
  Imagens: Array<{ url: string }>;
  archivado: boolean;
  descuento: number;
}

export type Benefit = {
  id: number;
  comercio: string;
  descripcion: string;
  descuento: number;
  archivado: boolean;
  vencimiento?: string | null;
  aclaratoria?: string;
  CategoriaGeneral?: {
    nombre: string;
  };
  Dium?: Dium;
  Imagens?: { url: string }[];
};

