function changeimage(){
    let img = document.getElementById('image')
    let selected = document.getElementById('planets').value
    var imgurl = "";
    if (selected === mercury) {
        imgurl = "./images/mercury.png";
    } else if (selected === venus) {
        imgurl = "https://science.nasa.gov/image-detail/amf-pia00271/";
    } else {
        imgurl =""
    }
    img.src=imgurl;
}






document.getElementById('btn').addEventListener('click', function () {
    let mass = document.getElementById('mass').value 
    let drop = document.getElementById('planets').value
    let text = document.querySelector('p')
    let content = document.getElementById('content')
    content.innerHTML = '';


    if (mass && drop){
        let gravity = {
            mercury: 3.7,
            venus: 8.87,
            earth: 9.81,
            mars: 3.71,
            jupiter: 24.79,
            saturn: 10.44,
            uranus: 8.69,
            neptune: 11.15
        }

        let result = mass * gravity[drop]
        text.textContent = `the weight of object on ${drop} is ${result.toFixed(2)} N` 

    } else  {
        text.textContent = 'please enter valid number'
    }


    content.appendChild(text)
});





