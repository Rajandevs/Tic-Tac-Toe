let x = document.querySelector(".choose_x")
let o = document.querySelector(".choose_o")

let choose = document.querySelector(".choose")
let start = document.querySelector(".start")

let chosenSymbol = "X";
let notChosenSymbol = "O";


let nums = [];
let gameMode = "frn"
let comp_gameMode = "easy"


if (localStorage.getItem("gameMode") === "comp") {
    comp()
}


let p1 = "X"
let p2 = "O"
let p

let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const win_patterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

let x_win = Number(localStorage.getItem("x_win")) || 0;
let o_win = Number(localStorage.getItem("o_win")) || 0;


document.querySelector(".x_win_count").innerHTML = x_win;
document.querySelector(".o_win_count").innerHTML = o_win;


function reset_score() {
    localStorage.setItem("x_win", 0)
    localStorage.setItem("o_win", 0)
    location.reload()
}

function choose_game_mode(mode) {
    comp_gameMode = `${mode}`
    // console.log(`${mode}`);
    document.querySelector(".choose_game_mode").style.display = "none"
    document.querySelector(".def").style.display = "none"
    document.querySelector(".gameMode").style.display = "none"

}

function get_board_state() {
    let board_state = []
    for (let i = 1; i <= 9; i++) {
        board_state.push(document.querySelector(`.box${i}`).innerHTML)
    }
    return board_state
}

function check_winner_arr(board_state) {
    for (let pattern of win_patterns) {
        const [a, b, c] = pattern;
        if (board_state[a] && board_state[a] === board_state[b] && board_state[b] === board_state[c]) {
            return board_state[a]
        }
    }
    if (board_state.every(cell => cell !== "")) {
        return "draw"
    }
    return null
}

function minimax(board_state, is_maximizing, comp_symbl, plr_symbl) {

    let result = check_winner_arr(board_state)
    if (result === comp_symbl) return 10
    if (result === plr_symbl) return -10
    if (result === "draw") return 0


    if (is_maximizing) {
        let best = -Infinity
        for (let i = 0; i < 9; i++) {
            if (board_state[i] === "") {
                board_state[i] = comp_symbl
                best = Math.max(best, minimax(board_state, false, comp_symbl, plr_symbl))
                board_state[i] = ""
            }
        }
        return best
    }
    else {
        let best = Infinity
        for (let i = 0; i < 9; i++) {
            if (board_state[i] === "") {
                board_state[i] = plr_symbl
                best = Math.min(best, minimax(board_state, true, comp_symbl, plr_symbl))
                board_state[i] = ""
            }
        }
        return best
    }

}

function get_best_move(comp_symbl, plr_symbl) {
    let board_state = get_board_state()
    let best_score = -Infinity
    let move = -1

    for (let i = 0; i < 9; i++) {
        if (board_state[i] === "") {
            board_state[i] = comp_symbl
            let score = minimax(board_state, false, comp_symbl, plr_symbl)
            board_state[i] = ""
            if (score > best_score) {
                best_score = score
                move = i
            }
        }
    }
    return move + 1
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

    for (let i = 1; i <= 9; i++) {
        document.querySelector(`.box${i}`).innerHTML = ""
    }

    gameMode = "frn"
    localStorage.setItem("gameMode", "frn")
}
function comp() {
    document.querySelector(".play_with_frn").style = "display:flex"
    document.querySelector(".play_with_comp").style = "display:none"
    document.querySelector(".first_x").style = "display:none"
    document.querySelector(".choose").style = "display:flex"
    document.querySelector(".wins").style = "display:none"

    for (let i = 1; i <= 9; i++) {
        document.querySelector(`.box${i}`).innerHTML = ""
    }

    gameMode = "comp"
    localStorage.setItem("gameMode", "comp")
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

            let board_full = true
            for (let i = 1; i <= 9; i++) {
                if (document.querySelector(`.box${i}`).innerHTML === "") {
                    board_full = false
                    break
                }
            }
            if (!board_full) {
                let comp_box_num
                if (comp_gameMode === "hard") {
                    comp_box_num = get_best_move(notChosenSymbol, chosenSymbol)
                }
                else {
                    do {
                        comp_box_num = Math.floor(Math.random() * 9) + 1;
                    } while (document.querySelector(`.box${comp_box_num}`).innerHTML !== "")
                }
                document.querySelector(`.box${comp_box_num}`).innerHTML = notChosenSymbol
            }
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
        if (gameMode === "frn") {
            localStorage.setItem("gameMode", "comp")
            if (box1 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box1 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
            localStorage.setItem("gameMode", "plr")
        }
        else if (gameMode === "comp") {
            localStorage.setItem("gameMode", "comp")
        }
        window.location.reload()
    }
    else if (box3 === box6 && box6 === box9 && box3 !== "") {
        alert(`${box6.toUpperCase()} WON`);
        if (gameMode === "frn") {
            window.location.reload()
        }
        if (gameMode === "frn") {
            if (box6 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box6 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
            localStorage.setItem("gameMode", "plr")
        }
        else if (gameMode === "comp") {
            localStorage.setItem("gameMode", "comp")
        }
        window.location.reload()
    }
    else if (box7 === box8 && box8 === box9 && box7 !== "") {
        alert(`${box8.toUpperCase()} WON`);
        if (gameMode === "frn") {
            window.location.reload()
        }
        if (gameMode === "frn") {
            if (box8 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box8 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
            localStorage.setItem("gameMode", "plr")
        }
        else if (gameMode === "comp") {
            localStorage.setItem("gameMode", "comp")
        }
        window.location.reload()
    }
    else if ((box4 === box5 && box5 === box6 && box4 !== "") || (box2 === box5 && box5 === box8 && box2 !== "") || (box3 === box5 && box5 === box7 && box3 !== "")) {
        alert(`${box5.toUpperCase()} WON`);
        if (gameMode === "frn") {
            window.location.reload()
        }
        if (gameMode === "frn") {
            if (box5 === "X") {
                x_win += 1
                localStorage.setItem("x_win", x_win)
            }
            if (box5 === "O") {
                o_win += 1
                localStorage.setItem("o_win", o_win)
            }
            localStorage.setItem("gameMode", "plr")
        }
        else if (gameMode === "comp") {
            localStorage.setItem("gameMode", "comp")
        }
        window.location.reload()
    }
    else if(box1 !== "" &&box2 !== ""&&box3 !== ""&&box4 !== ""&&box5 !== ""&&box6 !== ""&&box7 !== ""&&box8 !== ""&&box9 !== ""){
        alert("DRAW")
        if(gameMode==="frn"){
            localStorage.setItem("gameMode","plr")
        }
        else if(gameMode==="comp"){
            localStorage.setItem("gameMode","comp")
        }
        window.location.reload()
    }
    // console.log(nums);
}

