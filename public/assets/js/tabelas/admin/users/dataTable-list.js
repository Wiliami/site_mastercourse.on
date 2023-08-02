$(document).ready(function() {
    var tabela = $('#example').DataTable({
    
      autoWidth: false,
      processing: true,
        columnDefs: [
          {
              targets: ['_all'],
              className: 'mdc-data-table__cell',
          },
        ],

      "processing": true,
      "language": {
        "lengthMenu": "Mostrando _MENU_ registros por página",
        "emptyTable": '<div class="spinner-border text-success" role="status"></div>',
        "zeroRecords": "Nenhum registro foi encontrado",
        "info": "Mostrando página _PAGE_ de _PAGES_ registros",
        "infoEmpty": "Nenhum registro foi encontrado",
        "infoFiltered": "(filtrado de _MAX_ registros no total)",
        "paginate": {
          "previous": "Anterior",
          "next": "Próximo"
        },
        search: 'Pesquisar:',
        searchPlaceholder: 'Pesquisar...',
      }
      
    });


    firebase.auth().onAuthStateChanged(userAuthenticated => {
      if (userAuthenticated) {
          userAuthenticated.getIdToken().then(token => console.log(token)); // Pegar o Token do usuário
          findUsers(userAuthenticated);
      }
    });
    
    function findUsers() {
      firebase.firestore()
      .collection('users')
      .get()
      .then(snapshot => {
          const users = snapshot.docs.map(doc => doc.data());
          addUsersToScreen(users);
      });
    }

    function getUserData() {
      try {
        // Verifica se há um usuário autenticado
        const user = firebase.auth().currentUser;
    
        if (user) {
          console.log("Usuário logado:", user.uid); // Exemplo: imprimir o UID do usuário logado
    
          // Aqui você pode usar o UID do usuário para acessar dados específicos no Firestore
          const db = firebase.firestore();
          const userDocumentRef = db.collection("users").doc(user.uid);
    
          // Exemplo de como obter os dados do usuário no Firestore
          userDocumentRef.get()
            .then((doc) => {
              if (doc.exists) {
                console.log("Dados do usuário:", doc.data());
              } else {
                console.log("Documento do usuário não encontrado!");
              }
            })
            .catch((error) => {
              console.error("Erro ao obter os dados do usuário:", error);
            });
        } else {
          console.log("Nenhum usuário logado.");
        }
      } catch (error) {
        console.error("Erro ao configurar o Firebase:", error);
      }
    }

    getUserData();


    const userId = '6dMj9qVDycQeCwnmjQ7DbF6BEZN2'; // example => id user
    function addUsersToScreen(users) {
      if(users.length) {
        users.forEach(user => {
          tabela.row
            .add([
                user.name,
                user.email,
                new Date(user.create_date.seconds * 1000).toLocaleString('pt-br'),
                user.cad_user,
                user.update_user,
                `<a href="/admin/users/update?id=${encodeURIComponent(userId)}" class="btn btn-primary btn-sm" title="Editar usuário"><i class="bi bi-pencil-square"></i></a> ` +
                `<a href="/admin/users/delete?id=${encodeURIComponent(userId)}" class="btn btn-danger btn-sm" title="Excluir item"><i class="bi bi-trash"></i></a>`
            ])
            .draw(false);
        });
  
      } else {
        // remover classe de looping
        
      }
    
    }

});





