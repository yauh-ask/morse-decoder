const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
}

function decode (expr) {
  let arr = expr.match(/(.{1,10})/gim) || ''
  let result = ''
  arr.forEach(el => {
    let current = ''
    if (el == '**********') {
      result += ' '
    } else {
      current = el.replace(/10/g, '.')
      current = current.replace(/11/g, '-')
      current = current.replace(/00/g, '')
      result += MORSE_TABLE[current]
    }
  })
  return result
}

module.exports = {
  decode
}
