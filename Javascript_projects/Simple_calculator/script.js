function topDisplay() {
    return document.getElementById("top-display").innerHTML;
}
function printInTopDisplay(content) {
    return document.getElementById("top-display").innerHTML = topDisplay() + content;
}
function clearTopDisplay() {
    return document.getElementById("top-display").innerHTML = "";
}
function bottomDisplay() {
    return document.getElementById("bottom-display").innerHTML;
}
function printInBottomDisplay(content) {
    return document.getElementById("bottom-display").innerHTML = content;
}
function clearBottomDisplay() {
    return document.getElementById("bottom-display").innerHTML = "";
}

let buttons = document.getElementsByTagName("button");
let operator = document.getElementsByClassName("operator");
let number = document.getElementsByClassName("number");
let ans;


for (item of buttons) {
    item.addEventListener('click', (f) => {
        btext = f.target.innerHTML;
        let result = bottomDisplay();
        if (btext == "DEL") {
            let topdisplay = topDisplay();
            clearTopDisplay();
            printInTopDisplay(topdisplay.slice(0, topdisplay.length - 1));
        } else if (btext == "x") {
            printInTopDisplay("*")
        } else if (btext == "AC") {
            ans = bottomDisplay();
            clearTopDisplay();
            clearBottomDisplay();
        } else if (btext == "=") {
            printInBottomDisplay(eval(topDisplay()));
            ans = bottomDisplay();
        } else if (btext == "Ans") {
            clearTopDisplay();
            printInTopDisplay(ans);
        } else if (btext == "x10x") {
            // printInTopDisplay(&upperarrow);
        } else {
            printInTopDisplay(btext);
        }

    })

}
