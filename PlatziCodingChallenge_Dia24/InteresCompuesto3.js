//¿Puedo ahorrar en otros bancos? en JavaScript

//Funcion
function ahorroFinal(capital, meses, banco) {
    let ahorroFinal = capital
    let interesActual = banco.interes
    let aumentoInteres = banco.interesPlus
    while (meses / 12 >= 1) {
        ahorroFinal *= Math.pow((1 + interesActual), 12) //C = c(1 + r)^t
        interesActual += aumentoInteres
        meses -= 12
    }
    ahorroFinal *= Math.pow((1 + interesActual), meses)
    return ahorroFinal
}

//Datos de bancos
const BANCO_1 = { //Datos del reto 22
    interes: 0.04, //4% mensual
    interesPlus: 0
}
const BANCO_2 = { //Datos del reto 24
    interes: 0.03, //3% mensual
    interesPlus: 0.07 //7%+ cada año
}
//Datos del usuario
const AHORRO_INICIAL = 1000
const TIEMPOS = [1, 2, 3] //años

//Resultados
TIEMPOS.forEach(tiempo => {
    let meses = tiempo * 12
    let ahorroFinal_Banco1 = ahorroFinal(AHORRO_INICIAL, meses, BANCO_1)
    let ahorroFinal_Banco2 = ahorroFinal(AHORRO_INICIAL, meses, BANCO_2)
    mejorBanco = ahorroFinal_Banco1 > ahorroFinal_Banco2 ? 1 : 2
    console.log(`En el banco 1 se ahorra $${ahorroFinal_Banco1.toFixed(2)}`)
    console.log(`En el banco 2 se ahorra $${ahorroFinal_Banco2.toFixed(2)}`)
    console.log(`Para un tiempo de ${tiempo} año(s) conviene más el banco ${mejorBanco}`)
});
// Consola:
// En el banco 1 se ahorra $1601.03
// En el banco 2 se ahorra $1425.76
// Para un tiempo de 1 año(s) conviene más el banco 1
// En el banco 1 se ahorra $2563.30
// En el banco 2 se ahorra $4474.65
// Para un tiempo de 2 año(s) conviene más el banco 2
// En el banco 1 se ahorra $4103.93
// En el banco 2 se ahorra $29443.49
// Para un tiempo de 3 año(s) conviene más el banco 2