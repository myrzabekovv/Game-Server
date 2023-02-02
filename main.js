const nickname = document.querySelector('.nickname')
const error = document.querySelector('.WrongNickName')
const space = document.querySelector('.WithoutSpace')
const smallWord = document.querySelector('.WithSmallWord')
const button = document.querySelector('button')
const player = document.querySelector('#player')
const moder = document.querySelector('#moder')
const spectator = document.querySelector('#spectator')
const pick = document.querySelector('.HaveToPick')
const success = document.querySelector('.successfully')

let key = 1

button.addEventListener('click', () => {

  if (nickname.value[0] === nickname.value[0].toUpperCase()) {
    smallWord.textContent = 'Имя должно начинаться с маленкой буквы'
    nickname.style.border = '2px solid #FA6F6F'
  } else {
    smallWord.textContent = ''
    nickname.style.border = 'none'
  }


  for (let i = 0; i < nickname.value.length; i++) {
    if (nickname.value[i] === " ") {
      space.textContent = 'Имя не должно содержать пробелов'
      break
    } else {
      space.textContent = ''
    }
  }

  if (nickname.value.length < 5) {
    error.textContent = 'Имя слишком короткое'
    nickname.style.border = '2px solid #FA6F6F'
  } else {
    error.textContent = ''
    nickname.style.border = 'none'
  }


  if (!player.checked && !moder.checked && !spectator.checked) {
    pick.textContent = 'Обязательно нужно сделать выбор'
  } else {
    pick.textContent = ''
  }


  if (!pick.textContent && !error.textContent && !space.textContent && !smallWord.textContent) {
    success.textContent = 'Авторизация успешно'
  } else {
    success.textContent = ''
  }
})
