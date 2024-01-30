class HashMap {
  constructor() {
    this._storage = [];
  }

  hash(key) {
    const modulo = 16; // should be change when the storage is full
    const characters = Array.from(key);

    let value = 0;
    characters.forEach(e => {
      const eAscii = e.charCodeAt(0);
      value += parseInt(eAscii) % modulo;
      return value;
    });

    return value;
  }

  set(key, value) {
    const hashValue = this.hash(key);

    if (!this._storage === 0) {
      this._storage = [];
    }

    return (this._storage[hashValue] = { key, value });
  }

  get(key) {
    const hashValue = this.hash(key);
    if (this._storage[hashValue]) {
      return this._storage[hashValue].value;
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
      const hashValue = this.hash(key);
      this._storage.splice(hashValue, 1);
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
}

const testHash = new HashMap();
const testValue = testHash.set('test');

console.log({ testValue });

module.exports = HashMap;
