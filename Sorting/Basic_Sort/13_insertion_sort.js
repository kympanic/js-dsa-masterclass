// Builds up the sort by gradually creating a larger left half which is always sorted

/*
[5,3,4,1,2]
   -
[3,5,4,1,2]
     -
[3,4,5,1,2]
       -
[1,3,4,5,2]
         -
[1,2,3,4,5]
*/

/* PSEUDOCODE IMPLEMENTATION
. Start by picking the second element in arr
. compare second with the one before and swap if necessary
. continue to the next element and if it is incorrect order, iterate through the sorted portion
  to place element in correct place

*/

// function insertionSort(arr) {
// 	let currentVal;
// 	for (let i = 1; i < arr.length; i++) {
// 		currentVal = arr[i];
// 		for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
// 			arr[j + 1] = arr[j];
// 		}
// 		arr[j + 1] = currentVal;
// 	}
// 	return arr;
// }

function insertionSort(arr) {
	var currentVal;
	for (var i = 1; i < arr.length; i++) {
		currentVal = arr[i];
		for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
			console.log(arr);
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = currentVal;
	}
	return arr;
}
insertionSort([2, 1, 9, 76, 4]);

// Time complexity O(n)^2 <- Worst Case
// Good with data coming in live.
