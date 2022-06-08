
//Creating an anchor tag
const $about = document.createElement('a')

//Set href and textContent properties
$about.href = 'about.html'
$about.textContent = 'About'

// Adding the created element as a child of the tag with id 'nav'
const $nav = document.getElementById('nav')
$nav.appendChild($about)