const $button = document.getElementById('button')
const $stage = document.getElementById('stage')

$button.addEventListener('click', function(){
    $stage.innerHTML = `<p>Abra-cadabara...</p>`

    setTimeout(function(){
        $stage.innerHTML += '<p>....</p>' 
    }, 2000)

    setTimeout(function(){
        $stage.innerHTML += '<p>........</p>' 
    }, 4000)
}
)

const $timer = document.getElementById('timer')
const $start = document.getElementById('start')
const $stop = document.getElementById('stop')
const $reset = document.getElementById('reset')

let id = 0

$start.addEventListener('click', function(){
    let timer = 0
    $timer.textContent = 0

    id = setInterval(function(){
        timer++
        $timer.textContent = timer
    }, 1000)
})

$stop.addEventListener('click', function(){

    clearInterval(id)

})

$reset.addEventListener('click', function(){
    clearInterval(id)
    $timer.textContent = 0
})


