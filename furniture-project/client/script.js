const arrItems = [
  { id: 0, value: "New In" },
  { id: 1, value: "Furniture", href: "#furniture" },
  { id: 2, value: "Decorations", href: "#decorations" },
  { id: 3, value: "Textiles", href: "#textiles" },
  { id: 4, value: "Lightning", href: "#lightning" },
  { id: 5, value: "Garden", href: "#garden" },
  { id: 6, value: "Shop by room", href: "#shop" },
];

const filtersArray = [
  { id: 0, value: "Size" },
  { id: 1, value: "Color" },
  { id: 2, value: "Material" },
  { id: 3, value: "Style" },
  { id: 4, value: "Price" },
  { id: 5, value: "Other Features" },
];

const productsArr = [
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
  {
    id: 0,
    img: "./img/Photo.png",
    price: "$3400",
    name: "Isabell",
    description: "Horseshoe Corner Sofa, Forest Corduroy",
  },
];
window.onload = () => {
  render();
};

function render() {
  const container = document.getElementById("container");
  container.append(renderHeading());
  container.append(renderContent());
  container.append(renderFooter());
}

function renderHeading() {
  const headerWrapperElement = document.createElement("div");
  headerWrapperElement.classList.add("header-wrapper");

  headerWrapperElement.append(renderLogo());
  headerWrapperElement.append(renderHeaderItems());

  return headerWrapperElement;
}

function renderLogo() {
  const logoWrapperElement = document.createElement("div");
  const thunderElement = document.createElement("span");
  const homeElement = document.createElement("span");

  logoWrapperElement.classList.add("logo-wrapper");
  thunderElement.setAttribute("id", "thunder");
  homeElement.setAttribute("id", "home");

  thunderElement.innerHTML = "Thunder";
  homeElement.innerHTML = "home";

  logoWrapperElement.appendChild(thunderElement);
  logoWrapperElement.appendChild(homeElement);

  return logoWrapperElement;
}

function renderHeaderItems() {
  const headerItemsWrapper = document.createElement("div");
  const searchElement = document.createElement("input");
  const userIconButton = document.createElement("button");
  const wishIconButton = document.createElement("button");
  const cartIconButton = document.createElement("button");
  const userIconElement = document.createElement("span");
  const wishIconElement = document.createElement("span");
  const cartIconElement = document.createElement("span");

  headerItemsWrapper.classList.add("header-items-wrapper");
  searchElement.setAttribute("id", "search-item");
  searchElement.setAttribute("placeholder", "Search");
  userIconElement.classList.add("lnr");
  userIconElement.classList.add("lnr-user");
  wishIconElement.classList.add("lnr");
  wishIconElement.classList.add("lnr-heart");
  cartIconElement.classList.add("lnr");
  cartIconElement.classList.add("lnr-cart");
  wishIconButton.classList.add("header-item-btn");
  cartIconButton.classList.add("header-item-btn");
  userIconButton.classList.add("header-item-btn");

  headerItemsWrapper.appendChild(searchElement);
  headerItemsWrapper.appendChild(userIconButton);
  userIconButton.appendChild(userIconElement);
  headerItemsWrapper.appendChild(wishIconButton);
  wishIconButton.appendChild(wishIconElement);
  headerItemsWrapper.appendChild(cartIconButton);
  cartIconButton.appendChild(cartIconElement);

  return headerItemsWrapper;
}

function renderContent() {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");
  contentContainer.append(renderList());
  contentContainer.append(renderBanner());
  contentContainer.append(renderFilterButtons());
  contentContainer.append(renderProductContainer());
  contentContainer.append(renderLoadMore());

  return contentContainer;
}

function renderList() {
  const menuListContainerElement = document.createElement("div");
  menuListContainerElement.classList.add("menu-list-items-wrapper");

  renderMenuItems(menuListContainerElement);

  return menuListContainerElement;
}

function renderMenuItems(menuListContainerElement) {
  if (arrItems.length) {
    arrItems.forEach((element) => {
      const menuItemAnchorElement = document.createElement("a");
      menuItemAnchorElement.classList.add("menu-item");
      menuItemAnchorElement.setAttribute("href", element.href);

      menuItemAnchorElement.innerHTML = element.value;

      menuListContainerElement.append(menuItemAnchorElement);
    });
  }
}

function renderBanner() {
  const photoContainerElement = document.createElement("div");
  const textPhotoContainer = document.createElement("div");
  const titleElement = document.createElement("span");
  const numberProductsElement = document.createElement("span");
  const homeItemsWrapperElement = document.createElement("div");
  const homeElement = document.createElement("span");
  const separatorElement = document.createElement("span");
  const sectionElement = document.createElement("span");

  photoContainerElement.classList.add("photo-container");
  textPhotoContainer.classList.add("text-photo-container");
  titleElement.classList.add("product-title");
  numberProductsElement.classList.add("number-products");
  homeItemsWrapperElement.classList.add("home-section-container");
  homeElement.classList.add("home-item");
  separatorElement.classList.add("home-item");
  sectionElement.classList.add("home-item");

  photoContainerElement.append(textPhotoContainer);
  textPhotoContainer.append(titleElement);
  textPhotoContainer.append(numberProductsElement);
  textPhotoContainer.append(homeItemsWrapperElement);
  homeItemsWrapperElement.append(homeElement);
  homeItemsWrapperElement.append(separatorElement);
  homeItemsWrapperElement.append(sectionElement);

  titleElement.innerHTML = "Sofas";
  numberProductsElement.innerHTML = "348 products";
  homeElement.innerHTML = "Home";
  separatorElement.innerHTML = ">";
  sectionElement.innerHTML = "Furniture";

  return photoContainerElement;
}

function renderFilterButtons() {
  const filtersContainerElement = document.createElement("div");
  filtersContainerElement.classList.add("filters-container");

  renderFilter(filtersContainerElement);
  filtersContainerElement.append(renderSortButton());
  return filtersContainerElement;
}

function renderFilter(renderFilterButtons) {
  filtersArray.forEach((element) => {
    const filterElement = document.createElement("button");
    const arrowDownElement = document.createElement("span");
    filterElement.classList.add("filter-btn");
    filterElement.innerHTML = element.value;
    arrowDownElement.classList.add("lnr", "lnr-chevron-down");
    filterElement.append(arrowDownElement);
    renderFilterButtons.append(filterElement);
  });
}

function renderSortButton() {
  const sortBtnElement = document.createElement("button");
  const arrowDownElement = document.createElement("span");
  arrowDownElement.classList.add("lnr", "lnr-chevron-down");
  sortBtnElement.classList.add("sort-btn");
  sortBtnElement.innerHTML = "Sort by Recommended";
  sortBtnElement.append(arrowDownElement);
  return sortBtnElement;
}

function renderProductContainer() {
  const productsContainerElement = document.createElement("div");
  productsContainerElement.classList.add("products-container");

  renderProduct(productsContainerElement);
  return productsContainerElement;
}

function renderProduct(renderProductContainer) {

  productsArr.forEach((element) => {
    const productCardElement = document.createElement("div");
    productCardElement.classList.add("product-card");
    const cardImgElement = document.createElement("img");
    cardImgElement.src = element.img;
    productCardElement.append(cardImgElement);

    const namePriceElement = document.createElement("div");
    namePriceElement.classList.add("item-name-price");
    productCardElement.append(namePriceElement);

    const nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.innerHTML = element.name;

    const priceElement = document.createElement("span");
    priceElement.classList.add("price");
    priceElement.innerHTML = element.price;

    namePriceElement.append(nameElement);
    namePriceElement.append(priceElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("item-description");
    descriptionElement.innerHTML = element.description;
    productCardElement.append(descriptionElement);

    renderProductContainer.append(productCardElement);
  });
}

function renderLoadMore() {
  const loadMoreElement = document.createElement("button");
  loadMoreElement.classList.add("load-more-btn");
  loadMoreElement.innerHTML = "Load More";
  
  return loadMoreElement;
}
function renderFooter () {
  const footerContainerElement = document.createElement("div");
  footerContainerElement.classList.add("footer-container");
  footerContainerElement.append(renderLogo());
  footerContainerElement.append(renderFooterLogo());
  return footerContainerElement;
}

function renderFooterLogo () {
  const footerAddressElement = document.createElement("div");
  footerAddressElement.classList.add("footer-address");
  footerAddressElement.innerHTML = "1039 Maple Avenue Houston, TX 77002";

  return footerAddressElement;
}