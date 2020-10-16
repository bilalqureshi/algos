// worst solution 
// because complexity is: O(n)

function linearSearch(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
}

linearSearch([1,2,3,4,5,6,7,8], 5)