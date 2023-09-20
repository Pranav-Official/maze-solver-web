let pixelCoordinates = entrypoint;
    let i=1;
    while(pixelCoordinates != exitpoint){
      console.log("itreation :",i, "pixelCoordinates",pixelCoordinates);
      i=i+1;
      
      visited.push(pixelCoordinates);
      path.push(pixelCoordinates);
      mazetemp[pixelCoordinates[0]][pixelCoordinates[1]] = 2;
      maze1d[mazetemp.length*pixelCoordinates[0]+pixelCoordinates[1]] = 2;
      let neighbours = availableMoves(mazetemp, pixelCoordinates[0], pixelCoordinates[1]);
      console.log("neighbours berfore",neighbours)
      neighbours = trimDuplicates(neighbours, visited);
      console.log("neighbours",neighbours)
      if(neighbours.length === 0) {
        console.log("backtracking")
        let temp = stack.pop();
        console.log("temp",temp)
        pixelCoordinates[0] = temp[0];
        pixelCoordinates[1] = temp[1];
        let index = path.indexOf(pixelCoordinates);

        path = path.splice(0, index+1);
        tracePath(visited, 3);
        tracePath(path, 2);
      }

      if(neighbours.length > 1){
        stack.push(pixelCoordinates);
        pixelCoordinates = neighbours[0];
      }
      else{
        pixelCoordinates = neighbours[0];
      }

    }
    tracePath(visited, 3);
    tracePath(path, 2);
