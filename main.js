function correoEnviado(event){
  event.preventDefault()
  const correo = document.getElementById('correo').value
  if(correo === ''){
     alert('Introduce tu correo')
     return
  }
   alert('Muy pronto nos contactaremos al siguiente correo: ' + correo)
}

const form = document.getElementById("myForm")
form.addEventListener("submit", correoEnviado)