$(document).ready(function() {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            user.getIdToken().then(token => token);
            findProductsPending(user);
        };
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
       search: 'Pesquisar: ',
       searchPlaceholder: 'Pesquisar...',
     }
   });

   function findProductsPending() {
    firebase.firestore().collection('products-pending').get()
    .then(snapshot => {
        const products = snapshot.docs.map(doc => doc.data());
        addProductsToScreen(products);
    });
   }


   function addProductsToScreen(products) {
        if(products.length) {
            products.forEach(product => {
                tabela.row
                .add([
                    product.item,
                    product.create_date?.seconds ? new Date(product.create_date?.seconds * 1000).toLocaleDateString('pt-br') : '',
                    product.create_user,
                    product.update_user,
                    `<a href="/admin/users/update" class="btn btn-primary btn-sm" title="Editar produto"><i class="bi bi-pencil-square"></i></a> ` +
                    `<a href="/admin/users/delete" class="btn btn-danger btn-sm" title="Excluir produto"><i class="bi bi-trash"></i></a>`
                ])
                .draw(false);
            });
        } else {
            $(".spinner-border").remove();
            $(".dataTables_empty").text('Nenhum registro correspondente encontrado!');
        }
   }
});