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
}

// const btree=new BinaryTree()
// btree.insertData(10)
// btree.insertData(20)
// btree.insertData(30)
// btree.insertData(40)
// btree.dfs()
// console.log(btree.height())
