import {replaceByNewDom} from '../tools.js'

// select选择器
! function (global, factory) {
  global.Select = factory()
}(window, function () {
  return function (selectObj) {
    var container = document.createElement('div')
    container.classList = "selectcontainer"
    var  selectDom = document.getElementsByTagName('ysy_select')[0]
    var input = document.createElement('input')
    var placeholder = selectDom.getAttribute('placeholder')
    input.setAttribute('placeholder', placeholder)
    var value = selectDom.getAttribute('value')
    input.setAttribute('value', value)
    input.classList = "ysy_input"
    container.appendChild(input)

    

    replaceByNewDom(selectDom, container)

    var options = selectObj.data.options
    var optionLen = options.length

    var ul = document.createElement('ul')
    for (var i=0; i<optionLen;i++) {
      var li = document.createElement('li')
      li.setAttribute('value', options[i].value)
      li.classList = "ysy_select_option"
      li.innerText = options[i].label
      ul.appendChild(li)
      li.addEventListener('click', function (e) {
        var label = e.target.innerText
        input.setAttribute('value', label)
        var selectValue = e.target.getAttribute('value')
        window.selectValue = selectValue
        ul.style.display = 'none'
        isshow=!isshow
      }, false)
    }
    container.appendChild(ul)

    var isshow = false
    input.addEventListener('click', function () {
      if (!isshow) {
        ul.style.display = 'block'     
      } else {
        ul.style.display = 'none'
      }
      isshow = !isshow
    }, false)
  }
})