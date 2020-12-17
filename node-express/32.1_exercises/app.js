const express = require('express');

const app = express();
const func = require('./functions');


app.get('/mean', (req,res) => {
    const {nums} = req.query;
    if (nums == []) {
        return res.status(400).json(`nums are required`)
    } 

    array = nums.split`,`;
    
    for (let num of array) {
        if (isNaN(num)) {
            return res.status(400).json(`${num} is not a number`)
        } 
    };

    numsArr = array.map(x=>+x);
    
    return res.json({operation: "mean", value: func.findMean(numsArr)});
});



app.get('/median', function(req, res) {
    const {nums} = req.query;
    if (nums == []) {
        return res.status(400).json(`nums are required`)
    } 

    array = nums.split`,`;
    
    for (let num of array) {
        if (isNaN(num)) {
            return res.status(400).json(`${num} is not a number`)
        } 
    }

    numsArr = array.map(x=>+x);

    return res.json({operation: "median", value: func.findMedian(numsArr)});
});



app.get('/mode', function(req, res) {
    const {nums} = req.query;

    if (nums == []) {
        return res.status(400).json(`nums are required`)
    } 

    array = nums.split`,`;
    
    for (let num of array) {
        if (isNaN(num)) {
            return res.status(400).json(`${num} is not a number`)
        } 
    }

    numsArr = array.map(x=>+x);

    return res.json({operation: "mode", value: func.findMode(numsArr)});
});

app.listen(3000, function(){
  console.log('App on port 3000');
}) 