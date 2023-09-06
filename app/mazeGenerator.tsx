import matrix2array from "./matrix2array";

// Function to generate a random number between two given numbers
const generateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const mazeGenerator = (rows: number, columns: number) => {
    // Create an empty maze matrix
    const maze: number[][] = Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => 1)
    );
  
    // Ensure the entry and exit points are between the 2nd column and 2nd last column
    const entryCol = Math.floor(Math.random() * (columns - 5)) + 2;
    const exitCol = Math.floor(Math.random() * (columns - 5)) + 2;
  
    maze[0][entryCol] = 0;
    maze[rows - 1][exitCol] = 0;
  
    // Recursive Backtracking Algorithm
    // function recursiveBacktrack(row: number, col: number) {
    //   const directions = [
    //     [-2, 0], // Up
    //     [2, 0], // Down
    //     [0, -2], // Left
    //     [0, 2], // Right
    //   ];
  
    //   // Shuffle the directions randomly
    //   directions.sort(() => Math.random() - 0.5);
  
    //   for (const [dr, dc] of directions) {
    //     const newRow = row + dr;
    //     const newCol = col + dc;
  
    //     if (
    //       newRow >= 1 &&
    //       newRow < rows - 1 &&
    //       newCol >= 1 &&
    //       newCol < columns - 1
    //     ) {
    //       if (maze[newRow][newCol] === 1) {
    //         maze[newRow][newCol] = 0;
    //         maze[row + dr / 2][col + dc / 2] = 0;
  
    //         recursiveBacktrack(newRow, newCol);
    //       }
    //     }
    //   }
    // }
  
    // // Start the maze generation process from a random point on the second row
    // const startRow = 1;
    // const startCol = Math.floor(Math.random() * (columns - 3)) * 2 + 3;
  
    // maze[startRow][startCol] = 0;

    
    // recursiveBacktrack(startRow, startCol);
    
    
  
    // For loop to make values of just the edge rows and columns of the maze to 1
    // for (let i = 0; i < maze.length; i++) {
    //   for (let j = 0; j < maze[i].length; j++) {
    //     if (i === 0 || i === maze.length - 1 || j === 0 || j === maze[i].length - 1) {
    //       maze[i][j] = 1;
    //     }
    //   }
    // }
  
    // let k = generateRandomNumber(3, rows - 3);
  
    // if (maze[1][k] === 0) {
    //   maze[0][k] = 0;
    // } else {
    //   maze[0][k + 1] = 1;
    // }
  
    // k = generateRandomNumber(3, rows - 3);
  
    // if (maze[rows - 2][k] === 0) {
    //   maze[rows - 1][k] = 0;
    // } else {
    //   maze[rows - 1][k + 1] = 1;
    // }
    
    // console.log(maze);
    return matrix2array(maze);
    
  };
  
  export default mazeGenerator;
  