// Pseudo code/planning for monopoly gameplay function

//List of functions I think I'll need
function loadBoard(){

}
function determineOrder(){
  let player rollDice(){
    store playerRoll
  }
  let cpu rollDice(){
    store cpuRoll
  }
  if (playerRoll > cpuRoll){
    first = player
  }
  else if (playerRoll = cpuRoll){
    rollDice() //again
  }
  else{
    first = cpu
  }
}
function startTurn(){
  first rollDice()
}
function rollDice(){

}
function moveSpaces(){

}
function landOnSpace () {
  if (space = events){
    events()
  }
  if (space = chance){
    chanceCard()
  }
  if (space = community chest){
    communityChest()
  }
  if (space = actions){
    actionSpace()
      //an action space would be like "Go to Jail" or "Pass Go"
  }

}
function updateStats (){
  updateMoney()
}
function endTurn(){

}
function firstTurn(){

}
function secondTurn(){

}
function gameEnds(){
  if (status = false){
    end game
  }
}

//List of variables I think I'll need
var player //user
var cpu
var playerMoney //tracks the player's money in the game
var cpuMoney //tracks the cpu's money in the game
var space //any space on the board, designated by a number
var events //"property" spaces
var chance //chance card spaces
var communityChest //community chest spaces
var actionSpace //action space, i.e. "Go to Jail" or "Pass Go"
var first //the first player in turn order
var second //the second player in turn order
var status //the status of the game -- whether or not it's still playable

function gamePlay(some thing){
    loadBoard()
    determineOrder()
    while (status = true){
    firstTurn(){
      startTurn(first)
      moveSpaces(first)
      landOnSpace(first)
      updateStats(first)
      endTurn(first)
    }
    secondTurn(){
      startTurn(second)
      moveSpaces(second)
      landOnSpace(second)
      updateStats(second)
      endTurn(second)
      }
    }
    gameEnds()
  }
