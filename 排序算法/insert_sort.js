function insertSort(arr) {
  if (arr.length <= 1) return arr;
  
  //假设第一个元素已经有序
  for (let i = 1; i < arr.length; i++) {
    //取出待排序的元素
    let value = arr[i];
    //从待排序元素的上一个开始比较
    let j = i - 1;
    // 查找插入位置
    for (; j >= 0; j--) {
      /**
       *  将待排序元素和前面的已经有序的元素逐一比较，
       *  如果不大于待排序元素，则找到插入位置，否则向后移动
       */
      if (value < arr[j])
        arr[j + 1] = arr[j];
      else break;
    }
    //插入元素
    arr[j + 1] = value;
  }
  return arr;
}

const arr = [4, 6, 1, 7, 8, 1, 6, 9, 0];
const newArr = insertSort(arr);
console.log(newArr);
