import React, { useState } from "react";
let ind = 1;
function AddItem(props) {
  const [list, setList] = useState([
  
  ]);
  const appendItem = () => {
    console.log("add was clicked");
    if(document.getElementById('textarea').value){
        const newlist= list.concat({index:ind ,desc:document.getElementById('textarea').value})
        document.getElementById('textarea').value = "";
        {ind++}
        setList(newlist);
    }else{
    }
   
  };
  const delItem = (indx) =>{
    if(list.length == 1){
      setList([])
    }
      console.log("delete was clicked")
      const newlist = list.splice(0,indx-1).concat(list.splice(indx),)
      ind--;
      setList(newlist);
    
  }
  return (
    <>
      <div className="container">
        <div className="form-group my-5">
          <label htmlFor="textarea">Enter your task here: </label>
          <textarea className="form-control" id="textarea" style = {{resize: 'none'}} rows="1"></textarea>
          <button className="btn btn-primary my-4" onClick={appendItem}>
            Add
          </button>
          <br />
          {list.map((obj) => {
            
            // return obj.desc;
            return <li className='list-group-item' key={obj.index}> {obj.desc} <button className="btn btn-sm btn-primary float-right  " 
            onClick = {()=>delItem(obj.index)}>Delete</button></li>;
          })}
        </div>
      </div>
    </>
  );
}

export default AddItem;
