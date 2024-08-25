


let head = document.getElementById('head')
let body = document.querySelector('body')
let show = document.getElementById('display')
body.style.display = 'center'
show.style.display = 'flex'
show.style.justifyContent ='center' 
show.style.alignItems ='center'
body.addEventListener('keydown', e => {
    show.textContent=e.keyCode
})

head.addEventListener('keydown', (event) => {
    head.textContent = event.key
});


