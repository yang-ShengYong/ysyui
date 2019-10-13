! function (global, factory) {
  global.Table = factory()
}(window, function () {
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