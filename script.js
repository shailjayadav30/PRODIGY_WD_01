const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const menuBox= document.querySelector('.menubox');

menu.addEventListener('click' , () => {
        menuBox.classList.remove('hidden')
})

close.addEventListener('click', () => {
        menuBox.classList.add('hidden')
})