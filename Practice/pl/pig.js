"use strict"

function createpiglatinword(word) {

    word = word.toLowerCase();
    word = word.split("");
    // let output = "";

    if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
        return (word.join("") + "yay");
    }

    for (let i = 0; i < word.length; i++) {
        if (word[0] == "a" || word[0] == "e" || word[0] == "i" || word[0] == "o" || word[0] == "u"){
            return (word.join("") + "ay")
        } else {
            let temp = word.shift();
            word.push(temp);
        }
    }
}

// console.log(createpiglatinword("jump"));


function createPigLatinSentence(string) {
    string = string.split(" ");
    for (let i = 0; i < string.length; i++) {
        string[i] = createpiglatinword(string[i]);
    }
    return string.join(" ");
}

console.log(createPigLatinSentence("whats going on my fellow teens"))