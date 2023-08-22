firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
})

function Register() {
    window.location.href = '/cadastro';
}

function showLoading() {
    $('#preloader').show();
}

function hideLoading() {
    setTimeout(() => {
      $('#preloader').hide();
    }, "2000");
}


// Validar usuário autenticado
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email && password) {
        showLoading();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            hideLoading();
            console.log('Usuário logado com sucesso!');
        })
        .catch((error) => {
            hideLoading();
            if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                $("#error-message").show();
                $("#error-message").text("E-mail ou senha incorreta!");
            } else {
                $("#error-message").show();
                $("#error-message").text("Ocorreu um erro ao efetuar o login.");
            }
        });
    } else {
        showLoading();
        hideLoading();
        $("#error-field-empty").show();
        $("#error-field-empty").text('Preencha todos os campos!');
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