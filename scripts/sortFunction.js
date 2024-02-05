import {products} from "../scripts/data/data.js"


export function sortProducts(keyWord){
  let sortedProducts = []
  products.forEach((product)=>{
    product.keyword.forEach((keyword)=>{
      if (keyWord.toLowerCase() === keyword.toLowerCase()){
        let matchingProduct;
        matchingProduct = product;
        sortedProducts.push(matchingProduct)
      }

  })
})
return sortedProducts;}



