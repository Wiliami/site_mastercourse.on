// class Sum {

//     static somarDoisNumeros(a, b) {
//         return a + b;
//     };
// }

// console.log(Sum.somarDoisNumeros(1, 2));

class Create {

    constructor(name, email, password) {
        this.execute(name, email, password);
    }

    execute(name, email, password) {
        if(!name || !email || !password) {
            console.error('Error: Senha obrigatória.');
            return;
        }

        return({
            name: name,
            email: email,
            password:password
        })
    }
}

const create = new Create('Wiliamis Oliveira', 'wiliamis@gmail.com', '');
create.execute();
const createUser = new Create('Dudu', 'dudu@gmail.com', '12345678');
create.execute();
const createUserAdmin = new Create('Admin', '', '12345678');
create.execute();




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