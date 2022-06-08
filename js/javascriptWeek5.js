const $button = document.getElementById('button')

//$button,addEventListener('click', function(){
    //alert('The button was clicked.')
//})

function handleButtonClick(){
    alert('The button was clicked.')
    console.log('Test message')
}


$button.addEventListener('click', handleButtonClick)

const $payBtn = document.getElementById('payBtn')

$payBtn.addEventListener('dblclick', function(){
    alert('The payBtn was clicked')
})


