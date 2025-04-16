import { useNavigate } from "react-router-dom";

interface BenefitCardProps {
  id: number;
  comercio: string;
  descripcion: string;
  imagen: string;
  archivado: boolean;
}

const BenefitCard = ({ id, comercio, descripcion, imagen, archivado }: BenefitCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/beneficio/${id}`)}
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg hover:scale-103 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={imagen}
          alt={comercio}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            archivado ? "bg-gray-500 text-white" : "bg-green-500 text-white"
          }`}>
            {archivado ? "Inactivo" : "Activo"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{comercio}</h3>
        <p className="text-gray-600 text-sm">{descripcion}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
