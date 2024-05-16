/* Import Readline Module For User Input */
const readline = require('readline');


/* Create Player Class */
class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = String(name),
        this.totalCoins = Number(totalCoins),
        this.status = String(status),
        this.hasStar = Boolean(hasStar)
    }

    setName(namePicked) {
        /* If User Doesn't Pick Mario or Luigi as Their Name, They Will Get Prompted to Enter a Name Again */
        if (namePicked === "mario" || namePicked === "luigi") {
            this.name = namePicked;
        }
        else {
            console.log('You Have Entered an Invalid Name, Please Choose Mario or Luigi: ');
            this.setName(namePicked);
        }
    }

    gotHit() {
        /* Each Time a Player Gets Hit, Their Status Drops */
        if (this.status === "Powered Up") {
            this.status = "Big";
        }
        else if (this.status === "Big") {
            this.status = "Small";
        }
        else {
            this.status = "Dead";
        }
    }

    gotPowerUp() {
        /* When a Player Receives a Power Up, Their Status Will Go Up Accordingly */
        if (this.status === "Small") {
            this.status = "Big";
        }
        else if (this.status === "Big") {
            this.status = "Powered Up";
        }
        else {
            this.hasStar = true;
        }
    }

    addCoin() {
        this.totalCoins += 1;
    }

    print() {
        if (this.status === "Dead") {
            console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins After Death: ${this.totalCoins}`)
        }
        else if (this.hasStar === true) {
            console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins} \n You Have a Star!`)
        }
        else {
            console.log(`Name: ${this.name} \n Status: ${this.status} \n Total Coins: ${this.totalCoins}`)
        }
    }
}

const startGame = (namePicked) => {
    namePicked = readline.question('Please Enter Mario or Luigi as Your Name: ').toLowerCase();
    let player = new Player(namePicked, totalCoins = 0, level = "Small", hasStar = false);
}