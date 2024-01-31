const LinkedList = require('./linked-list.js');

class HashMap {
  constructor(initialCapacity = 16, _LOAD_FACTOR = 0.75) {
    this._LOAD_FACTOR = _LOAD_FACTOR;
    this._storage = new Array(initialCapacity);
    this._size = 0;
    this._capacity = initialCapacity;
  }

  _resize() {
    const oldStorage = this._storage;
    this._capacity *= 2;

    this._storage = new Array(this._capacity);
    this._size = 0;

    oldStorage.forEach(linkedList => {
      if (linkedList !== null) {
        let current = linkedList.head();
        while (current !== null) {
          this.set(current.key, current.value);
          current = current.nextNode;
        }
      }
    });
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      const eAscii = key.charCodeAt(i);
      hash += eAscii % this._capacity;
    }

    return hash;
  }

  set(key, value = undefined) {
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
      const nodeIndex = this._storage[index].find(key);
      if (nodeIndex !== null) {
        return this._storage[index].at(nodeIndex).value;
      }
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    const doesExist = this.has(key);

    if (doesExist) {
      const index = this.hash(key);
      const nodeIndex = this._storage[index].find(key);
      if (nodeIndex === 0) {
        this._storage[index].pop();
      } else if (nodeIndex !== null) {
        this._storage[index].at(nodeIndex - 1).nextNode =
          this._storage[index].at(nodeIndex).nextNode;
      }
      this._size--;
    }

    return doesExist;
  }

  length() {
    return this._size;
  }

  clear() {
    this._storage = new Array(this._capacity);
    this._size = 0;
  }

  keys() {
    const keyArray = [];
    this._storage.forEach(linkedList => {
      if (linkedList) {
        let current = linkedList.head();
        while (current !== null) {
          keyArray.push(current.key);
          current = current.nextNode;
        }
      }
    });
    return keyArray;
  }

  values() {
    const valuesArray = [];
    this._storage.forEach(linkedList => {
      if (linkedList) {
        let current = linkedList.head();
        while (current !== null) {
          valuesArray.push(current.value);
          current = current.nextNode;
        }
      }
    });
    return valuesArray;
  }

  entries() {
    const pair = [];
    this._storage.forEach(linkedList => {
      if (linkedList) {
        let current = linkedList.head();
        while (current !== null) {
          pair.push([current.key, current.value]);
          current = current.nextNode;
        }
      }
    });
    return pair;
  }
}

module.exports = HashMap;
