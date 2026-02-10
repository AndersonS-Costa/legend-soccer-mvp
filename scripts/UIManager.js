// UIManager.js

class UIManager {
    constructor() {
        this.elements = {};
    }

    addElement(id, element) {
        this.elements[id] = element;
    }

    removeElement(id) {
        delete this.elements[id];
    }

    getElement(id) {
        return this.elements[id];
    }

    showElement(id) {
        const element = this.getElement(id);
        if (element) {
            element.style.display = 'block';
        }
    }

    hideElement(id) {
        const element = this.getElement(id);
        if (element) {
            element.style.display = 'none';
        }
    }

    updateElement(id, properties) {
        const element = this.getElement(id);
        if (element) {
            Object.assign(element, properties);
        }
    }
}

// Example Initialization
// const uiManager = new UIManager();

