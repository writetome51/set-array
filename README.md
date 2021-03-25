# setArray(array, newValue: any[]): void

Sets `array` to a `newValue` without breaking its memory reference.  
It's a much better alternative to doing this:
```
array = newValue; // this breaks the memory reference.
```

## Examples
```js
let arr = [1,2,3,4,5];
let arrCopy = arr;
arr = [3,4,5,6,7]; // But does arrCopy get updated too?

console.log(arrCopy); // (nope)
// [1,2,3,4,5]  
 
// But what if you need arrCopy to stay in-sync with arr? 
// Change the value of arr using setArray() instead:
arr = [1,2,3,4,5];
arrCopy = arr;
setArray(arr, [3,4,5,6,7]);

console.log(arrCopy); // Success
// [3,4,5,6,7]; 
```

## Installation
`npm i @writetome51/set-array`

## Loading
```js
import { setArray } from '@writetome51/set-array';
```
