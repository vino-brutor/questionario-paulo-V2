import '../babel.config.js'
import { calculatingPoints, append } from "./form.js"
import { resetFunction } from "./reset.js"

const personInput = document.getElementById('input-person').value
const form = document.getElementById('form')
const submit = document.getElementById('submit')
const resetButton = document.getElementById('reset-button')

submit.addEventListener('click', (ev) => {
  ev.preventDefault()
  calculatingPoints()
})

resetButton.addEventListener('click', () => {
  resetFunction()
})

