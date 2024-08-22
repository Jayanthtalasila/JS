let unordered = document.querySelector('li')
console.log(unordered);
unordered.style.backgroundColor = 'green'

let lists = document.querySelectorAll('li')
lists[1].style.backgroundColor ='yellow'

for (let i = 2; i < lists.length; i++) {
    lists[i].style.backgroundColor ='red'
    
}

function year() {
    let i = 0;
    let sup = document.getElementById("year")
    let col = ["red" , "blue" , "black" , "green"]
    sup.style.color = col[i];
    i = (i+1) % col.length
}
setInterval(year, 1000);


function head() {
    let i=0;
    let hea = document.querySelector("h2")
    let col = ["red" , "blue" , "skyblue" , "green"]
    hea.style.backgroundColor = col[i];
    i = (i++) % col.length
}
setInterval(head, 1000);