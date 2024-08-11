function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `agora são ${hora} horas`
  if (hora >= 0 && hora < 10) {
    img.src = './images/fotomanha.png'
    document.body.style.background = '#ffd700'

  }else if (hora >= 12 && hora < 18) {
    img.src = './images/fototarde.png'
    document.body.style.background = '#ffa500'
    

  } else {
    img.src = './images/fotonoite.png'
    document.body.style.background = '#808080'

  }

}