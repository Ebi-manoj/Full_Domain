class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    current.endOfWord = true;
  }
  search(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return current.endOfWord;
  }

  autoCompletion(prefix) {
    let current = this.root;
    for (const char of prefix) {
      if (!current.children[char]) return [];
      current = current.children[char];
    }

    const result = [];
    this.dfs(current, prefix, result);
    return result;
  }
  dfs(node, path, result) {
    if (node.endOfWord) {
      result.push(path);
    }
    for (const char in node.children) {
      this.dfs(node.children[char], path + char, result);
    }
  }
}

const trie = new Trie();
trie.insert('app');
trie.insert('apple');
trie.insert('apollo');
trie.insert('application');

console.log(trie.autoCompletion('apop'));
