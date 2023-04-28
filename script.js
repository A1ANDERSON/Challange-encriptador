function mostrar(mensaje){
  document.querySelector("#result").innerHTML = mensaje;
}


function actualizarPantalla(){
  
  document.querySelector("#output-text").style.display="none";
  document.querySelector("#img-not-message").style.display="none";
  document.querySelector("#not-message").style.display="none";
  document.querySelector("#description-not-message").style.display="none";
  document.querySelector("#result").style.display="inline-block";
  document.querySelector("#copy").style.display="inline-block";
}


function encriptarMensaje() {
  var mensaje = document.querySelector("#text").value;
  var secreto = "";

  if (mensaje !== "" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length) {
      for (var i = 0; i < mensaje.length; i++) {
          switch (mensaje[i]) {
              case "a":
                  secreto += "ai";
                  break;
              case "e":
                  secreto += "enter";
                  break;
              case "i":
                  secreto += "imes";
                  break;
              case "o":
                  secreto += "ober";
                  break;
              case "u":
                  secreto += "ufat";
                  break;
              default:
                  secreto += mensaje[i];
          }
      }

      actualizarPantalla();
      mostrar(secreto);
      document.querySelector('#text').value = '';
  } else {
      alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
  }
}


function desencriptarMensaje() {
  var mensaje = document.querySelector("#text").value;
  var codigos = [/ai/g, /enter/g, /imes/g, /ober/g, /ufat/g];
  var letras = ['a','e','i','o','u'];

  if (mensaje !== "" && !/[A-Z]/g.test(mensaje) && !/[á-ú]/g.test(mensaje) && mensaje.trim().length) {
      for (var i = 0; i < 5; i++) {
          mensaje = reemplazarTodos(mensaje, codigos[i], letras[i]);
      }

      actualizarPantalla();
      mostrar(mensaje);
      document.querySelector('#text').value = '';
  } else {
      alert("Por favor, ingrese un mensaje en minúsculas y sin acentos");
  }
}

function reemplazarTodos(cadena, busqueda, reemplazo) {
  return cadena.replace(busqueda, reemplazo);
}


function copiarTexto(){
  var texto = document.querySelector("#result");
  texto.select();
  texto.setSelectionRange(0, 99999); /* For mobile devices */
  navigator.clipboard.writeText(texto.value);
}

function copiarTextoMovil() {
  var texto2 = document.querySelector("#result").value;
  navigator.clipboard.writeText(texto2)
    .then(function() {
      alert("Texto copiado al portapapeles!");
    })
    .catch(function() {
      alert("Error al copiar texto");
    });
};



var encriptar = document.querySelector("#encrypt");
var desencriptar = document.querySelector("#decrypt");
var copiar = document.querySelector("#copy");
var boton = document.querySelector("#copy");




copy.onclick = copiarTexto;
encrypt.onclick = encriptarMensaje;
decrypt.onclick = desencriptarMensaje;
boton.addEventListener("touchstart", copiarTextoMovil)