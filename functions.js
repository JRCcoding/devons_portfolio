const profileImage = document.getElementById('profile')
const titleText = document.getElementById('title')
const fullText = titleText.textContent
const icons = document.getElementById('icons')

window.addEventListener('load', () => {
  profileImage.style.left = '0'
  icons.style.right = '0'
})

titleText.textContent = ''
let charIndex = 0

const typingInterval = setInterval(() => {
  titleText.textContent += fullText[charIndex]
  charIndex++
  if (charIndex === fullText.length) {
    clearInterval(typingInterval)
  }
}, 200)
