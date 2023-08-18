firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
})

function Register() {
    window.location.href = '/cadastro';
}


// Validar usuário autenticado
function login() {
    let inputEmail = document.getElementById('email').value;
    let inputPassword = document.getElementById('password').value;

    if(inputEmail === '' || inputPassword === '') {
        $("#error-field-empty").show();
        $("#error-field-empty").text('Preencha todos os campos!');
        $("#error-message").hide();
    } else {
        $("#preloader").show();
        firebase.auth().signInWithEmailAndPassword(
            inputEmail, inputPassword
        ).then((res) => {
            $("#preloader").hide();
            window.location.href = '/dashboard';
        }).catch((error) => {
            $("#preloader").hide();
            $("#error-field-empty").hide();
            $("#error-message").show();
            $("#error-message").text('E-mail ou senha incorretos!');
        });
    }
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
    password: () => document.getElementById("password"),
}