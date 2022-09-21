import React, { useState } from "react";
import '../CSS/Style.css';
import { useSelector,useDispatch } from "react-redux";
import { addTodo, deleteTodo,removeTodo } from "../actions/Index";

function Todo(){
  const [inputData,setInputData]=useState('');
  const list = useSelector((state) => state.Todo_reducer.list);
  const dispatch = useDispatch();
   

  



    return(
        <>
    <div className="main-div">
      <div className='child-div'>
        <figure>
         <figcaption>Add your list here.</figcaption>
        </figure>

        <div className='additems'>
          <input type="text" 
          className="inputs"
          placeholder='Add Items...' 
          value={inputData}
          onChange={(event)=>setInputData(event.target.value)}
          />
          <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData),setInputData(''))} ></i>
        </div>
        
        <div className="items">
          {
            list.map((info) => {
              return(<div className="singleItem" key={info.id}>
              <p>{info.data}</p>
              <i className='fa fa-trash-alt -btn' onClick={() => dispatch(deleteTodo(info.id))} ></i>
            </div>
            );
          

            }
            )}
        </div>






      </div>
      
    </div>
    </>
    );
}

export default Todo;