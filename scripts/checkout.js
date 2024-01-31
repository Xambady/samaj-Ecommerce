import {cart, saveToStorage, formatCurrency} from "./cart.js"
import {products} from "./data/data.js"
import dayjs from "http://unpkg.com/dayjs@1.11.10/esm/index.js"
import { deliveryTimes } from "../scripts/data/deliveryTime.js";




function loadCheckoutPage(){
  let checkoutHtmlAccumulator = '';
  let checkoutQuantity = 0;
  let productTotalCost = 0;
  let shippingTotal = 0;
  let total = 0;
  let tax = 0

  cart.forEach((cartItems)=>{ 
    let newProduct;
    products.forEach((product)=>{
    if (cartItems.id === product.id){
        newProduct = product
    }});

    //looping through deliveryTimes to obtain each element inside
    let optionMatch;
    deliveryTimes.forEach((eachOption)=>{
      if(cartItems.deliveryId === eachOption.id){
        optionMatch = eachOption
      }
    })
    //then we run dayjs and use optionMatch deliveryDate
    let todayDate = dayjs();
    todayDate = todayDate.add(optionMatch.deliveryDate, 'days').format('dddd, MMMM D')


    let checkoutHtml = `
      <div class="items">
        <div class="image-container">
          <p class="delivery-date-header">${todayDate}</p>
          <img src="./images/${newProduct.imageName}.jpg" alt="image" class="item-image">
        </div>

        <div class="product-details">
          <p>
          Product Name: ${newProduct.name}
          </p>
          <P>
            Quantity : ${cartItems.quantity}
          </P>
          <p>Price: $${(newProduct.priceCents*cartItems.quantity).toFixed(2)}</p>
          <button>Update</button>
          <button class="delete-buttons">delete</button>
        </div>
        <div class="delivery-options">
          <p>Choose a Delivery Option</p>
          ${loadDeliveryTime(deliveryTimes, cartItems)}
        </div>
      </div>`;
    checkoutHtmlAccumulator += checkoutHtml;
    checkoutQuantity += cartItems.quantity;

    //calculating for the summary page
   
    productTotalCost += (newProduct.priceCents*cartItems.quantity);
    shippingTotal += (optionMatch.shippingCostCents/100);
    tax += (productTotalCost * 0.05);
   
    


  
  });
  //end of for loop


  total +=  (productTotalCost + tax + shippingTotal);

  let checkoutContainer = document.querySelector('.checkout-container');

  checkoutContainer.innerHTML = checkoutHtmlAccumulator + `
  <div class="checkout-summary">
    <p class="summary-title">SUMMARY</p>
    <P class="subtotal">Subtotal: $${formatCurrency(productTotalCost)} </P>
    <P class="taxes">Shipping: $${shippingTotal.toFixed(2)}</P>
    <P class="taxes">Tax(<span class="tax-percent">5%</span>): $${formatCurrency(tax)}</P>
    <P class="total">TOTAL: $${formatCurrency(total)}</P>
    <br/>
    <p class="delete-all-button js-delete-all-button">Delete All Cart Items</p>
  </div>`

  let checkoutQuantityContainer = document.querySelector('.checkout-quantity');
  checkoutQuantityContainer.innerHTML = checkoutQuantity

  let deleteButtons = document.querySelectorAll(".delete-buttons");
  deleteButtons.forEach((deleteButton, index)=>{
    deleteButton.addEventListener('click', ()=>{
      cart.splice(index, 1);
      saveToStorage();
      loadCheckoutPage()})
  }); 

  let deleteAllButton = document.querySelector('.js-delete-all-button');
  deleteAllButton.addEventListener('click', ()=>{

    while (cart.length > 0){
      cart.pop();
    };
  
    deleteAllButton.innerHTML = '<p>All Cart Items deleted</p>';
    saveToStorage();
    loadCheckoutPage();
   });
  
 

  selectDate();
}

loadCheckoutPage();



 

function loadDeliveryTime(deliveryTimes, cartItems){
  let deliveryTimeHtml = '';
  //ran a loop to generate html for the data in deliveryTimes file
  deliveryTimes.forEach((deliveryTime)=>{
    let today = dayjs();
    let dayString = today.add(deliveryTime.deliveryDate, 'days').format('dddd, MMMM D')

    //this code helps us to display if the shipping is free or not
    let deliveryCost;
    if (deliveryTime.shippingCostCents===0){
      deliveryCost = 'Free'
    }
    else{
      deliveryCost =`$${(deliveryTime.shippingCostCents)/100}`
    }
    //this code helps us provide a default check for the radio button
    let checked;
    if(deliveryTime.id === cartItems.deliveryId){
      checked = "checked"
    } else{
      checked = ''
    }
    //generated html
    deliveryTimeHtml += `    
    <div class="radio-button-container js-delivery-options" data-product-id="${cartItems.id}"
    data-delivery-id="${deliveryTime.id}">
      <input type="radio" ${checked} name="delivery-option-${cartItems.id}"/>
      <div>
        <div class="day-string">${dayString}</div>
        <div class"delivery-time">
        ${deliveryCost} - Shipping</div>
      </div>
    </div>
        `;

  });
  //end of loop
  //returning the accumulated html of the page.
  return deliveryTimeHtml 

}






function selectDate(){
  let deliveryOptions = document.querySelectorAll(".js-delivery-options");

  deliveryOptions.forEach((option)=>{
    option.addEventListener('click', ()=>{
      let datasetId = option.dataset.productId;
      let datasetDeliveryId = option.dataset.deliveryId;
      let itemMatch;
      cart.forEach((cartItem)=>{
        if(cartItem.id === datasetId){
          itemMatch = cartItem}});

      let deliveryTimeMatch;

      deliveryTimes.forEach((delivery)=>{
        if (delivery.id === datasetDeliveryId){
          deliveryTimeMatch = delivery
        }
      })
         
      itemMatch.deliveryId = deliveryTimeMatch.id
      saveToStorage();
      loadCheckoutPage();
  
    })
  })};