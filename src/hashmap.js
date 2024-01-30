const LinkedList = require('./linked-list.js');

class HashMap {
  constructor(initialCapacity = 16, _LOAD_FACTOR = 0.75) {
    this._LOAD_FACTOR = _LOAD_FACTOR;
    this._storage = new Array(initialCapacity);
    this._size = 0;
    this._capacity = initialCapacity;
  }

  _resize() {}

  hash(key) {
    const characters = Array.from(key);

    let hash = 0;
    characters.forEach(e => {
      const eAscii = e.charCodeAt(0);
      hash += eAscii % this._capacity;
    });

    return hash;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this._storage[index]) {
      this._storage[index] = new LinkedList();
    }

    const existingNode = this._storage[index].find(key);
    if (existingNode !== null) {
      this._storage[index].at(existingNode).value = value;
    } else {
      this._storage[index].append(key, value);
      this._size++;

      if (this._size >= this._LOAD_FACTOR * this._capacity) {
        this._resize();
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    if (this._storage[index]) {
      return this._storage[index].value;
    } else {
      return null;
    }
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const doesExist = this.has(key);

    if (doesExist) {
      const index = this.hash(key);
      this._storage.splice(index, 1);
    }

    return doesExist;
  }

  length() {
    let count = 0;
    this._storage.forEach(e => {
      if (e.key !== null) {
        count += 1;
        return count;
      }
    });
    return count;
  }

  clear() {
    this._storage = [];
    this._size = 0;
  }

  keys() {
    const keyArray = [];
    this._storage.forEach(e => {
      if (e.key !== null) {
        keyArray.push(e.key);
      }
    });
    return keyArray;
  }
}

const testHash = new HashMap();
testHash.set('test');
const testValue = testHash.get('test');

console.log({ testValue });

module.exports = HashMap;
