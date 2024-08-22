// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red



let unordered = document.querySelector('li')
console.log(unordered);
unordered.style.backgroundColor = 'green'

let lists = document.querySelectorAll('li')
lists[1].style.backgroundColor ='yellow'

for (let i = 2; i < lists.length; i++) {
    lists[i].style.backgroundColor ='red'
    
}
let i=0
function year() {

    let sup = document.getElementById("year")
    let col = ["red" , "blue" , "black" , "green"]
    sup.style.color = col[i];
    i = (i+1) % col.length
}
setInterval(year, 1000);


function head() {
    let hea = document.querySelector("h2")
    let col = ["red" , "blue" , "skyblue" , "green"]
    hea.style.backgroundColor = col[i];
    i = (i+1) % col.length
}
setInterval(head, 1000);