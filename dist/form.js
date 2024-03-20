let orientadorPessoalPoints = 0
let gerenteParticipantePoints = 0
let formadorDeEquipePoints = 0
let gerenteDeEquipePoints = 0
let autocrataPoints = 0 
const personInput = document.getElementById('input-person').value
const form = document.getElementById('form')
const ul = document.createElement('ul')
const li1 = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')
const li4 = document.createElement('li')
const li5 = document.createElement('li')
const subTitle = document.createElement('h2')





const submit = document.getElementById('submit')


export const calculatingPoints = () => {
  for (let index = 1; index < 41; index++) {
    let input1 = document.getElementById('optionA' + index)
    let input2 = document.getElementById('optionB' + index)
  
    if(parseFloat(input1.value) + parseFloat(input2.value) === 7){

      if(input1.className === 'input-number orientador-pessoal'){ //opção 1 orientador pessoal
      
        orientadorPessoalPoints += parseFloat(input1.value)
      
      }else if(input1.className === 'input-number gerente-participante'){ // opção 1 gerente participante
        
        gerenteParticipantePoints += parseFloat(input1.value)
  
      }else if(input1.className === 'input-number formador-de-equipe'){ //opção 1 formador de equipe
  
        formadorDeEquipePoints += parseFloat(input1.value)
  
      }else if(input1.className === 'input-number gerente-de-equipe'){ // opção 1 gerente de equipe
        
        gerenteDeEquipePoints += parseFloat(input1.value)
  
      }else if(input1.className === 'input-number autocrata'){ // opção 1 autocrata
        
        autocrataPoints += parseFloat(input1.value)
  
      }
      if(input2.className === 'input-number orientador-pessoal'){ // opção 2 orientador pessoal
        
        orientadorPessoalPoints += parseFloat(input2.value)
  
      }else if(input2.className === 'input-number gerente-participante'){ // opção 2 gerente participante
        
        gerenteParticipantePoints += parseFloat(input2.value)
  
      }else if(input2.className === 'input-number formador-de-equipe'){ // opção 2 formador de equipe
        
        formadorDeEquipePoints += parseFloat(input2.value)
  
      }else if(input2.className === 'input-number gerente-de-equipe'){ // opção 2 gerente de equipe
        
        gerenteDeEquipePoints += parseFloat(input2.value)
  
      }else if(input2.className === 'input-number autocrata'){ // opção 2 autocrata
        
        autocrataPoints += parseFloat(input2.value)
        
      }  
      
    }else {
      alert(`questão ${index} inválida, lembre-se, você tem apenas sete pontos a cada duas afirmativas`)
      cancel()
      return
    }
    
  }
  append()
  submit.disabled = true
  console.log(orientadorPessoalPoints, gerenteParticipantePoints, formadorDeEquipePoints, gerenteDeEquipePoints, autocrataPoints)
}

export const append = () => {
  
  subTitle.innerText = `A pontuação ${('de '+ document.getElementById('input-person').value)  ?? "do entrevistado"} no formulário foi de:`
  li1.innerText = 'Orientador pessoal: ' + orientadorPessoalPoints
  li2.innerText = 'Gerente participante: ' + gerenteParticipantePoints
  li3.innerText = 'Formador de equipe: ' + formadorDeEquipePoints
  li4.innerText = 'Gerente de equipe: ' + gerenteDeEquipePoints
  li5.innerText = 'Autocrata: ' + autocrataPoints

  form.appendChild(subTitle)
  subTitle.appendChild(ul)
  
  ul.appendChild(li1)
  ul.appendChild(li2)
  ul.appendChild(li3)
  ul.appendChild(li4)
  ul.appendChild(li5)
}

const cancel = () => {
  subTitle.innerText = ``
  li1.innerText = ''
  li2.innerText = '' 
  li3.innerText = ''
  li4.innerText = ''
  li5.innerText = ''
  orientadorPessoalPoints = 0
  gerenteParticipantePoints = 0
  formadorDeEquipePoints = 0
  gerenteDeEquipePoints = 0
  autocrataPoints = 0 
  submit.disabled = false
}