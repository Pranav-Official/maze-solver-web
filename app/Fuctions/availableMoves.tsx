import  shuffleArray  from "../Fuctions/shuffleArray";
const availableMoves = (maze: number[][], i: number, j: number): number[][] => {

    let moves = [[0,0]];
    moves.pop();

    try {
        if (maze[i + 1][j] === 0) {
          moves.push([i + 1, j]);
        }
      } catch (e) {}
      try {
        if (maze[i - 1][j] === 0) {
          moves.push([i - 1, j]);
        }
      } catch (e) {}
      try {
        if (maze[i][j + 1] === 0) {
          moves.push([i, j + 1]);
        }
      } catch (e) {}
      try {
        if (maze[i][j - 1] === 0) {
          moves.push([i, j - 1]);
        }
      } catch (e) {}
    
      shuffleArray(moves);

    return moves;


    
}