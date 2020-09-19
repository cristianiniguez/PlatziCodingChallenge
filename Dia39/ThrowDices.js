// Librería

const throwDices = num => {
    let results = new Array()
    for (let d = 0; d < num; d++) {
        results.push(Math.ceil(Math.random() * 6))
    }
    return results
}

export default throwDices