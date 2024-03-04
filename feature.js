class Sum {
    
    constructor() {
        this.somarDoisNumeros();
    };
    /**
     * @param {number} a
     * @param {number} b
     */
    somarDoisNumeros(a, b) {
        return a + b;
    };
}

const sum = new Sum();
sum.somarDoisNumeros(1, 2);
console.log(sum);