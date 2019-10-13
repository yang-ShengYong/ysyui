// 弹出消息框 Message(tip, type)
! function (global, factory) {
  global.Message = factory()
}(window, function () {
  return function (tip, type) {
    var messageColor = ''
    switch (type) {
      case 'info':
        messageColor = type;
        break;
      case 'success':
        messageColor = type;
        break;
      case 'danger':
        messageColor = type;
        break;
      case 'error':
        messageColor = type;
        break;
      default:
        messageColor = 'info';
    }
    var message = document.createElement('div')
    message.innerText = tip || ''
    message.setAttribute('class', `ysy_message ysy_message_${messageColor}`)
    document.body.appendChild(message)
  }
})