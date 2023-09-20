
const express=require("express");
const dotenv=require("dotenv");

const connectDb = require("./config/dbConnection");
const routes= require('./routes/todoRoutes')
const Todo = require("./models/todoModel");
const cron=require("node-cron")
const cors=require("cors")
dotenv.config();

const app=express();
const port=5000 ;

app.use(express.json())//body parser
app.use(cors())
connectDb();

app.use(routes);


app.listen(port,()=>{
    console.log(`sever running on port ${port}`);
});
cron.schedule(' 0 0 * * * ',async()=>{
    try {
        // Find and delete completed tasks
        const result = await Todo.deleteMany({ completion: true });
    
        console.log(`Cron job ran at ${new Date()}`);
        console.log(`Deleted ${result.deletedCount} completed tasks.`);
      } catch (err) {
        console.error('Cron job error:', err);
      }
    

})
