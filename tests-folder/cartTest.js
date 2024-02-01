import { formatCurrency } from "../scripts/cart.js";

describe('Test Suite: format currency', ()=>{
  it('convert whole numbers to decimal', ()=>{
    expect(formatCurrency(2300)).toEqual('2300.00')
  });
  it('convert one decimal whole numbers to two decimal', ()=>{
    expect(formatCurrency(230.0)).toEqual('230.00')
  });
  it('convert zero numbers to two decimal', ()=>{
    expect(formatCurrency(0)).toEqual('0.00')
  })
})


describe('test suite: testing payment function',()=>{
  it('converts numbers to strings', ()=>{
    expect(formatCurrency(4000)).toEqual('4000.00')
  });
})
