// Números Aleatorios 2 en JavaScript

function randomNumbers2(dices, faces) {
    let results = new Array()
    for (let d = 0; d < dices; d++) {
        results.push(Math.ceil(Math.random() * faces))
    }
    return results
}

const numeroDados = parseInt(prompt('¿Cuántos dados vas a tirar?'))
const numeroCaras = parseInt(prompt('¿Cuántos caras tienen?'))
alert(`Sacaste: ${randomNumbers2(numeroDados, numeroCaras)}`)