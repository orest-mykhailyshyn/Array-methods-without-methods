 * method join
 */
numbers.push = function(...elements) {
  for (const elem of elements) {
    this[this.length] = elem;
  }

  return this.length;
};

 * Implement method join
 */
[].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i < (this.length - 1)) {
        result += separator;
      }
    }

    return result;
  };
}

 * Implement method pop
 */
 numbers.pop = function() {
  if (this.length === 0) {
    return undefined;
  }

  const deletedObj = this[this.length - 1];

  this.length--;

  return deletedObj;
};

 * Implement method unshift
 */
 numbers.unshift = function(...elements) {
  for (let i = 0; i < this.length; i++) {
    elements[elements.length] = this[i];
  }

  for (let i = 0; i < elements.length; i++) {
    this[i] = elements[i];
  }

  return this.length;
};

* Implement method shift
 */
 numbers.shift = function() {
  if (this.length === 0) {
    return undefined;
  }

  const deletedElement = this[0];

  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }

  this.length--;

  return deletedElement;
};

* Implement method indexOf
 */
 numbers.indexOf = function(searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) {
    return -1;
  }

  for (let i = fromIndex; i < this.length; i++) {
    if (i < 0) {
      i += this.length;
    }

    if (this[i] === searchElement) {
      return i;
    }
  }

  return -1;
};

* Implement method includes
 */
 numbers.includes = function(searchElement, fromIndex = 0) {
  if (fromIndex >= this.length) {
    return false;
  }

  for (let i = fromIndex; i < this.length; i++) {
    if (i < 0) {
      i = this.length + i;
    }

    if (i < -this.length + 1) {
      i = 0;
    }

    if (searchElement === this[i]) {
      return true;
    }
  }

  return false;
};

* Implement method reverse
 */
 numbers.reverse = function() {
  for (let i = 0; i < this.length / 2; i++) {
    const item = this[i];

    this[i] = this[this.length - 1 - i];

    this[this.length - 1 - i] = item;
  }

  return this;
};

* Implement method slice
 */
 numbers.slice = function(begin = 0, end = this.length) {
  const result = [];
  let newEnd = end;
  let newBegin = begin;

  if (end > this.length) {
    newEnd = this.length;
  }

  if (end < 0) {
    newEnd = this.length + end;
  }

  if (begin < 0) {
    newBegin = this.length + begin;
  }

  if (begin > this.length) {
    return result;
  }

  // if (begin === 0 && end === 0) {
  //   return [...this];
  // }

  for (let i = newBegin; i < newEnd; i++) {
    if (i < -this.length + 1) {
      i = 0;
    }
    result[result.length] = this[i];
  }

  return result;
};
