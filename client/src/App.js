import React, { useState } from "react";
import ListItem from "./ListItem";
function App() {
  console.log("rendered");
  const [name, setName] = useState("");
  const [curlist, setcurlist] = useState([]);

  //delete item from list
  const deletebyid = (id) => {
    fetch(`https://to-do-list-madhav-kotak.herokuapp.com/delete/${id}`, {
      // fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error: " + err));
    console.log("Deleting item of id " + id + " from database...");

    const newarr = [];

    curlist.forEach((item) => {
      if (item._id !== id) {
        newarr.push(item);
      }
    });
    setcurlist(newarr);
  };

  // add item to list
  const additem = async (usr, lst) => {
    if (!lst) {
      return;
    }
    console.log("New item: " + lst + " added...");
    const data = await fetch(
      `https://to-do-list-madhav-kotak.herokuapp.com/newitem`,
      // `http://localhost:5000/newitem`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: usr, list: lst }),
      }
    ).then((response) => response.json());
    // console.log("new data which has to be added i curlist is : " + data);
    setcurlist([...curlist, data]);
  };

  // get item from list by name
  const getdata = async (nm) => {
    const dat = [];
    console.log("Getting item from database");
    const data = await fetch(
      `https://to-do-list-madhav-kotak.herokuapp.com/list`,
      // `http://localhost:5000/list`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nm }),
      }
    ).then((response) => response.json());

    data.forEach((item) => {
      dat.push(item);
    });
    setcurlist(dat);
    // console.log(dat);
  };

  //setting name
  const handleenter = (name) => {
    setName(name);
    console.log("Name:  " + name);
    getdata(name);
  };

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  // delete item button
  const handledelete = (id) => {
    deletebyid(id);
  };

  // add new task button
  const handlenewtask = (task) => {
    additem(name, task);
    console.log("new task was added: " + task);
    document.getElementById("newtask").value = "";
  };

  return (
    <div className="App">
      {/* asking name  */}
      {/* <div
        style={{ display: name === "" ? "inline" : "none" }}
        className="name"
      >
        <div className="label">Enter your name</div>
        <div className="input">
          <input type="text" id="askname" placeholder="Enter your name" />
        </div>
        <div className="add">
          <button
            id="add"
            onClick={() =>
              handleenter(document.getElementById("askname").value)
            }
          >
            Enter{" "}
          </button>
        </div>
      </div> */}

      <div
        style={{ display: name === "" ? "inline" : "none" }}
        class="g-signin2"
        data-onsuccess="onSignIn"
      ></div>
      {/* body */}

      <div
        className="main"
        style={{ display: name === "" ? "none" : "inline" }}
      >
        <div className="greet">Welcome {name}!</div>

        {/* add new task */}
        <div className="additem">
          <div className="label-2">Add task:</div> <br />
          <input type="text" id="newtask" placeholder="Enter your task" />{" "}
          <br />
          <button
            id="addtask"
            onClick={() => {
              handlenewtask(document.getElementById("newtask").value);
            }}
          >
            Add
          </button>
        </div>

        {/* displaying list */}
        <div className="list">
          <div className="label-2">Your List</div>
          <div className="coll">
            {" "}
            {curlist.map((item) => {
              return (
                <ListItem
                  key={item.list}
                  text={item.list}
                  id={item._id}
                  deletefunc={handledelete}
                />
                // <><div className="listitem">
                // <h1  key={item._id}>{item.list}</h1>

                // <button id="delete" onClick={() => handledelete(item._id)}>
                //   Delete this{" "}
                // </button></div>
                // </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
