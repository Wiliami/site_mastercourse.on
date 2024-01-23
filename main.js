// class Pessoa {
//     #nome
//     #idade
//     constructor(nome, idade) {
//         this.#nome = nome
//         this.#idade = idade
//     };

//     apresentar() {
//         return `O meu nome é ${this.#nome} e tenho ${this.#idade} anos`;
//     };

//     get nome() {
//         return this.#nome;
//     }

//     set nome(nome) {
//         this.#nome = nome;
//     }

//     toJSON() {
//         return {
//             nome: this.#nome,
//             idade: this.#idade
//         }
//     }
// }
// const p1 = new Pessoa('Wiliamis', 26);
// p1.nome = 'Ana';
// console.log(p1.nome)
// console.log(p1.apresentar());




// const Livro = {
//     name: 'A cabana',
//     editora: 'Serrana Lews',
//     paginas: 223,
//     anunciar: function () {
//         console.log(`A editora indica o livro ${this.name}`);
//     } 
// }

// const indicacao = new Livro('Teste', 'LA', '23');
// indicacao.anunciar();
// console.log(indicacao);


const Livro = function(nome, editora, paginas) {
    gNome = nome
    gEditora = editora
    gPaginas = paginas


    this.getNome = function() {
        return gNome;
    }

    this.getEditora = function() {
        return gEditora;
    }

    this.getPaginas = function() {
        return gPaginas;
    }
}


const GraphQL = new Livro('GraphQL', 'Casa do código', 143);
console.log(GraphQL.getNome());
console.log(GraphQL.getEditora());
console.log(GraphQL.getPaginas());
