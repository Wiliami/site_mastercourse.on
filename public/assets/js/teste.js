// const user = {
//     name: 'Wiliamis',
//     idade: 25,
//     sexo: 'Masculino',
//     saudacao: () => {
//       return `Olá, ${user.name} você tem ${user.idade} anos do sexo ${user.sexo}`;
//     },
//     stack: () => {
//         return window.prompt(`Olá, ${user.name}. Qual stack você mais gosta?`);
//     }
// }

// document.body.innerText = `${user.saudacao()}` + 'e sua stack preferida é:' + `(${user.stack()}` || 'Stack não informada!');
  
  
// const user2 = ['wiliamis', 'sampaio', 'pontes', 'de', 'oliveira'];

// Objeto vs Array JS
// Armazenar e organizar informações (dados)
//


const name = false;

document.body.innerText = 'Olá, ' +(name || 'nome não informado!');