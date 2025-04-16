import type { Benefit } from "../types/types";

interface BenefitHeaderProps {
  benefit: Benefit;
}

const BenefitHeader = ({ benefit }: BenefitHeaderProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">
        {benefit.descuento}% de descuento en {benefit.comercio}
      </h2>
      <p className="text-xl">{benefit.descripcion}</p>
      <p className="text-base">
        Categoría:{" "}
        <span className="font-semibold">
          {benefit.CategoriaGeneral?.nombre}
        </span>
      </p>
    </div>
  );
};

export default BenefitHeader; 