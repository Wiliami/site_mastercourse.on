console.time('Execution time');

function fib(n) {
    for(let i = 0; i < n; i++) {
        console.log(i)
    }

    return 'Huuuuge table foi lida';
}

let result = fib(10);
console.log(result);


console.timeEnd('Execution time');