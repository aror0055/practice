const products = ['t-shirt', 'jacket', 'poster']

// console.log(products)
products[3] = 'keychain'
console.log(products)

// Use the push() method to add an or multiple items to the end of an array.
products.push('baseball cap', 'mug')
console.log(products)

// Use the pop() method to remove an item from the end of an array.
products.pop()
console.log(products)

// Use the shift() method to remove an item from the front of an array.
products.shift()
console.log(products)

// Use the shift() method to add an item from the front of an array.
products.unshift('t-shirt', 'baseball cap')
console.log(products)

// Use the shift() method to add/replace an items from anywhere in an array.
// splice(start, deleteCount, items)
products.splice(3, 0, 'action figure')
console.log(products)

// Deletes index 4,5
// products.splice(4, 2)
// console.log(products)

// Sorting array items in alphabetical order
products.sort()
console.log(products)

products.splice(5, 1, 'Poster')

products.sort()
console.log(products)


// NEVER use sort() method for numbers.
const prices = [1, 20, 4, 100]

prices.sort()
console.log(prices)

// Link to what the return function is: https://www.javascripttutorial.net/javascript-array-sort/
prices.sort(function(a, b){
    return a-b
})
console.log(prices)

// REVERSE is used to revers the array but not sort it.
prices.reverse()
console.log(prices)

// We can chain two methods by joining them using . for example, .sort().reverse()

products.sort().reverse()
console.log(products)


// Creating a new list to use concat() method.

const upsells = ['phone cover', 'pen']

// Variable to hold the concatenated array
// let updatedCart = products.concat(upsells)

// console.log(updatedCart)

// Spread method
let updatedCart = [...products, ...upsells]
console.log(updatedCart)

// Creating a new variable for isArray() method, it is an object
const productObj = {type: 'notebook', color: 'black'}

console.log(typeof productObj)

console.log(Array.isArray(products) )
console.log(Array.isArray(productObj) )

// Use the join() method to grab all the items in an array and place them inside of a string.
console.log(products.join(''))
console.log(products.join(' '))
console.log(products.join(', '))
console.log(products.join(' | '))

// indexOf() method is used to check what value exists at what index of an array, returning a numeric value i.e. index.

console.log(products.indexOf('baseball cap'))

// includes() method is used to check if a value exists in an array or not, returning true or false respectively.

console.log(products.includes('t-shirt'))

// find() method is used to find if an element contains a certain value in it's scope and returns the item and if it doesn't, it returns undefined.

console.log(prices)

console.log(prices.find(item => item > 10)) // 100, because 10 is lower than 100 and 100 is at the front of the array because we used sort() function
console.log(prices.find(item => item > 300)) // undefined as 300 is larger than any value in the array

// findIndex() method is used to find if an element contains a certain value in it's scope and returns the index and if it doesn't, it returns -1.

console.log(prices.findIndex(item => item > 10)) // 100, because 10 is lower than 100 and 100 is at the front of the array because we used sort() function
console.log(prices.findIndex(item => item > 300)) // undefined as 300 is larger than any value in the array


// filter() creates a new array which contains the value that meet the condition passed in the function.

// This method is used to create a normal filter
// const even = []
// for (const price of prices){
// if(price % 2 == 0){
// even.push(price)
// }
// }
// console.log(even)

const even = prices.filter(price => price % 2 == 0)
console.log(even)

// forEach() is a loop that runs the filter on each item of an array and gives out separate values until the array ends.  
products.forEach(product => console.log(product))

// map() is used to create a new array using a condition that is applied to each element of an array.
const doublePrice = prices.map(price => price * 2)
console.log(doublePrice)

//  reduce() is used to reduce down all the values of an array into a single value, for example ana array of number will be returned as the sum of all the numbers.

const sum = prices.reduce((accumulator, price) => accumulator + price)
console.log(sum)