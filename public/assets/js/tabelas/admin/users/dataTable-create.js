function createUser() {
    const user = {
        cad_user: getNameUserCreate('Admin'),
        create_date: new Date(),
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('mainPassword').value,
        update_user: getNameUserUpdate('Admin')
    }
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
        firebase.firestore().collection('users').doc(data.user.uid).set(user);
        console.log('Usuário cadastrado com sucesso!');
        // $("#success-message").show();
        // $("#success-message").text('Usuário cadastrado com sucesso!');
    }).catch((error) => {
        console.log('Houve um erro ao tentar cadastrar usuário', error);
    })
}

function getNameUserCreate( user ) {
    return user;
}

function getNameUserUpdate( user ) {
    return user;
}

function routeListUsers() {
    window.location.href = '/admin/users/list'; 
}    