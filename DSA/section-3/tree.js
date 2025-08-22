////////////////////////////////////////////////////////////////////
///GENERAL TREE
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class GeneralTree {
  constructor(data) {
    this.root = new Node(data);
  }
  addData(parent, data) {
    const parentNode = this.search(parent);
    if (parentNode) {
      parentNode.children.push(new Node(data));
    } else {
      console.log('No parent found');
    }
  }

  search(parent, root = this.root) {
    if (root.data == parent) {
      return root;
    }
    for (const n of root.children) {
      const found = this.search(parent, n);
      if (found) {
        return found;
      }
    }
    return null;
  }

  dfs(node = this.root) {
    console.log(node.data);
    for (const n of node.children) {
      this.dfs(n);
    }
  }
}
// const gtree = new GeneralTree(50);
// gtree.addData(50, 10);
// gtree.addData(50, 20);
// gtree.addData(50, 30);
// gtree.addData(20, 40);
// gtree.addData(30, 60);
// gtree.addData(30, 80);
// gtree.dfs();
// console.log(gtree);

/////////////////////////////////////////////////////////////////
/////BINARY TREE

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertData(data) {
    const newNode = new Node(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];

    while (queue) {
      let current = queue.shift();

      if (!current.left) {
        current.left = newNode;
        break;
      } else {
        queue.push(current.left);
      }

      ///////////////
      if (!current.right) {
        current.right = newNode;
        break;
      } else {
        queue.push(current.right);
      }
    }
  }
  dfs(node = this.root) {
    if (!node) {
      return;
    }
    this.dfs(node.left);
    console.log(node.data);
    this.dfs(node.right);
  }

  height(root = this.root) {
    if (!root) {
      return -1;
    }
    const left = this.height(root.left);
    const right = this.height(root.right);

    return Math.max(left, right) + 1;
  }
  isBalancedOrNot(root = this.root) {
    if (!root) return true;
    const left = this.height(root.left);
    const right = this.height(root.right);

    if (Math.abs(left - right) > 1) return false;

    return this.isBalancedOrNot(root.left) && this.isBalancedOrNot(root.right);
  }
}

// const btree=new BinaryTree()
// btree.insertData(10)
// btree.insertData(20)
// btree.insertData(30)
// btree.insertData(40)
// btree.dfs()
// console.log(btree.height())

////////////////////////////////////////////////////////////////////////
/////
class Bnode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insertData(data) {
    const newNode = new Bnode(data);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    insert(newNode, this.root);

    function insert(newNode, root) {
      if (root.data > newNode.data) {
        if (!root.left) {
          root.left = newNode;
          return;
        } else {
          insert(newNode, root.left);
        }
      } else {
        if (!root.right) {
          root.right = newNode;
          return;
        } else {
          insert(newNode, root.right);
        }
      }
    }
  }

  search(data, root = this.root) {
    if (!root) return false;
    if (root.data == data) return true;
    if (data < root.data) {
      return this.search(data, root.left);
    } else {
      return this.search(data, root.right);
    }
  }

  preOrder(root = this.root) {
    if (!root) return;
    console.log(root.data);
    this.preOrder(root.left);
    this.preOrder(root.right);
  }
  levelOrder() {
    if (!this.root) return;
    const queue = [this.root];
    while (queue.length) {
      let current = queue.shift();
      console.log(current.data);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  min(root = this.root) {
    if (!root) return;
    if (!root.left) return root.data;
    return this.min(root.left);
  }
  max(root = this.root) {
    if (!root) return;
    if (!root.right) return root.data;
    return this.max(root.right);
  }

  delete(data) {
    this.root = this.deleteNode(data, this.root);
  }

  deleteNode(data, root) {
    if (!root) {
      return root;
    }

    if (data < root.data) {
      root.left = this.deleteNode(data, root.left);
    } else if (data > root.data) {
      root.right = this.deleteNode(data, root.right);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      } else {
        let minData = this.min(root.right);
        root.data = minData;
        root.right = this.deleteNode(minData, root.right);
      }
    }
  }

  findClosest(target, root = this.root, closest = this.root.data) {
    if (!root) return closest;
    if (Math.abs(target - root.data) < Math.abs(target - closest)) {
      closest = root.data;
    }
    if (target < root.data) {
      return this.findClosest(target, root.left, closest);
    } else if (target > root.data) {
      return this.findClosest(target, root.right, closest);
    } else {
      return closest;
    }
  }
  isBst(root = this.root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.data <= min && root.data >= max) return false;
    return (
      this.isBst(root.left, min, root.data) &&
      this.isBst(root.right, root.data, max)
    );
  }
  findKthSmallest(k, root = this.root) {
    if (!root) return;
    let ans = 0;
    inOrder(root);
    return ans;

    function inOrder(root) {
      if (!root) return;
      inOrder(root.left);
      k--;
      if (k == 0) {
        ans = root.data;
      }
      inOrder(root.right);
    }
  }
}

const bst = new BST();
bst.insertData(10);
bst.insertData(20);
bst.insertData(4);
bst.insertData(6);
bst.insertData(9);
bst.insertData(23);
bst.insertData(1);

console.log(bst.findClosest(108));
