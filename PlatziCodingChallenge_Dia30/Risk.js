//Risk en JavaScript

function tirarDados(numeroDados) {
    let resultados = new Array()
    for (let i = 0; i < numeroDados; i++) {
        resultados.push(Math.ceil(Math.random() * 6))
    }
    return resultados.sort((a, b) => b - a)
}

function risk() {
    const ataque = tirarDados(3)
    console.log(`Atacante: ${ataque.join(' ')}`)
    const defensa = tirarDados(2)
    console.log(`Defensor: ${defensa.join(' ')}`)
    let soldadosPerdidosAtacante = 0
    let soldadosPerdidosDefensor = 0
    for (const i in [0, 1]) {
        if (ataque[i] > defensa[i]) {
            soldadosPerdidosDefensor++
        } else {
            soldadosPerdidosAtacante++
        }
    }
    console.log(`Atacante pierde ${soldadosPerdidosAtacante} soldado(s)`)
    console.log(`Defensor pierde ${soldadosPerdidosDefensor} soldado(s)`)
}

//Ejecutando la función
risk()
/* Atacante: 5 3 2 (numeros aleatorios)
Defensor: 6 2 (numeros aleatorios)
Atacante pierde 1 soldado(s)
Defensor pierde 1 soldado(s) */