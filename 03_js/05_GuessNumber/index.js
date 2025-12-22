let output = document.getElementById("output");
let submit = document.getElementById("submit");

const max = 100;
const min = 1;
const ans = Math.floor(Math.random() * (max - min + 1)) + min;

submit.onclick = function() {
    let guess = Number(document.getElementById("userInput").value);

    if (isNaN(guess)) {
        output.textContent = "Not Valid!!!";
        return;
    }

    if (guess > max || guess < min) {
        output.textContent = "Not Valid!!!";
        return;
    }

    if (guess > ans) {
        output.textContent = "Lil boy calm down a little, guess lower.";
    } else if (guess < ans) {
        output.textContent = "Lil boy grow up a little, guess higher.";
    } else {
        output.textContent = "YES BOY !!! YOU GUESSED IT RIGHT!!!";
    }
}
