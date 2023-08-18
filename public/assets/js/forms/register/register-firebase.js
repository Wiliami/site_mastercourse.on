firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
});

function register() {
    const user = {
        create_date: new Date(),
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    $("#preloader").show();
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then((data) => {
        $("#preloader").hide();
        firebase.firestore().collection('users').doc(data.user.uid).set(user);
        
        console.log('Usuário cadastrado com sucesso!');
    }).catch((error) => {
        $("#preloader").hide();
        console.log('Houve um erro ao tentar cadastrar usuário', error);
        // $("error-message").show();
        // $("error-message").text("Este e-mail já está sendo usado por outro usuário!");
    });
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
    name: () => document.ggetElementById('username'),
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password')
}