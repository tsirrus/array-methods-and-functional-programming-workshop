// ==========================================================================
// DecodeMTL instructors solutions - Workshop 3 - Array methods workshop
// ==========================================================================

// 1) Write a function called printPositives that takes an array and uses the
// forEach method to print only the positive numbers.
function printPositives(numArray) {
  var positives = numArray.filter(function(n) {
    return Math.sign(n) > 0;
  });
  positives.forEach(function(n) {
    return console.log(n);
  });
}

printPositives([3,0,-4,-5,12,-13,-15,-0,16,8,-22]);


// 2) Similar to the previous exercise, write a function called getPositives
// that takes an array and uses the filter method to return a new array with
// only the positive numbers.
function getPositives(numArray) {
  return numArray.filter(function(n) {
    return Math.sign(n) > 0;
  });
}
console.log(getPositives([-4, -9, 0 -2, 5, -1, -0, 99, -99, 28]));


// 2B) Re-do exercise 1 by first filtering the input array, and then printing the
// numbers from the filtered array. Your code will look something like: return
// arr.filter(...).forEach(...).


// 3) Write a function called filterArray that takes a callback function and an
// array as arguments. Your filterArray function should return a new array that
// contains only the elements where the callback function returns true.
function filterArray(arr, cb) {return arr.filter(cb)};
console.log(filterArray([8, 9, 5, 10, 18, 2, -3, 3, -5], function(n) {
  return n%2===0;
}));


// 4) Write a function called longestWord that takes a string as argument, and
// returns the longest word in the string. You should use Array.prototype.reduce
// to do your work.
function longuestWord(str) {
  var str2Array = str.split(" ");
  return str2Array.reduce(function(a, b) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  });
}
console.log(longuestWord('Today I went to the cabbage spot and bought a lime.'))


// 5) Write a function called countVowels that takes a string and returns the
// number of vowels in the string. You should use Array.prototype.reduce to do
// your work.
function countVowels(str) {
  var vowels = str.split("").reduce(function(x, y) {
    if (y==='a' || y==='e' || y==='i' || y==='o' || y==='u') {
      return x+y;
    }
    return x;
  }, "");
  return vowels.length;
}
console.log(countVowels('Coconuts are great instruments when you hollow them out'));


// 6) Write a function called highLow that takes an array of numbers, and
// returns an object with a property highest containing the highest number, and
// a property lowest containing the lowest number, using Array.prototype.reduce.
function highLow(numArray) {
  var highestNumber = numArray.reduce(function(a, b) {
    if (b > a) {
      return b;
    }
    return a;
  }, -Infinity);
  var lowestNumber = numArray.reduce(function(a, b) {
    if (b < a) {
      return b;
    }
    return a;
  }, Infinity);
  return {
    highest: highestNumber,
    lowest: lowestNumber
  };
}
console.log(highLow([8, 5, 19, 23, 55, 12, 31, 39, 10, 51]));


// 7) Expanding on exercise 6, write a function called highLowTwo that takes an
// array of numbers, and returns the higest, second highest, lowest, and second
// lowest numbers.
function highLowTwo(numArray) {
  var sortedNumArray = numArray.sort(function(a, b) {
    return b-a;
  });
  return {
    highest: sortedNumArray[0],
    secondHighest: sortedNumArray[1],
    lowest: sortedNumArray[sortedNumArray.length-1],
    secondLowest: sortedNumArray[sortedNumArray.length-2],
  };
}
console.log(highLowTwo([55, 43, 32, 52, 41, 37, 38, 29, 19, 63, 44, 67, 22]));


// 8) Write a function called countChars that takes a string, and returns an
// object where the keys are letters, and the value is the number of times that
// letter appears.
function countChars(str) {
  return str.split("").reduce(function(letterLedger, x){
    if (!x.match(/[a-z]/i)) {
      return letterLedger;
    }
    else if (x in letterLedger){
      letterLedger[x]++;
    }
    else {
      letterLedger[x] = 1;
    }
    return letterLedger;
  }, {});
}
console.log(countChars('When in Rome, do as the Romans do, or did, whatever.'));


// 9) For this exercise, we want to use Array.prototype.reduce to transform our
// array of people into an object, keyed with the unique ID.
var people = [
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
];

function peopleById(peopleArray) {
  return peopleArray.reduce(function(allPeople, x) {
    allPeople[x.id] = x;
    return allPeople;
  }, {});
}
console.log(peopleById(people));


// 10) Expanding on the previous exercise, this time we are going to create an
// index on first names. Notice how in the previous exercise, each ID was
// unique. In this case, two people have the same first name.
// We want to create a function called peopleByFirstName that will take an
// array of people and return an index on first name. This lets you find all
// people called, say, "John" without having to look through the whole results.

function peopleByFirstName(peopleArray) {
  return peopleArray.reduce(function(allPeople, x) {
    if (x.firstName in allPeople) {
      allPeople[x.firstName].push(x);
    }
    else {
      allPeople[x.firstName] = [x];
    }
    return allPeople;
  }, {});
}
console.log(peopleByFirstName(people));
