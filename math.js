
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


math();

function math() {
    console.log('Soma:', default.sum(2, 2));
    console.log('Subtração:', default.substract(1, 5));
    console.log('Multiplicação:', default.multiplicator(2, 3));
    console.log('Divisão:', default.divider(5, 5));
}
