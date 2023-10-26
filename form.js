let button = document.getElementById('button')
let random = Math.floor(Math.random() * 10)
button.innerHTML = random

let input = document.getElementById('input')
let letter = 'ABCDEFGHIJ'
let div = document.getElementById('div1')
console.log(random);

button.addEventListener('click', function (ev){
    let val = input.value;
    console.log(val)
    ev.preventDefault();
    let letterEquivalent = letter.slice(random - 1,random)
    console.log(letterEquivalent)   
    let concat1 = `Name: ${val} , letter: ${letterEquivalent}` 
    console.log(concat1) 
    div.innerHTML = concat1
})

