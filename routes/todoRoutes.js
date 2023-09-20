
const {Router} =require("express")

const router= Router()

const{getTodo,putTodo,deleteTodo,postTodo,getsTodo} =require("../controllers/controllers");

router.get('/',getTodo);
router.post('/save',postTodo)

router.put("/:id",putTodo)
router.delete("/:id",deleteTodo)
router.route("/:id").get(getsTodo);
module.exports=router;