
import './App.css';
import { useEffect, useState } from "react"
import wood from "./woodpattern.jpg"

import sudokuAnswer from './answer';
// let sudoku=Array.from (Array(9).fill(""),()=> new Array(9).fill(""))

const sudoku=[
  ['','4','','','','','1','7','9'], 
  ['','','2','','','8','','5','4'], 
  ['','','6','','','5','','','8'],   
  ['','8','','','7','','9','1',''],  
  ['','5','','','9','','','3',''],  
  ['','1','9','','6','','','4',''],  
  ['3','','','4','','','7','',''], 
  ['5','7','','1','','','2','',''],  
  ['9','2','8','','','','','6',''],  

]



function App() {


const [board,setBoard]=useState([
  ['','4','','','','','1','7','9'], 
  ['','','2','','','8','','5','4'], 
  ['','','6','','','5','','','8'],   
  ['','8','','','7','','9','1',''],  
  ['','5','','','9','','','3',''],  
  ['','1','9','','6','','','4',''],  
  ['3','','','4','','','7','',''], 
  ['5','7','','1','','','2','',''],  
  ['9','2','8','','','','','6',''],  

])

  const [ans,setAns]=useState('')
  const filvalue = (i, j, e) => {
    // console.log(e.target,'e')
    let temp = board;
    temp[i][j] = e.target.value;
    setBoard([...temp])
  }




  const handleReset = () => {
    let x = sudoku;
    setBoard(  [ ['','4','','','','','1','7','9'], 
    ['','','2','','','8','','5','4'], 
    ['','','6','','','5','','','8'],   
    ['','8','','','7','','9','1',''],  
    ['','5','','','9','','','3',''],  
    ['','1','9','','6','','','4',''],  
    ['3','','','4','','','7','',''], 
    ['5','7','','1','','','2','',''],  
    ['9','2','8','','','','','6',''],  
  
  ] )
  }

  const checkWinner = (board) => {
    let jhola=""
    for (let i = 0; i < board.length; i++){
      jhola=jhola+ board[i].join("")
    }
    // console.log(jhola,"jhola")

    if (jhola === ans) {
      return "solved";
    } else if (jhola.length == 81) {
      return "wrong"
    } else return false;
}

  useEffect(() => {
    let vin = sudokuAnswer(board, 0, 0, 9)
  setAns(vin)
  },[])

  useEffect(() => {

    let result = checkWinner(board)
    if (result=="solved") {
      alert("You have solved it")
      handleReset()
    } else if (result == "wrong") {
      alert("Wrong Solution")
    }
 
},[board])

  return (
    <div className="App" style={{backgroundImage:`url(${wood})`}}>
      <h1>Sudoku</h1>
      {board.map((item,ind) => (
        <div key={ind} className="row">
         
          <input maxLength={1} value={board[ind][0]}  disabled={sudoku[ind][0]!==""}   onChange={ (e)=>filvalue(ind,0,e)}  className={`innner-row-${ind}0 `} / >  
         
          <input maxLength={1} value={board[ind][1]} disabled={sudoku[ind][1]!==""}  onChange={ (e)=>filvalue(ind,1,e)} className={`innner-row-${ind}1`} / >  
         
          <input maxLength={1} value={board[ind][2]} disabled={sudoku[ind][2]!==""}  onChange={ (e)=>filvalue(ind,2,e)} className={`innner-row-${ind}2`} / >  
         
          <input maxLength={1} value={board[ind][3]} disabled={sudoku[ind][3]!==""}  onChange={ (e)=>filvalue(ind,3,e)} className={`innner-row-${ind}3`} / >  
         
          <input maxLength={1} value={board[ind][4]} disabled={sudoku[ind][4]!==""}  onChange={ (e)=>filvalue(ind,4,e)} className={`innner-row-${ind}4`} / >  
         
          <input maxLength={1} value={board[ind][5]} disabled={sudoku[ind][5]!==""}  onChange={ (e)=>filvalue(ind,5,e)} className={`innner-row-${ind}5`}/ >  
         
          <input maxLength={1} value={board[ind][6]} disabled={sudoku[ind][6]!==""}  onChange={ (e)=>filvalue(ind,6,e)} className={`innner-row-${ind}6`} / >  
         
          <input maxLength={1} value={board[ind][7]} disabled={sudoku[ind][7]!==""}  onChange={ (e)=>filvalue(ind,7,e)} className={`innner-row-${ind}7`} / >  
         
          <input maxLength={1} value={board[ind][8]} disabled={sudoku[ind][8]!==""}  onChange={ (e)=>filvalue(ind,8,e)} className={`innner-row-${ind}8`} / >  
        
        
        
        
        </div>
     ))}
    {/* <input type='text' name='email' value={email[0]} onChange={ (e)=>handleChange(0,e)} />
      <button>Vinod</button> */}
      <button onClick={handleReset} className='reset-btn'>Reset Game</button>
    </div> 
  );
}

export default App;
