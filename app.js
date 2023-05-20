const express = require('express');
const app = express();
const sequelize = require('./config/database');
const User = require('./models/user-model');
const service=require('./models/service-models');
const rate=require('./models/rating-model');
const logi=require('./models/login-model');
const post=require('./models/post-model');
const connection=require('./models/connection-models');
const connectionRoutes=require('./routes/connections');
const postRoutes=require('./routes/posts');
const loginRoutes=require('./routes/logins');
const serviceRoutes=require('./routes/services');
const userRoutes = require('./routes/users');
const rateRoutes=require('./routes/ratings');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(connectionRoutes);
app.use(postRoutes);
app.use(loginRoutes);
app.use(rateRoutes);
app.use(userRoutes);
app.use(serviceRoutes);
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
    console.log('App server is running on port 3000');
  });


