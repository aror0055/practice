/*const title = 'Products'
const products = ['T-shirt', 'Mug', 'Poster', 'Pen', 'Phone Cover', 'Jacket']

const list = `
<h2>${title}</h2>
<ul>
    <li>${products[0]}</li>
    <li>${products[1]}</li>
    <li>${products[2]}</li>
    <li>${products[3]}</li>
    <li>${products[4]}</li>
    <li>${products[5]}</li>
</ul>
`

const $list = document.getElementById('list')

$list.innerHTML = $list.innerHTML + list*/

// const $animalList = document.getElementById('animal-list')

// $animalList.textContent = $animalList.innerHTML


const title = 'Products'
const products = ['T-shirt', 'Mug', 'Poster', 'Pen', 'Phone Cover', 'Jacket']
const items = []
let i = 0
for (const product of products) {
    items.push(`<li>${product}</li>`)
}

console.log(items)

const list = `
<h2>${title}</h2>
<ul>
    ${items.join('')}
</ul>
`

const $list = document.getElementById('list')

$list.innerHTML = $list.innerHTML + list