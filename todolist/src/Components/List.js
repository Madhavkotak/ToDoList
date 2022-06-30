import AddItem from "./AddItem";
import React, { useState } from "react";
import Notice from "./Notice";
import NavBar from "./Navbar";

function List() {
  return (
    <div>
      <Notice  notice="Please enter value " />
      <NavBar />
      <AddItem />
      <div className="container"></div>
    </div>
  );
}

export default List;
