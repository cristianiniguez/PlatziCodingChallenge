//Volumen de un cilindro en JavaScript
const PI = 3.1416

class cylinder {
    constructor(radio, height) {
        this.radio = radio
        this.height = height
    }
    getArea() {
        return PI * Math.pow(this.radio, 2) * this.height
    }
}

const radio = parseFloat(prompt('Introduzca el radio de las bases del cilindro'))
const altura = parseFloat(prompt('Introduzca la altura del cilindro'))
alert(`El volumen del cilindro es ${new cylinder(radio, altura).getArea().toFixed(2)}`)