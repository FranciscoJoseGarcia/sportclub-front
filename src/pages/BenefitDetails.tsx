import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ErrorDisplay from "../components/ErrorDisplay";
import { useBenefitDetails } from "../hooks/useBenefitDetails";
import BenefitHeader from "../components/BenefitHeader";
import BenefitImage from "../components/BenefitImage";
import BenefitInfo from "../components/BenefitInfo";
import FavoriteButton from "../components/FavoriteButton";

const BenefitDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { benefit, loading, error, favorite, toggleFavorite } = useBenefitDetails(id);

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error} />;

  return (
    <div className="bg-gray-100 min-h-screen min-w-full p-4">
      <Header />
      <div className="container mx-auto relative">
        {benefit ? (
          <div className="flex flex-col md:flex-row gap-6 bg-white shadow-md rounded-lg p-6 mt-10">
            <BenefitImage benefit={benefit} />

            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col gap-4">
                <BenefitHeader benefit={benefit} />
                <BenefitInfo benefit={benefit} />
              </div>

              <div className="flex items-start lg:justify-end mt-4 md:mt-0">
                <FavoriteButton isFavorite={favorite} onToggle={toggleFavorite} />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Beneficio no encontrado</p>
        )}
      </div>
    </div>
  );
};

export default BenefitDetails;
