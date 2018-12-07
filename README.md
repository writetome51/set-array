# setArray(array, newArray: any[]): void

Assigns a new value to an array without breaking its memory reference.
It's a much better alternative to doing this...

array = newArray;

...which would break the memory reference.

To include in your project:  
import {setArray} from '@writetome51/set-array';

Example:

arr = [1,2,3,4,5];

arrCopy = arr;

arr = [3,4,5,6,7]; // But does arrCopy get updated too?

console.log(arrCopy);
 --> [1,2,3,4,5] // no it doesn't.
 
// But what if you need the copy to stay in sync with the original?  Do this instead:

setArray(arr, [3,4,5,6,7]);

console.log(arrCopy);
--> [3,4,5,6,7]; // Success!!
