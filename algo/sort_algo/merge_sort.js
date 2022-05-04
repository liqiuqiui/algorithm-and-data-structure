function mergeSort(arr) {
  const len = arr.length;
  //递归退出条件：数组长度小于2
  if (len < 2) return arr;
  
  //获取数组的中间位置
  const middle = Math.floor(len / 2);
  //从中间位置将数组分为两半
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  //合并这两个数组已排好序的数组
  return merge(mergeSort(left), mergeSort(right));
}

//合并两个有序数组的函数
function merge(arr1, arr2) {
  const resArr = [];
  let i = 0, j = 0;
  
  //循环合并数组，直到有一个为空
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j])
      resArr.push(arr1[i++]);
    else
      resArr.push(arr2[j++]);
  }
  //最后看哪个数组还有剩余元素
  if (i < arr1.length)
    resArr.push(...arr1.slice(i));
  
  if (j < arr2.length)
    resArr.push(...arr2.slice(j));
  
  return resArr;
}

const arr = [4, 5, 1, 7, 8, 19, 6, 9, 0];
const newArr = mergeSort(arr);
console.log(...newArr);
