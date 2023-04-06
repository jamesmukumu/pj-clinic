

const bars = document.querySelector('.fa-bars')
const xmark = document.querySelector('.fa-xmark')
const ul = document.querySelector('ul')
bars.onclick=()=>{
    ul.classList.toggle('menu')
}

xmark.onclick=()=>{
    ul.classList.toggle('menu')
}