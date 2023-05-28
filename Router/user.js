const expres=require('express')
const router=expres.Router();


router.get('/',(req,res)=>{
    res.send("User");
})
router.get('/new',(req,res)=>{
    res.send("new user");
})

router.get('/:id',(req,res)=>{
    // res.send("heu");
    let id=req.params.id;
    res.send("give me the user with ID :"+ id);
});

module.exports =router;