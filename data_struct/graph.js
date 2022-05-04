const Queue = require('./queue')
class Graph {
  //顶点个数
  v
  //邻接表数组
  adj
  constructor(v) {
    this.v = v
    this.adj = new Array(v)
    //填充邻接表数组
    for (let i = 0; i < this.adj.length; i++) {
      this.adj[i] = []
    }
    // this.adj.fill([])
  }

  //添加边
  addEdge(s, t) {
    this.adj[s].push(t)
    this.adj[t].push(s)
  }

  bfs(s, t) {
    //判断是否起点等于结果
    if (s === t) return
    // 一个记录节点是否访问过的数组
    const visited = new Array(this.v)
    visited.fill(false)

    //将起始顶点设置为已经访问
    visited[s] = true

    //一个用来记录待扫描的队列
    const queue = new Queue()
    queue.enQueue(s)

    //记录访问顶点
    const prev = new Array(this.v)
    prev.fill(-1)


    while (queue.size() !== 0) {
      //取出w顶点
      const w = queue.deQueue()
      //遍历w顶点的邻点
      for (let i = 0; i < this.adj[w].length; i++) {
        //取出邻点
        const q = this.adj[w][i]
        //判断是否被访问过
        if (!visited[q]) {
          //记录邻点的访问来源是w
          prev[q] = w
          //如果等于结果，打印路径
          if (q === t) {
            console.log(prev);

            this.print(prev, s, t)
            return
          }
          visited[q] = true
          queue.enQueue(q)
        }
      }
    }
  }

  static found = false

  dfs(s, t) {
    Graph.found = false
    //存放是否被访问过
    const visited = new Array(this.v)
    visited.fill(false)
    // 保存访问节点
    const prev = new Array(this.v)
    prev.fill(-1)
    //递归搜索
    this.recurseDfs(s, t, visited, prev)
    this.print(prev, s, t)
  }
  recurseDfs(w, t, visited, prev) {
    //退出递归
    if (Graph.found === true) return
    // 标记当前顶点已访问
    visited[w] = true
    //找到目标顶点，退出递归
    if (w === t) return Graph.found = true
    //访问w的邻接顶点
    for (let i = 0; i < this.adj[w].length; i++) {
      // 取出一个邻接顶点
      const q = this.adj[w][i]
      // 如果没有访问过，访问它
      if (!visited[q]) {
        prev[q] = w
        this.recurseDfs(q, t, visited, prev)
      }
    }
  }


  print(prev, s, t) {
    if (prev[t] !== -1 && t !== s)
      this.print(prev, s, prev[t])
    console.log(t, " ");
  }
  show() {
    console.log("顶点个数：", this.v);
    console.log("邻接表：", this.adj);
  }
}

const graph = new Graph(8)
graph.addEdge(0, 1)
graph.addEdge(0, 3)
graph.addEdge(1, 2)
graph.addEdge(1, 4)
graph.addEdge(3, 4)
graph.addEdge(2, 5)
graph.addEdge(4, 5)
graph.addEdge(4, 6)
graph.addEdge(5, 7)
graph.addEdge(6, 7)
graph.show()
// graph.bfs(0, 6)
graph.dfs(0, 6)
