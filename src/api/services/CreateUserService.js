import admin from 'firebase-admin';
import FirebaseAdminInitializer from './FirebaseAdminInitializer.js';

const configs = {
    serviceAccountKeyPath: '../../../serviceAccountKey.json',
    databaseURL: 'https://teste-master-course.firebaseio.com'
};

const firebaseAdminInitializer = new FirebaseAdminInitializer(
    configs.serviceAccountKeyPath,
    configs.databaseURL
);

firebaseAdminInitializer.initializeApp();

class CreateUser {    
    /**
     * @param {string} email 
     * @param {string} password 
     * @param {Object} userData Object com os dados do usuário
     * @returns
     */
    async createUser(email, password, userData) {
        try {
            const userRecord = await admin.auth().createUser({
                email: email,
                password: password
            });
         
            await admin.firestore().collection('users').doc(userRecord.uid).set(userData);

            console.log('Usuário cadastrado com sucesso:', userRecord.uid);
            return userRecord.uid;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }
}

export default CreateUser;


// const user = {
//     name: () => document.getElementById('user').value,
//     create_user: new Date(),
//     update_user: new Date(),   
// };

const dataUser = {
    displayName: 'Wiliamis',
    create_user: new Date(),
    update_user: new Date(),  
};


const createUser = new CreateUser();
createUser.createUser('examplecreateuser@gmail.com', '12345678', dataUser);