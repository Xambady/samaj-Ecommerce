let accumulatorHtml = '';
let mainPage = document.querySelector('.js-main-page');


// beginning of function

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
      
      </select>

      <div class="cart-container">
        <button class="cart-button" data-product-id="${product.id}">
          Add to Cart
        </button> 
      </div>

  

    </div>
`;


  accumulatorHtml += generateHtml});
  mainPage.innerHTML = accumulatorHtml;
  accumulatorHtml = '';
};

renderPage();

// end of function

//start of render cart button function

function renderCartButton(){

}

let cartButtons = document.querySelectorAll('.cart-button')

cartButtons.forEach((button, index)=>{
  button.addEventListener('click', ()=>{
    //turns clicked buttons green
    button.classList.add('color-green');
    //selecting display paragraph in DOM & adding innerhtml and classlist for cart adding pop up
    let displays = document.querySelectorAll('.js-cart-display');
    displays[index].innerHTML = 'product added';
    displays[index].classList.add('addCart-display');
    //writing timeout to remove display paragraph from the page
    setTimeout(()=>{
      displays[index].innerHTML = '';
      displays[index].classList.remove('addCart-display');
    }, 1000);
    //grabbing values from dropdown selectors to use as quantity
    let dropDownSelectors = document.querySelectorAll('.js-dropdown-selectors')
    let dropDownValue = dropDownSelectors[index].value
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
        quantity: Number(dropDownValue)
      })
    };
    //looping cart and adding all quantities to display in dom
    let quantityAccumulator = 0;
    cart.forEach((item)=>{
      let cartQuantity = document.querySelector('.cart-quantity')
      quantityAccumulator += Number(item.quantity);
      cartQuantity.innerHTML = quantityAccumulator;
      
    }); 
  })
 
})










  




