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
  {
    isOpen: false,
    value: "Size",
    name: "size",
    values: [
      { selected: false, filters: "2 seats" },
      { selected: false, filters: "3 seats" },
      { selected: false, filters: "4 seats" },
      { selected: false, filters: "5 seats" },
      { selected: false, filters: "6 or more seats" },
    ],
  },
  {
    isOpen: false,
    value: "Color",
    name: "color",
    values: [
      { selected: false, filters: "blue" },
      { selected: false, filters: "green" },
      { selected: false, filters: "brown" },
      { selected: false, filters: "white" },
      { selected: false, filters: "grey" },
    ],
  },
  {
    id: 2,
    value: "Material",
    name: "material",
    values: [
      { selected: false, filters: "leather" },
      { selected: false, filters: "velvet" },
      { selected: false, filters: "cotton" },
    ],
  },
  {
    id: 3,
    value: "Style",
    name: "style",
    values: [
      { selected: false, filters: "classic" },
      { selected: false, filters: "modern" },
    ],
  },
  {
    id: 4,
    value: "Price",
    name: "price",
    values: [
      { selected: false, filters: "1000-2000" },
      { selected: false, filters: "2000-3000" },
      { selected: false, filters: "3000-4000" },
      { selected: false, filters: "4000+" },
    ],
  },
  {
    id: 5,
    value: "Other Features",
    name: "other features",
    values: [{ selected: false, filters: "something" }],
  },
];

const footerTitles = [
  { id: 0, value: "Thunder Home" },
  { id: 1, value: "Navigation" },
  { id: 2, value: "How Can We Help" },
];

const footerSectionOneArray = [
  { id: 1, value: "Contact" },
  { id: 2, value: "About Thunder Home" },
  { id: 3, value: "Stores Locations" },
  { id: 4, value: "Sustainability" },
  { id: 5, value: "Designers" },
  { id: 6, value: "Careers" },
];

const footerSectionTwoArray = [
  { id: 1, value: "Home" },
  { id: 2, value: "Log In" },
  { id: 3, value: "Register" },
  { id: 4, value: "Favorites" },
  { id: 5, value: "Products" },
  { id: 6, value: "Shop by room" },
];

const footerSectionThreeArray = [
  { id: 1, value: "Help & FAQs" },
  { id: 2, value: "Tracking Your Order" },
  { id: 3, value: "Delivery" },
  { id: 4, value: "Returns & Refunds" },
  { id: 5, value: "Care & Maintenance" },
  { id: 6, value: "Terms and Conditions" },
  { id: 7, value: "Privacy Policy" },
];

let productsArr = [];

window.onload = () => {
  getProducts({});
  render();
};

function render() {
  const container = document.getElementById("container");
  document.getElementById("container").innerHTML = "";
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
  arrItems.forEach((element) => {
    const menuItemAnchorElement = document.createElement("a");
    menuItemAnchorElement.classList.add("menu-item");
    menuItemAnchorElement.setAttribute("href", element.href);

    menuItemAnchorElement.innerHTML = element.value;

    menuListContainerElement.append(menuItemAnchorElement);
  });
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
    const filterContainerElement = document.createElement("div");
    filterContainerElement.classList.add("filter-btn-container");

    const filterElement = document.createElement("button");
    filterElement.classList.add("filter-btn");

    filterElement.innerHTML = element.value;

    const arrowDownElement = document.createElement("span");
    arrowDownElement.classList.add("lnr", "lnr-chevron-down");
    filterElement.append(arrowDownElement);
    filterContainerElement.append(filterElement);

    const filterValueContainerElement = document.createElement("div");
    filterValueContainerElement.classList.add("filter-values-container");

    if (element.isOpen) {
      filterValueContainerElement.classList.add("show");
    }

    element.values.forEach((value) => {
      const filterValueElementContainer = document.createElement("div");
      filterValueElementContainer.classList.add("filter-values");
      const filterCheckboxElement = document.createElement("input");
      filterCheckboxElement.setAttribute("type", "checkbox");

      if (value.selected === false) {
        filterCheckboxElement.checked = false;
      } else {
        filterCheckboxElement.checked = true;
      }

      const filterValueElement = document.createElement("span");
      filterValueElement.classList.add("filter-value");
      filterValueElement.innerHTML = value["filters"];

      filterValueElementContainer.append(filterCheckboxElement);
      filterValueElementContainer.append(filterValueElement);
      filterValueContainerElement.append(filterValueElementContainer);

      filterCheckboxElement.addEventListener("click", function () {
        if (value.selected === false) {
          value.selected = true;
        } else {
          value.selected = false;
        }
        console.log(value.selected);
      });
    });
    filterContainerElement.append(filterValueContainerElement);
    renderFilterButtons.append(filterContainerElement);

    filterElement.addEventListener("click", function () {
      filtersArray.forEach((el) => {
        if (element.value !== el.value && el.isOpen === true) {
          el.isOpen = false;
        }
      });
      element.isOpen = !element.isOpen;
      render();
    });
  });

  const applyElement = document.createElement("button");
  applyElement.classList.add("apply-btn");
  applyElement.innerHTML = "Apply Filters";

  applyElement.addEventListener("click", function () {
    const appliedFilters = {};

    filtersArray.forEach((filter) => {
      const filterName = filter.name;
      const selectedValuesArr = [];
      filter.values.forEach((filterValue) => {
        if (filterValue.selected === true) {
          selectedValuesArr.push(filterValue.filters);
        }
      });
      if (selectedValuesArr.length) {
        appliedFilters[filterName] = selectedValuesArr.toString();
      }
    });
    console.log(appliedFilters);
    getProducts(appliedFilters);
  });

  renderFilterButtons.append(applyElement);
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
    const heartImgElement = document.createElement("img");
    heartImgElement.classList.add("heart-img");
    heartImgElement.src = "./img/heart.svg";
    const redHeartImgElement = document.createElement("img");
    redHeartImgElement.classList.add("red-heart-img");
    redHeartImgElement.src = "./img/heart-red.svg";
    const cardImgElement = document.createElement("img");
    cardImgElement.classList.add("product-img");
    cardImgElement.src = element.img;
    productCardElement.append(cardImgElement);
    productCardElement.append(heartImgElement);
    productCardElement.append(redHeartImgElement);

    const namePriceElement = document.createElement("div");
    namePriceElement.classList.add("item-name-price");
    productCardElement.append(namePriceElement);

    const nameElement = document.createElement("span");
    nameElement.classList.add("name");
    nameElement.innerHTML = element.name;

    const priceElement = document.createElement("span");
    priceElement.classList.add("price");
    priceElement.innerHTML =
      "$ " + element.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    namePriceElement.append(nameElement);
    namePriceElement.append(priceElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.classList.add("item-description");
    descriptionElement.innerHTML = element.description;
    productCardElement.append(descriptionElement);

    renderProductContainer.append(productCardElement);

    heartImgElement.addEventListener("click", function () {
      if (redHeartImgElement.style.display === "block") {
        redHeartImgElement.style.display = "none";
      } else redHeartImgElement.style.display = "block";
    });
  });
}

function renderLoadMore() {
  const loadMoreElement = document.createElement("button");
  loadMoreElement.classList.add("load-more-btn");
  loadMoreElement.innerHTML = "Load More";

  return loadMoreElement;
}
function renderFooter() {
  const footerContainerElement = document.createElement("div");
  footerContainerElement.classList.add("footer-container");
  footerContainerElement.append(renderFooterLogo());
  footerContainerElement.append(renderFooterSection());
  footerContainerElement.append(renderFooterSectionTwo());
  footerContainerElement.append(renderFooterSectionThree());
  footerContainerElement.append(renderFooterContact());
  return footerContainerElement;
}

function renderFooterLogo() {
  const logoContainerElement = document.createElement("div");
  logoContainerElement.classList.add("footer-logo-container");

  const footerAddressElement = document.createElement("div");
  footerAddressElement.classList.add("footer-address");
  footerAddressElement.innerHTML = "1039 Maple Avenue Houston, TX 77002";
  logoContainerElement.append(renderLogo());
  logoContainerElement.append(footerAddressElement);

  return logoContainerElement;
}

function renderListElement(arr, container) {
  arr.forEach((element) => {
    const listElement = document.createElement("li");
    listElement.classList.add("footer-list-element");
    listElement.innerHTML = element.value;
    container.append(listElement);
  });
}

function renderFooterSection() {
  const footerSectionContainerElement = document.createElement("div");
  footerSectionContainerElement.classList.add("footer-section-container");
  const titleElement = document.createElement("span");
  titleElement.classList.add("footer-title");
  titleElement.innerHTML = footerTitles[0].value;

  footerSectionContainerElement.append(titleElement);
  const footerListContainerElement = document.createElement("ul");
  footerListContainerElement.classList.add("footer-list-container");

  footerSectionContainerElement.append(footerListContainerElement);

  renderListElement(footerSectionOneArray, footerListContainerElement);

  return footerSectionContainerElement;
}

function renderFooterSectionTwo() {
  const footerSectionContainerElement = document.createElement("div");
  footerSectionContainerElement.classList.add("footer-section-container");
  const titleElement = document.createElement("span");
  titleElement.classList.add("footer-title");
  titleElement.innerHTML = footerTitles[1].value;

  footerSectionContainerElement.append(titleElement);
  const footerListContainerElement = document.createElement("ul");
  footerListContainerElement.classList.add("footer-list-container");

  footerSectionContainerElement.append(footerListContainerElement);

  renderListElement(footerSectionTwoArray, footerListContainerElement);

  return footerSectionContainerElement;
}

function renderFooterSectionThree() {
  const footerSectionContainerElement = document.createElement("div");
  footerSectionContainerElement.classList.add("footer-section-container");
  const titleElement = document.createElement("span");
  titleElement.classList.add("footer-title");
  titleElement.innerHTML = footerTitles[2].value;

  footerSectionContainerElement.append(titleElement);
  const footerListContainerElement = document.createElement("ul");
  footerListContainerElement.classList.add("footer-list-container");

  footerSectionContainerElement.append(footerListContainerElement);

  renderListElement(footerSectionThreeArray, footerListContainerElement);

  return footerSectionContainerElement;
}

function renderFooterContact() {
  const footerContactContainerElement = document.createElement("div");
  footerContactContainerElement.classList.add("contact-container");
  const followElement = document.createElement("span");
  followElement.classList.add("follow-us");
  followElement.innerHTML = "Follow us on";
  footerContactContainerElement.append(followElement);

  const contactIconsContainer = document.createElement("div");
  contactIconsContainer.classList.add("icons-container");

  const instaIconElement = document.createElement("img");
  instaIconElement.src = "./img/insta.svg";
  const twitterIconElement = document.createElement("img");
  twitterIconElement.src = "./img/twitter.svg";
  const fbIconElement = document.createElement("img");
  fbIconElement.src = "./img/fb.svg";
  const ytIconElement = document.createElement("img");
  ytIconElement.src = "./img/yt.svg";

  footerContactContainerElement.append(contactIconsContainer);

  contactIconsContainer.append(instaIconElement);
  contactIconsContainer.append(twitterIconElement);
  contactIconsContainer.append(fbIconElement);
  contactIconsContainer.append(ytIconElement);

  const copyrightElement = document.createElement("span");
  copyrightElement.classList.add("copyright");
  copyrightElement.innerHTML = "© Copyright 2022 - Thunder Home - Make it cozy";

  footerContactContainerElement.append(copyrightElement);
  return footerContactContainerElement;
}

function setProducts(arr) {
  productsArr = arr;
  render();
}

function addToArr(product) {
  productsArr.length = 0;
  product.forEach((element) => {
    productsArr.push(element);
  });
  render();
}

function getProducts(propertyObj) {
  axios
    .get("http://localhost:3000/api/mainlistitems", { params: propertyObj })
    .then((response) => {
      addToArr(response.data);
    });
}
