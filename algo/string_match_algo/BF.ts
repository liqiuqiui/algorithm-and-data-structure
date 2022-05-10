function bfMatch(master: string, pattern: string): boolean {
  let j = 0
  for (let i = 0; i < master.length - pattern.length; i++) {
    for (j = 0; j < pattern.length; j++)
      //如果当前位置不匹配，直接跳出，模式串向后滑动一位
      if (master[i + j] !== pattern[j])
        break
    //如果以上循环全部完成，则表示匹配到了完整字符串，返回true
    if (j == pattern.length)
      return true
  }
  return false
}

const res = bfMatch("hello world", "hell")
console.log(res);
