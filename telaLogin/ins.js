let email = document.getElementById('email');
let entrar = document.getElementById('entrar');
let formdata = document.querySelector('#form');

entrar.addEventListener('click', () => {
    window.location.href = '../index.html';
    console.log('ta funcionando caralho');
    event.preventDefault();
}) 