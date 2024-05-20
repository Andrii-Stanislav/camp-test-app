const FAVORITES_KEY = 'favorite-campers';

const addToFavorites = (data) => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const newFavorites = [
      ...parsedFavorites.filter(
        (f) => f._id?.toString() !== data._id?.toString(),
      ),
      data,
    ];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  } else {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify([data]));
  }
};

const removeFromFavorites = (removeId) => {
  const favorites = localStorage.getItem(FAVORITES_KEY);

  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const filteredFavorites = parsedFavorites.filter((f) => f._id !== removeId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavorites));
  }
};

const getAllFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    return JSON.parse(favorites);
  }
  return [];
};

const isFavorite = (checkId) => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);

    return parsedFavorites.some(
      (f) => f._id?.toString() === checkId?.toString(),
    );
  }
  return false;
};

export const favoritesService = {
  add: addToFavorites,
  remove: removeFromFavorites,
  getAll: getAllFavorites,
  isFavorite,
};
