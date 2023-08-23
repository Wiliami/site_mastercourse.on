function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(
    form.email().value
    ).then(() => {
        alert('Email enviado com sucesso!');
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}
