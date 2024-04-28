
export default class Math {
    static sum(a, b) {
        return a + b;
   };

   static substract(a, b) {
    return a - b;
   }

   static multiplicator(a, b) {
    return a * b;
   }

   static divider(a, b) {
    return a / b;
   }

};


console.log('Soma:', Math.sum(2, 2));
console.log('Subtração:', Math.substract(1, 5));
console.log('Multiplicação:' , Math.multiplicator(2, 3));
console.log('Divisão:', Math.divider(5, 5));