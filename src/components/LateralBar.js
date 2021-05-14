import React from 'react'
import './LateralBar.css'
function LateralBar({handleClick1, isClicked, isClicked2, handleSecondClass}) {
  
    
    return (
        <div className="lateral-bar">
            <div className="lateral-bar-container">
            <button onClick={handleClick1} className={isClicked?"lateral-bar-btn active" : "lateral-bar-btn"}>1º class</button>
            <button onClick={handleSecondClass}  className={ isClicked2 ?"lateral-bar-btn active" : "lateral-bar-btn" }>2º class</button>
            <button onClick={()=>{ alert("Ops, ainda não chegamos nessa aula")}} className="lateral-bar-btn">3º class</button>
            <button onClick={()=>{ alert("Ops, ainda não chegamos nessa aula")}} className="lateral-bar-btn">4º class</button>
            <button onClick={()=>{ alert("Ops, ainda não chegamos nessa aula")}} className="lateral-bar-btn">5º class</button>
            <button onClick={()=>{ alert("Ops, ainda não chegamos nessa aula")}} className="lateral-bar-btn">6º class</button>
            </div>
        </div>
    )
}

export default LateralBar
