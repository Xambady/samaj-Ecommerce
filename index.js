

let accumulatorHtml = '';
let mainPage = document.querySelector('.js-main-page');



// beginning of function

function renderPage(){ 
  products.forEach((product)=>{
  let generateHtml = `
  <div class="parent-container js-parent-container">
      <div class="image-container">
        <img  class="product-images" src="images/${product.imageName}.jpg">
      </div>

      <p class="product-title">${product.name}</p>

      <div class="star-review-container">
        <img src="" alt="image">
      </div>

      <p class="price-container">$10.90</p>

      <select name="quantity" id="quantity">
        <option value="">Qty</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      
      </select>

      <div class="cart-container">
        <button class="cart-button">
          Add to Cart
        </button> 
      </div>

  

    </div>
`
  accumulatorHtml += generateHtml});
  mainPage.innerHTML = accumulatorHtml;
};

// end of function

renderPage();





function renderButton (){
let buttons = document.querySelectorAll('.button')
accumulatorHtml = '';

buttons.forEach((button, value)=>{
  button.addEventListener('click', (e)=>{
    items.splice(value, 1);
    cart.push(button.innerHTML);
    console.log(cart)
    renderPage()
    renderButton()})});
;}

renderButton()










