const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const config = require('./config');
const mongoose = require('mongoose');
const passport = require('passport');
app.use(passport.initialize());

const url = config.mongoUrl;
const connect = mongoose.connect(url,{dbName: "moviehouse"});
app.use(express.json());
//Routes
const menuRoutes = require('./routes/menuRouter');
app.use('/api/menu', menuRoutes);

const movieRoutes = require('./routes/movieRouter');
app.use('/api/movies', movieRoutes);


const userRoutes = require('./routes/userRouter');
app.use('/api/users', userRoutes);

connect.then(() => console.log('Connected correctly to server'), 
    err => console.log(err)
);

// your code
app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
