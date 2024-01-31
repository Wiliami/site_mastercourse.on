import admin from 'firebase-admin';

class firebaseService {
  constructor() {
     this.initializeApp();
      this.db = admin.firestore();
  }

  initializeApp() {
    admin.initializeApp({   
      credential: admin.credential.cert('serviceAccountKey.json')
    });
  }
  
}

export default firebaseService;