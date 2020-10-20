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
};

function decode(expr) {
    // write your solution here 
    let resault='';
    let words=expr.split('**********');

    for(let i=0;i<words.length;i++){
        let letWord=words[i].match(/.{1,10}/g); //divide word for letter
        let massLetter='';
        for(let i=0;i<letWord.length;i++){
          let letterAfabet=MORSE_TABLE[letWord[i].replace(/10/g,'.').replace(/11/g, '-').replace(/0/g,'')];
          massLetter+=letterAfabet;
        }
        
        resault+=massLetter+' ';
      }
      return resault.slice(0,-1);
    
}

module.exports = {
    decode
}