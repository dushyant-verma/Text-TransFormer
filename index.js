function toUpperCase() {


    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.toUpperCase();
}

function toLowerCase() {

    let inputText = document.getElementById('inputText').value;
    document.getElementById('outputText').innerText = inputText.toLowerCase();

}

function toCapitalize() {
    let inputText = document.getElementById('inputText').value;
    let words = inputText.split(' ');

    for(let i = 0; i < words.length; i++){

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
document.getElementById('outputText').innerText = words.join(' ');



}