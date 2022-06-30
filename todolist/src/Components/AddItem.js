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
  return (
    <>
      <div className="container">
        <div className="form-group my-5">
          <label htmlFor="textarea">Enter your task here: </label>
          <textarea className="form-control" id="textarea" rows="1"></textarea>
          <button className="btn btn-primary my-4" onClick={appendItem}>
            Add
          </button>
          <br />
          {list.map((obj) => {
            // return obj.desc;
            return <li className='list-group-item' key={obj.index}>{obj.desc}</li>;
          })}
        </div>
      </div>
    </>
  );
}

export default AddItem;
