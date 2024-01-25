
export let cart = JSON.parse(localStorage.getItem('cart'));
export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))  
}

saveToStorage()






export function loadCart(){
  let quantityAccumulator= 0;
  cart.forEach((item)=>{
    let cartQuantity = document.querySelector('.cart-quantity')
    quantityAccumulator += Number(item.quantity);
    cartQuantity.innerHTML = quantityAccumulator;})
}



