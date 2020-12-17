const items = require("./fakeDb");
const express = require('express');

const router = new express.Router();

router.get('', (req, res, next) => {
    try {
      return res.json(items);
    } catch(err){
      return next(err)
    }
  });

router.post('', (req, res, next) => {
    try {
        let name = req.body.name;
        let price = req.body.price;

        items.push({name: name, price: price});
        return res.json({added: {name: name, price: price}})

    } catch (err) {
        next(err)
    }
});

router.get('/:item_name', (req,res, next) => {
    try{
        for (let i of items) {
            if (i.name == req.params.item_name) {
                res.json(i)
            }
        }
    } catch (err) {
        next(err) }

});

router.patch('/:item_name', (req,res) => {
    try {
        for (let i of items) {
            if (i.name == req.params.item_name) {
                i.name = req.body.name;
                i.price = req.body.price;
                return res.json({updated: {name: req.body.name, price: req.body.price}});
            }
        }
    } catch (err) {
        next(err) }
});

router.delete('/:item_name', (req,res) => {
    try {
        for (let i of items) {
            if (i.name == req.params.item_name) {
                let index = items.indexOf(i);
                items.splice(index, 1);
                return res.json({message: "Deleted"});
            }
        }
    } catch (err) {
        next(err) }
});


module.exports = router;