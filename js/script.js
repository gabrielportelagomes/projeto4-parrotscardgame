let quantity;
const imageCard = [
    './img/bobrossparrot.gif',
    './img/bobrossparrot.gif',
    './img/explodyparrot.gif',
    './img/explodyparrot.gif',
    './img/fiestaparrot.gif',
    './img/fiestaparrot.gif',
    './img/metalparrot.gif',
    './img/metalparrot.gif',
    './img/revertitparrot.gif',
    './img/revertitparrot.gif',
    './img/tripletsparrot.gif',
    './img/tripletsparrot.gif',
    './img/unicornparrot.gif',
    './img/unicornparrot.gif'
];
let newImageCard = [];

function numberOfCards() {
    quantity = parseInt(prompt("Com quantas cartas você deseja jogar? \nInsira um número par, de 4 a 14." ));
    if ((quantity%2) == 0 && quantity>=4 && quantity<=14) {
        dealTheCards();
    } else {
        alert("Você precisa digitar um número par, de 4 e 14!");
        numberOfCards();
    }
}

numberOfCards();

function shuffle() {
    newImageCard.sort(indicator);
}


function indicator() {
    return Math.random() - 0.5;
}

function dealTheCards() {
    const card = document.querySelector('ul');

    newImageCard = imageCard.slice(0, quantity);

    shuffle();

    let index = 0;
    
    while(quantity > index) {
        let cardDistribution = `
        <li class="card">
            <div class="back-face face">
                <img src="./img/back.png">
            </div>
            <div class="front-face face">
               <img src="${newImageCard[index]}">
            </div>
        </li>
        `;

        card.innerHTML = card.innerHTML + cardDistribution;

        index++;
    }
}