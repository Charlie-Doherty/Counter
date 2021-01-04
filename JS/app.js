const counter = document.querySelector('#count');
const buttons = document.querySelectorAll('button');

let count = 0;

buttons.forEach(button => button.addEventListener('click', changeCount));
function changeCount(e){
    e.target.classList.contains('decrease') ? count-- : 
    e.target.classList.contains('increase') ? count++ : count = 0;
        
    counter.textContent = count;
}