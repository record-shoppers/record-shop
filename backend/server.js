const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRouters = require('./routes/userRouters');
const recordRouters = require('./routes/recordRouters');
const loginRouters = require('./routes/loginRouters');
const PORT = 5001;

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use('/users', userRouters);
app.use('/records', recordRouters);
app.use('/login', loginRouters);

//MONGODB SETUP
mongoose
  .connect(
    `mongodb://guderian:Colore12@cluster0-shard-00-02.9of72.mongodb.net:27017/test?authSource=admin&replicaSet=atlas-czzf89-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => console.log("MongDB connected..."))
  .catch((err) => console.log(`Error: ${err}`));

//INITIALISE BACKEND
app.listen(PORT, () => {
  console.log(`Backend initialised on port: ${PORT}`);
});

// ERROR HANDLER
app.use(function errorHandler (err, req, res, next) {
  res.status(err.status || 500).send({error: {message: err.message}})
})