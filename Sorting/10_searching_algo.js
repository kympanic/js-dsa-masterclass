// **************************** INTRO TO LINEAR SEARCH ****************************

/*
Linear Search Exercise
Write a function called linearSearch which accepts an array and a value, and returns the index at
which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

Examples:

linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1
*/

// const linearSearch = (arr, target) => {
// 	console.log("hello");
// 	for (let i = 0; i <= arr.length - 1; i++) {
// 		if (arr[i] === target) return i;
// 	}
// 	return -1;
// };

// console.log(linearSearch([100], 100));

// TIME COMPLEXITY: WORST IS O(N) --- BEST IS O(1)

// **************************** INTRO TO BINARY SEARCH ****************************
/*
 VERY FAST
 ONLY WORKS ON SORTED ARRAYS.
 ELIMINATE HALF OF THE DATA AT A TIME (DIVIDE AND CONQUER)
 PICK PIVOT IN THE MIDDLE AND CHECK LEFT OR RIGHT SIDE

TIME COMPLEXITY: Best case: O(1) Worst case: O(log n)

PSEUDOCODE FOR PROBLEM:

. ACCEPTS ARRAY AND TARGET VALUE
. CREATE LEFT POINTER AND RIGHT POINTER
. WHILE LEFT POINTER COMES BEFORE THE RIGHT POINTER
  . CREATE A POINTER IN THE MIDDLE
  . IF MIDDLEVALUE IS THE CORRECT ONE RETURN INDEX
  . IF VALUE IS TOO SMALL MOVE LEFT POINTER UP
  . IF VALUE IS TOO LARGE MOVE RIGHT POINTER DOWN
. RETURN -1 IF VALUE NOT IN CODE
*/

// function binarySearch(arr, targetVal) {
// 	let start = 0;
// 	let end = arr.length - 1;
// 	let mid = Math.floor((start + end) / 2);

// 	while (arr[mid] !== targetVal && start <= end) {
// 		if (targetVal < arr[mid]) {
// 			end = mid - 1;
// 		} else {
// 			start = mid + 1;
// 		}
// 		mid = Math.floor((start + end) / 2);
// 	}
// 	return arr[mid] === targetVal ? mid : -1;

// }

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1

// **************************** NAIVE STRING SEARCH ****************************

/* 
PSEUDOCODE
. LOOP OVER LONGER STRING
. LOOP OVER SHORTER STRING
. IF CHARS DONT MATCH, BREAK OUT OF THE INNER LOOP
. IF THE CHARS MATCH KEEP GOING
. IF YOU COMPLETE INNER LOOP AND FIND A MATCH INCREMENT THE COUNT OF MATCHES
*/

function counter(long, short) {
	let count = 0;
	for (let i = 0; i < long.length; i++) {
		for (let j = 0; j < short.length; j++) {
			if (short[j] !== long[i + j]) break;
			if (j === short.length - 1) count++;
		}
	}

	return count;
}

console.log(counter("goodgreatgoodgreatgoodgoodhi", "good"));
