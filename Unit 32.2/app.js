const express = require('express');
const itemsRoutes = require("./itemsRoutes");
const ExpressError = require('./middleware')

const app = express();

app.use(express.json());
app.use('/items', itemsRoutes);


app.use(function (req, res, next) {
  return new ExpressError("Not Found", 404);
});


app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
});

app.listen(3000, function(){
  console.log('App on port 3000');
}) 