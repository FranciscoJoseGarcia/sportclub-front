import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-100 rounded-full blur-xl"></div>
          <h1 className="text-9xl font-bold text-red-500 relative z-10">404</h1>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Ups! Página no encontrada
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>

        <Link
          to="/beneficios"
          className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          <svg 
            className="w-5 h-5 mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Volver a beneficios
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
