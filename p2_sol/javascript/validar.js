document.getElementById("formulario").addEventListener("submit", enviar_mail);
console.log("validar.js cargado correctamente");
function enviar_mail(event){
    const nombre = document.getElementById("nombre_f").value;
    const apellido1 = document.getElementById("apellido1_f").value;
    const apellido2 = document.getElementById("apellido2_f").value;
    const to_email = document.getElementById("dir_email").value.trim();
    const genero = document.getElementById("genero_f").value;
    const terminacion="e";
    if(genero=="Hombre"){
      terminacion="o";
    }else if(genero=="Mujer"){
      terminacion="a";
    }
    let datos={nombre,apellido1,apellido2,to_email,terminacion}
    if(validar_formulario(event)){
      emailjs.send("service_0ekebqd","template_msdjbz2",datos).then(alert("La info ha sido enviada"));
      
    }
}
function validar_formulario(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre_f").value;
    const apellido1 = document.getElementById("apellido1_f").value;
    const apellido2 = document.getElementById("apellido2_f").value;
    const email = document.getElementById("dir_email").value.trim();
    const genero = document.getElementById("genero_f").value;
    
    // Campos rellenados?
    if (nombre === "" || apellido1 === "" || email === "" || genero === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault();
      return false;  // Algo no esta relleno
    }
  
    // verificar forma de mail
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //Lo de arriba comprueba de la a z mayuscula y minuscula
    //Tambien el resto de numeros y caracteres
    if (!email.match(emailPattern)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      event.preventDefault();
      return false;  // No tiene la forma
    }
    
    // Todo bien, enviar
    return true;
  }