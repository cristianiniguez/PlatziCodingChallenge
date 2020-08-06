//Telefono en JavaScript

const TELEPHONE = new Map([
    [2, ['A', 'B', 'C']],
    [3, ['D', 'E', 'F']],
    [4, ['G', 'H', 'I']],
    [5, ['J', 'K', 'L']],
    [6, ['M', 'N', 'O']],
    [7, ['P', 'R', 'S']],
    [8, ['T', 'U', 'V']],
    [9, ['W', 'X', 'Y']],
])

function telephoneWords(phone) { //'7778899'
    let numbers = phone.split('').map(el => parseInt(el)) //[7, 7, 7, 8, 8, 9, 9]
    //Verificando que solo hayan números entre 2 - 9
    if (!numbers.every(num => num != NaN && num >= 2 && num <= 9)) {
        return 'El teléfono solo puede tener números entre 2 y 9'
    }
    let numbersWithTimes = listWithTimes(numbers) //[[7, 3], [8, 2], [9, 2]]
    let combinations = numbersWithTimes.map(el => {
        let number = el[0]
        let times = el[1]
        return lettersCombinations(number, times)
    })
    let listWords = combineElements(combinations)
    return listWords
}

//[7, 7, 7, 8, 8, 9, 9] => [ [7, 3], [8, 2], [9, 2] ]
function listWithTimes(list) {
    let timesList = new Array()
    for (let i = 0; i <= list.length; i++) {
        if (list[i] == list[i - 1]) {
            times++
        } else {
            if (list[i - 1] != undefined) {
                timesList.push([list[i - 1], times])
            }
            times = 1
        }
    }
    return timesList
}

//[7, 3] => ["PPP", "PR", "RP", "S"]
function lettersCombinations(number, times) {
    return addendsList(times).map(sum => {
        return sum.map(n => {
            return TELEPHONE.get(number)[(n - 1) % 3]
        }).join('')
    })
}

/* Esta función toma un número "n" y devuelve un array
donde cada elemento es otro array
donde los elementos de ese array hijo sumados dan el número "n" */
function addendsList(n) {
    if (n == 1) {
        return [[1]]
    } else {
        let list = new Array()
        for (let i = 1; i < n; i++) {
            let r = n - i
            addendsList(r).forEach(el => {
                list.push([i].concat(el))
            })
        }
        list.push([n])
        return list
    }
}

/* [ ["PP", "R"], ["TT", "U"], ["WW", "X"] ] (listOfLists)
=> ["PPTTWW", "PPTTX", "PPUWW", "PPUX", "RTTWW", "RTTX", "RUWW", "RUX"] (superlist) */
function combineElements(listOfLists) {
    let superlist = new Array()
    let firstList, secondList
    if (listOfLists.length == 2) {
        firstList = listOfLists[0]
        secondList = listOfLists[1]
    } else {
        firstList = listOfLists.shift()
        secondList = combineElements(listOfLists)
    }
    firstList.forEach(el1 => {
        secondList.forEach(el2 => {
            superlist.push(`${el1}${el2}`)
        })
    })
    return superlist
}

console.log(telephoneWords('7788997'))
//["PPTTWWP", "PPTTXP", "PPUWWP", "PPUXP", "RTTWWP", "RTTXP", "RUWWP", "RUXP"]

console.log(telephoneWords('2345678')) //["ADGJMPT"]

console.log(telephoneWords('7508456')) //"El teléfono solo puede tener números entre 2 y 9"

console.log(telephoneWords('5556555')) //16 palabras posibles
/* [ ["JJJMJJJ", "JJJMJK", "JJJMKJ", "JJJML",
"JKMJJJ", "JKMJK", "JKMKJ", "JKML",
"KJMJJJ", "KJMJK", "KJMKJ", "KJML",
"LMJJJ", "LMJK", "LMKJ", "LML"] ] */