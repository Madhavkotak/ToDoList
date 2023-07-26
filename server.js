const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const process = require("process");
const port = process.env.PORT || 5000;
const app = express();
const corsOptions = {
  origin: "https://to-do-list-madhav-kotak.herokuapp.com",
  // origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());

//connecting to database
mongoose

  .connect(
    
     "mongodb://localhost:27017",
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to database successfully..."))
  .catch((error) => {
    console.log("An error occured while connecting to Database...");
    console.log(error);
  });

const Todo = require("./models/Todo");

//to show all the list items
app.post("/list", async (req, res) => {
  const list = await Todo.find({ name: req.body.name });
  res.json(list);
  console.log(list);
});

//to add a new item to list

app.post("/newitem", (req, res) => {
  const item = new Todo({
    list: req.body.list,
    name: req.body.name,
  });
  item.save();
   res.json(item);
  console.log(item);
});

//to delete an item from the list

app.delete("/delete/:id", async (req, res) => {
  const item = await Todo.findByIdAndDelete({ _id: req.params.id });
  res.json(item);
  console.log(item);
});


if ( process.env.NODE_ENV == "production"){

  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {

      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })


}
//listening to server
app.listen(port, () => console.log("Server listening to port number 3001 "));
