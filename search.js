let parentContainer = document.querySelector('.parent-container');

let parentContainer2 = document.querySelector('.parent-container2');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
}


let observer = new IntersectionObserver((entry)=>{

  if(entry[0].isIntersecting){
    let paras = document.querySelectorAll('.para');
    let timing = 0;
    paras.forEach((para)=>{
      setTimeout(()=>{
        para.classList.add('showParentContainer')
      }, (1000 + timing));
      timing += 500 
    })

}
}, options)

observer.observe(parentContainer);



let numbers = [1, 1, 3, 5, 3];
let unduplicatedArray = [];


numbers.forEach((number)=>{
  if(!unduplicatedArray.includes(number)){
    unduplicatedArray.push(number)
  }
});


console.log(unduplicatedArray)







