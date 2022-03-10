import GAME_LIST from "./data/game.data";

export const getSlideShow = (game_data) => {
  return game_data.slice(0, 4);
};

export const getFeaturesGame = () => {
  return GAME_LIST.filter((game) => game.discount !== 0);
};

export const getDiscountPercent = (discount) => {
  return discount ? discount * 100 + "%" : null;
};

export const getPrice = (price, discount = 0) => {
  const discountPrice = discount * price;
  return price - discountPrice;
};

export const getBestSell = () => {
  return GAME_LIST.filter((game) => game.bestSell === true);
};

export const getNewGame = () => {
  return GAME_LIST.filter((game) => game.newGame === true);
};

export const getGameInfo = (id) => {
  return GAME_LIST.find((game) => game.id === id);
};

export const setActiveClassOnTab = (e) => {
  const filterButton = document.querySelectorAll(".tab-list-container , .shop-category-list li");
  filterButton.forEach((item) => {
    item.classList.remove("active");
  });

  console.log(filterButton);

  e.currentTarget.classList.add("active");
};

export const currencyFormatter = new Intl.NumberFormat("th-TH", {
  style: "currency",
  currency: "THB",
});
