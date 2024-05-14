// Define la función aumentarEspacio fuera del evento submit
function aumentarEspacio() {
  let mensaje = document.getElementById("mensaje");
  mensaje.style.height = "auto";
  mensaje.style.height = (mensaje.scrollHeight) + "px";
  // Asegurar que el ancho no exceda el ancho máximo de la página
  mensaje.style.width = "100%"; // Ajustar al ancho máximo disponible
  mensaje.style.maxWidth = "600px"; // Ancho máximo de 600px (puedes ajustar según tus necesidades)
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe
  
  // Verificar si todos los campos están llenos
  var name = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("asunto").value;
  var message = document.getElementById("mensaje").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Por favor completa todos los campos.");
    return; // Detener el envío del formulario si algún campo está vacío
  }

  // Llama a la función aumentarEspacio() aquí
  aumentarEspacio();

  // Crear un objeto con los datos del formulario
  var formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
  };

  // Convertir el objeto a JSON
  var formDataJSON = JSON.stringify(formData);

  // Guardar los datos en el almacenamiento local
  localStorage.setItem("formData", formDataJSON);

  // Mostrar un mensaje de confirmación
  document.getElementById("confirmation").innerHTML = "Mensaje enviado correctamente";

  // Limpiar el formulario
  document.getElementById("contactForm").reset();
});

// Función para ajustar el tamaño de los elementos en dispositivos móviles
function ajustarTamanio() {
  // Obtener el ancho de la ventana
  var anchoVentana = window.innerWidth;

  // Definir el tamaño de fuente base según el ancho de la ventana
  var tamanoFuente = anchoVentana <= 600 ? "12px" : "16px";

  // Aplicar el tamaño de fuente base a todo el documento
  document.body.style.fontSize = tamanoFuente;
}

// Llamar a la función para ajustar el tamaño cuando se cargue la página
ajustarTamanio();

// Llamar a la función para ajustar el tamaño cada vez que cambie el tamaño de la ventana
window.addEventListener("resize", ajustarTamanio);
