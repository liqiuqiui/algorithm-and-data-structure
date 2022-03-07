function bubbleSort(arr) {
  if (arr.length <= 1) return arr;
  
  for (let i = 0; i < arr.length - 1; i++) {
    let swapFlag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapFlag = true;
      }
    }
    if (!swapFlag) break;
  }
  return arr;
}

const arr = [4, 6, 1, 7, 8, 1, 6, 9, 0];
const newArr = bubbleSort(arr);
console.log(newArr);
