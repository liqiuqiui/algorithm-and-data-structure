function bubbleSort(arr) {
  if (arr.length <= 1) return arr;
  
  for (let i = 0; i < arr.length - 1; i++) {
    let swapFlag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        swapFlag = true;
        console.log("交换")
      }
    }
    if (!swapFlag) break;
  }
  return arr;
}

const arr = [4, 6, 1, 7, 8, 1, 6, 9, 0];
const newArr = bubbleSort(arr);
console.log(newArr);
