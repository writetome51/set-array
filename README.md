# setArray(array, newValue: any[]): void

Sets `array` to a `newValue` without breaking its memory reference.
It's a much better alternative to doing this:
```
array = newValue; // this breaks the memory reference.
```

## Loading
```  
// if using ES5 Javascript:
var setArray = require('@writetome51/set-array').setArray;
// if using Typescript:
import {setArray} from '@writetome51/set-array';
```

## Examples
```
arr = [1,2,3,4,5];
arrCopy = arr;
arr = [3,4,5,6,7]; // But does arrCopy get updated too?

console.log(arrCopy);
 --> [1,2,3,4,5] // no it doesn't.
 
// But what if you need arrCopy to stay in-sync with arr? 
// Change the value of arr using setArray() instead:
setArray(arr, [3,4,5,6,7]);

console.log(arrCopy);
--> [3,4,5,6,7]; // Success!!
```