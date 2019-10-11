!function (global, factory) {
  global.Table = factory()
} (window, function () {
  return function (tableObj) {
    var tableNode = document.getElementById('ysy_table'),
        newTable = document.createElement('table')
    newTable.id = 'ysy_table'
    newTable.classList = 'ysy_table'

    var tableHead = document.createElement('thead')
    var tr = document.createElement('tr')
    tableHead.appendChild(tr)
    tableObj.data.head.forEach(item => {
      var td = document.createElement('td')
      td.innerText = item
      tr.appendChild(td)
    });

    var tableBody = document.createElement('tbody')
    tableObj.data.body.forEach(item => {
      var tr = document.createElement('tr')
      item.forEach(item => {
        var td = document.createElement('td')
        td.innerText = item
        tr.appendChild(td)
      })
      tableBody.appendChild(tr)
    })

    newTable.appendChild(tableHead)
    newTable.appendChild(tableBody)

    tableNode.appendChild(newTable)
  }
})

// 弹出消息框 Message(tip, type)
!function (global, factory) {
  global.Message = factory()
} (window, function () {
  return function (tip, type) {
    var messageColor = ''
    switch (type) {
      case 'info' : messageColor = type; break;
      case 'success' : messageColor = type; break;
      case 'danger' : messageColor = type; break;
      case 'error' : messageColor = type; break;
      default : messageColor = 'info';
    }
    var message = document.createElement('div')
    message.innerText = tip || ''
    message.setAttribute('class', `ysy_message ysy_message_${messageColor}`)
    document.body.appendChild(message)
  }
})

// button按钮
!function (global, factory) {
  var arrButton = document.getElementsByTagName('ysy_button')
  var lenButton = arrButton.length
  for (var i=0;i<lenButton;i++) {
    var type = arrButton[i].getAttribute('type')
    arrButton[i].setAttribute('class', `ysy_button ysy_button_${type}`)
  } 
} ()