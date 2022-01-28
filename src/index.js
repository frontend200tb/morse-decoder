const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*':      ' ',
};

function decode(expr) {
  const numOfLetters = expr.length / 10; // число букв
  const arrOfDigits = []; // массив цифр созданный из строки цифр
  let arrOfDots = []; // массив из точек и тире длиной равной числу букв
  for (let i = 0; i < numOfLetters; i++) {
    arrOfDots[i] = ''; // записываем пустую строку в каждый элемент
  }

  console.log('пустой массив точек и тире', arrOfDots);

  for (let i = 0; i < expr.length; i += 10) {
      arrOfDigits.push(expr.slice(i, i+10))
  }
  for (let i = 0; i < numOfLetters; i++) {
    for (let j = 0; j < 10; j += 2) {
      if (arrOfDigits[i][j] === '1' && arrOfDigits[i][j+1] === '0' ) {
          arrOfDots[i] += '.';
      }
      if (arrOfDigits[i][j] === '1' && arrOfDigits[i][j+1] === '1' ) {
        arrOfDots[i] += '-';
      }
      if (arrOfDigits[i][j] === '*') {
        arrOfDots[i] = '*';
        break;
      }
    }
  }

  console.log('начальное выражение', expr);
  console.log('число букв', numOfLetters);
  console.log('массив цифр', arrOfDigits);
  console.log('массив точек и тире', arrOfDots);

  const arrOfLetters = arrOfDots.map(item => {
    return MORSE_TABLE[item]
  });

  console.log('массив букв', arrOfLetters);

  const result = arrOfLetters.join('');
  return result;

}

module.exports = {
    decode
}