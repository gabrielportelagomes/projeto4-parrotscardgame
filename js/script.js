let quantity;
let imageCard = [
    'bobrossparrot',
    'explodyparrot',
    'fiestaparrot',
    'metalparrot',
    'revertitparrot',
    'tripletsparrot',
    'unicornparrot',
];
let newImageCard = [];
let moves = 0;
let card1 = '';
let card2 = '';
let scoreboard = 0;
let value;
let seconds = 0;
let centiseconds = 0;
let timer = '';

function numberOfCards() {
    quantity = parseInt(prompt("Com quantas cartas você deseja jogar? \nInsira um número par, de 4 a 14."));
    if ((quantity % 2) == 0 && quantity >= 4 && quantity <= 14) {
        dealTheCards();
    } else {
        alert("Você precisa digitar um número par, de 4 e 14!");
        numberOfCards();
    }
}

setTimeout(numberOfCards, 500);

function dealTheCards() {
    const card = document.querySelector('ul');

    const elements = quantity / 2;

    newImageCard = [...imageCard.slice(0, elements), ...imageCard.slice(0, elements)];

    newImageCard = newImageCard.sort(indicator);

    let index = 0;

    while (quantity > index) {
        let cardDistribution = `
        <li class="card" onclick="flipCard(this)" id="${newImageCard[index]}">
            <div class="back-face face">
                <img src="./img/back.png">
            </div>
            <div class="front-face face">
               <img src="./img/${newImageCard[index]}.gif">
            </div>
        </li>
        `;

        card.innerHTML = card.innerHTML + cardDistribution;

        index++;
    }
}

function indicator() {
    return Math.random() - 0.5;
}

function flipCard(flippedCard) {
    start();
    const selectedCard = document.querySelector('.cards .flip');
    const classe = flippedCard.getAttribute('class');
    if (classe == 'card flip') {
        return;
    } else {
        if (card1 == '') {
            flippedCard.classList.add('flip');
            card1 = flippedCard;
            moves++;
            return;
        } else if (card2 == '') {
            flippedCard.classList.add('flip');
            card2 = flippedCard;
            moves++;
        }
    }
    if (card1 !== null && card2 !== null) {
        setTimeout(compareCards, 1000);
    }
}

function compareCards() {
    const idCard1 = card1.getAttribute('id');
    const idCard2 = card2.getAttribute('id');

    if (idCard1 == idCard2) {
        card1 = '';
        card2 = '';
        scoreboard++;
        if (scoreboard == (quantity / 2)) {
            clearInterval(value);
            alert("Você ganhou em " + moves + " jogadas!\nSeu tempo total foi de: " + seconds + " segundos.");
            finalOptions();
        }
    } else {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        card1 = '';
        card2 = '';
    }
}

function finalOptions() {
    const jogarNovamente = prompt("Deseja jogar outra partida?\nDigite 'sim' ou 'não'");
    if (jogarNovamente == "sim") {
        location.reload();
    } else if (jogarNovamente == "não") {
        alert("Obrigado por jogar!\nCaso tenha mudado de ideia, recarregue a página.")
    } else {
        alert("Por farvo, digite 'sim' ou 'não'");
        finalOptions();
    }
}

function start() {
    timer = document.getElementById('timer');
    clearInterval(value);
    value = setInterval(startTime, 10);

}

function startTime() {
    centiseconds++;
    console.log(centiseconds);
    if (centiseconds == 100) {
        centiseconds = 0;
        seconds++;
        console.log(seconds);
        if (seconds < 10) {
            timer.innerHTML = '0' + seconds;
        } else if (seconds >= 10) {
            timer.innerHTML = seconds;
        }
    }
}