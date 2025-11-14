import { getLocalStorage } from './utils.mjs';

<<<<<<< HEAD
function renderCartContents() {
  const cartItems = getLocalStorage('so-cart');
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector('.product-list').innerHTML = htmlItems.join('');
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href='#'>
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
=======
import { loadHeaderFooter } from "./utils.mjs";

import ProductsBought from "./ShoppingCart.mjs";
>>>>>>> main

const dataSource = getLocalStorage("so-cart");

const cartListElement = document.querySelector(".product-list");

const productsCartList = new ProductsBought(dataSource, cartListElement);

productsCartList.init();

loadHeaderFooter();
