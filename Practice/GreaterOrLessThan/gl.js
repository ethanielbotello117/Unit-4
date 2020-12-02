// "use strict"

// let displaynum = Math.ceil(Math.random() * 100);
// console.log(displaynum);

// document.getElementById("displaynum").textContent = displaynum;

// let currentstreak = 0;
// let beststreak = 0;

// document.getElementById("currentstreak").textContent = currentstreak;
// document.getElementById("beststreak").textContent = beststreak;

// function check1() {
//     let newnum = Math.ceil(Math.random() * 100);
//     console.log(newnum);
//     document.getElementById("displaynum").textContent = newnum;

//     if (newnum > displaynum) {
//         currentstreak++
//     }else{
//         currentstreak--
//     }

//     if (currentstreak > beststreak) {
//         beststreak++
//     }

//     let displaynum = newnum.value
// }

// function check2() {
//     let newnum = Math.ceil(Math.random() * 100);
//     console.log(newnum);
//     document.getElementById("displaynum").textContent = newnum;

//     if (newnum < displaynum) {
//         currentstreak++
//     }else{
//         currentstreak--
//     }

//     if (currentstreak > beststreak) {
//         beststreak++
//     }

//     let displaynum = newnum.value
// }


"use strict"

let streak = 0;
let best = 0;
let currentNum = gen();

function gen(){
    let num = Math.ceil(Math.random()*100);
    document.getElementById("output").textContent = num;
    return num;
}

function check(input){
    let num = gen();
    if(input == '<'){
        if(num < currentNum){
            streak++;
            document.getElementById("streak").textContent = `Current streak = ${streak}`
        }else{
            lose();
        }
    }

    if(input == '>'){
        if(num > currentNum){
            streak++;
            document.getElementById("streak").textContent = `Current streak = ${streak}`
        }else{
            lose();
        }
    }

    currentNum = num;
}

function lose(){
    if (streak > best){
        best = streak;
        document.getElementById("best").textContent = `Best streak = ${best}`
    }

    streak = 0;
    Document.getElementById("streak").textContent = `Current streak = ${streak}`
}