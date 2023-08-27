function recoverPassword() {
    const email = document.getElementById('email').value;

    if(email) { 
        showLoading();
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            hideLoading();
            showErrorSuccess('Email enviado com sucesso');
            // console.log('Email enviado com sucesso');
        }).catch((error) => {
            hideLoading();
            if(error.code === 'auth/user-not-found') {
                showError('Este e-mail não foi encontrado!');
            } else if (error.code === 'auth/invalid-email') {
                showError('Por favor, informe um e-mail válido!');
            } else {
                showError("Ocorreu um erro ao efetuar tentar recuperar e-mail.");
            }
        });
    } else {
        showLoading();
        hideLoading();
        showError('Preencha o campo de e-mail!');
    }
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

function showErrorSuccess(message) {
    $('#error-success').text(message);
    $('#error-success').show();
}