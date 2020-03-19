$( document ).ready(function() {

    $.ajax({
        url: 'https://reqres.in/api/users',
        success: function(response){
            var listadoUsuarios= $('#listado');

        $.each (response.data, function(main, elemento){
            console.log(elemento.first_name);
            listadoUsuarios.append('<div class="card"> <h2>'+ elemento.first_name+'</h2><img src ="'+elemento.avatar+'"></div>');
        });
    },
    error: function(e){
        console.log('hubo un error', e)
    }
 });
});

