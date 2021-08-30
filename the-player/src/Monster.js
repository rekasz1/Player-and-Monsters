import MoveHtmlElement from "./MoveHtmlElement";

const Direction = {
    Up: 'up',
    Down: 'down',
    Right: 'right',
    Left: 'left',
}

class Monster extends MoveHtmlElement {
    static STEP = 10;

    static create(type) {
        const imgMonster = document.createElement('img');
        imgMonster.src = `./assets/monster/monster${type}.svg`;
        imgMonster.style.width = '40px';

        return imgMonster
    }

    constructor(type) {
        super(Monster.STEP, Monster.create(type))
        this.type = type
        this.stepCount = 0;
        this.randomChangeDirectionStep = Math.floor(Math.random() * 20)
        this.currentDirection = this.getRandomDirection();
    }

    show(map, top, left) {
        this.htmlElement.style.top = top + 'px';
        this.htmlElement.style.left = left + 'px';
        map.append(this.htmlElement)

    }

    getRandomDirection() {
        const allDirections = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
        const allDirectionsWithoutCureentDirection = allDirections.filter((item) => {
            return item !== this.currentDirection;

        });

        const indexofAllDirections = Math.floor(Math.random() * allDirections.length)
        const direction = allDirections[indexofAllDirections]

        return direction;
    }

    run() {
        this.stepCount += 1;
        if (this.stepCount % this.randomChangeDirectionStep === 0) {
            this.currentDirection = this.getRandomDirection();
        }
        this.moveDirection()
    }

    moveDirection() {
        switch (this.currentDirection) {
            case Direction.Up:
                this.moveUp();
                break;
            case Direction.Down:
                this.moveDown();
                break;
            case Direction.Left:
                this.moveLeft();
                break;
            case Direction.Right:
                this.moveRight();
                break;
        }
    }


}

export default Monster;

