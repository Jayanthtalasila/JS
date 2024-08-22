// this is click event listner so it does a work on clicking this. 


document.getElementById('btn').addEventListener('click', e => {
    console.log('e gives the event listener object:', e)
    console.log('e.target gives the selected element: ', e.target)
    console.log(
      'e.target.textContent gives content of selected element: ',
      e.target.textContent
    )
})

  // double click, event listener, it says on doublie click what to do 
let double = document.getElementById('btn')
double.addEventListener('dblclick', e => {
    double.style.color = 'green'
    double.style.backgroundColor = 'red'
    
})


const mass = document.querySelector('#mass')
      const height = document.querySelector('#height')
      const button = document.querySelector('button')

      let bmi
      button.addEventListener('click', () => {
        bmi = mass.value / height.value ** 2
        alert(`your bmi is ${bmi.toFixed(2)}`)
        console.log(bmi)
      })

const input = document.getElementById('something')
      const p = document.querySelector('p')

      input.addEventListener('blur', e => {
        p.textContent = "field is required"
        p.style.color = 'red'
      })

document.body.addEventListener('keypress', e => {
        alert(e.keyCode)
      })