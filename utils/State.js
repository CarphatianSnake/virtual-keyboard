class State {
  constructor(init = null) {
    this.value = init;
  }

  get get() {
    return this.value;
  }

  set(value) {
    this.value = value;
  }
}

export default State;
