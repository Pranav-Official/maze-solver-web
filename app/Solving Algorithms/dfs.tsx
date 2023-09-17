import array2matrix from "../Fuctions/array2matrix";

const dfsVisualization = (arr: any[], rowLength: number): any => {

    let visited = [];
    let path = [];

    let maze = array2matrix(arr, rowLength);

    arr[0] = 0;

    console.log("assigned", arr)

    return 1;


}




export default dfsVisualization