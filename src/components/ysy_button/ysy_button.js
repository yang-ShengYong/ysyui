// button按钮
! function () {
  var arrButton = document.getElementsByTagName('ysy_button')
  var lenButton = arrButton.length
  for (var i = 0; i < lenButton; i++) {
    var type = arrButton[i].getAttribute('type')
    arrButton[i].setAttribute('class', `ysy_button ysy_button_${type}`)
  }
}()