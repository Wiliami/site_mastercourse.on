$(document).ready(function () {
    var datatables = $('#example').DataTable({
      autoWidth: false,
      processing: true,
        columnDefs: [
          {
              targets: ['_all'],
              className: 'mdc-data-table__cell',
          },
        ],


      "language": {
        "lengthMenu": "Mostrando _MENU_ registros por página",
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
    
    
    function addUsersToScreen(users) {
        datatables.on('processing.dt', function(e, settings, processing) {
          if (processing) {
            $('#loading').show();
          } else {
            $('#loading').hide();
          }
        });
    
        users.forEach(user => {
            
            datatables.row
                .add([
                    user.name,
                    user.email,
                    '<a href="/admin/users/update" class="btn btn-primary btn-sm" title="Editar usuário"><i class="bi bi-person-check-fill"></i></a> ' +
                    '<a href="/admin/users/delete" class="btn btn-danger btn-sm" title="Excluir item"><i class="bi bi-trash"></i></a> '
                ])
                .draw(false);    
            // const name = document.createElement('td');
            // name.innerHTML = user.name;
            // tr.appendChild(name);
    
            // const email = document.createElement('td');
            // email.innerHTML = user.email;
            // tr.appendChild(email);
    
            // const buttonOptions = document.createElement('td');
            // buttonOptions.innerHTML = '<a href="/admin/users/update" class="btn btn-primary btn-sm" title="Editar usuário"><i class="bi bi-person-check-fill"></i></a>';
            // buttonOptions.innerHTML += '<a href="/admin/users/delete" class="btn btn-danger btn-sm" title="Excluir item"><i class="bi bi-trash"></i></a>';
            // tr.appendChild(buttonOptions);
    
            // tbody.appendChild(tr);
        });
    }

   

});





