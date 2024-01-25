let secretNumber;
let maxNumber = 10;
let maxTries = 3;
let tries;
let lottery = [];

// console.log();
// input id "valueUser" - Número Ingresado

function elementText(element, text) {
    let elementHTML = document.querySelector(element);
    elementHTML.innerHTML = text;
    return;
}

function verify() {
    let userNumber = parseInt(document.getElementById('valueUser').value);
        if(userNumber === secretNumber){
            elementText('p', `¡Acertaste en ${tries} ${(tries === 1) ? 'vez' : 'veces'}, El número era ${secretNumber}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else {
            //Sección del juego si el usuario "falla" su número
           if(secretNumber > userNumber) {
                elementText('p', 'El número es mayor');
            }
            else {
                elementText('p', 'El número es menor');
            }
        tries++;
        if(tries > maxTries) {
            elementText('p', `¡Has perdido! El número era ${secretNumber}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        cleanBox();
        }
    return;
}

function reboot() {
    cleanBox();
    startCondition();
    document.querySelector('#reiniciar').setAttribute('disabled','true')

}

function generateNumber() {
    let genNumber = Math.floor(Math.random()*maxNumber)+1

    console.log(generateNumber);
    console.log(lottery);
    if(lottery.length == maxNumber){
        elementText('p','¡Todos los números fueron sorteados!')
    }
    else{
        if(lottery.includes(genNumber)){
            return generateNumber();
        }
        else {
            lottery.push(genNumber)
            return genNumber;
        }
    }
}

function cleanBox() {
    document.getElementById('valueUser').value = '';
}

function startCondition() {
    elementText('h1', `¡Adivina el Número en ${maxTries} intentos!`);
    elementText('p', `Elige un número del 1 al ${maxNumber}`);
    secretNumber = generateNumber();
    tries = 1;
}

startCondition();
