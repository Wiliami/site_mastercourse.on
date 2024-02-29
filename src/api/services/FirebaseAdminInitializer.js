import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

class FirebaseAdminInitializer {
  constructor(serviceAccountKeyPath, databaseURL) {
    this.serviceAccountKeyPath = serviceAccountKeyPath;
    this.databaseURL = databaseURL;
  }

  initializeApp() {
    const serviceAccount = require(this.serviceAccountKeyPath);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: this.databaseURL
    }); 

    console.log('Firebase Admin initialized successfully!');
  }
}

export default FirebaseAdminInitializer;