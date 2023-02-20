const buttonPopUp = document.querySelector('.button-login-pop');
const iconClose = document.querySelector('.icon-close');

buttonPopUp.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});