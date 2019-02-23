/****
 This assigns a new value to an array without breaking its memory reference.
 It's a much better alternative to doing this...

 array = newArray;

 ...which would break the memory reference.
 ****/
export declare function setArray(array: any[], newArray: any[]): void;
