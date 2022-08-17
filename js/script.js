let number;

numberOfCards();

function numberOfCards() {
    const number = parseInt(prompt("Com quantas cartas você deseja jogar? \nInsira um número par, de 4 a 14." ));
    console.log(number);
    if ((number%2) == 0) {
        dealTheCards();
    } else {
        alert("Você precisa digitar um número par, de 4 e 14!");
        numberOfCards();
    }
}