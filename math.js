export default class Math {
    static sum(a, b) {
        return a + b;
   };

   static substract(a, b) {
    return a - b;
   }

   static divider(a, b) {
    return a / b;
   }
};


console.log('Resposta da soma:', Math.sum(2, 2));
console.log('Resposta da subtração:', Math.substract(1, 5));
console.log('Resposta da divisão:', Math.divider(5, 5));