firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
});

function register() {
    let name = document.getElementById('');
    let email = document.getElementById('');
    let password = document.getElementById('');
    firebase.auth().createUserWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(() => {
        window.location.href = "/dashboard";
    }).catch((error) => {
        $("").show("");
        $("").text("");
    })
}

// 1 - Validação de login; ok
// 2 - Validação de cadastro;
// 3 - Validação Lista de usuários;
// 4 - Editar usuários;
// 5 - Excluir usuários

function getErrorMessage(error) {
    if(error.code == "auth/email-already-in-use") {
        return "Email já está em uso";
    }   
    if(error.code == "auth/invalid-email") {
        return "Preencha o campo de e-mail";
    }
    if(error.code == "auth/missing-password") {
        return "Preencha o campo de senha";
    }
    return error.message;
}


const form = {
    name: () => document.ggetElementById('name-user'),
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password')
}