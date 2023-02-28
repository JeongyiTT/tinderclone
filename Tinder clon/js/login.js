const buttonPopUp = document.getElementById('buttonLoginPop');
const iconClose = document.getElementById('icon-close');

const wrapper = document.getElementById('wrapper')

buttonPopUp.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});