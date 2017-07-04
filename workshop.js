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
      resultBool=false;
      break;
    }
  }
  return resultBool;
}

function some(predicate, theArray) {

}

function indexOf(item, theArray) {

}

function findIndex(predicate, theArray) {

}

function first(n, theArray) {

}

function last(n, theArray) {

}

function pluck(property, arrayOfObjects) {

}

function flatten(theArray) {

}

function negate1(predicate) {

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
