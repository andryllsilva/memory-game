const input = document.querySelector('.login-input');
const button = document.querySelector('.login-button');
const form = document.querySelector('.login');

input.addEventListener('input', ({ target }) => {
    if(target.value.length > 0){
        button.removeAttribute('disabled');
        return;
    }

    button.setAttribute('disabled',"");
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html'
})


