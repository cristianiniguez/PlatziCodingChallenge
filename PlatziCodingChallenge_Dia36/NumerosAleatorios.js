// Números Aleatorios en JavaScript

function randomNumbers2(dices, faces) {
    let results = new Array()
    for (let d = 0; d < dices; d++) {
        results.push(Math.ceil(Math.random() * faces))
    }
    return results
}

function throwDices(dices) {
    return randomNumbers2(dices, 6)
}

const numeroDados = parseInt(prompt('¿Cuántos dados vas a tirar?'))
alert(`Sacaste: ${throwDices(numeroDados)}`)