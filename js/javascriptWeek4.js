// *** FOR loop ***
// Creating a for loop to log from 0 - 4

for (let i = 0; i <= 4; i++) {
    console.log(i)
}


// Adding all the numbers printed in the console
let total = 0

for (let i = 0; i <= 4; i++) {
    total += i
}

// sum of all outputs from the previous for loop
console.log(total)


//Creating an array
const products = ['T-shirt', 'Mug', 'Poster', 'Pen', 'Phone Cover']

products.push('Jacket')

console.log(products)

//Running a for loop to print out every item in an index in different instances
for (let i = 0; i < products.length; i++) {
    console.log(products[i])
}


// Creating an array for a for loop
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
//initializing a variable
let totals = 0

//Adding every index and storing their sum in the tot variable
for (let i = 0; i < numbers.length; i++) {
    totals += numbers[i]
}
//printing the final total of all indexes 
console.log(totals)

//===========================================================================================================

// *** FOR OF Loop ***
const products1 = ['T-shirt', 'Mug', 'Poster', 'Pen', 'Phone Cover', 'Jacket']

// initializing for of loop
for (const product of products1) {
    console.log(product)
}

const prices = [30, 10, 15, 50, 15, 70]
let cartTotal = 0

for (const price of prices) {
    cartTotal += price
}

console.log(cartTotal)

const name = 'Ted Mosby'

for (const char of name) {
    console.log(char)
}

//=============================================================================================================

// *** FOR IN Loop ***

const sounds = {
    cow: 'moo',
    duck: 'quack',
    horse: 'nay'
}

for (const animal in sounds) {
    console.log(sounds[animal])
}


//=============================================================================================================

// *** WHILE Loop ***
let count = 0

while (count < 5) {
    count++
    console.log(count)
}

let coin = 1

while (coin) {
    coin = Math.round(Math.random())
    console.log(coin)
}
//=============================================================================================================

// *** DO While ***

let coins = 1

// Runs at least once before checking the condition
do {
    coins = Math.round(Math.random())
    console.log(coins)
} while (coins) /* condition */