firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location.href = '/dashboard';
  }
});

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


function register() {  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

    

  if(username && email && password && confirmPassword) {  
    showLoading();

    if(password !== confirmPassword) {
      hideLoading();
      showError('As senhas digitadas não coincidem!');
      return;
    }
        
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = firebase.auth().currentUser;

        return user.updateProfile({
          displayName: username
        }).then(() => { 
          const userData = {
            create_date: new Date(),
            username: username,
            email: email,
            password: password,
            update_date: new Date()
          };
          return firebase.firestore().collection('users').doc(userCredential.user.uid).set(userData);
        });
      })
      .then(() => {
        hideLoading();
        console.log('Usuário cadastrado com sucesso!');
      }).catch((error) => {
        console.log('Erro durante o cadastro do usuário: ', error);
        hideLoading();
        if (error.code === 'auth/email-already-in-use') {
          showError('Este e-mail já está cadastrado!');
        } else if(error.code === 'auth/weak-password') {
          showError('A Senha deve ter no mínimo 6 caracteres!');
        } else {
          showError('Ocorreu um erro durante o cadastro do usuário.');
        }
      });
  } else {
    showLoading();
    hideLoading();
    showError('Preencha todos os campos!');
  }
}



function getErrorMessage(error) {
  if(error.code == 'auth/email-already-in-use') {
    return 'Email já está em uso';
  }   
  if(error.code == 'auth/invalid-email') {
    return 'Preencha o campo de e-mail';
  }
  if(error.code == 'auth/missing-password') {
    return 'Preencha o campo de senha';
  }
  return error.message;
}


const form = {
  name: () => document.getElementById('username'),
  email: () => document.getElementById('email'),
  password: () => document.getElementById('password'),
  confirmPassword: () => document.getElementById('confirmPassword')
};