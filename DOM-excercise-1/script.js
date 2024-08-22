let container = document.getElementById('number-generator')

container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(6, 1fr)';
container.style.gap = '10px';


for (let i = 0; i <= 100; i++) {
    let div = document.createElement('div')
    div.textContent = i;
    container.appendChild(div)

    if (i % 2 === 0) {
        div.style.backgroundColor = 'green'
    }
    else {
        div.style.backgroundColor = 'yellow'
    }

    div.style.padding = '5px'
    div.style.textAlign = 'center'
}
