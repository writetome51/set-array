"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_values_are_not_arrays_1 = require("error-if-values-are-not-arrays");
/****
 This assigns a new value to an array without breaking its memory reference.
 It's a much better alternative to doing this...

 array = newArray;

 ...which would break the memory reference.
 ****/
function setArray(array, newArray) {
    error_if_values_are_not_arrays_1.errorIfValuesAreNotArrays([array, newArray]);
    // These 2 lines make sure any memory reference to array is not broken:
    array.length = 0;
    array.push.apply(array, newArray);
}
exports.setArray = setArray;
