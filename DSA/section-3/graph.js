class Graph {
  constructor() {
    this.adjacentList = {};
  }

  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.adjacentList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacentList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacentList[vertex1].push(vertex2);
    this.adjacentList[vertex2].push(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacentList[vertex]) return;
    while (this.adjacentList[vertex].length) {
      const c = this.adjacentList[vertex].pop();
      this.adjacentList[c] = this.adjacentList[c].filter(v => v != vertex);
    }
    delete this.adjacentList[vertex];
  }

  BFS(start) {
    const visited = new Set();
    visited.add(start);
    const queue = [start];
    const result = [];

    while (queue.length) {
      const vertex = queue.shift();
      result.push(vertex);
      for (const n of this.adjacentList[vertex]) {
        if (!visited.has(n)) {
          queue.push(n);
          visited.add(n);
        }
      }
    }
    return result;
  }
  DFS(start) {
    const visited = new Set();
    visited.add(start);
    const result = [];
    const stack = [start];
    while (stack.length) {
      const vertex = stack.pop();
      result.push(vertex);
      for (const n of this.adjacentList[vertex]) {
        if (!visited.has(n)) {
          visited.add(n);
          stack.push(n);
        }
      }
    }
    return result;
  }
}

const graph = new Graph();
graph.addEdges('A', 'B');
graph.addEdges('B', 'C');
graph.addEdges('B', 'D');
graph.addEdges('A', 'D');

console.log(graph.BFS('A'));
console.log(graph.DFS('A'));
