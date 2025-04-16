import type { Benefit } from "../types/types";

interface BenefitImageProps {
  benefit: Benefit;
}

const BenefitImage = ({ benefit }: BenefitImageProps) => {
  return (
    <div className="flex-shrink-0">
      <img
        src={benefit.Imagens?.[0]?.url || "https://via.placeholder.com/300"}
        alt={`Imagen de ${benefit.comercio}`}
        className="h-64 w-64 object-contain rounded-md"
      />
    </div>
  );
};

export default BenefitImage; 