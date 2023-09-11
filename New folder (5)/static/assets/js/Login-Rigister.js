const wrapper = document.querySelector('.warpper');
const singuplink = document.querySelector('.singup-link');
const singinlink = document.querySelector('.singin-link');

singuplink.addEventListener('click', () => {
    wrapper.classList.add('animate-singin');
    wrapper.classList.remove('animate-singup');
});

singinlink.addEventListener('click', () => {
    wrapper.classList.add('animate-singup');
    wrapper.classList.remove('animate-singin');
});
