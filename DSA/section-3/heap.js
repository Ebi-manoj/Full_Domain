class Heap {
  constructor() {
    this.heap = [];
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  insert(data) {
    this.heap.push(data);
    this.upHeap(this.heap.length - 1);
  }

  upHeap(index) {
    if (index == 0) return;
    const parentIndex = this.getParent(index);
    if (this.heap[index] < this.heap[parentIndex]) {
      this.swap(index, parentIndex);
      this.upHeap(parentIndex);
    }
  }

  remove() {
    if (this.heap.length == 0) return;
    if (this.heap.length == 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.downHeap(0);
    return top;
  }

  downHeap(index) {
    let min = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

    if (left && this.heap[left] < this.heap[min]) {
      min = left;
    }
    if (right && this.heap[right] < this.heap[min]) {
      min = right;
    }
    if (min != index) {
      this.swap(min, index);
      this.downHeap(min);
    }
  }

  getParent(index) {
    return Math.floor((index - 1) / 2);
  }
  heapSort() {
    let ans = [];
    while (this.heap.length) {
      ans.push(this.remove());
    }
    return ans;
  }
}

const minHeap = new Heap();
minHeap.insert(10);
minHeap.insert(7);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(1);
minHeap.insert(2);

console.log(minHeap.heapSort());
