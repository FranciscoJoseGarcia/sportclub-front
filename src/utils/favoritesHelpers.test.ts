import {
  getFavorites,
  isFavorite,
  addFavorite,
  removeFavorite,
} from "./favoritesHelpers";

describe("favoritesHelpers", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return an empty array if no favorites are stored", () => {
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
  });

  it("should return true if an ID is in the favorites list", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2", "3"]));
    expect(isFavorite("2")).toBe(true);
  });

  it("should return false if an ID is not in the favorites list", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2", "3"]));
    expect(isFavorite("4")).toBe(false);
  });

  it("should return false if ID is empty or undefined", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2", "3"]));
    expect(isFavorite("")).toBe(false);
    expect(isFavorite(undefined as unknown as string)).toBe(false);
  });

  it("should add a new favorite if it is not already in the list", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2"]));
    addFavorite("3");
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "2", "3"]);
  });

  it("should not add a duplicate favorite", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2"]));
    addFavorite("2");
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "2"]);
  });

  it("should not add a favorite if ID is empty or undefined", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2"]));
    addFavorite("");
    addFavorite(undefined as unknown as string);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "2"]);
  });

  it("should remove a favorite by its ID", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2", "3"]));
    removeFavorite("2");
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "3"]);
  });

  it("should handle removing a favorite that does not exist", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2"]));
    removeFavorite("3");
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "2"]);
  });

  it("should handle removing a favorite with empty or undefined ID", () => {
    localStorage.setItem("favorites", JSON.stringify(["1", "2"]));
    removeFavorite("");
    removeFavorite(undefined as unknown as string);
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    expect(favorites).toEqual(["1", "2"]);
  });

  it("should handle JSON parse errors gracefully", () => {
    localStorage.setItem("favorites", "invalid json");
    const favorites = getFavorites();
    expect(favorites).toEqual([]);
    expect(console.error).toHaveBeenCalled();
  });
}); 