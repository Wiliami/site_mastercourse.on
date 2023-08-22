firebase.auth().onAuthStateChanged(user => {
    if(user) {
        window.location.href = "/dashboard";
    }
});

function showLoading() {
    $('#preloader').show();
}

function hideLoading() {
    setTimeout(() => {
      $('#preloader').hide();
    }, "2000");
}



function register() {  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if(username && email && password && confirmPassword) {
        showLoading();
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((data) => {
            const user = {
                create_date: new Date(),
                name: username,
                email: email,
                password: password
            };
            return firebase.firestore().collection('users').doc(data.user.uid).set(user)
        })
        .then(() => {
            hideLoading();
            console.log('Usuário cadastrado com sucesso!');
        })
        .catch((error) => {
            hideLoading();
            if (error.code === 'auth/email-already-in-use') {
                $("#error-message").show();
                $("#error-message").text("Este e-mail já está cadastrado!");
            } else {
                $("#error-message").show();
                $("#error-message").text("Ocorreu um erro durante o cadastro do usuário.");
            }
        });
    } else {
        showLoading();
        hideLoading();
        $("#error-field-empty").show();
        $("#error-field-empty").text("Preencha todos os campos!");
    }
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
    password: () => document.getElementById('password'),
    confirmPassword: () => document.getElementById('confirmPassword')
}