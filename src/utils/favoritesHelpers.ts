export const getFavorites = (): string[] => {
  try {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  } catch (error) {
    console.error("Error al leer favoritos:", error);
    return [];
  }
};

export const isFavorite = (id: string): boolean => {
  if (!id) return false;
  const favorites = getFavorites();
  return favorites.includes(id);
};

export const addFavorite = (id: string): void => {
  if (!id) return;
  try {
    const favorites = getFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  } catch (error) {
    console.error("Error al agregar favorito:", error);
  }
};

export const removeFavorite = (id: string): void => {
  if (!id) return;
  try {
    const favorites = getFavorites().filter((favId) => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (error) {
    console.error("Error al remover favorito:", error);
  }
};
