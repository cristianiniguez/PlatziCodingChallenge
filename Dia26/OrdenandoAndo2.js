//Ordenando Ando 2 con JavaScript
//Algoritmo elegido: método burbuja

function BubbleSort(list) {
    let n = list.length
    let exchange
    do {
        exchange = 0
        for (let i = 0; i < n - 1; i++) {
            const currentElement = list[i]
            const nextElement = list[i + 1]
            if (currentElement > nextElement) {
                list[i] = nextElement
                list[i + 1] = currentElement
                exchange++
            }
        }
    } while (exchange > 0);
    return list
}

//Leyendo archivo
const RUTA_CSV = 'PlatziCodingChallenge_Dia26/OrdenandoAndo2.csv'
fetch(RUTA_CSV)
    .then(res => res.text())
    .then(data => {
        let listaNombres = data.split('\n')
        //Ordenando los nombres
        console.time('Método burbuja')
        let listaOrdenada = BubbleSort(listaNombres)
        console.timeEnd('Método burbuja') //Método burbuja: 13-21ms
    })
    .catch(error => {
        console.log(error)
    })
