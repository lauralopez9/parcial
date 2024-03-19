
//cambiar texto y color de la pagina debajo del carrusel
document.addEventListener('DOMContentLoaded', function() {
    var contenidoOriginal = 'Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).';
    var contenidoAlternativo = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';
    var contenidoActual = contenidoOriginal;
    var colorInicial = 'bg-body-tertiary';
    var colorCambiado = false;

    document.getElementById('cambiarContenido').addEventListener('click', function() {
        // Alternar entre los dos contenidos
        if (contenidoActual === contenidoOriginal) {
            document.getElementById('texto').innerText = contenidoAlternativo;
            contenidoActual = contenidoAlternativo;
        } else {
            document.getElementById('texto').innerText = contenidoOriginal;
            contenidoActual = contenidoOriginal;
        }
    });

    document.getElementById('cambiarColor').addEventListener('click', function() {
        // Alternar el color de la página
        document.body.classList.toggle('cambioColor');
        // Marcar si el color ha sido cambiado o no
        colorCambiado = !colorCambiado;
        // Revertir al color inicial si ya está cambiado
        if (!colorCambiado) {
            document.body.classList.remove('cambioColor');
        }
    });
});

//casilla log in y formulario de registro
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("loginButton").addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        
        // Mostrar usuario y contraseña en la consola
        console.log("Usuario ingresado:", username);
        console.log("Contraseña ingresada:", password);
      
        // Validar usuario y contraseña con expresiones regulares o cualquier otra lógica
        //la contraseña debe contener al menos 8 caracteres y al menos una letra mayúscula, una letra minúscula y un numero.
        if (/^[a-zA-Z0-9]{5,}$/.test(username) && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
          console.log("¡Usuario y contraseña válidos!");
        } else {
          console.log("El usuario o la contraseña no son válidos.");
        }
    });
    
    document.getElementById("signupButton").addEventListener("click", function() {
        // Mostrar formulario de registro y ocultar el de inicio de sesión
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupFormContainer").style.display = "block";
    });
    
    document.getElementById("cancelButton").addEventListener("click", function() {
        // Redirigir a la página principal
        window.location.href = "parci.html";
    });

    document.getElementById("cancelRegistrationButton").addEventListener("click", function() {
        // Mostrar formulario de inicio de sesión y ocultar el de registro
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupFormContainer").style.display = "none";
    });

    document.getElementById("registerButton").addEventListener("click", function() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var estrato = document.getElementById("estrato").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var grupoSanguineo = document.getElementById("grupoSanguineo").value;
        var genero = document.querySelector('input[name="genero"]:checked');
        var actividadesFavoritas = document.querySelectorAll('input[name="actividadesFavoritas"]:checked');
        
        // Expresiones regulares para validación
        var nameRegex = /^[a-zA-Z\s]+$/;
        var phoneRegex = /^\d{10}$/;
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Validar los campos
        if (nameRegex.test(firstName) && nameRegex.test(lastName) && phoneRegex.test(phone) && emailRegex.test(email) && fechaNacimiento !== "" && grupoSanguineo !== "" && genero && actividadesFavoritas.length >= 1 && actividadesFavoritas.length <= 4) {
            // Mostrar información en la consola
            console.log("Nombres:", firstName);
            console.log("Apellidos:", lastName);
            console.log("Teléfono:", phone);
            console.log("Email:", email);
            console.log("Estrato:", estrato);
            console.log("Fecha de Nacimiento:", fechaNacimiento);
            console.log("Grupo Sanguíneo:", grupoSanguineo);
            console.log("Género:", genero.value);
            console.log("Actividades Favoritas:");
            actividadesFavoritas.forEach(function(actividad) {
                console.log("- " + actividad.value);
            });
        } else {
            alert("Por favor, complete todos los campos correctamente.");
        }
    });
} )