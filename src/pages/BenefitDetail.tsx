import { useParams } from 'react-router-dom';

const BenefitDetail = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Detalle del Beneficio</h1>
      {/* Aquí irá el detalle del beneficio */}
    </div>
  );
};

export default BenefitDetail; 