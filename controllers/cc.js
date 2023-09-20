const asyncHandler = require("express-async-handler");
const Todo = require("../models/todoModel");
const getTodo = asyncHandler(async (req, res) => {
  const list = await Todo.find();
  res.status(200).json(list);
});
const postTodo = asyncHandler(async (req, res) => {
  
  const { title,completed} = req.body;
  
  console.log("post")
  const list = await Todo.create({ title,completed}).then((data)=>{
    console.log("data is added");
    console.log(data);
    res.send(data);
  });
  
})

const deleteTodo = asyncHandler(async (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(()=>res.send("deleted ")).catch((err)=>console.log(err))
  
});
const putTodo = asyncHandler(async (req, res) => {
  const {title,completed}=req.body
  Todo.findByIdAndUpdate(req.params.id,{title,completed}).then(()=>res.send("updated"))
  
});


const getsTodo = asyncHandler(async (req, res) => {
    const list = await Todo.findById(req.params.id);
    if (!list) {
      res.status(404);
      throw new Error("Contact not found");
    } else {
      res.status(200).json(list);
    }
  });
   
  


module.exports = {
  getTodo,
  postTodo,
  deleteTodo,
  putTodo,
  getsTodo,
};
