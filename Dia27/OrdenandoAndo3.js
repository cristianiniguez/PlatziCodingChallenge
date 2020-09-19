//Ordenando Ando 3 con JavaScript

//Algoritmo #1: método burbuja
function BubbleSort(list) {
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] > list[j + 1]) {
                aux = list[j]
                list[j] = list[j + 1]
                list[j + 1] = aux
            }
            
        }
    }
    return list
}

//Algoritmo #2: ordenamiento por inserción
function InsertionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let pos = i
        let aux = list[i]
        while (pos > 0 && list[pos - 1] > aux) {
            list[pos] = list[pos - 1]
            pos--
        }
        list[pos] = aux
    }
    return list
}

//Leyendo archivo
const RUTA_CSV = 'PlatziCodingChallenge_Dia27/OrdenandoAndo3.csv'
fetch(RUTA_CSV)
    .then(res => res.text())
    .then(data => {
        let listaNombres = data.split('\n')
        //Ordenando los nombres
        //Método burbuja
        console.time('Método burbuja')
        let listaOrdenada1 = BubbleSort(listaNombres)
        console.timeEnd('Método burbuja') //Método burbuja: 16-20ms
        console.log(listaOrdenada1)
        //Ordenamiento por inserción
        console.time('Ordenamiento por inserción')
        let listaOrdenada2 = InsertionSort(listaNombres)
        console.timeEnd('Ordenamiento por inserción') //Ordenamiento por inserción: 5-8ms
        console.log(listaOrdenada2)

    })
    .catch(error => {
        console.log(error)
    })