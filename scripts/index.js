import {cart, loadCart, saveToStorage} from "./cart.js"
import {products} from "./data/data.js"


let accumulatorHtml = '';
let mainPage = document.querySelector('.js-main-page');


loadCart();

// beginning of render page function

function renderPage(){ 
  products.forEach((product)=>{
  let generateHtml = `
  <div class="parent-container js-parent-container">
      <div class="image-container">
        <img class="product-images" src="images/${product.imageName}.jpg">
        <p class="cart-display js-cart-display"></p>
      </div>

      <p class="product-title">${product.name}</p>

      <div class="star-review-container">
        <img src="" alt="image">
      </div>

      <p class="price-container">$${product.priceCents.toFixed(2)}</p>

      <select class='js-dropdown-selectors dropdown-selector'>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      
      </select>

      <div class="cart-container">
        <button class="cart-button-blue" data-product-id="${product.id}">
          Add to Cart
        </button> 
      </div>

  

    </div>
`;
  renderCartButton();
  accumulatorHtml += generateHtml});
  mainPage.innerHTML = accumulatorHtml;
  accumulatorHtml = '';
};

renderPage();

// end of render page function

//start of render cart button function

function renderCartButton(){
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
    let productId = products[index].id;
    let matchingItem;
    cart.forEach((cartItem)=>{
      if(productId === cartItem.id){
        matchingItem = cartItem
      }
    })
    if(matchingItem){
      matchingItem.quantity += Number(dropDownValue)
    }else{
      cart.push({
        id: productId,
        quantity: Number(dropDownValue),
        deliveryId: '1'
      })
    };
    //looping cart and adding all quantities to display in dom
    loadCart();
    //resetting dropdown value to 1
    dropDownSelectors[index].value = 1;
    saveToStorage();

  
  })
})
}
renderCartButton();

// let searchButton = document.querySelector('.search-text');

// searchButton.addEventListener('click', ()=>{
//   let textBox = document.querySelector('.textbox');
//   console.log(textBox.value[0])
  
// })










  




