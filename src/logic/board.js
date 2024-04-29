import {WINNERS_COMBOS} from '../constants.js';

export const checkWinnerFrom = boardToCheck => { //reviso todas las combinaciones posibles para ver si x u o gano
    for(const combo of WINNERS_COMBOS){
      const [a,b,c] = combo;
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a];
      }
    }
    return null; // si no hay ganador
}

export const checkEndGame = newBoard =>{
  return newBoard.every( square => square != null)
}