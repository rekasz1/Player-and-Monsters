import MoveHtmlElement from "./MoveHtmlElement";

class Player extends MoveHtmlElement {

    static create() {
        const playerImg = document.createElement('img');
        playerImg.src = './assets/player/playerswords.png';
        playerImg.classList.add('player')
        playerImg.style.top = '200px';
        playerImg.style.left = '0px';

        return playerImg
    }

    constructor() {
        super(40, Player.create())
    }

    show(map) {
        map.append(this.htmlElement)
    }

}



export default Player;