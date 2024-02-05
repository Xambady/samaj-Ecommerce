import {products} from "../scripts/data/data.js"


export function sortProducts(keyWord){
let sortedProducts = products.filter((product)=>{
  return product.name.toLowerCase() === keyWord.toLowerCase()
})
return sortedProducts;}

