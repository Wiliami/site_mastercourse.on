
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


execute(5, 5);

function execute(a, b) {
    console.log('Soma:', Math.sum(a, b));
    console.log('Subtração:', Math.substract(a, b));
    console.log('Multiplicação:', Math.multiplicator(a, b));
    console.log('Divisão:', Math.divider(a, b));
};