// function sum(a, b,) {
//     let d = a > b;
//     return a;
// }
// let d = sum(4, 5);
// console.log(d)
// let a = prompt("enter your age", "age")
// if (a > 18) {
//     console.log("welcome to website")
// }
// else {
//     console.log("your not allowed")

// // }
// function displayTime() {
//     time = new Date();
//     // console.log(time);
//     document.getElementById('time').innerHTML = time
// }
// setInterval(displayTime, 1000);

// function greet() {

// }
togglemenu = () => {
    let ani = document.getElementById("ani");
    if (ani.style.display != "block") {
        ani.style.display = "block";
    }
    else {
        ani.style.display = "none";

    }

    console.log(ani)
}
let sinin = document.getElementById("signin");
let sinup = document.getElementById("signup");

sig2 = () => {
    addEventListener("click", () => {
        sinin.style.display = "block";
        sinup.style.display = "none";
    })
}
sig1 = () => {
    addEventListener("click", () => {
        sinup.style.display = "block";
        sinin.style.display = "none";
    })
    console.log(sinup);
}

function sign() {
    if (sinin.style.display != "block") {
        sinup.style.display = "none";
        sinin.style.display = "block";
    }
    // else if (sinin.style.display = "block")
    else {
        sinup.style.display = "block";
        sinin.style.display = "none";

    }
    console.log(sinin, sinup);
}
