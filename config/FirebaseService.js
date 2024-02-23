import admin from 'firebase-admin';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


class FirebaseService {
  constructor() {
    this.db = null;
    this.initializeApp();
  };

  async initializeApp() { 

    const currentFile = fileURLToPath(import.meta.url);
    const currentDir = dirname(currentFile);
    const serviceAccountPath = path.resolve(currentDir, '../serviceAccountKey.json');
    
    try {
      const serviceAccountContent = await fs.readFile(serviceAccountPath);
      const serviceAccount = JSON.parse(serviceAccountContent);

        admin.initializeApp({   
          credential: admin.credential.cert(serviceAccount)
        });
      

      this.db = admin.firestore();
    } catch (error) {
        console.error('Erro ao inicializar o aplicativo Firebase:', error);
    }
  };


  /**
   * @param {string} collectionName Nome da tabela
   * @param {string} documentId Id do documento da tabela
   * @returns 
   */
  async getData(collectionName, documentId) {
    const docRef = this.db.collection(collectionName).doc(documentId);
    const doc = await docRef.get();
    if(doc.exists) {
      return doc.data();
    } else {  
      console.log('Documento não encontrado');
      return null;
    }
  };
  
}


export default FirebaseService;