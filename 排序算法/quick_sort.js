let count = 0;
function quicksort(arr, left, right) {
  const len = arr.length;
  left = typeof left === "number" ? left : 0;
  right = typeof right === "number" ? right : len - 1;
  
  if (left < right) {
    //寻找基准点
    const partitionIndex = partition(arr, left, right);
    //排序基准点左边的
    quicksort(arr, left, partitionIndex - 1);
    //排序基准点右边的
    quicksort(arr, partitionIndex + 1, right);
  }
}

function partition(arr, left, right) {
  //最左边的作为分区基准点
  const pivot = left;
  let index = pivot + 1;
  //从基准点右边开始循环比较
  for (let i = index; i <= right; i++) {
    //如果币基准点的数小，则放到基准点的右边
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  //最后把基准点和最后一个比基准点小的数交换一下位置，这样，左边就都是比基准点小的，右边都是比基准点大的
  swap(arr, pivot, index - 1)
  //返回这个基准点
  return pivot;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [4, 5, 1, 7, 8, 19, 6, 9, 0];
quicksort(arr);
console.log(...arr);
