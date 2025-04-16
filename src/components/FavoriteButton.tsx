interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}

const FavoriteButton = ({ isFavorite, onToggle }: FavoriteButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`
        px-4 py-2 rounded-lg
        transition-all duration-200 ease-in-out
        ${isFavorite
          ? "bg-amber-100 text-amber-800 hover:bg-amber-200"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }
        flex items-center gap-2
        shadow-sm hover:shadow
      `}
      aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      title={`${isFavorite ? "Quitar" : "Agregar"} a favoritos`}
    >
      <span className="text-lg">
        {isFavorite ? "❤️" : "🤍"}
      </span>
      <span className="text-sm font-medium">
        {isFavorite ? "Favorito" : "Agregar"}
      </span>
    </button>
  );
};

export default FavoriteButton; 