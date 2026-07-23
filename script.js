let x = document.querySelector(".choose_x")
let o = document.querySelector(".choose_o")
let choose = document.querySelector(".choose")
let start = document.querySelector(".start")
let chosenSymbol = "X";
let notChosenSymbol = "O";
let nums = [];
let gameMode = "frn"
let p1 = "X"
let p2 = "O"
let p


let x_win = Number(localStorage.getItem("x_win")) || 0;
let o_win = Number(localStorage.getItem("o_win")) || 0;


document.querySelector(".x_win_count").innerHTML = x_win;
document.querySelector(".o_win_count").innerHTML = o_win;


function reset_score() {
    localStorage.setItem("x_win", 0)
    localStorage.setItem("o_win", 0)
    location.reload()
}

function Choose(symbl) {
    chosenSymbol = symbl
    start.innerHTML = `Start as ${symbl}`;
    start.style = "display:flex";
    choose.style = "display:none";
}

function frn() {
    document.querySelector(".play_with_frn").style = "display:none"
    document.querySelector(".play_with_comp").style = "display:flex"
    document.querySelector(".first_x").style = "display:flex"
    document.querySelector(".choose").style = "display:none"
    document.querySelector(".wins").style = "display:flex"

    for(let i=1;i<=9;i++){
        document.querySelector(`.box${i}`).innerHTML = ""
    }

    gameMode = "frn"
}
function comp() {
    document.querySelector(".play_with_frn").style = "display:flex"
    document.querySelector(".play_with_comp").style = "display:none"
    document.querySelector(".first_x").style = "display:none"
    document.querySelector(".choose").style = "display:flex"
    document.querySelector(".wins").style = "display:none"

    for(let i=1;i<=9;i++){
        document.querySelector(`.box${i}`).innerHTML = ""
    }
    
    gameMode = "comp"
}

function clicked(num) {

    let box = document.querySelector(`.box${num}`);

    if (box.innerHTML !== "") {
        return;
    }
    if (gameMode === "frn") {

        let box = document.querySelector(`.box${num}`)
        box.innerHTML = `${p1}`

        p = p2
        p2 = p1
        p1 = p
    }
    else if (gameMode === "comp") {
        if (start.innerHTML == "Start as X" || start.innerHTML == "Start as O") {
            let box = document.querySelector(`.box${num}`)
            box.innerHTML = `${chosenSymbol}`
            if (chosenSymbol === "O") {
                notChosenSymbol = "X"
            }
            let random_box;

            do {
                random_box = Math.floor(Math.random() * 9) + 1;
            } while (document.querySelector(`.box${random_box}`).innerHTML !== "");

            document.querySelector(`.box${random_box}`).innerHTML = notChosenSymbol;
        }
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


    if ((box1 === box2 && box2 === box3 && box1 !== "") || (box1 === box4 && box4 === box7 && box1 !== "") || (box1 === box5 && box5 === box9 && box1 !== "")) {
        alert(`${box1.toUpperCase()} WON`);
        if(gameMode==="frn"){
            if (box1 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box1 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
        }
    }
    else if (box3 === box6 && box6 === box9 && box3 !== "") {
        alert(`${box6.toUpperCase()} WON`);
        if(gameMode==="frn"){
            if (box6 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box6 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
        }
    }
    else if (box7 === box8 && box8 === box9 && box7 !== "") {
        alert(`${box8.toUpperCase()} WON`);
        if(gameMode==="frn"){
            if (box8 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box8 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
        }
    }
    else if ((box4 === box5 && box5 === box6 && box4 !== "") || (box2 === box5 && box5 === box8 && box2 !== "") || (box3 === box5 && box5 === box7 && box3 !== "")) {
        alert(`${box5.toUpperCase()} WON`);
        if(gameMode==="frn"){
            if (box5 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box5 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
        }
    }
    // console.log(nums);
}

