class HashMap {
  constructor() {
    this._storage = [];
  }

  hash(key) {
    const characters = Array.from(key);

    let value = 0;
    characters.forEach(e => {
      const eAscii = e.charCodeAt(0);
      value += parseInt(eAscii) % 16;
      return value;
    });

    return value;
  }

  set(key, value) {
    const hashValue = this.hash(key);

    if (!this._storage) {
      this._storage = [];
    }

    return (this._storage[hashValue] = { key, value });
  }
}

const testHash = new HashMap();
const testValue = testHash.hash('test');

console.log({ testValue });

module.exports = HashMap;
