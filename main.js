/**
 * 
 * @param {string} text Passa um argumento de string 
 */
function transformaEmMaiuscula(text) {
    if(typeof text === 'string') {
        console.log(text.toUpperCase());
    } else {
        console.error('Error: O argumento preciso ser uma string');
    }
}

// transformaEmMaiuscula(1);