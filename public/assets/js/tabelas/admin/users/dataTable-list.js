$(document).ready(function() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      user.getIdToken().then(token => token); // Pegar o Token do usuário
      findUsers(user);
    }
  });

  var tabela = $('#example').DataTable({
    
    autoWidth: false,
    processing: true,
    columnDefs: [
      {
        targets: ['_all'],
        className: 'mdc-data-table__cell',
      },
    ],

    'processing': true,
    'language': {
      'lengthMenu': 'Mostrando _MENU_ registros por página',
      'emptyTable': '<div class="spinner-border text-success" role="status"></div>',
      'zeroRecords': 'Nenhum registro foi encontrado',
      'infoEmpty': 'Nenhum registro foi encontrado',
      'info': 'Mostrando página _PAGE_ de _PAGES_ registros',
      'infoFiltered': '(filtrado de _MAX_ registros no total)',
      'paginate': {
        'previous': 'Anterior',
        'next': 'Próximo'
      },
      search: 'Pesquisar: ',
      searchPlaceholder: 'Pesquisar...',
    }
      
  });
    
  function findUsers() {
    firebase.firestore().collection('users').get()
      .then(snapshot => {
        const users = snapshot.docs.map(doc => doc.data());
        addUsersToScreen(users);
      });
  }


  const userId = '6dMj9qVDycQeCwnmjQ7DbF6BEZN2'; // example => id user
  function addUsersToScreen(users) {
    if(users.length) {
      users.forEach(user => {
        tabela.row
          .add([
            user.name,
            user.email,
            user.create_date?.seconds ? new Date(user.create_date?.seconds * 1000).toLocaleDateString('pt-br') : '',
            user.cad_user,
            user.update_user,
            `<a href="/admin/users/update?id=${encodeURIComponent(userId)}" class="btn btn-primary btn-sm" title="Editar usuário"><i class="bi bi-pencil-square"></i></a> ` +
                `<a href="/admin/users/delete?id=${encodeURIComponent(userId)}" class="btn btn-danger btn-sm" title="Excluir item"><i class="bi bi-trash"></i></a>`
          ])
          .draw(false);
      });

    } else {
      $( '.spinner-border' ).remove();
      $('.dataTables_empty').text('Nenhum registro foi encontrado!');
    }
    
  }

});





