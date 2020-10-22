class Matrix {
    constructor(matrixDescription: string) {
        const stringMatrix = matrixDescription.split('\n').map(r => r.split(" "))
        this.rows = this.convertToNumberMatrix(stringMatrix)
        this.columns = this.transpose(this.rows)
    }

    readonly rows: number[][]
    readonly columns: number[][]

    private convertToNumberMatrix(matrix: string[][]): number[][] {
        return matrix.map(r => r.map(c => parseInt(c)))
    }

    private transpose(matrix: number[][]): number[][] {
        return matrix[0].map((_, i) => matrix.map(row => row[i]));
    }
}

export default Matrix
