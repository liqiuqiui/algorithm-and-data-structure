
class TrieNode {
  public data: string
  public children: TrieNode[]
  public isEndingChar: boolean
  public constructor(data: string) {
    this.data = data
    this.children = new Array<TrieNode>(26)
    this.isEndingChar = false
  }
}

class Trie {
  public root: TrieNode = new TrieNode('/')
  constructor() { }
  /**
   * 在trie树中插入字符串
   */
  public insert(text: string) {
    //第一个节点是根节点  
    let p: TrieNode = this.root

    for (let i = 0; i < text.length; i++) {
      // 通过ASCII计算该字符的下标
      let index = text[i].charCodeAt(0) - "a".charCodeAt(0)
      //如果这个位置没有字符，则插入
      if (p.children[index] == null) {
        let newNode: TrieNode = new TrieNode(text[i])
        p.children[index] = newNode
      }

      p = p.children[index]
    }
    p.isEndingChar = true
  }

  /**
   * 在trie树种查找字符串
   */
  public find(pattern: string) {
    let p: TrieNode = this.root
    //遍历这个字符串
    for (let i = 0; i < pattern.length; i++) {
      // 获取这个字符串在树中的索引位置
      const index: number = pattern[i].charCodeAt(0) - "a".charCodeAt(0)
      if (p.children[index] === null)
        return false //这个位置没有字符
      //继续向下层寻找
      p = p.children[index]
    }
    return p.isEndingChar
  }
}

const trie = new Trie()
trie.insert("her")
trie.insert("she")
trie.insert("her")
trie.insert("hello")
// console.log(JSON.stringify(trie.root))
console.log(trie.find("her") ? "找到了" : "没找到");


