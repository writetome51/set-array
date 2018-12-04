"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setArray_1 = require("./setArray");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5];
var arrCopy = arr;
// Test 1: make sure both arrays remain in-sync:
setArray_1.setArray(arr, [3, 4, 5, 6, 7]);
if (arrays_match_1.arraysMatch(arrCopy, [3, 4, 5, 6, 7]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2: make sure both arrays remain in-sync when assigning a new array of objects:
setArray_1.setArray(arr, [{ prop1: 1 }, { prop1: 2 }]);
if (arrCopy[0].prop1 && arrCopy[1].prop1)
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3: make sure both arrays remain in-sync when assigning empty array:
setArray_1.setArray(arr, []);
if (arrCopy.length === 0)
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: make sure things work the other way around:
setArray_1.setArray(arrCopy, [1, 2, 3, 4]);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4]))
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: set to array of one item:
setArray_1.setArray(arr, [1]);
if (arrays_match_1.arraysMatch(arrCopy, [1]))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: make sure error is triggered if either argument is not array:
var errorTriggered = false;
try {
    setArray_1.setArray({}, [1, 2]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
