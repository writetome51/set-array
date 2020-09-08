import {errorIfValuesAreNotArrays} from 'error-if-values-are-not-arrays';


// Assigns a new value to `array` without breaking its memory reference.

export function setArray(array, newArray) {
	errorIfValuesAreNotArrays([array, newArray]);

	let length = newArray.length;
	array.length = length;

	for (let i = 0; i < length; ++i)  array[i] = newArray[i];
}
