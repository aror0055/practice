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

$button.addEventListener('mouseover', function(){
    $button.textContent = 'Dont click the button'
})

$button.addEventListener('mouseout', function(){
    $button.textContent = 'Dont do it!!'
})

const $log = document.getElementById('log')

function logKey(e){
    $log.textContent = $log.textContent + `${e.code}`;
}

document.addEventListener('keydown', logKey)

