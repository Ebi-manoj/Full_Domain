class Hashtable {
  constructor(size) {
    this.size = size;
    this.table = [];
  }

  hash(key) {
    let total = 0;
    for (const n of key) {
      total += n.charCodeAt();
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find(item => item[0] == key);
      if (sameKey) {
        return (sameKey[1] = value);
      }
      return bucket.push([key, value]);
    }
    this.table[index] = [[key, value]];
  }
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find(item => item[0] == key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined;
  }
  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKey = bucket.find(item => item[0] == key);
      if (sameKey) {
        bucket.splice(bucket.indexOf(sameKey), 1);
      }
    }
  }
  print() {
    for (const n of this.table) {
      n && n.length && console.log(n);
    }
  }
}

const hash = new Hashtable(50);
hash.set('name', 1);
hash.set('mane', 5);
hash.set('b', 2);
hash.set('c', 3);
hash.print();
