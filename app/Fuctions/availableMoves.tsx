import  shuffleArray  from "../Fuctions/shuffleArray";
const availableMoves = (maze: number[][], i: number, j: number): number[][] => {


    console.log("maze", maze);

    let moves = [];
    

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

      console.log("moves", moves);

    return moves;


    
}

export default availableMoves;