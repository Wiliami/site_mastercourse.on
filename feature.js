// class Sum {

//     static somarDoisNumeros(a, b) {
//         return a + b;
//     };
// }

// console.log(Sum.somarDoisNumeros(1, 2));


const server = 'foo'; // inicialização

// declaração
// inicialização

class Create {

    constructor() {
        this.execute();
    }

    execute(name, email, password) {
        if(!name) {
            return 'Error: Nome obrigatório.'
        } else if(!email) {
            return 'Error: Email obrigatório.'
        } else if(!password) {
            return 'Error: Senha obrigatória.'
        } else {
            return {
                name: name,
                email: email,
                password: password
            }
        }

        
    }
}

const create = new Create();
console.log('User 1:', create.execute('Wiliamis Oliveira', 'wiliamis@gmail.com', ''));

const createUser = new Create();
console.log('User 2:',createUser.execute('Dudu', 'dudu@gmail.com', '12345678'));

const createUserAdmin = new Create();
console.log('Uuser 3:', createUserAdmin.execute('Admin', '', '12345678'));




// function createUser(name, email, password) {

//     if(!name || !email || !password) {
//         return 'Campo obrigatórios';
//     } 
    
//     return {
//         name: name,
//         email: email,
//         password: password
//     }
// }

// console.log(
//     createUser(
//         'Wiliamis Oliveira',
//         'wiliamis@gmail.com',
//         '12345678'
//     )
// );