console.log("Welcome to MyTicTacToe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let audioGameover = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;

// Function to Change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a Win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,10,0],
        [3,4,5,0,30,0],
        [6,7,8,0,50,0],
        [0,3,6,-20,30,90],
        [1,4,7,0,30,90],
        [2,5,8,20,30,90],
        [0,4,8,0,30,45],
        [2,4,6,0,30,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !=="") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won "
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            document.querySelector(".line").style.width = "60vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }   
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = ""
    });
    turn = "X";
    gameover = false
        document.querySelector(".line").style.width = "0vw";
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    })