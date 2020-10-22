class Matrix {
    constructor(matrixDescription: string) {
        const rows = matrixDescription.split('\n')
        for (const row of rows) {
            const values = row.split(" ").map(s => parseInt(s))
            this.rows.push(values)
        }
        this.columns = this.transpose(this.rows);
    }

    readonly rows: number[][] = new Array<number[]>()
    readonly columns: number[][]

    private transpose(matrix: number[][]): number[][] {
        return matrix[0].map((_, i) => matrix.map(row => row[i]));
    }
}

export default Matrix
