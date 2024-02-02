export let cart = JSON.parse(localStorage.getItem('cart'))|| [];

export function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart))  
}



//used in index.js file
export function loadCart(){
  let quantityAccumulator= 0;
  let cartQuantity = document.querySelector('.cart-quantity')
  cart.forEach((item)=>{
    quantityAccumulator += Number(item.quantity);
    });
    cartQuantity.innerHTML = quantityAccumulator;
}

//used in checkout.js
export function formatCurrency(payment){
  let formattedCurrency = Math.round(payment);
  return formattedCurrency.toFixed(2);
}


//used in index.js
export function addToCart(products, dropDownValue, index){
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
}








