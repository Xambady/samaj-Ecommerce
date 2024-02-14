import {products} from "../scripts/data/data.js"


// export function sortProducts(keyWord){
//   let sortedProducts = []
//   products.forEach((product)=>{
//     product.keyword.forEach((keyword)=>{
//       if (keyWord.toLowerCase() === keyword.toLowerCase()){
//         let matchingProduct;
//         matchingProduct = product;
//         sortedProducts.push(matchingProduct)
//       }

//   })
// })
// return sortedProducts;}


export function sortProductsII(){
  let textboxValueArray = document.querySelector('.textbox').value.split(' ');
  let sortedArray = []
  textboxValueArray.forEach((textWord)=>{
    products.forEach((product)=>{
      let productNameArray = product.name.split(' ');
      productNameArray.forEach((productWord)=>{
        if (textWord.toLowerCase() === productWord.toLowerCase()){
          sortedArray.push(product)
         }})})});
  let sortedArrayII = [...new Set(sortedArray)];
  return sortedArrayII}


