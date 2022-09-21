$(document).ready(function() {
        $('#btnRegistrarme').click(function() {
            $("#form").submit(function(event) {
                event.preventDefault();
                registrarUsuario();
            });
        });
    }

    function registrarUsuario() {

        let proyecto = $("#proyecto").val();
        let nombre = $("#nombre").val();
        let email = $("#email").val();
        let organizacion = $("#organizacion").val();
        let indicador = $("#indicador").val();
        let insumos = $("#insumos").val();
        let link = $("#link").val();
        let carta = $("#carta").val();
        let myfile = $("#myfile").val();
        let Foto = $("#Foto").val();
        $.ajax({
            type: "GET",
            dataType: "html",
            url: "./Proyecto",
            data: $.param({
                proyecto: proyecto,
                nombre: nombre,
                email: email,
                organizacion: organizacion,
                indicador: indicador,
                insumos: insumos,
                link: link,
                carta: carta,
                myfile: myfile,
                Foto: Foto
            }),
            success: function(result) {
                let parsedResult = JSON.parse(result);

                if (parsedResult != false) {
                    $("#register-error").addClass("d-none");
                    let username = parsedResult['username'];
                    document.location.href = "home.html?username=" + username;
                } else {
                    $("#register-error").removeClass("d-none");
                    $("#register-error").html("Error en el registro del usuario");
                }
            }
        });
    } else {
        $("#register-error").removeClass("d-none");
        $("#register-error").html("Las contraseñas no coinciden");
    }
}
