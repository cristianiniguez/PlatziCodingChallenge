// Hackeando Strings en JavaScript

const DICT1 = {
  "A": '4', "E": '3', "G": '6', "L": '1', "O": '0', "S": '5', "T": '7', "Z": '2',
}

const DICT2 = {
  "A": '4', "B": '13', "C": '(', "D": '[)', "E": '3', "F": '|=', "G": '6', "H": '|-|', "I": '|', "J": ']', "K": '|<', "L": '1', "M": '|Y|', "N": '/\\/', "O": '0', "P": '|>', "Q": '0', "R": '|2', "S": '5', "T": '7', "U": '[_]', "V": '\\/', "W": '\\v/', "X": '}{', "Y": '`/`', "Z": '2',
}

function hack(text, dict) {
  let chars = text.split('')
  let hackedChars = chars.map(char => dict[char.toUpperCase()] ? dict[char.toUpperCase()] : char)
  return hackedChars.join('')
}

console.log(hack('Linda Tarde', DICT1)) // 1ind4 74rd3
console.log(hack('Linda Tarde', DICT2)) // 1|/\/[)4 74|2[)3
console.log(hack('Me gusta programar', DICT1)) // M3 6u574 pro6r4m4r
console.log(hack('Me gusta programar', DICT2)) // |Y|3 6[_]574 |>|206|24|Y|4|2