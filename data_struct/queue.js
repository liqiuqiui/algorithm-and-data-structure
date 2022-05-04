class Queue {
  queue = []
  constructor() { }
  deQueue(value) {
    // if (this.isEmpty())
    //   return undefined
    return this.queue.shift(value)
  }
  /**
   * 入队
   * @param {number} value 
   */
  enQueue(value) {
    this.queue.push(value)
  }
  isEmpty() {
    return this.queue.length === 0
  }
  size() { return this.queue.length }
  print() {
    this.queue.forEach(v=>console.log(v))
  }
}
// const queue = new Queue()
// queue.enQueue(1)
// queue.enQueue(5)
// queue.enQueue(3)
// queue.enQueue(2)
// queue.print()
module.exports = Queue