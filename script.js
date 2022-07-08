var value = []
var a = 57
function getNum(butt) {
  var num = butt.getAttribute('value')
  let elem = document.getElementById('value')
  if (value.length < 1 && (num === '+' || num === '*' || num === '/')) {
    value = []
  } else {
    let lstSymbol = value[value.length - 1]
    if (
      (lstSymbol === '+' ||
        lstSymbol === '-' ||
        lstSymbol === '/' ||
        lstSymbol === '*') &&
      (num === '+' || num === '-' || num === '/' || num === '*')
    ) {
      value[value.length - 1] = num
      elem.innerHTML = value.join('')
    } else {
      value.push(num)
      elem.innerHTML = value.join('')
      if (value.length > 5) {
        elem.style.paddingLeft = `${a}%`
        a -= 5
      }
    }
  }
}

function clr() {
  let elem = document.getElementById('value')
  elem.innerHTML = ''
  value = []
  a = 57
  elem.style.paddingLeft = `63%`
  document.getElementById('answer').innerHTML = ''
  elem.style.paddingTop = '1%'
}

function equ() {
  let elem = document.getElementById('value')
  elem.style.paddingTop = '13%'
  let ans = value.join('')
  document.getElementById('answer').innerHTML = math.evaluate(ans)
}

function del() {
  value.pop()
  let elem = document.getElementById('value')
  elem.innerHTML = value.join('')
}
