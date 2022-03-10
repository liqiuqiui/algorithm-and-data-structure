function countingSort(arr) {
  
  //找最大的数
  let max = 0;
  for (let i = 0; i < arr.length; i++)
    if (arr[i] > max) max = arr[i];
  
  //申请一个计数数组，用数值做下标，值为这个数值的个数
  const countArr = new Array(max + 1);
  countArr.fill(0)
  //统计arr数组中每个元素的个数，存储在计数数组中
  for (let i = 0; i < arr.length; i++)
    countArr[arr[i]]++;
  
  //扫描整个计数数组，让他的每一个元素存储的都是他前面的小于等于他的元素的个数（这里存的就是元素的位置）
  for (let i = 1; i < countArr.length; i++)
    countArr[i] = countArr[i - 1] + countArr[i];
  
  //申请一个存放排好序的元素的数组
  const resArr = new Array(arr.length);
  //遍历待排序的数组，
  //从尾部开始遍历，保证排序算法的稳定性
  for (let i = arr.length-1; i >= 0; i--) {
    //取出每一个元素应该存放的位置
    const index = countArr[arr[i]] - 1;
    resArr[index] = arr[i];
    //存放了一个之后，位置应该 -1，下一个相同的元素应该存放在他前面
    countArr[arr[i]]--;
  }
  
  return resArr;
}

const arr = [4, 5, 1, 7, 8, 1, 6, 9, 0];
const newArr = countingSort(arr);
console.log(...newArr);
