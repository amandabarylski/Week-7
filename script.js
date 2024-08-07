/*
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.


2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.


3. How do you access the last element of any array?

4. How do you access the first element of any array?

5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array

6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.

9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

10. Write a function that takes an array of numbers and returns the average of all the elements in the array.

11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
*/
console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
        Do not use numbers to reference the last element, find it programmatically.
        ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.`)
//I started by creating and logging the initial array to test that it was working.
let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log("Answer 1: " + ages)
//To find the last item in the array, I used .length - 1, as the array index starts at 0 which means the amount
//of items in the array is one more than the final number in the index.
console.log("Answer 1a: " + (ages[ages.length - 1] - ages[0]))
//I pushed another age to the end of the array and logged the same expression with a different result.
ages.push(31)
console.log("Answer 1b: " + (ages[ages.length - 1] - ages[0]))
//When researching how to find the average of an array, I saw versions that used functions and versions that didn't.
//I decided to use a function to contain both my for loop and my sum variable and return the average, since it kept everything contained in a more managable way.
//I double checked by doing the arithmetic myself with a calculator and found my function gave the correct answer.
function average (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum / array.length
}
console.log("Answer 1c: " + average(ages))

console.log("-------------")


console.log(`2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.

    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`)
//As above, I printed the initial array.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log("Answer 2: " + names)
//Once again I used a for loop within a function to calculate the average, but this time I had to use .length after
//specifying the string in order to convert it into a number.
function avgLength (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i].length
    }
    return sum / array.length
}
console.log("Answer 2a: " + avgLength(names))
//When looking up how to concatenate all strings in an array together, what I first found was the use of the join method.
//However, as that does not use a loop, I kept looking and ended up with a less efficient but workable solution.
//I had to start my string with the first element in the array and my loop with index number 1. When I left the initial
//value of the namesList variable undefined, it printed "undefined" as the first item in the concatenated list.
//The same issue ocurred when I instead put null as the value.
let namesList = names[0]
for (let i = 1; i < names.length; i++) {
    namesList = namesList + " " + names[i]
}
console.log("Answer 2b: " + namesList)
//The join method was far simpler and easier but didn't follow the parameters of the question.
//However, this would be what I would use in a real coding situation.
console.log("Bonus: " + names.join(' '))

console.log("-------------")


console.log('3. How do you access the last element of any array?')
//I printed my answer, array[array.length - 1], and an explanation of how it works to the console.
console.log(`Answer 3: Using .length - 1 will access the last element of any given array.
    As an example, using the names array above, I can print names[names.length - 1] below and the final name, Bob, will print.
    ${names[names.length - 1]}`)

console.log("-------------")


console.log('4. How do you access the first element of any array?')
//As with the previous question, I answered it in the console and showed an example of using array[0].
console.log(`Answer 4: As the first element in any array is numbered at 0, we can access it in this way, for example names[0] would print the first name in the list, Sam, as seen below.
    ${names[0]}`)

console.log("-------------")


console.log(`5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`)
//I first created the array, starting with it empty so that I could push the lengths of the names into it later.
let nameLengths = []
console.log(nameLengths)
//I had the for loop cycle through the index, and used .push to add the length of each name into the previously empty array.
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length)
}
console.log('Answer 5: ' + nameLengths)

console.log("-------------")


console.log('6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.')
//I used a function to contain the for loop again, as it would be easier to refer back to and print with the console.
//The for loop itself was very simple, only needing to add each element to the sum variable as they were already numbers.
function sumAll (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    return sum
}
console.log('Answer 6: ' + sumAll(nameLengths))

console.log("-------------")


console.log("7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').")
//This was used as an example in the course videos, so I referred to my notes while working on this question.
//I declared a variable with an empty string, to allow the string argument to be successfully added to it.
//Then, I used a for loop to add the word to the empty string n number of times.
//Finally, I returned the finalString variable after the for loop had finished iterating.
function repetition (word, n) {
    let finalString = ''
    for (let i = 0; i < n; i++) {
        finalString += word
    }
    return finalString
}
//To test, I ran and printed three different sets of arguments.
console.log('Answer 7: ' + repetition('Hello', 3))
console.log(repetition('Bonjour', 2))
console.log(repetition('Aloha', 5))

console.log("-------------")


console.log('8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.')
//As this was a simple function, I used an arrow function with only one line as that automatically returns without the keyword.
//Instead of concatenating with +, I opted to use a template literal in both the function and the console.log printing it.
const fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(`Answer 8: ${fullName('John', 'Smith')}`)

console.log("-------------")


console.log("9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.")
//First I created two arrays of numbers to use to test the function with.
let numArray1 = [34, 12, 8, 29, 17, 3, 22]
let numArray2 = [5, 21, 14, 7, 2, 30]

//Utilizing the same loop I used in previous questions, I had the function determine the sum of all numbers in the array.
//Then, I used an if statement to return true if the sum is greater than 100.
function isGreaterThan100 (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (sum > 100) {
        return true
    }
}
//The first array results in true, while the second is undefined as I did not use an else statement with a return keyword.
console.log("Question 9, numArray1: " + isGreaterThan100(numArray1))
console.log("Question 9, numArray2: " + isGreaterThan100(numArray2))

console.log("-------------")


console.log("10. Write a function that takes an array of numbers and returns the average of all the elements in the array.")
//I already found a function containing both variables and for loop to be more efficient than listing them all seperately.
//I copied and pasted my previously made function and changed the name to prevent errors, then tested it with the two arrays from above.
//The test revealed that both resulted in long decimals, so I chose to edit my function to allow the result to be rounded.
//Using the MDN documentation, I found that I could used toFixed to round.
//However, with further research I found that parseFloat was also needed if I wanted the result to be a number and not a string.
function numAvg (array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
    sum += array[i]
    }
    let avg = sum / array.length
    return parseFloat(avg.toFixed(2))
}
console.log("Question 10, numArray1: " + numAvg(numArray1))
console.log("Question 10, numArray2: " + numAvg(numArray2))

console.log("-------------")


console.log("11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.")
//For this function, I copied the average loop and its respective variables twice and changed the names to result in two averages that could be compared.
//I then used the two number arrays that I created for question 9, and printed it through the console.
//The result was true as the first average is greater; I then switched them and ran it again with an undefined result due to the lack of an else statement.
const greaterAvg = (array1, array2) => {
    let sum1 = 0
    for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i]
    }
    let avg1 = sum1 / array1.length
    let sum2 = 0
    for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i]
    }
    let avg2 = sum2 / array2.length
    if (avg1 > avg2) {
        return true
    }
}
console.log("Question 11, numArray1 first: " + greaterAvg(numArray1, numArray2))
console.log("Question 11, numArray2 first: " + greaterAvg(numArray2, numArray1))

console.log("-------------")


console.log("12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.")
//For this function I created a simple if statement that requires both arguments to be true to return true.
//This time I included an else statement to return false if one or both of the arguments returns false.
const willBuyDrink = (isHotOutside, moneyInPocket) => {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true
    } else {
        return false
    }
}
//I printed it to the console a few times to be certain that it worked properly with different inputs.
console.log(`Answer 12, inputs true and 11.20: ${willBuyDrink(true, 11.20)}`)
console.log(`Answer 12, inputs false and 15.50: ${willBuyDrink(false, 15.50)}`)
console.log(`Answer 12, inputs true and 5.30: ${willBuyDrink(true, 5.30)}`)

console.log("-------------")


console.log("13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.")
/*I created a function that takes the number of leveling materials and returns a whole number to represent how many of the
highest tier can currently be crafted with what is in the inventory. The first stage converts lower tier to medium tier,
rounding down to the nearest whole number to represent how many could actually be crafted. Then I take the result of that
and add it to the second argument, how many medium tier of these items are currently in the inventory. I divide by three
again, still rounding down, and add that to the final argument for the number of high tier materials that can be crafted.*/
/*I made this function because this is something I do regularly in a game I play. As I am already familiar with the arithmetic,
it was easy to check whether the solution was correct. Doing this regularly has also made me tired of doing it so often.
This function will help save time in the future should I remember to use it.*/
function materialCalc (low, medium, high) {
    let mediumTier = Math.floor(low / 3) + medium
    let highTier = Math.floor(mediumTier / 3) + high
    return highTier
}
console.log("Question 13 example result: " + materialCalc(26, 18, 5))