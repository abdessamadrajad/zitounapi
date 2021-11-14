class State {
    constructor(ready,processing,shipped,none) {
        this.ready = ready;
        this.processing = processing;
        this.shipped = shipped;
        this.none = none;
    }
}

module.exports = State;