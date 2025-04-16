import type { Benefit } from "../types/types";
import { getAvailableDays } from "../utils/dateHelpers";

interface BenefitInfoProps {
  benefit: Benefit;
}

const BenefitInfo = ({ benefit }: BenefitInfoProps) => {
  const availableDays = benefit.Dium ? getAvailableDays(benefit.Dium) : [];

  return (
    <div className="flex flex-col gap-4">
      <p className="text-gray-500 text-sm">
        Información adicional:{" "}
        <span className="font-semibold">
          {benefit.aclaratoria || "No especificado"}
        </span>
      </p>
      <p className="text-gray-500 text-sm">
        Días disponibles:{" "}
        <span className="font-semibold">
          {availableDays.length > 0
            ? availableDays.join(", ")
            : "No especificado"}
        </span>
      </p>
      <p className="text-gray-500 text-sm">
        Válido hasta:{" "}
        <span className="font-semibold">
          {benefit.vencimiento 
            ? new Date(benefit.vencimiento).toLocaleDateString("es-ES")
            : "No especificado"}
        </span>
      </p>
    </div>
  );
};

export default BenefitInfo; 