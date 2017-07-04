function forEach(callback, theArray) {
  /*
  This is a little hint to get you started ;)
  
  for (... theArray.length ...) {
    ...
    callback(...)
    ...
  }
  */
  for (var i in theArray) {
    callback(theArray[i]);
  }
}

function map(mappingFunction, theArray) {
  var resultArray = [];
  forEach(function(item){
    resultArray.push(mappingFunction(item));
  }, theArray)
  return resultArray;
}

function filter(predicate, theArray) {
  var resultArray = [];
  forEach(function(item) {
    if (predicate(item)){
      resultArray.push(item);
    }
  }, theArray)
  return resultArray;
}

function every(predicate, theArray) {
  var resultBool = true;
  for (var i in theArray) {
    if (!predicate(theArray[i])){
      resultBool = false;
      break;
    }
  }
  return resultBool;
}

function some(predicate, theArray) {
  var resultBool = false;
  for (var i in theArray) {
    if (predicate(theArray[i])){
      resultBool = true;
      break;
    }
  }
  return resultBool;
}

function indexOf(item, theArray) {
  var resultIndex = -1;
  for (var i=0; i < theArray.length; i++) {
    if (item === theArray[i]) {
      resultIndex = i;
      break;
    }
  }
  return resultIndex;
}

function findIndex(predicate, theArray) {
  var resultIndex = -1;
    for (var i=0; i < theArray.length; i++) {
    if (predicate(theArray[i])) {
      resultIndex = i;
      break;
    }
  }
  return resultIndex;
  // FindIndex can implement a predicate to test complex elements of an array (a nested array, an object, etc)
  // Whereas indexOf will return false if we're comparing 2 equal elements that are not direct references of the same object
}

function first(n, theArray) {
  if (theArray === undefined) {
    if (n.length > 0) {
      return n[0];
    }
    else {
      return [];
    }
  }
  else if (n > theArray.length) {
    return theArray;
  }
  else {
    return theArray.slice(0,n);
  }
}

function last(n, theArray) {
  if (theArray === undefined) {
    if (n.length > 0) {
      return n[n.length-1];
    }
    else {
      return [];
    }
  }
  else if (n > theArray.length) {
    return theArray;
  }
  else {
    return theArray.slice(theArray.length-n,theArray.length);
  }
}

function pluck(property, arrayOfObjects) {
  var resultArray = [];
  for (var i in arrayOfObjects) {
    resultArray.push(arrayOfObjects[i][property]);
  }
  return resultArray;
}

function flatten(theArray) {
  var resultArray = [];
  function addArrays(firstArray, secondArray) {
    for (var i in secondArray) {
      firstArray.push(secondArray[i]);
    }
  }
  
  for (var i in theArray) {
    if (theArray[i].constructor === Array)
    {
       addArrays(resultArray,flatten(theArray[i]));
    }
    else {
      resultArray.push(theArray[i]);
    }
  }
  return resultArray;
}

function negate1(predicate) {
  return function(value) {
    return !predicate(value);
  }
}

function negate2(predicate) {

}

function compose1(fun1, fun2) {

}

function compose2(arrOfFuncs) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    forEach: forEach,
    map: map,
    filter: filter,
    every: every,
    some: some,
    indexOf: indexOf,
    findIndex: findIndex,
    first: first,
    last: last,
    pluck: pluck,
    flatten: flatten,
    negate1: negate1,
    negate2: negate2,
    compose1: compose1,
    compose2: compose2
};
