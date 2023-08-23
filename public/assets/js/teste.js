function register() {
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };
    
    if(user.length) {
        console.log('existe dados')
    } else {
        console.log('não existe dados')
    }
    
      // Here we are getting the object length
    //   var length = Object.values(user).length;
    //   console.log(length);
}