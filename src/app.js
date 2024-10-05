// src/app.js
const express = require('express');
const cors = require('cors');
const session = require('express-session');
//const passport = require('./auth/passport.js');
//const routes = require('./routes/api');
//const auth_routes = require('./routes/auth');
const routes_items = require('./routes/items');
//const routes_offers = require('./routes/offers')
//const routes_comments = require('./routes/comments');
//const routes_likes    = require('./routes/likes');
const { PORT, SECRET_SESSION } = require('../config');
const path = require("path");
//const user_routes = require('./routes/users');
//const fs = require('fs');

// Read the contents of the secret file
const secretSessionKey = SECRET_SESSION; // fs.readFileSync('./.secrets/session.txt', 'utf8').trim();
const app = express();

app.use(cors({ origin: ["*", "http://localhost:3000", "http://localhost:5173"
                            , "http://localhost:5174" , "http://estore-front.com"
                            , "https://estore-front.com", "https://www.estore-front.com"
                            , "http://admin.estore-front.com", "https://admin.estore-front.com"
                            , "http://development.estore-front.com", "https://development.estore-front.com"
                            , "https://www.admin.estore-front.com"
                          ] }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: secretSessionKey,
  resave: false,
  saveUninitialized: false,
}));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use('/api', routes);
app.use('/api/items', routes_items);
//app.use('/api/search', routes_search);
//app.use('/api/comments', routes_comments);
//app.use('/api/likes', routes_likes);
//app.use('/auth', auth_routes);
//app.use(express.static(path.join(__dirname, 'public')));
let publicPath = path.join(__dirname, "../public/uploads/img/");
//1234-Sample1.png

// Error Handling... this comes last
app.use(function(err, req, res, next){

});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});