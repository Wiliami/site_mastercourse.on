firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
})  

function register() {
    const email = form.email().value;
    const password = form.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "/dashboard";
    }).catch((error) => {
        alert(getErrorMessage(error));
    })
}

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