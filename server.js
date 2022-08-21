const mongoose = require('mongoose');
const app = require('./app');

const {MONGODB_URI, PORT} = process.env;

mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('Database connection successful');
      app.listen(PORT || 8888);
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });


