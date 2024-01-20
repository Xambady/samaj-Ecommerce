export let cart = [
  {
  id: '000-000-000a',
  quantity: 1
  },
  {
    id: '000-000-000b',
    quantity: 2
  },
  {
    id: '000-000-000c',
    quantity: 2
  }

];



export function loadCart(){
  let quantityAccumulator= 0;
  cart.forEach((item)=>{
    let cartQuantity = document.querySelector('.cart-quantity')
    quantityAccumulator += Number(item.quantity);
    cartQuantity.innerHTML = quantityAccumulator;})
}



