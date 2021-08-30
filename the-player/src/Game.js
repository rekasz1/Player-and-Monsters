import Player from "./Player";
import Monster from "./Monster";
import Lives from "./Lives";

class Game {

    static getRandomTopAndLeft() {
        const mapPositions = Game.getMapPositions();
        const randomIndexTop = Math.floor(Math.random() * mapPositions.length)
        const randomIndexLeft = Math.floor(Math.random() * mapPositions.length)
        const top = mapPositions[randomIndexTop];
        const left = mapPositions[randomIndexLeft];

        return {
            top,
            left
        }
    }


    static getMapPositions() {
        let array = [];
        for (let j = 0; j <= 360; j = j + 40) {
            array.push(j);
        }
        return array
    }

    constructor(map) {
        this.map = map;
        this.player = new Player();
        this.life = new Lives();
        this.monsterList = [];
        const monsterTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        for (let index = 0; index < monsterTypes.length; index++) {
            this.monsterList.push(new Monster(monsterTypes[index]))
        }
    }




    showAllMonsters() {
        this.monsterList.forEach(monster => {
            const { top, left } = Game.getRandomTopAndLeft();
            monster.show(this.map, top, left)
        })
    }
    registerMovementPlayer() {
        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    this.player.moveUp()
                    break;
                case "ArrowDown":
                    this.player.moveDown()
                    break;
                case "ArrowLeft":
                    this.player.moveLeft()
                    break;
                case "ArrowRight":
                    this.player.moveRight()
                    break;
                default:
            }

        });
    }

    monstersStart() {
        let gameIntervalId = setInterval(() => {
            this.monsterList.forEach(monster => {
                monster.run()
            });
            if (this.isplayerIntersectWithMonster()) {
                this.life.countRemainigLives()


                if (this.life.playerLifes > 0) {
                    alert("You've lost a life! You have left: " + this.life.playerLifes + " lives")
                } else {
                    alert('Game over')
                    clearInterval(gameIntervalId)
                }

            }

        }, 300)

    }

    isplayerIntersectWithMonster() {
        const playerCoordinates = this.player.getCoordinates()
        const monstersCoordinates = this.monsterList.map(monster => {
            return monster.getCoordinates();
        });

        const isIntersect = monstersCoordinates.some(monsterCoords => {
            if (monsterCoords.top === playerCoordinates.top &&
                monsterCoords.left === playerCoordinates.left) {
                return true;
            }
            return false
        })
        return isIntersect;
    }

    start() {
        this.player.show(this.map)
        this.showAllMonsters();
        this.registerMovementPlayer();
        this.monstersStart();
        this.life.show();

    }
}


export default Game;
