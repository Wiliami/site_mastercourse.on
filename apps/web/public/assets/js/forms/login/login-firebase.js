firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location.href = '/dashboard';
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
    if(password.length < 6) {
      showError('A senha deve ter pelo menos 6 caracteres.');
      return;
    } else {
      showLoading();
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          hideLoading();
          console.log('Usuário logado com sucesso.');
        })
        .catch((error) => {
          hideLoading();
          if (error.code === 'auth/invalid-email') {
            showError('Por favor, informe um e-mail válido!');
          } else if(error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            showError('E-mail ou senha incorreta!');
          } else if(error.code.includes('network error')) {
            showError('Erro de rede: Verifique sua conexão com a internet.');
          } else {
            showError('Ocorreu um erro ao efetuar o login.');
          }
        });
    }
  } else {
    showError('Preencha todos os campos!');
  }
}


function isEmailValid(email) {
  const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return emailRegex.test(email);

}

// login();


function getErrorMessage(error) {
  if (error.code == 'auth/user-not-found') {
    return 'Usuário não encontrado';
  }
  if (error.code == 'auth/wrong-password') {
    return 'Senha inválida';
  }
  if(error.code == 'auth/invalid-email') {
    return 'Preencha o campo de e-mail';
  }
  if(error.code == 'auth/missing-password') {
    return 'Preencha o campo de senha';
  }
  return error.message;
}