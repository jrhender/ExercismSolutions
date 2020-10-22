class Matrix {
    private transpose(matrix: TwoDMatrix): TwoDMatrix {
        return matrix[0].map((_, i) => matrix.map(row => row[i]));
    }

    constructor(matrixDescription: string) {
        const stringMatrix = matrixDescription.split('\n').map(r => r.split(" "))
        this.rows = stringMatrix.map(r => r.map(c => Number(c)))
        this.columns = this.transpose(this.rows)
    }

    readonly rows: TwoDMatrix
    readonly columns: TwoDMatrix
}

type TwoDMatrix = number[][]

export default Matrix
