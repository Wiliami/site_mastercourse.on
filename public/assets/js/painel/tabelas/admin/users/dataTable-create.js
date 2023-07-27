function createUser() {
    const user = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('mainPassword').value
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
        firebase.firestore().collection('users').doc(data.user.uid).set(user);
        console.log('Usuário cadastrado com sucesso!');
    }).catch((error) => {
        console.log('Houve um erro ao tentar cadastrar usuário', error);
    })
}


function routeListUsers() {
    window.location.href = '/admin/users/list'; 
}      