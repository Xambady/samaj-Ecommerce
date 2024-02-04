import {formatCurrency, addToCart, cart, loadFromStorage} from '../../scripts/cart.js'
import {products} from '../../scripts/data/data.js'


// describe('test suite: testing format currency', ()=>
//   it('converting whole number', ()=>{
//     expect(formatCurrency(230)).toEqual('230.00')
//   })
// )

describe('test suite: testing add to cart functionality', ()=>{
   it('adding existing item to cart', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([
        {
          id: '000-000-000a',
          quantity: 1,
          deliveryId: '1'}
      ])
    })
    loadFromStorage();
    addToCart(products, 1, 0)
    expect(cart.length).toEqual(1)
    expect(cart[0].quantity).toEqual(2)
   });




  it('add new item to cart', ()=>{
    spyOn(localStorage, 'getItem').and.callFake(()=>{
      return JSON.stringify([])
    })

    loadFromStorage();
    // localStorage.getItem('cart')
    addToCart(products, 4, 1);
    expect(cart.length).toEqual(1)
  })
})
