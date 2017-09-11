// ====================TicTacToe Lab============================================
// Create a JS Classes that will simulate a game of tic tac toe with two players
// When you are done or if you want to check parts of the app run Npm test
 export class TicTacToe {
   constructor (player1, player2) {
     this.players = [player1, player2]
     this.currentPlayer = player1
     this.board = [[null, null, null],
                  [null, null, null],
                  [null, null, null]]
     this.turns = 0
   }
  // this.board[2][2]
  // [
  // [ 0,0 - 0,1 - 0,2],
  // [ 1,0 - 1,1 - 1,2],
  // [ 2,0 - 2,1 - 2,2]
  // ]
   picBox (x, y) {
     if (this.board[x][y]) {
       return 'cannot place symbol on a occupied square'
     } else {
       this.board[x][y] = this.currentPlayer.symbol
       return this.checkWinner(x, y)
     }
    // find location in array if not null do not let player pic the box, console.log('player must choose an empty space') and return false
    // if box is null then place the current players symbol in the box location
    // run the check for winner method
    // if true then stop game and increment current players score by one
    // else
    // run the turn change method
   }
   turnChange () {
    // increment turns by 1
    // check current player agains the players array and swap them
     this.turns++
     if (this.currentPlayer === this.players[0]) {
       this.currentPlayer = this.players[1]
     } else {
       this.currentPlayer = this.players[0]
     }
   }
   checkWinner (x, y) {
     let playerCheck = `${this.currentPlayer.symbol}${this.currentPlayer.symbol}${this.currentPlayer.symbol}`
     if (this.turns < 5) return this.turnChange()
     if (this.horizantalCheck(x, playerCheck) || this.diagnalCheck(playerCheck) || this.verticalCheck(y, playerCheck)) {
       return `${this.currentPlayer.name} you win!`
     } else {
       this.turnChange()
       if (this.turns >= 9) return 'tie game'
       return 'keep trying'
     }
    // check for turns < 5 if so return false, not enough for a win yet
    // check for tie game based on turns
    // if true stop the game and start a new one
    // win logic
    // check 8 possible conditions against the current player symbol in board array
    // return true win there is a winner conditions
    // else return false
   }
   horizantalCheck (x, playerCheck) {

   }
   verticalCheck (y, playerCheck) {

   }
   diagnalCheck (playerCheck) {

   }

}

 export class Player {
   constructor (name, symbol) {
     this.name = name
     this.symbol = symbol
     this.totalScore = 0
   }
}
