const pessoas = [
    {name: 'Admin', email: 'admin@gmail.com'},
    {name: 'Teste', email: 'teste@gmail.com'},
];


const ul = document.getElementById('data-list');


pessoas.forEach(pessoa => {
    const li = document.createElement('li');
    li.textContent = '<br>Nome:</br> ' + pessoa.name + ' email:' + pessoa.email;

    ul.appendChild(li);
})

// [] = acessado por índices. [0, 1, 2, 3, 4...]

// if(pessoas.length) {
//     $('#list-element').text(pessoas[0].name)
// } else {
//     $('#list-element').text('Nenhum registro foi encontrado!')
// }

<<<<<<< HEAD
// console.log(typeof pessoas);
// document.body.innerText = JSON.stringify(pessoas[0].name);
=======
// document.body.innerText = `${user.saudacao()}` + 'e sua stack preferida é:' + `(${user.stack()}` || 'Stack não informada!');
  
  
// const user2 = ['wiliamis', 'sampaio', 'pontes', 'de', 'oliveira'];

// Objeto vs Array JS
// Armazenar e organizar informações (dados)
//

// const users = [
//     {name: 'Albert Einstein', idade: 49, sexo: 'Masculino'},
//     {name: 'Galileu Galilei', idade: 35, sexo: 'Masculino'},
//     {name: 'David Hume', idade: 30, sexo: 'Masculino'},
//     {name: 'Isaac Newton', idade: 40, sexo: 'Masculino'},
// ];

// const ul = document.getElementById('data-list');

// users.forEach(user => {
//     const listUsers = document.createElement('li');
//     listUsers.innerText = user.name + ' ' + user.idade + ' ' + user.sexo;

//     ul.appendChild(listUsers);
// })
>>>>>>> 1a4c99229c4ee72074f8a16efbab9242560efd18
