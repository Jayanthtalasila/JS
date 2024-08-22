// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name

let paragraph = document.querySelector('p')
console.log(paragraph)


// Get each of the the paragraph using document.querySelector('#id') and by their id
let milk = document.querySelector('#jay')
console.log(milk)

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name

let mutton = document.querySelectorAll('p')
console.log(mutton)
// Loop through the nodeList and get the text content of each paragraph
for (let i = 0; i < mutton.length; i++) {
    const element = mutton[i];
    console.log(element)
}
// Set a text content to paragraph the fourth paragraph,Fourth Paragraph

mutton[3].textContent = 'fourth paragraph'

// Set id and class attribute for all the paragraphs using different attribute setting methods

mutton[0].className = 'super'
mutton[0].id = 'first-super'

mutton[1].className = 'super'
mutton[1].id = 'first-super'

mutton[2].className = 'super'
mutton[2].id = 'first-super'

// Exercise: Level 2
// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
mutton.forEach((goat,i)=>{
    goat.style.fontSize = '30px'
    goat.style.color = 'red'
    goat.style.backgroundColor = 'skyblue'
})

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

mutton.forEach((goat,i) => {
    if(i % 2 === 0 ) {
        goat.style.color = 'red'
    }
    else {
        goat.style.color = 'green'
    }
})
// Set text content, id and class to each paragraph

// DOM manipulation. day 22

let title = document.createElement('h3')

title.className = 'h3title'

title.style.fontSize = '30px'

title.textContent = 'creating html element using javascript.'
// using the document.body.appendChild(title) shows the newly created element in the WEBPAGE 

document.body.appendChild(title)
console.log(title)