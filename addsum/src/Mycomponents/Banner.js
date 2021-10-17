import React from 'react'
import './Banner.css'
import {useState} from 'react'

function Banner() {
   

        const [input_num,setInput_num]=useState(0) 
       // const [state,setState]=useState(0)
        const [total,setTotal]=useState(0)
         const addCount=()=>{
             setTotal(Number(input_num)+Number(total))
         }
         const subCount=()=>{
             setTotal(Number(total)-Number(input_num))
            
         }
    return (
        
            <div className='container'>
            <div className="items">
                <h3 className="item-head" style={{textAlign:'center'}}>Enter A Value To Add or Substract</h3><br/>
                <input value={input_num} onChange={
                    (e)=>setInput_num(e.target.value)
                    } type='text' className='input' id='inputid'/>
            </div><br/>
            <div className="buttons">
                <button id='btn1' className='button' onClick={addCount}>Add </button><br/>
                <button id='btn2' className='button' onClick={subCount}>Subtract</button><br/><br/>
            </div>
            <div className="result">
                <h1>RESULT</h1>
                <h2 id='final'>{total}</h2>
            </div>
            </div>
        
    )
}

export default Banner
