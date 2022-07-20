const $form = document.getElementById('form')

$form.addEventListener('click', function (e) {
    //e.preventDefault()

    const elements = $form.elements

    for (const element of elements) {
        if (element.name) {
            console.log(`Element name: ${element.name} ,Element name: ${element.value}`)
        }
    }
})
