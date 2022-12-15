
const grid = document.querySelector('.grid');

const characters = [
    'akaza',
    'inosuke',
    'muzan',
    'nezuko',
    'rengoku',
    'shinobu',
    'tanjiro',
    'tomioka',
    'uzui',
    'zenitsu'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = ''
let secondCard = '';

const revealCard = ({ target }) => {
    
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    target.parentNode.classList.add('reveal-card')
}

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url(../src/images/${character}.jpg)`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard)
    
    return card;
}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters]

    const sortCharacters = duplicateCharacters.sort(() => Math.random() - 0.5 );

    sortCharacters.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card)
    });
}



loadGame();