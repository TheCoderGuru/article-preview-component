let icon = document.querySelector('.share__icon');
let background = document.querySelector('.social__container');

icon.addEventListener('click', () => {
    background.classList.toggle('grid');
    console.log("Event Listener is being trigged through the onclick function")
})



