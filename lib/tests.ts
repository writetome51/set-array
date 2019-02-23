import { setArray} from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 4, 5];
let arrCopy = arr;


// Test 1: make sure both arrays remain in-sync:
setArray(arr, [3, 4, 5, 6, 7]);
if (arraysMatch(arrCopy, [3, 4, 5, 6, 7])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2: make sure both arrays remain in-sync when assigning a new array of objects:
setArray(arr, [{prop1: 1}, {prop1: 2}]);
if (arrCopy[0].prop1 && arrCopy[1].prop1) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: make sure both arrays remain in-sync when assigning empty array:
setArray(arr, []);
if (arrCopy.length === 0) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: make sure things work the other way around:
setArray(arrCopy, [1,2,3,4]);
if (arraysMatch(arr, [1,2,3,4])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: set to array of one item:
setArray(arr, [1]);
if (arraysMatch(arrCopy, [1])) console.log('test 5 passed');
else console.log('test 5 FAILED');



// Test 6: make sure error is triggered if either argument is not array:
let errorTriggered=false;
try{
	setArray({}, [1,2]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');