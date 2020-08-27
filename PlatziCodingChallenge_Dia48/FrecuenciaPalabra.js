// Frecuencia de una palabra en JavaScript

function frequency(text, word, ignoreMayus = true) {
  const regex = ignoreMayus ? new RegExp(word, 'ig') : new RegExp(word, 'g')
  return text.match(regex) ? text.match(regex).length : 0
}

let texto = `Wikipedia es una enciclopedia libre,​ políglota y editada de manera colaborativa. Es administrada por la Fundación Wikimedia, una organización sin ánimo de lucro cuya financiación está basada en donaciones. Sus más de 50 millones de artículos en 300 idiomas han sido redactados en conjunto por voluntarios de todo el mundo, lo que suma más de 2000 millones de ediciones, y permite que cualquier persona pueda sumarse al proyecto para editarlos, a menos que la página se encuentre protegida contra vandalismos para evitar problemas o disputas.
Fue creada el 15 de enero de 2001 por Jimmy Wales y Larry Sanger,​ y es la mayor y más popular obra de consulta en Internet. Desde su fundación, Wikipedia no solo ha ganado en popularidad (se encuentra entre los 20 sitios web más populares del mundo), sino que además su éxito ha propiciado la aparición de proyectos hermanos: wikcionario, wikilibros, wikiversidad, wikiquote, wikinoticias, wikisource, wikiespecies y wikiviajes.`
console.log(frequency(texto, 'wiki')) // 10
console.log(frequency(texto, 'wiki', false)) // 7

let textoBlog
fetch('./PlatziCodingChallenge_Dia48/miBlog.txt')
  .then(response => response.text())
  .then(text => console.log(frequency(text, 'lorem'))) // 21