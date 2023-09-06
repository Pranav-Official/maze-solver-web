// function to generate a  matrix

const mazeGenerator = (rows: number, columns: number) => {
    // Create an empty maze matrix
    const maze: number[][] = Array.from({ length: rows }, () =>
        Array.from({ length: columns }, () => 1)
    );
}