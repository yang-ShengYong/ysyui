import {replaceByNewDom} from '../tools.js'

// input输入框
! function (global, factory) {
  var arr_ysy_input = document.getElementsByTagName('ysy_input')
  var len_ysy_input = arr_ysy_input.length
  for (var i=0;i<len_ysy_input;i++) {
    var input = document.createElement('input')
    //设置input的placeholder、value属性
    var placeholder = arr_ysy_input[i].getAttribute('placeholder')
    input.setAttribute('placeholder', placeholder)
    var value = arr_ysy_input[i].getAttribute('value')
    input.setAttribute('value', value)

    input.classList = "ysy_input"
    replaceByNewDom(arr_ysy_input[i], input)
  }
}(window)
