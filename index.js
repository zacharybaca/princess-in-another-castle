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
        namePicked = readline.question('Please Enter Mario or Luigi as Your Name: ').toLowerCase();
        if (namePicked === "mario" || namePicked === "luigi") {
            this.name = namePicked;
        }
        else {
            console.log('You Have Entered an Invalid Name, Please Choose Mario or Luigi: ');
            this.setName(namePicked);
        }
    }
}