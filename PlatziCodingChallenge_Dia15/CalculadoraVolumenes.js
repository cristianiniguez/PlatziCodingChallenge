//Calculadora de Volumenes en JavaScript

class cylinder {
    constructor() {
        this.height = parseFloat(prompt('Introduzca la altura del cilindro'))
        this.radio = parseFloat(prompt('Introduzca el radio del cilindro'))
    }
    getVolume() {
        return Math.PI * Math.pow(this.radio, 2) * this.height
    }
}
class cube {
    constructor() {
        this.side = parseFloat(prompt('Introduzca el lado del cubo'))
    }
    getVolume() {
        return Math.pow(this.side, 3)
    }
}
class sphere {
    constructor() {
        this.radio = parseFloat(prompt('Introduzca el radio de la esfera'))
    }
    getVolume() {
        return (4/3) * Math.PI * Math.pow(this.radio, 3)
    }
}

const opcion = prompt('¿Cuál quiere? Cilindro, Cubo o Esfera').toLowerCase()
switch (opcion) {
    case 'cilindro':
        const cilindro = new cylinder()
        alert(`El volumen del cilindro es ${cilindro.getVolume().toFixed(2)}`)
        break
    case 'cubo':
        const cubo = new cube()
        alert(`El volumen del cubo es ${cubo.getVolume().toFixed(2)}`)
        break
    case 'esfera':
        const esfera = new sphere()
        alert(`El volumen de la esfera es ${esfera.getVolume().toFixed(2)}`)
}