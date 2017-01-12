# DecodeMTL Array methods workshop

As a reference throughout this workshop, make sure to use [the MDN documentation for `Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

If you prefer videos, here's a series of videos explaining filter/map/reduce:

* Filter: https://www.youtube.com/watch?v=BMUiFMZr7vk
* Map: https://www.youtube.com/watch?v=bCqtb-Z5YGQ
* Reduce: https://www.youtube.com/watch?v=Wl98eZpkp-c

## Operational instructions
Fork this repository to your own GitHub and clone your fork in your work environment.

Create a file called `answers.js` which will hold your answers.

As soon as you do the first exercise, commit it, push it and **create a pull request**.

After each exercise make sure to commit/push this way we can monitor your progress in the pull request.

**NOTE**: You don't need to reset your `answers.js` file. Keep growing the file with each exercise, and make sure to add a comment so we know which exercise we are looking at.

## Exercise
Write a function called `printPositives` that takes an array and uses the `forEach` method to **print** only the positive numbers.

## Exercise
Similar to the previous exercise, write a function called `getPositives` that takes an array and uses the `filter` method to **return a new array** with only the positive numbers.

## Exercise
Re-do exercise 1 by first filtering the input array, and then printing the numbers from the filtered array. Your code will look something like: `return arr.filter(...).forEach(...)`.

## Exercise
Write a function called `filterArray` that takes a callback function and an array as arguments. Your `filterArray` function should return a new array that contains only the elements where the callback function returns true.

**NOTE**: This is a **trick question**. The answer is a one-liner and you are allowed to use `array.filter` :)

## Exercise
Write a function called `longestWord` that takes a string as argument, and returns the longest word in the string. You should use `Array.prototype.reduce` to do your work.

**Hint**: You can use `String.prototype.split` to split the string into an array of words.

## Exercise
Write a function called `countVowels` that takes a string and returns the number of vowels in the string. You should use `Array.prototype.reduce` to do your work.

For the string `"The quick brown fox"`, the output should be `5` because there is one `e`, one `u`, one `i` and two `o`s.

**Hint**: You can use `String.prototype.split` again. There is a way to use it to split a string by character. Try to Google it :)

**Hint 2**: You can create an array of vowels and use `Array.prototype.indexOf` to check if the current letter is a vowel.

## Exercise
Write a function called `highLow` that takes an array of numbers, and returns an object with a property `highest` containing the highest number, and a property `lowest` containing the lowest number, using `Array.prototype.reduce`.

For example, starting with `[1, -10, 20, 40, 5]`, your function should return `{highest: 40, lowest: -10}`.

**Hint**: Javascript has a special value called `Infinity`, which is higher than any other number. See if you can initialize your reduce accumulator with `Infinity` and `-Infinity` :)

## Exercise
Write a function called `countChars` that takes a string, and returns an object where the keys are letters, and the value is the number of times that letter appears.

For example, with input "hello world", the output should be:

```json
{
  "h": 1,
  "e": 1,
  "l": 3,
  "o": 2,
  "w": 1,
  "r": 1,
  "d": 1
}
```

**NOTE**: Unlike arrays, objects don't have any ordering on them. When you print your object on the console, your keys may be displayed in a different order, and it does not matter.

## Exercise
Let's take a break from calling array methods and think about a certain situation that occurs with the `filter` method. `Array.prototype.filter` will filter out elements where the callback function returns a falsy value. What if we wanted to do the opposite, and filter out elements which return a truthy value? Here's an example:

```javascript
function isEven(num) {
  return num % 2 === 0;
}

var numbers = [4,8,15,16,23,42];
var evenNumbers = numbers.filter(isEven);
```

If we want to filter for odd numbers, we have to create a new function that returns true if a number is odd. Here's one way:

```javascript
function isOdd(num) {
  return num % 2 === 1;
}
```

But we can do better, and re-use the `isEven` function that we had before:

```javascript
function isOdd(num) {
  return !isEven(num);
}
```

That's great! It's even a bit more clearer, and we don't have to rewrite the logic. Here's another example:

```javascript
function isEmpty(someList) {
  return list.length === 0;
}

function isNotEmpty(someList) {
  return !isEmpty(list);
}
```

There's a common pattern repeating itself here: whenever we want to create a function that negates the result of another function, we're simply calling the original function with the same parameters, and prefixing the call with a `!`. This will invert the boolean result from the original function, giving us exactly what we need.

However, we can do better than writing out a new function manually every time we want to create a negated version of a function. Let's use higher-order functions to do just that.

In this exercise, **your goal is to create a `negate` function**. `negate` takes one parameter: another function. `negate` should **return a function** that, when called, will return the opposite of what the input function would return on the same input.

To make things simpler, **you can assume that the original function only takes one parameter**. Here's how I should be able to use your code:

```javascript
function negate(fn) {
  // your solution goes here
}

// Original functions
function isEven(num) {
  return num % 2 === 0;
}
function isEmpty(someList) {
  return someList.length === 0;
}

// New functions
var isOdd = negate(isEven);
var isNotEmpty = negate(empty);

[1,2,3].filter(isEven) // [2]
[1,2,3].filter(isOdd) // [1,3]

### Challenge
As a challenge, provide a more complete version of the `negate` function that will work with **any number of parameters**. For example, it should work with the following:

```javascript
function firstDividesSecond(first, second) {
  return second % first === 0;
}

var firstDoesNotDivideSecond = negate(firstDividesSecond);
```

Here, since the original function takes two parameters, your `negate` should call it with two parameters. But for this challenge, you should make `negate` work for an arbitrary number of parameters. Hint: you can use the `arguments` keyword :)

## Exercise
Starting on week 3 of the bootcamp, we will be learning about databases. Databases are useful for saving data for long periods of time.

Contrary to a JavaScript program, where all the data disappears when the program terminates, databases keep their data "forever".

In this exercise, we're going to imagine that we are storing people information in a database, and that we queried our database to retrieve a list of people.

Our database returns to us an array of people objects, and each of them has a **unique ID** that the database uses to refer to it.

Here's what our person data could look like:

```json
[
  {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
]
```

For this exercise, we want to use `Array.prototype.reduce` to transform our array of people into an object, keyed with the unique ID.

The end result should look like this:

```json
{
  "KeXoYg92is": {
    "id": "KeXoYg92is",
    "firstName": "John",
    "lastName": "Smith",
    "email": "john@smith.com"
  },
  "NkALmSWtUp": {
    "id": "NkALmSWtUp",
    "firstName": "Donald",
    "lastName": "Duck",
    "email": "don@disney.com"
  },
  "m7LPbJYSUg": {
    "id": "m7LPbJYSUg",
    "firstName": "John",
    "lastName": "Vader",
    "email": "vader@darkside.com"
  }
}
```

This object could be useful if we are often looking up people by their unique ID.

Write a function called `peopleById` that takes an array of people and returns an object where each person is keyed by their unique ID.

You have effectively created what we call an *index*, not unlike the one you have in your phonebook.

## Exercise
Expanding on the previous exercise, this time we are going to create an index on **first names**. Notice how in the previous exercise, each ID was unique. In this case, two people have the same first name.

We want to create a function called `peopleByFirstName` that will take an array of people and return something that looks like this:

```json
{
  "John": [
    {
      "id": "KeXoYg92is",
      "firstName": "John",
      "lastName": "Smith",
      "email": "john@smith.com"
    },
    {
      "id": "m7LPbJYSUg",
      "firstName": "John",
      "lastName": "Vader",
      "email": "vader@darkside.com"
    }
  ],
  "Donald": [
    {
      "id": "NkALmSWtUp",
      "firstName": "Donald",
      "lastName": "Duck",
      "email": "don@disney.com"
    }
  ]
}
```

You have effectively created an *index on first name*. This lets you find all people called, say, "John" without having to look through the whole results.

## Exercise
Expanding on a previous exercise, write a function called `highLowTwo` that takes an array of numbers, and returns the higest, second highest, lowest, and second lowest numbers.

For example, starting with `[1, -10, 20, 40, 5]`, your function should return:

```json
{
  "highest": 40,
  "secondHighest": 20,
  "lowest": -10,
  "secondLowest": 5
}
```


## Exercise
Start or continue the activity [Functional programming in JavaScript](http://reactivex.io/learnrx/).
