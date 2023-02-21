function correoEnviado(){
  event.preventDefault()
  const correo = document.getElementById('correo').value
  if(correo == ''){
    return alert('Introduce tu correo')
  }
  return alert('Muy pronto nos contactaremos al siguiente correo: ' + correo)
}