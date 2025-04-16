const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-8 h-8 sm:w-12 sm:h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 font-medium">Cargando beneficios...</p>
      </div>
    </div>
  );
};

export default Loading;
