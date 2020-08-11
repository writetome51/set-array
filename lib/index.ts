import { errorIfValuesAreNotArrays } from 'error-if-values-are-not-arrays';


 // This assigns a new value to an array without breaking its memory reference.

export function setArray(array, newArray: any[]): void {
	errorIfValuesAreNotArrays([array, newArray]);

	let length = newArray.length;
	array.length = length;
  	let i = -1;
	while (++i < length) array[i] = newArray[i];
}


/********************************
function setArray(array, newArray) {
	// avg 2.6ms using this method:
	array.length = 0;
	array.push(...newArray);


	// avg 1.96ms using this new method:
  	let length = newArray.length;
	array.length = length;
  	let i = -1;
	while (++i < length) array[i] = newArray[i];
}

let i = -1, newArr = [], oldArr = [];
while (++i < 100000){
	newArr[i] = i;
  	oldArr[i] = i + 1;
} 

console.time('check');
setArray(oldArr, newArr);
console.timeEnd('check');

*******************************/
