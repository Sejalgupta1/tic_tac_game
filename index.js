console.log("Welcome to Tic Tac Toe");
let music = new Audio ("img/joker-boy-109889.mp3");
let turn = new Audio("img/game-start.mp3");
let gameover = new Audio("img/game-over-38511.mp3");
let turnn = "X";
let gameoverr = false;

const changeTurn = () => {
    return turnn === "X" ? "0" :"X"
}



const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 5, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],

]
 wins.forEach(e =>{
if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + "Won"
    gameoverr = true;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    document.querySelector('.line').style.width = "20vw";
    document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw)rotate(${e[5]}deg)`;
}
 })

}


 
let boxes =document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
     element.addEventListener('click',() => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turnn;
            turnn = changeTurn();
            turn.play();
            checkWin();
            if(!isgameoverr){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turnn;
            }
          


        }
    })
})

  


reset.addEventListener('click',()=>{
  let  boxtexts =  document.querySelectorAll('.boxtext');
  Array.from(boxtexts).forEach(element => {
    element.innerText = ""
  });
  turn= "X";
  isgameoverr = false;
  document.querySelector('.line').style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for" + turnn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})