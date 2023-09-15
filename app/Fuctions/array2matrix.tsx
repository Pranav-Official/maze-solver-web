//fuction to convert an array to matrix given the size of the rows

function array2matrix (arr: any[], rowLength: number): any[][] {
    if (rowLength <= 0) {
      throw new Error("Row length must be greater than 0");
    }
  
    const result: any[][] = [];
    let currentRow: any[] = [];
  
    for (const item of arr) {
      if (currentRow.length === rowLength) {
        result.push(currentRow);
        currentRow = [];
        // console.log("pushing rows :", result.length)
      }
      currentRow.push(item);
    }
  
    // Push the last row, even if it's not completely filled.
    if (currentRow.length > 0) {
      result.push(currentRow);
    }
    
    console.log("2dify done",result, "rowLength", rowLength);
    return result;
  }

export default array2matrix;