const express = require('express');
const router = new express.Router();
// const items = require("./fakeDb");

router.get('/', (req,res) => {
    return res.json("get route");
});

router.post('/', (req,res) => {
    return res.json("post route");
});

router.get('/:name', (req,res) => {
    // const item = items.find(i=> i.name === + req.params.name);
    res.json(name);
});



module.exports = router;