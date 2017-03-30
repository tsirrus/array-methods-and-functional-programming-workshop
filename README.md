# DecodeMTL Array Methods Workshop

## Instructions

* Fork this repo to your own GitHub, and clone your copy to Cloud9
* Move to the directory you cloned and run `npm install` from the command line
* For every exercise:
  1. From the command line, run:
  
  ```sh
  npm test test/<nameOfTheExercise>.js
  ```
  
  For example, for the first exercise:
  
  ```sh
  npm test test/forEach.js
  ```
  2. Look at the failing test results
  3. In `workshop.js`, fill in the function code and re-run the tests
  4. Continue doing this until all the tests have passed. Then move to the next exercise.

## Functions

### `forEach`
Make this function call the `callback` once for every element in `theArray`. Unlike JavaScript's `Array.prototype.forEach`, the `callback` function will receive only one argument: the current item.

**NOTE**: It's really important that you build the code of this function well, because you will **re-use** it throughout the workshop to create **more complex** functions. This practice of re-using and composing functions together to create more complex operations is one of the core principles of functional programming.

### `map`
Make this function return a new array containing every element of the input array passed through the mapping function. For example:

```js
function map(mappingFunction, theArray) {
    // You write the code here
}

function multiplyByTwo(x) {
    return x * 2;
}

var values = [1,10,15,16];
var doubleValues = map(multiplyByTwo, values); // [2,20,30,32]
```

**NOTE**: You can re-use your `forEach` function to do this exercise ;)

### `filter`
Make this function return a new array containing only the elements of the input array where the predicate function returns `true` or a truthy value.

**NOTE**: A predicate is simply a function that checks whether something is true about its input. It normally returns `true` and `false` only. Here's an example:

```js
function filter(predicate, theArray) {
    // You write the code here
}

function isEven(x) {
    return x % 2 === 0;
}

var values = [1,10,15,16];
var evenValues = filter(isEven, values); // [10,16]
```

**NOTE**: You can re-use your `forEach` function to do this exercise ;)

### `every`
Make this function return:

  a. `true` if *all the elements* in the input array pass the predicate function
  b. `false` otherwise.
  c. If passed an empty array, then return `true`.
  
To get the full points on this exercise, your `every` function has to stop as soon as it encounters an item for which the predicate function returns `false`. You don't need to go any further.

### `some`
Make this function return:

  a. `true` if  *at least one element* in the input array passes the predicate function
  b. `false` otherwise.
  c. If passed an empty array, then return `false`.
  
To get the full points on this exercise, your `some` function has to stop as soon as it encounters an item for which the predicate function returns `true`. You don't need to go any further.

### `indexOf`
Make this function return the index of the first item in the input array that is `===` to the input item. If no item in the input array is `===` to the input item, then return `-1`. For example:

```js
var fruits = ['orange', 'apple', 'banana', 'apple'];

indexOf('apple', fruits); // 1
indexOf('pineapple', fruits); // -1
indexOf('anything', []); // -1
```

### `findIndex`
Make this function return the index of the first item in the input array for which the predicate function returns `true`. Return `-1` if no matching item is found. For example:

```js
var pets = [
    {id: 33, name: 'popcorn', species: 'dog'},
    {id: 46, name: 'purrito', species: 'cat'},
    {id: 47, name: 'bob', species: 'fish'},
    {id: 49, name: 'nacho', species: 'dog'}
];

function isDog(item) {
    return item.species === 'dog';
}

var firstDogIndex = findIndex(isDog, pets);
```

After successfully implementing the function, explain in your own words why we need `findIndex` when we already have `indexOf`. They're two functions that return an array index based on a condition, but there is a fundamental difference between them.

Hint: it is related to how `===` works with objects.


### `first`
Make this function return the first element of the input array if it is called with one argument. If called with two arguments, then make it return an array of the first `n` elements of the input array. If `n` is larger than the number of elements in the input array, return the whole array. If `n` is negative, return an empty array. For example:

```js
first([4,5,6]); // 4
first(2, ['a','b','c','d']); // ['a','b']
first(1, ['a','b','c']); // ['a']
first(10, ['a','b','c']); // ['a','b','c']
```

### `last`
Make this function return the last element of the input array if it is called with one argument. If called with two arguments, then make it return an array of the last `n` elements of the input array. If `n` is larger than the number of elements in the input array, return the whole array. If `n` is negative, return an empty array. For example:

```js
last([4,5,6]); // 6
last(2, ['a','b','c','d']); // ['c','d']
last(1, ['a','b','c']); // ['c']
last(10, ['a','b','c']); // ['a','b','c']
```

### `pluck`
Make this function return a new array where each item is the value of the property named `property` in the current object in the loop. Here a few examples are better:

```js
var pets = [
    {id: 33, owner: 'nyancat', name: 'popcorn', species: 'dog'},
    {id: 46, name: 'purrito', species: 'cat'},
    {id: 47, name: 'bob', species: 'fish'},
    {id: 49, owner: 'nyancat', name: 'nacho', species: 'dog'}
];

pluck('id', pets); // [33,46,47,49]
pluck('name', pets); // ['popcorn','purrito','bob','nacho']
pluck('owner', pets); // ['nyancat', undefined, undefined, 'nyancat']
```

### `flatten`
Make this function return a new array that "un-nests" the input array. Here are a few examples:

```js
flatten([1,2,3]); // [1,2,3] no change
flatten([[1], [2,3], 4, 5]); // [1,2,3,4,5];
flatten([[['hello'], 'world']]); // ['hello','world'];
```

### `negate1`
Make this function return a **new function** that will always return the opposite of the predicate function it is passed. This first version of your solution will work for one argument only. For example:

```js
function isEven(num) {
    return num % 2 === 0;
}

var isOdd = negate1(isEven); // function that returns the opposite of isEven for the same input

isEven(3); // false
isOdd(3); // true
```

### `negate2`
Make this function return a **new function**that will always return the opposite of the predicate function it is passed. This version has to work with an arbitrary number of arguments. For example:

```js
function firstDividesSecond(first, second) {
    return second % first === 0;
}

var firstDoesNotDivideSecond = negate2(firstDividesSecond);
```

This time you won't be able to create a function that only takes one argument. To complete this exercise, you'll have to learn about two concepts:

  * [The JavaScript arguments object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)
  * [`Function.prototype.apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)