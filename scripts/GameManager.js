class GameManager {
    constructor() {
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
    }

    getState() {
        return this.state;
    }

    resetState() {
        this.state = {};
    }
}

export default GameManager;