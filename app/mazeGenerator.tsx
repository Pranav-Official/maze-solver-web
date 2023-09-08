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
    const entryCol = Math.floor(Math.random() * (columns - 5)/2)*2 + 1;
    const exitCol = Math.floor(Math.random() * (columns - 5)/2)*2 + 1;
  
    maze[0][entryCol] = 0;
    // maze[rows - 1][exitCol] = 0;

    // create maze using recusrive backtraking algorithm by modifying the maze and removing the walls



    


    function neighbourblacks(
      pixelCoordinates: [number, number],
      previousCoordinates: [number, number],
    ): [number, number][] {
      const neighbours: [number, number][] = [];
      const [i, j] = pixelCoordinates;
  
      try {
        if (maze[i + 2][j] === 1) {
          neighbours.push([i + 2, j]);
        }
      } catch (e) {}
      try {
        if (maze[i - 2][j] === 1) {
          neighbours.push([i - 2, j]);
        }
      } catch (e) {}
      try {
        if (maze[i][j + 2] === 1) {
          neighbours.push([i, j + 2]);
        }
      } catch (e) {}
      try {
        if (maze[i][j - 2] === 1) {
          neighbours.push([i, j - 2]);
        }
      } catch (e) {}
    
      const filteredNeighbours = neighbours.filter((x) => x.toString() !== previousCoordinates.toString());
    
      shuffleArray(filteredNeighbours);
      return filteredNeighbours;
    }
    
    function shuffleArray<T>(array: T[]): void {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function findElementBetweenCoordinates(
      coordinates1: [number, number],
      coordinates2: [number, number],
      array: number[][]
    ): [number, number] {
      const [x1, y1] = coordinates1;
      const [x2, y2] = coordinates2;
    
      if (x1 === x2 && y1 === y2) {
        return [x1, y1];
      }
      
      let x = Math.floor(x2-((x2-x1)/2))
      let y = Math.floor(y2-((y2-y1)/2))


      // Return null if the coordinates don't meet the criteria
      return [x, y];
    }

    function neighbourVisted(
      pixelCoordinates: [number, number]
    ): [number, number][] {
      const neighbours: [number, number][] = [];
      const [i, j] = pixelCoordinates;
  
      try {
        if (maze[i + 2][j] === 0) {
          neighbours.push([i + 2, j]);
        }
      } catch (e) {}
      try {
        if (maze[i - 2][j] === 0) {
          neighbours.push([i - 2, j]);
        }
      } catch (e) {}
      try {
        if (maze[i][j + 2] === 0) {
          neighbours.push([i, j + 2]);
        }
      } catch (e) {}
      try {
        if (maze[i][j - 2] === 0) {
          neighbours.push([i, j - 2]);
        }
      } catch (e) {}
    
      shuffleArray(neighbours);
      return  neighbours;
    }

    function nearestVisited(coordinates: [number, number]): [number, number] {

      const [x1, y1] = coordinates;

      console.log("cordinated recived", coordinates)

      // try {
      //   if(visited.includes([x1+2, y1])) {
      //     return [x1+2, y1]
      //   }
      // } catch (error) {}
      // try {
      //   if(visited.includes([x1-2, y1])) {
      //     return [x1-2, y1]
      //   }
      // } catch (error) {}
      // try {
      //   if(visited.includes([x1, y1+2])) {
      //     return [x1, y1+2]
      //   }
      // } catch (error) {}
      // try {
      //   if(visited.includes([x1, y1-2])) {
      //     return [x1, y1-2]
      //   }
      // } catch (error) {}

      let neighbours = neighbourVisted([x1, y1])

      console.log("neighbours to the cordinated recived", neighbours)

      // for(let i = 0; i < neighbours.length; i++) {
      //   if(!visited.includes(neighbours[i])) {
      //     neighbours.splice(i-1,1)
      //   }
      // // }
      // console.log("nearest visited neighbours",neighbours)
      return neighbours[0];
      // return [x1, y1]
    }


    // console.log("neighbours", neighbourblacks(pixelCoordinates, previousCoordinates));
    
    let visited = [[0,0]];
    let stack = [[[0,0]]];
    stack.pop();

    function mazeCarver(pixelCoordinates: [number, number], previousCoordinates: [number, number]): void {
      let i = 1;
      do{

        console.log("itreration : ", i++);
      let elementBetweenCoordinates = findElementBetweenCoordinates(pixelCoordinates, previousCoordinates, maze);
      //console.log(elementBetweenCoordinates)
      maze[elementBetweenCoordinates[0]][elementBetweenCoordinates[1]] = 0;
      maze[pixelCoordinates[0]][pixelCoordinates[1]] = 0;
      visited.push(pixelCoordinates);

      // for(let i = 0; i < visited.length; i++) {
      //   if(visited[i][0] === pixelCoordinates[0] && visited[i][1] === pixelCoordinates[1]) {
      //     return
      // }

      // }
      
      let neighbours = neighbourblacks(pixelCoordinates, previousCoordinates);
      //console.log("neighbours",neighbours)

      for(let i = neighbours.length; i > 0; i--) {
          if(visited.includes(neighbours[i-1])) {
            neighbours.splice(i-1,1)
          }
      }

      //console.log("neighbours poped",neighbours)

      for(let i = 0; i < neighbours.length; i++) {
        stack.push([neighbours[i], pixelCoordinates]);
      }
      //console.log("neighbours pushed to stack")
      
      previousCoordinates = pixelCoordinates;
      
      console.log("stack ",stack)
      shuffleArray(stack);

      if(neighbours.length === 0) {
        console.log("backtracking")
        let temp = stack.pop();
        console.log("temp",temp)
        let coordinates = temp[0];
        pixelCoordinates[0] = temp[0][0];
        pixelCoordinates[1] = temp[0][1];
        //console.log("pixel coordinates",pixelCoordinates)
        //console.log("coordinates",coordinates)
        previousCoordinates[0] = temp[1][0];
        previousCoordinates[1] = temp[1][1];
        //console.log("nearest visited", previousCoordinates)
      }
      else{
        pixelCoordinates = neighbours[0];

      }
      

    
    }while(stack.length > 1)
    


    }



    const pixelCoordinates: [number, number] = [1, entryCol]; // Replace 'x' and 'y' with the actual pixel coordinates
    const previousCoordinates: [number, number] = [0, entryCol];



    mazeCarver(pixelCoordinates, previousCoordinates);

    if(maze[rows - 2][exitCol] === 1) {
      maze[rows - 1][exitCol+1] = 0;
    }
    else {
      maze[rows - 1][exitCol] = 0;
    }


    // console.log(maze);
    return matrix2array(maze);
    
  };
  
  export default mazeGenerator;
  