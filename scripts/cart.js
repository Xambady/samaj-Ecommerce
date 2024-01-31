
export let cart = JSON.parse(localStorage.getItem('cart'))|| [];
export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))  
}

saveToStorage()





//used in index.js file
export function loadCart(){
  let quantityAccumulator= 0;
  cart.forEach((item)=>{
    let cartQuantity = document.querySelector('.cart-quantity')
    quantityAccumulator += Number(item.quantity);
    cartQuantity.innerHTML = quantityAccumulator;})
}


export function formatCurrency(payment){
  let formattedCurrency = Math.round(payment);
  return formattedCurrency.toFixed(2);
}



