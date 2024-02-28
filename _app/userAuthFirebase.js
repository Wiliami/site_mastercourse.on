function getUserData() {
  try {
    // Verifica se há um usuário autenticado
    const user = firebase.auth().currentUser;
  
    if (user) {
      console.log('Usuário logado:', user.uid); // Exemplo: imprimir o UID do usuário logado
  
      // Aqui você pode usar o UID do usuário para acessar dados específicos no Firestore
      const db = firebase.firestore();
      const userDocumentRef = db.collection('users').doc(user.uid);
  
      // Exemplo de como obter os dados do usuário no Firestore
      userDocumentRef.get()
        .then((doc) => {
          if (doc.exists) {
            console.log('Dados do usuário:', doc.data());
          } else {
            console.log('Documento do usuário não encontrado!');
          }
        })
        .catch((error) => {
          console.error('Erro ao obter os dados do usuário:', error);
        });
    } else {
      console.log('Nenhum usuário logado.');
    }
  } catch (error) {
    console.error('Erro ao configurar o Firebase:', error);
  }
}

// getUserData();