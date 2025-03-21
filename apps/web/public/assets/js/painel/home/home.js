// import FirebaseAdminInitializer from "#services/FirebaseAdminInitializer.js";

// import FirebaseAdminInitializer from "../../../../../src/api/services/FirebaseAdminInitializer.js";

import FirebaseAdminInitializer from '../../../../../src/api/services/FirebaseAdminInitializer.js'

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('Usuário logado');  
  }
});


const firebase = FirebaseAdminInitializer();
firebase.