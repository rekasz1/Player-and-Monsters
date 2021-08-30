

class Lives {

    playerLifes = 5;

    show() {
        const livesContainer = document.getElementById('lives-container')
        livesContainer.innerHTML = "";


        for (let index = 0; index < this.playerLifes; index++) {

            let imgLife = document.createElement('img');
            imgLife.src = './assets/lifes/heart.png';
            imgLife.style.width = '40px';
            imgLife.style.display = 'inline-block'
            livesContainer.append(imgLife);
            // console.log(this.playerLifes)
        }


    }

    countRemainigLives() {

        if (this.playerLifes > 0) {
            this.playerLifes--
            this.show();
        }

        console.log(this.playerLifes)
    }

}



export default Lives;