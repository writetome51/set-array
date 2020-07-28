import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';
/****
 This assigns a new value to an array without breaking its memory reference.
 It's a much better alternative to doing this...

 array = newArray;

 ...which would break the memory reference.
 ****/
export function setArray(array, newArray) {
    errorIfValuesAreNotArrays([array, newArray]);

    // These 2 lines make sure any memory reference to array is not broken:
    array.length = 0;
    array.push(...newArray);
}
