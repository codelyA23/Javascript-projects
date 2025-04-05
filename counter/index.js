let number = document.getElementById('num');
let descrease = document.getElementById('desc');
let reset = document.getElementById('reset');
let increase = document.getElementById('inc');


descrease.onclick = function(){
    number.textContent = Number(number.textContent) - 1
}

reset.onclick = function(){
    number.textContent = 0
}

increase.onclick = function(){
    number.textContent = Number(number.textContent) + 1
}


// Another way could be like this
// const num = document.getElementById("num");
// const dec = document.getElementById("desc");
// const res = document.getElementById("reset");
// const inc = document.getElementById("inc");
// let count = 0;

// dec.onclick = function(){
//     count--
//     num.textContent = count
// }
// res.onclick = function(){
//     count = 0
//     num.textContent = count
// }
// inc.onclick = function(){
//     count++
//     num.textContent = count
// }



