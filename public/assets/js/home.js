firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Usuário logado');  
  }
});

