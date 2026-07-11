let x = document.querySelector(".choose_x")
let o = document.querySelector(".choose_o")
let choose = document.querySelector(".choose")
let start = document.querySelector(".start")
let chosenSymbol = "X";
let notChosenSymbol = "O";
let nums = [];



// console.log(box1.innerHTML)


function Choose(symbl) {
    chosenSymbol = symbl
    start.innerHTML = `Start as ${symbl}`;
    start.style = "display:flex";
    choose.style = "display:none";
}

function clicked(num) {

    let box = document.querySelector(`.box${num}`);

    if (box.innerHTML !== "") {
        return;
    }
    if (start.innerHTML == "Start as X" || start.innerHTML == "Start as O") {
        let box = document.querySelector(`.box${num}`)
        box.innerHTML = `${chosenSymbol}`
        if (chosenSymbol === "O") {
            notChosenSymbol = "X"
        }
        // let random_box = Math.floor(Math.random() * 9) + 1

        // nums.push(num);
        // nums.push(random_box);
        let random_box;

        do {
            random_box = Math.floor(Math.random() * 9) + 1;
        } while (document.querySelector(`.box${random_box}`).innerHTML !== "");

        document.querySelector(`.box${random_box}`).innerHTML = notChosenSymbol;
    }
    let box1 = document.querySelector(".box1").innerHTML
    let box2 = document.querySelector(".box2").innerHTML
    let box3 = document.querySelector(".box3").innerHTML
    let box4 = document.querySelector(".box4").innerHTML
    let box5 = document.querySelector(".box5").innerHTML
    let box6 = document.querySelector(".box6").innerHTML
    let box7 = document.querySelector(".box7").innerHTML
    let box8 = document.querySelector(".box8").innerHTML
    let box9 = document.querySelector(".box9").innerHTML
    if (box1 === box2 && box2 === box3 && box1 !== "") {
        alert(`${box1} WON`);
    }
    else if (box1 === box4 && box4 === box7 && box1 !== "") {
        alert(`${box1} WON`);
    }
    else if (box1 === box5 && box5 === box9 && box1 !== "") {
        alert(`${box1} WON`);
    }
    else if (box3 === box6 && box6 === box9 && box3 !== "") {
        alert(`${box6} WON`);
    }
    else if (box7 === box8 && box8 === box9 && box7 !== "") {
        alert(`${box8} WON`);
    }
    else if (box4 === box5 && box5 === box6 && box4 !== "") {
        alert(`${box5} WON`);
    }
    else if (box2 === box5 && box5 === box8 && box2 !== "") {
        alert(`${box5} WON`);
    }
    else if (box3 === box5 && box5 === box7 && box3 !== "") {
        alert(`${box5} WON`);
    }

    // console.log(nums);
}

