export default function sudokuAnswer(board, row, col, N) {
 var bag=""
 
    let flag = false;

    sudokuSolver(board, row, col, N)
   
    function sudokuSolver(board, row, col, N) {
       
       if (row === N) {
            flag = true;
            // console.log(row,col)
           
            for (let i = 0; i < N; i++) {
                bag = bag + board[i].join("")
            
            }
        
            return;
        }
    
        let next_row = 0;
        let next_col = 0;
    
        if (col === N - 1) {
            next_row = row + 1;
            next_col = 0;
        } else {
            next_row = row;
            next_col = col + 1;
        }
    
        if (board[row][col] !== "") {
            sudokuSolver(board, next_row, next_col, N)
        } else {
            for (let i = 1; i <= 9; i++) {
            
                if (checkSafe(board, row, col, i) === true) {
                    board[row][col] = i;
                    sudokuSolver(board, next_row, next_col, N)
                    board[row][col] = "";
                }
            }
        }
    
    
    
    }

    function checkSafe(board,row,col,val){
        //vertical check
        for(let i=0;i<board.length;i++){
            
            if(board[i][col]==val){
                return false;
            }
        }
        
        //horizantal check
        
        for(let i=0;i<board.length;i++){
            if(board[row][i]==val){
                return false;
            }
        }
        
        //subgrid of 3*3 checking
        
        let a=Math.floor(row/3)*3
        let b=Math.floor(col/3)*3
        
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[a+i][b+j]==val){
                    return false;
                }
            }
        }
        
        
        // console.log(row,col,val)
        return true;
        
        
        
    }
console.log(bag)
    return bag;
}

