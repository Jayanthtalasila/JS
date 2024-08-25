document.getElementById('btn').addEventListener('click', function() {
    let container = document.getElementById('wrapper');
    container.innerHTML = ''; // Clear previous numbers
    let n = document.getElementById('number-generator').value

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(6, 1fr)';
    container.style.gap = '10px';



    for (let i = 0; i <= n; i++) {
        let div = document.createElement('div');
        div.textContent = i;
        div.className = 'number-box';


        if (isPrime(i)) {
            div.style.backgroundColor = 'red'
        } else if (i % 2 === 0) {
            div.style.backgroundColor = 'green'
        } else {
            div.style.backgroundColor = 'yellow'
        }

        container.appendChild(div);
    }
});

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

