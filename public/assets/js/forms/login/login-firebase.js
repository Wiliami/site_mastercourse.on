firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
});

function register() {
    window.location.href = '/cadastro';
}

function showLoading() {
    $('#preloader').show();
}

function hideLoading() {
    setTimeout(() => {
        $('#preloader').hide();
    }, 2000);
}

function showError(message) {
    $('#error-message').text(message);
    $('#error-message').show();
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
            if (error.code === 'auth/invalid-email') {
                showError("Por favor, informe um e-mail válido!");
            } else if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
                showError("E-mail ou senha incorreta!");
            } else {
                showError("Ocorreu um erro ao efetuar o login.");
            }
        });
    } else {
        // showLoading();
        hideLoading();
        showError('Preencha todos os campos!');
    }
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