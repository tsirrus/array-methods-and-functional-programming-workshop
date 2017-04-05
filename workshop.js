function forEach(callback, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    callback(theArray[i], i);
  }
}

function map(mappingFunction, theArray) {
  var newArray = [];
  
  forEach(function(element){
    newArray.push(mappingFunction(element))
  }, theArray)
  
  return newArray;
}

function filter(predicate, theArray) {
  var newArray = [];
    forEach(function(element) {
      if (predicate(element)) newArray.push(element)
    }, theArray)
  return newArray;
}

function every(predicate, theArray) {
  if (theArray.length === 0) return true;
  for (var i = 0; i < theArray.length; i++) {
    if (!predicate(theArray[i])) return false;
  }
  return true;
}

function some(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) return true;
  }
  return false;
}

function indexOf(item, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (theArray[i] === item) return i;
  }
  return -1;
}

function findIndex(predicate, theArray) {
  for (var i = 0; i < theArray.length; i++) {
    if (predicate(theArray[i])) return i;
  }
  return -1;
}

function first(n, theArray) {
  if (Array.isArray(n)) return n[0];
  return theArray.slice(0, n);
}

function last(n, theArray) {
  if (Array.isArray(n)) return n[n.length-1];
  return theArray.slice(theArray.length-n)
}

function pluck(property, arrayOfObjects) {
  return map(function(element){
    return element[property];
  }, arrayOfObjects);
}

function flatten(theArray) {
  var flatArray = [];
  for (var i = 0; i < theArray.length; i++) {
    if (Array.isArray(theArray[i])) {
      flatArray = flatArray.concat(flatten(theArray[i]))
    }
    else {
      flatArray.push(theArray[i]);
    }
  }
  return flatArray;
}

function negate1(predicate) {
  return function(x) {
    return !predicate(x)
  }
}

function negate2(predicate) {
  return function(a, b) {
    return !predicate(a, b)
  }
}

function compose1(fun1, fun2) {
  return function(x) {
    return fun1(fun2(x))
  }
}

function compose2(arrOfFuncs) {
  return function(arg) {
    var temp = arg;
    for (var i = arrOfFuncs.length-1, l = 0; i >= l; i--) {
      temp = arrOfFuncs[i](temp);
    }
    return temp;
  }
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
