function selectSort(arr) {
  if (arr.length <= 1) return arr;
  
  for (let i = 0; i < arr.length; i++) {
    //假设第一个是最小的
    let index = i;
    //寻找最小的元素的下标
    for (let j = i + 1; j < arr.length; j++)
      if (arr[j] < arr[index]) index = j;
    //交换
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [4, 6, 1, 7, 8, 1, 6, 9, 0];
const newArr = selectSort(arr);
console.log(newArr);
