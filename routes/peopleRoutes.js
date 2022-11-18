const express = require("express");
const router = express.Router();
const client = require("../DB");




router.get("/", async (req, res)=>{
    // const people = listPeople();
    const data = await client.query('SELECT * FROM peoples');
    const people = data.rows;
    res.json(people);
})


router.get("/:id", async (req, res, next)=>{
    try{
        const personId = req.params.id;

    const data = await client.query('SELECT * FROM people WHERE id =$1', [personId]);
    const person = data.rows
    res.json(person);
    }catch(err){
        next(err)
    }
    
})



module.exports = router;