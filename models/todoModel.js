const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    
    title: {
      type: String,
      require:true
      
    },
    completed:{
      type: Boolean,
      require :true
    }
    
    
  }
  
);

module.exports = mongoose.model("Todo", TodoSchema);