let button = document.getElementById("button");
let button2 = document.getElementById("dark");
let text = document.getElementById("text");
let body = document.body;

// Array of quotes
let quotes = [
    "It's much easier with God😊",
    "Without a sense of urgency, desire loses its value🤦",
    "Big motion or no motion🙌",
    "Coding it until it makes sense😉",
    "Just a young man tryin' to figure it all out🤷",
    "It's hard, try, no one said it's going to be easy✌",
    "And in case I don't see ya', good morning, good evening and good night😎"
];

// Add event listeners
button.addEventListener("click", clickMe);
button2.addEventListener("click", darkMode);

// Show random quote
function clickMe() {
    let changeText = Math.floor(Math.random() * quotes.length);
    text.style.display = "block";
    text.innerHTML = quotes[changeText];
}

// Dark mode toggle state
/*let isDark = false;

function darkMode() {
    isDark = !isDark; // Toggle state

    if (isDark) {
        body.style.backgroundColor = "rgba(70, 70, 75, 0.85)";
        text.style.color = "white";
        button.style.backgroundColor = "blue";
        button.style.color = "white";
        button2.style.backgroundColor = "blue";
        button2.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        text.style.color = "black";
        button.style.backgroundColor = "initial";
        button.style.color = "initial";
        button2.style.backgroundColor = "initial";
        button2.style.color = "initial";
    }
}
*/