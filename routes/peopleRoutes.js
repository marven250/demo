const express = require("express");
const router = express.Router();
const client = require("../DB");
const renderHtml = require("../Views/view");




router.get("/", async (req, res)=>{
    // const people = listPeople();
    const data = await client.query('SELECT * FROM peoples');
    const people = data.rows;
    res.json(people);
})

router.get("/person/view", (req, res)=>{
    // const people = listPeople();
    const htmlView = renderHtml()
    res.send(htmlView);
})

router.post("/person/add", async (req, res, next)=>{
    // const people = listPeople();
    try{
        const {name, age} = req.body;
    await client.query('INSERT INTO peoples (name, age) VALUES ($1 , $2)', [name, age]);
    res.redirect("/people");
    }catch(err){
        next(err);
    }  
})

router.get("/person/remove/:id", async (req, res, next)=>{
    const personId = req.params.id;
    try{
    await client.query('DELETE FROM peoples WHERE id = $1', [personId]);
    res.redirect("/people");
    }catch(err){
        next(err);
    }  
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