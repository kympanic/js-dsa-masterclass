// **************************** BUILT IN SORT METHOD ****************************

/*
Accepts an optional comparator function
Looks at pairs of elements (a and b) determines their sort order based on return value!
 - Return negative ? a should come before b
 - Return positive ? a should come after b
 - return 0? a and b are the same as far as the sort in concerned
*/

// **************************** BUBBLE SORT ****************************

/*
What it is: Largest values bubble up to the top
Compare two items and swap if one is larger than the other

TIME COMPLEXITY: Worst: O(N) Best: O(1) <- if almost sorted
*/

// Implementation before optimization

// function bubbleSort(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr.length; j++) {
// 			if (arr[j] > arr[j + 1]) {
// 				let temp = arr[j];
// 				arr[j] = arr[j + 1];
// 				arr[j + 1] = temp;
// 			}
// 		}
// 	}
// 	return arr;
// }

// Implementation AFTER optimization

function bubbleSort(arr) {
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
// More optimization if Array is already almost sorted
function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
				// let temp = arr[j];
				// arr[j] = arr[j + 1];
				// arr[j + 1] = temp;
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

console.log(bubbleSort([0, 1, 2, 6, 5]));
