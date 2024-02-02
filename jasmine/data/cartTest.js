import {formatCurrency, addToCart} from '../../scripts/cart.js'
// import {products} from '../../scripts/data/data.js'

describe('test suite: testing format currency', ()=>
  it('converting whole number', ()=>{
    expect(formatCurrency(230)).toEqual('230.00')
  })
)

describe('test suite: testing add to cart functionality', ()=>{
  it('add existing item to cart', ()=>{
    expect(addToCart('000-000-000a', 4 )).toEqual(1)
  })
})
