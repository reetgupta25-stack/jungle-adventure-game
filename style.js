const container = document.createElement("div");
container.className = "container";
const heading = document.createElement("h1");
heading.innerText = "🌴 Jungle Adventure Game";
const story = document.createElement("p");
story.className = "story";
const stats = document.createElement("div");
stats.className = "stats";
const buttons = document.createElement("div");
buttons.className = "buttons";
container.append(heading, stats, story, buttons);
document.body.appendChild(container);
let playerName = "";
let health = 100;
let score = 0;
let escaped = false;
let gameOver = false;
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial";
document.body.style.background =
"linear-gradient(to right, #021b1b, #063d3d)";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.minHeight = "100vh";
container.style.width = "90%";
container.style.maxWidth = "500px";
container.style.background = "rgba(255,255,255,0.1)";
container.style.backdropFilter = "blur(10px)";
container.style.padding = "30px";
container.style.borderRadius = "20px";
container.style.color = "white";
container.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
container.style.textAlign = "center";
heading.style.marginBottom = "20px";
heading.style.color = "#00ff95";
stats.style.marginBottom = "20px";
stats.style.fontSize = "18px";
story.style.fontSize = "18px";
story.style.minHeight = "80px";
story.style.marginBottom = "20px";
buttons.style.display = "flex";
buttons.style.flexDirection = "column";
buttons.style.gap = "10px";
function updateStats() {
    stats.innerHTML = `
        ❤️ Health: ${health} <br>
        ⭐ Score: ${score}
    `;
}
function createButton(text, callback) {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.style.padding = "12px";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.background = "#00ff95";
    btn.style.color = "black";
    btn.style.fontWeight = "bold";
    btn.style.cursor = "pointer";
    btn.style.transition = "0.3s";
    btn.onmouseover = () => {
        btn.style.transform = "scale(1.05)";
    };
    btn.onmouseout = () => {
        btn.style.transform = "scale(1)";
    };
    btn.onclick = callback;
    buttons.appendChild(btn);
}
function startGame() {
    playerName = prompt("Enter your name:");
    story.innerText =
    `Welcome ${playerName}! You are lost in a dangerous jungle 🌲`;
    updateStats();
   firstChoice();
}
function clearButtons() {
   buttons.innerHTML = "";
}
function firstChoice() {
    clearButtons();
    story.innerText =
    "Choose your action:";
    createButton("🍍 Find Food", () => {
        health += 20;
        score += 10;
        story.innerText = "You found food and gained energy 🍍";
        updateStats();
        secondChoice();
    });
    createButton("🌲 Explore", () => {
        let event = Math.floor(Math.random() * 3);
        if (event === 0) {
            health -= 30;
            story.innerText = "Snake attack 🐍";
        }
        else if (event === 1) {
            health += 20;
            story.innerText = "You found clean water 🌊";
        }
        else {
            story.innerText = "Nothing happened 😶";
        }
        updateStats();
        secondChoice();
    });
    createButton("😴 Rest", () => {
        health += 10;
        story.innerText = "You took rest and recovered 😴";
        updateStats();
        secondChoice();
    });
}
function secondChoice() {
    if (health <= 0) {
        endGame("💀 Game Over");
        return;
    }
    clearButtons();
    story.innerText =
    "You found a river. What will you do?";
    createButton("💧 Drink Water", () => {
        health += 15;
        updateStats();
        thirdChoice();
    });
    createButton("🚶 Ignore River", () => {
        thirdChoice();
    });
    createButton("🏃 Follow River", () => {
        let luck = Math.random();
        if (luck > 0.5) {
            escaped = true;
            endGame("🎉 You Escaped!");
        }
        else {
            story.innerText =
            "The river path was dangerous 😬";
            thirdChoice();
        }
    });
}
function thirdChoice() {
    clearButtons();
    story.innerText =
    "A wild animal appears 🐅";
    createButton("🏃 Run", () => {
        health -= 10;
        updateStats();
        checkGame();
    });
    createButton("🪵 Hide", () => {
        score += 5;
        updateStats();
        story.innerText =
        "You hid safely 🌴";
        checkGame();
    });
    createButton("⚔️ Fight", () => {
        let fight = Math.random();
        if (fight > 0.5) {
            score += 15;
            story.innerText =
           "You won the fight 💪";
        }
        else {
            health -= 30;
            story.innerText =
            "You lost the fight 😢";
        }
        updateStats();
        checkGame();
    });
}
function checkGame() {
    if (health <= 0) {
        endGame("💀 Game Over");
    }
    else {
        endGame("🌴 You Survived!");
    }
}
function endGame(message) {
    clearButtons();
    story.innerHTML = `
        ${message} <br><br>
        ❤️ Final Health: ${health} <br>
        ⭐ Final Score: ${score}
    `;
    createButton("🔄 Play Again", () => {
        health = 100;
        score = 0;
        escaped = false;
        gameOver = false;
        startGame();
    });

}





startGame();
