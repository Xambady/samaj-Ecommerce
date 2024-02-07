import { renderPage, renderCartButton } from "../../scripts/index.js";



export function generateHtml(product){
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

return generateHtml;
}



export function refreshPage(){
  document.querySelector('.home-container').addEventListener('click', ()=>{
    renderPage();
    renderCartButton();
  })
}