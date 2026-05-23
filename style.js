let playAgain = "yes";

while (playAgain === "yes") {

    let name = prompt("Enter your Name:");
    let health = 100;
    let score = 0;
    let gameOver = false;
    let escaped = false;

    alert("Welcome " + name + "! You are lost in a jungle 🌲");

    
    let choice1 = Number(prompt("Choose:\n1. Food\n2. Explore\n3. Rest"));

    if (choice1 === 1) {
        health += 20;
        score += 10;
        alert("You found food 🍍");
    } 
    else if (choice1 === 2) {
        let event = Math.floor(Math.random() * 3);

        if (event === 0) {
            health -= 30;
            alert("Snake attack 🐍");
        } 
        else if (event === 1) {
            health += 20;
            alert("Found water 🌊");
        } 
        else {
            alert("Nothing happened 😶");
        }
    } 
    else if (choice1 === 3) {
        health += 10;
        alert("You rested 😴");
    }

    
    if (health <= 0) {
        gameOver = true;
    } 
    else {

        // Second Choice
        let choice2 = Number(prompt("River:\n1. Drink\n2. Ignore\n3. Follow"));

        if (choice2 === 1) {
            health += 15;
        } 
        else if (choice2 === 3) {
            let luck = Math.random();

            if (luck > 0.5) {
                alert("You escaped 🎉");
                escaped = true;
            }
        }

        
        if (!escaped) {

            let choice3 = Number(prompt("Danger:\n1. Run\n2. Hide\n3. Fight"));

            if (choice3 === 1) {
                health -= 10;
            } 
            else if (choice3 === 2) {
                score += 5;
                alert("You hid safely");
            } 
            else if (choice3 === 3) {
                let fight = Math.random();

                if (fight > 0.5) {
                    score += 15;
                    alert("You win the fight 💪");
                } else {
                    health -= 30;
                    alert("You lose the fight 😢");
                }
            }
        }
    }

    
    if (health <= 0) {
        gameOver = true;
    }

    console.log(".....Result.....");
    console.log("Name:", name);
    console.log("Health:", health);
    console.log("Score:", score);

    if (escaped) {
        console.log("Result: Escaped 🎉");
    } 
    else if (!gameOver) {
        console.log("Result: Survived 🌴");
    } 
    else {
        console.log("Result: Game Over 💀");
    }

    playAgain = prompt("Do you want to play again? yes/no");
}

console.log("Thanks for playing ❤️");