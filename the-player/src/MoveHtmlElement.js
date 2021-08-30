class MoveHtmlElement {

    constructor(step, htmlElement) {
        this.step = step;
        this.htmlElement = htmlElement;
        this.htmlElement.style.position = "absolute";
        this.htmlElement.style.top = "0px"
        this.htmlElement.style.left = "0px"
    }

    static isInMap(top, left, step) {
        if (top >= 0 &&
            top <= 600 - step &&
            left >= 0 &&
            left <= 600 - step) {
            return true;
        }
        return false;
    }

    moveHtmlLogic(getNextTopAndLeft) {
        const top = parseInt(this.htmlElement.style.top, 10);
        const left = parseInt(this.htmlElement.style.left, 10);
        const { nextTop, nextLeft } = getNextTopAndLeft(top, left);
        if (MoveHtmlElement.isInMap(nextTop, nextLeft, this.step)) {
            this.htmlElement.style.top = nextTop + "px";
            this.htmlElement.style.left = nextLeft + "px";
        }

    }

    getCoordinates() {
        const top = parseInt(this.htmlElement.style.top, 10);
        const left = parseInt(this.htmlElement.style.left, 10);
        return {
            left: left,
            top: top,
        }
    }

    moveUp() {
        this.moveHtmlLogic((top, left) => {
            const nextTop = top - this.step;
            return {
                nextTop,
                nextLeft: left,
            }
        })
    }

    moveDown() {
        this.moveHtmlLogic((top, left) => {
            const nextTop = top + this.step;
            return {
                nextTop: nextTop,
                nextLeft: left,
            }
        })

    }

    moveLeft() {
        this.moveHtmlLogic((top, left) => {
            const nextLeft = left - this.step;
            return {
                nextTop: top,
                nextLeft,
            }
        })

    }

    moveRight() {
        this.moveHtmlLogic((top, left) => {
            const nextLeft = left + this.step;
            return {
                nextTop: top,
                nextLeft,
            }
        })

    }

}

export default MoveHtmlElement;