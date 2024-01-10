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

      <p class="price-container">$${product.priceCents.toFixed(2)}</p>

      <select name="quantity" id="quantity" class='js-dropdown-selector'>
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
  accumulatorHtml = '';
  renderCartButton();
};

// end of function

renderPage();






function renderCartButton (){
let addCartButton = document.querySelectorAll('button');
let dropdownSelectors = document.querySelectorAll('.js-dropdown-selector')

addCartButton.forEach((cartButton, index)=>{
  cartButton.addEventListener('click', (e)=>{
    let productId = products[index].id;
    let dropDownValue = dropdownSelectors[index].value;

    

    let matchingItem;
    cart.forEach((cartItem)=>{
      if (productId === cartItem.productid){
        matchingItem = cartItem}
      });

     

  if(matchingItem){
    matchingItem.quantity += Number(dropDownValue) || 1;
    console.log(matchingItem)
  }
  else{
    cart.push(
      {
        productid: productId,
        quantity: Number(dropDownValue) || 1
      }
    )
  }
   
    calculateCartQuantity()
    renderPage()
    })});
;}







function calculateCartQuantity (){
  let cartQuantityContainer = document.querySelector('.js-cart-quantity');
  let cartQuantity = 0;
  cart.forEach((item)=>{
    cartQuantity += item.quantity;
  
  });
  cartQuantityContainer.innerHTML = cartQuantity;
}

calculateCartQuantity()


















