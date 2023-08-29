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

// console.log(typeof pessoas);
// document.body.innerText = JSON.stringify(pessoas[0].name);