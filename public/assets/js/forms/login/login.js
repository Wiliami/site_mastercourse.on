firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
})  


function login() {
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(res => {
        window.location.href = "/dashboard";
    }).catch((error) => {
        alert(getErrorMessage(error));
    });
}


function register() {
    window.location.href = '/cadastro';
}

  

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(
    form.email().value
    ).then(() => {
        alert('Email enviado com sucesso!');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}


function getErrorMessage(error) {
    if (error.code == "auth/user-not-found") {
        return "Usuário não encontrado";
    }
    if (error.code == "auth/wrong-password") {
        return "Senha inválida";
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
    email: () => document.getElementById("email"),
    loginButton: () => document.getElementById("login-button"),
    password: () => document.getElementById("password"),
}