class Node {
  constructor(key = null, value = null) {
    this.key = key;
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(value = null) {
    this._head = new Node(value);
  }

  append(key, value) {
    const newNode = new Node(key, value);

    if (!this._head) {
      this._head = newNode;
      return;
    }

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(key, value) {
    const newNode = new Node(key, value);
    const currentHead = this._head;

    if (currentHead.value !== null) {
      newNode.nextNode = currentHead;
    }

    this._head = newNode;
  }

  size() {
    let count = 0;
    let current = this._head;

    while (current !== null) {
      if (current.value !== null) {
        count += 1;
      }
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this._head;
  }

  tail() {
    let current = this._head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    if (index < 0 || index >= this.size()) {
      return null;
    }

    let current = this._head;

    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }

    return current.value;
  }

  pop() {
    if (!this._head.nextNode) {
      this._head.value = null;
      return;
    }

    let current = this._head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }

    previous.nextNode = null;
  }

  contains(key) {
    let current = this._head;

    while (current !== null) {
      if (current.key === key) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  find(key = undefined, value = undefined) {
    let current = this._head;
    let index = 0;

    while (current !== null) {
      if (
        (key === undefined || current.key === key) &&
        (value === undefined || current.value === value)
      ) {
        return index;
      }
      current = current.nextNode;
      index += 1;
    }

    return null;
  }

  toString() {
    let current = this._head;
    let result = '';

    while (current.nextNode !== null) {
      if (current.value !== null) {
        result += `${current.value} -> `;
      }
      current = current.nextNode;
    }

    return result.slice(0, -4);
  }
}

const list = new LinkedList();
list.append('dsfhkl');
list.append(3);

const find = [list.find('dsfhkl'), list.find(3), list.find(4)];
list.toString();

console.log(find);

module.exports = LinkedList;
