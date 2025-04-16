import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useBenefits } from "../hooks/useBenefits";
import Header from "../components/Header";
import Loading from "../components/Loading";
import ErrorDisplay from "../components/ErrorDisplay";
import BenefitCard from "../components/BenefitCard";

const BenefitsList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const searchTerm = searchParams.get("search") || "";

  const {
    benefits,
    loading,
    error,
    totalPages,
    fetchBenefits,
    searchBenefits
  } = useBenefits();

  useEffect(() => {
    if (searchTerm) {
      searchBenefits(searchTerm);
    } else {
      fetchBenefits(currentPage);
    }
  }, [currentPage, searchTerm, fetchBenefits, searchBenefits]);

  
  const handleRetry = () => {
    if (searchTerm) {
      searchBenefits(searchTerm);
    } else {
      fetchBenefits(currentPage);
    }
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    navigate(`/beneficios?${params.toString()}`);
  };

  if (loading) return <Loading />;
  if (error) return <ErrorDisplay message={error} onRetry={handleRetry} />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Beneficios para vos
          </h1>
          <p className="text-gray-600">
            Descubrí las mejores ofertas y descuentos exclusivos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full max-w-7xl mx-auto">
          {benefits.map((benefit) => (
            <BenefitCard
              key={benefit.id}
              id={benefit.id}
              comercio={benefit.comercio}
              descripcion={benefit.descripcion}
              imagen={benefit.Imagens?.[0]?.url || ""}
              archivado={benefit.archivado}
            />
          ))}
        </div>

        {!searchTerm && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage <= 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentPage <= 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-red-500 hover:bg-red-50 hover:shadow-md"
              }`}
            >
              &larr; Anterior
            </button>

            <span className="text-sm font-medium text-gray-700 bg-white px-4 py-2 rounded-lg shadow-sm">
              Página <span className="font-semibold text-red-500">{currentPage}</span> de{" "}
              <span className="font-semibold text-red-500">{totalPages}</span>
            </span>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentPage >= totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-red-500 hover:bg-red-50 hover:shadow-md"
              }`}
            >
              Siguiente &rarr;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitsList;
