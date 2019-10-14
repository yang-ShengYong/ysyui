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

// button按钮
! function (global, factory) {
  var arrButton = document.getElementsByTagName('ysy_button')
  var lenButton = arrButton.length
  for (var i = 0; i < lenButton; i++) {
    var type = arrButton[i].getAttribute('type')
    arrButton[i].setAttribute('class', `ysy_button ysy_button_${type}`)
  }
}()


Object.prototype.replaceSelf = function (newDom) {
    this.parentElement.replaceChild(newDom, this)
  }
  // input输入框
  ! function (global, factory) {
    var arr_ysy_input = document.getElementsByTagName('ysy_input')
    var len_ysy_input = arr_ysy_input.length
    for (var i = 0; i < len_ysy_input; i++) {
      var input = document.createElement('input')
      //设置input的placeholder、value属性
      var placeholder = arr_ysy_input[i].getAttribute('placeholder')
      input.setAttribute('placeholder', placeholder)
      var value = arr_ysy_input[i].getAttribute('value')
      input.setAttribute('value', value)

      input.classList = "ysy_input"
      arr_ysy_input[i].replaceSelf(input)
    }
  }(window)

  // select选择器
  ! function (global, factory) {
    global.Select = factory()
  }(window, function () {
    return function (selectObj) {
      var container = document.createElement('div')
      container.classList = "selectcontainer"
      var selectDom = document.getElementsByTagName('ysy_select')[0]
      var input = document.createElement('input')
      var placeholder = selectDom.getAttribute('placeholder')
      input.setAttribute('placeholder', placeholder)
      var value = selectDom.getAttribute('value')
      input.setAttribute('value', value)
      input.classList = "ysy_input"
      container.appendChild(input)



      selectDom.replaceSelf(container)

      var options = selectObj.data.options
      var optionLen = options.length

      var ul = document.createElement('ul')
      for (var i = 0; i < optionLen; i++) {
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
          isshow = !isshow
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


  // loading
  ! function (global, factory) {
    var loading = document.getElementsByClassName('ysy_loading')
    var len = loading.length

    for (var i = 0; i < len; i++) {
      var type = loading[i].getAttribute('type')
      switch (type) {
        case 'circle':
          var div = document.createElement('div')
          div.classList = `ysy_loading_${type}`
          loading[i].appendChild(div)
          var divInner = document.createElement('div')
          divInner.classList = `ysy_loading_${type}_inner`
          div.appendChild(divInner)
          break
        case 'rect':
          var div = document.createElement('div')
          div.classList = `ysy_loading_${type}`
          loading[i].appendChild(div)
          for (let i = 0; i < 3; i++) {
            var span = document.createElement('span')
            span.classList = `ysy_loading_${type}_inner`
            div.appendChild(span)
          }
          break
        case 'multirect' :
            var div = document.createElement('div')
            div.classList = `ysy_loading_${type}`
            loading[i].appendChild(div)
            for (let i = 0; i < 5; i++) {
              var span = document.createElement('span')
              span.classList = `ysy_loading_${type}_inner`
              div.appendChild(span)
            }
            break
      }
      
    }
  
  }()

  //icon
  !function (){
    var icon = document.getElementsByTagName('ysy_icon')
    var len = icon.length
    for (let i=0;i<len;i++){
      let iconClass = icon[i].getAttribute('class')
      icon[i].classList = `ysy-icon ${iconClass}`
    }
  }()

  //放大预览图
  !function (global, factory) {
    window.PreviewImg = factory()
  } (window, function () {
    return function (json) {
      var container = json.dom,
          url = json.url
      //创建dom结构
      var originImg = document.createElement('div'),
          bigImg = document.createElement('div')
      originImg.classList = 'ysy_img_bigger_little'
      bigImg.classList = 'ysy_img_big_pic'
      bigImg.style.backgroundImage = `url(${url})`
      var img = document.createElement('img')
      img.src= url

      var span = document.createElement('span')
      
      originImg.appendChild(span)
      originImg.appendChild(img)
      container.appendChild(originImg)
      container.appendChild(bigImg)
      //
      img.onmouseenter=function (e){
        bigImg.style.display = 'block'
        span.style.display = 'block'
        img.onmousemove=function (e){
            var x = e.offsetX,
                y = e.offsetY 
            span.style.top = y-25 +'px'
            span.style.left = x-25 + 'px'
            var xBigger = x*6,
                yBigger = y*6
            bigImg.style.backgroundPosition = `-${xBigger}px -${yBigger}px`
             
           }
        img.onmouseleave=function(){
          bigImg.style.display = 'none'
          span.style.display = 'none'
        }
      }
      
    }
  })