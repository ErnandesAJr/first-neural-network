class Matrix {
    constructor(rows,cols){
        this.rows = rows;
        this.cols = cols;

        this.data = [];

        for(let i = 0; i < rows ; i++){
            let arr = []
            for(let j = 0; j < cols; j++){
                arr.push(Math.floor(Math.random()*10))
            }
            this.data.push(arr)
        }
    }


    /**
     * 
     * @param {*} func 
     */
    map(func){
        this.data = this.data.map((arr,i) => {
            return arr.map((num,j)=>{
                    return func(num,i,j);
                }
            )
        })
        return this;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} func 
     */
    static map(A, func) {
        let matrix = new Matrix(A.rows, A.cols);

        matrix.data = A.data.map((arr, i) => {
            return arr.map((num, j) => {
                return func(num, i, j);
            })
        })

        return matrix;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} B 
     */
    static add(A,B){
        var matrix = new Matrix(A.rows,A.cols)
        matrix.map((num,i,j) => {
            return A.data[i][j] + B.data[i][j]
        })
        return matrix;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} B 
     */
    static subtract(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] - B.data[i][j]
        });

        return matrix;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} B 
     */
    static multiply(A, B) {
        var matrix = new Matrix(A.rows, B.cols);

        matrix.map((num, i, j) => {
            let sum = 0
            for (let k = 0; k < A.cols; k++) {
                let elm1 = A.data[i][k];
                let elm2 = B.data[k][j];
                sum += elm1 * elm2;
            }
            
            return sum;
        })

        return matrix;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} escalar 
     */
    static escalar_multiply(A, escalar) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * escalar;
        });

        return matrix;
    }

    /**
     * 
     * @param {*} A 
     */
    static transpose(A){
        var matrix = new Matrix(A.cols, A.rows);
        matrix.map((num,i,j) => {
            return A.data[j][i];
        });
        return matrix;
    }

    /**
     * 
     * @param {*} A 
     * @param {*} B 
     */
    static hadamard(A, B) {
        var matrix = new Matrix(A.rows, A.cols);

        matrix.map((num, i, j) => {
            return A.data[i][j] * B.data[i][j]
        });

        return matrix;
    }

    /**
     * 
     */
    randomize(){
        this.map((elm,i,j)=>{
            return Math.random()* 2 - 1;
        })
    }

    /**
     * 
     */
    print(){
        console.table(this.data)
    }

    /**
     * 
     * @param {*} arr 
     */
    static arrayToMatrix(arr) {
        let matrix = new Matrix(arr.length, 1);
        matrix.map((elm, i, j) => {
            return arr[i];
        })
        return matrix;
    }


    /**
     * 
     * @param {*} obj 
     */
    static MatrixToArray(obj) {
        let arr = []
        obj.map((elm, i, j) => {
            arr.push(elm);
        })
        return arr;
    }

}