class CapsLock {
  constructor() {
    this.value = false;
  }

  get get() {
    return this.value;
  }

  set set(value) {
    this.value = value;
  }
}

export default CapsLock;