import {cart} from "./cart.js"
import {products} from "./data/data.js"




function loadCheckoutPage(){
  let checkoutHtmlAccumulator = '';

  cart.forEach((cartItems)=>{
  let newProduct;
  products.forEach((product)=>{
   if (cartItems.id === product.id){
      newProduct = product
   }
  });

  let checkoutHtml = `
  <div class="items">
    <div class="image-container">
      <img src="./images/${newProduct.imageName}.jpg" alt="image" class="item-image">
    </div>

    <div class="product-details">
      <p>
      Product Name: ${newProduct.name}
      </p>
      <P>
        Quantity : ${cartItems.quantity}
      </P>
      <button>Update</button>
      <button class="delete-buttons">delete</button>
    </div>
  </div>
  
  `  ;
  checkoutHtmlAccumulator += checkoutHtml;
});
let checkoutContainer = document.querySelector('.checkout-container');

checkoutContainer.innerHTML = checkoutHtmlAccumulator + `
<div class="checkout-summary">
  <p>SUMMARY</p>
  <P>Subtotal</P>
  <p>Estimated Delivery & Handling</p>
  <P>Taxes</P>
  <P>TOTAL</P>
</div>`;


let deleteButtons = document.querySelectorAll(".delete-buttons");
deleteButtons.forEach((deleteButton, index)=>{
  deleteButton.addEventListener('click', ()=>{
    cart.splice(index, 1);
    loadCheckoutPage()})});
}


loadCheckoutPage();
 












