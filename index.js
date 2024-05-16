const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Player {
    constructor(name = null, totalCoins = 0, status = "Small", hasStar = false) {
        this.name = String(name);
        this.totalCoins = Number(totalCoins);
        this.status = String(status);
        this.hasStar = Boolean(hasStar);
    }

    setName(chosenName) {
        this.name = chosenName;
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else {
            this.status = "Dead";
        }
    }

    gotPowerUp() {
        if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        } else {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        if (this.status === "Dead") {
            console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total Coins After Death: ${this.totalCoins}`);
        } else if (this.hasStar === true) {
            console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total Coins: ${this.totalCoins}\n You Have a Star!`);
        } else {
            console.log(`\n Name: ${this.name}\n Status: ${this.status}\n Total Coins: ${this.totalCoins}`);
        }
    }
}

const startGame = () => {
    let intervalID;
    const randomRange = (min = 0, max = 2) => Math.floor(Math.random() * (max - min + 1)) + min;
    let player;

    rl.question('Please Enter Mario or Luigi as Your Name: ', (nameEntered) => {
        if (nameEntered.toLowerCase() !== "mario" && nameEntered.toLowerCase() !== "luigi") {
            console.log("That is Not a Valid Name. Please Enter Mario or Luigi as Your Name");
            startGame();
        } else {
            player = new Player(nameEntered);
            console.log(`Your Chosen Name is: ${nameEntered}`);
            rl.close();
            gameLoop();
        }
    });

    const gameLoop = () => {
        intervalID = setInterval(() => {
            let randomNumber = randomRange();
            if (randomNumber === 0) {
                player.gotHit();
            } else if (randomNumber === 1) {
                player.gotPowerUp();
            } else {
                player.addCoin();
            }
            player.print();
            if (player.status === "Dead") {
                clearInterval(intervalID);
                console.log("\n Player is Dead. Game Over.");
            }
        }, 2000);
    };
};

startGame();
