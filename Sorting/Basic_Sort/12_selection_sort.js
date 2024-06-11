// Similar to bubblesort, but instead places small values into sorted position
// Loop through the values. Find the smallest value by comparing and then swapping to beginning

/*
PseudoCODE
    . store smallest value.First item in array
    . compare to next item and then store to min.
    . we save index of the smallest value NOT THE VALUE ITSELF
    . if the min is not the value index you initially began with, swap the two values.
*/

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
	}

	return arr;
};

console.log(selectionSort([5, 2, 4, 19, 1, 29, 53, 21, 10, 3]));

// TIME COMPLEXITY O(n)^2
// BETTER THAN BUBBLESORT WHERE SELECTION SWAP LESS BY ONLY SWAPPING AT THE END.
