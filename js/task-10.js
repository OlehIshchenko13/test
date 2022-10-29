function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  baseBox: document.querySelector('.box'),
  controls: document.querySelector('#controls'),
  createBoxBTN: document.querySelector('[data-create]'),
  destroyBoxBTN: document.querySelector('[data-destroy]'),
  amount: document.querySelector('input')
}

refs.createBoxBTN.addEventListener('click',onCreateBox)

function onCreateBox(e){
  const amountBox = refs.amount.value;
  function makeBox (){
    return`<div weight=30px;height=30px"></div>`
  }
  const arrayBox =[]
  for (let i = 0; i < amountBox; i+=1) {
    arrayBox.push(makeBox())
    
  }
  refs.baseBox.insertAdjacentHTML('beforebegin',...arrayBox)
  
  
  console.log(amountBox);
}