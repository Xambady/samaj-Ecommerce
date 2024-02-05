import {loadCart, saveToStorage, addToCart} from "./cart.js"
import {products} from "./data/data.js"
import { sortProducts } from "./sortFunction.js";
import { generateHtml, refreshPage } from "./utils/utils.js";








loadCart();

// beginning of render page function

export function renderPage(){ 
  let accumulatorHtml = '';
  let mainPage = document.querySelector('.js-main-page');

  products.forEach((product)=>{
  let generatedHtml = generateHtml(product);
  renderCartButton();
  accumulatorHtml += generatedHtml});
  mainPage.innerHTML = accumulatorHtml;
  accumulatorHtml = '';
  sorting();
  refreshPage();
};

renderPage();

// end of render page function

//start of render cart button function

export function renderCartButton(){
  let cartButtons = document.querySelectorAll('.cart-button-blue')

  cartButtons.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
      //turns clicked buttons green
      button.classList.add('color-green');
      //reverts clicked button color to blue
      setTimeout(()=>{
        button.classList.remove('color-green')
      }, 1000)
      //writing timeout to remove display paragraph from the page
      setTimeout(()=>{
        displays[index].innerHTML = '';
        displays[index].classList.remove('addCart-display');
      }, 1000);
      //grabbing values from dropdown selectors to use as quantity, used button forEach index to point to elements in dropdown nodelist 
      let dropDownSelectors = document.querySelectorAll('.js-dropdown-selectors')
      let dropDownValue = dropDownSelectors[index].value;
      //selecting display paragraph in DOM & adding innerhtml and classlist for cart adding pop-up
      let displays = document.querySelectorAll('.js-cart-display');
      displays[index].classList.add('addCart-display');
      if(dropDownValue > 1){
        displays[index].innerHTML = `${dropDownValue} products added`;
      } else{
        displays[index].innerHTML = `${dropDownValue} product added`;
      }
      //pushing items to cart, used button forEach index to point to elements in products array
      addToCart(products, dropDownValue, index)
      //looping cart and adding all quantities to display in dom
      loadCart();
      //resetting dropdown value to 1
      dropDownSelectors[index].value = 1;
      saveToStorage();

    
    })
  })
}
renderCartButton();


function sorting(){
let searchButton = document.querySelector('.search-text');
searchButton.addEventListener('click', (e)=>{
  e.preventDefault();
  let textBox = document.querySelector('.textbox');
  let textboxValue = textBox.value;
  let newArray = sortProducts(textboxValue);
  let sortedAccumulator = '';
  let mainPage = document.querySelector('.js-main-page');

  //loop start
  newArray.forEach((product)=>{
  sortedAccumulator += generateHtml(product);
  });
  //loop end

  mainPage.innerHTML = sortedAccumulator; 
  renderCartButton();
  
  
})};

sorting()










  




