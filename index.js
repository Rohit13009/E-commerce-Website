const express = require('express');
const app = express();
// const mysql = require("mysql2");
const path = require('path');
const bodyParser = require('body-parser');
// const errorController = require('./controllers/error');
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// const multer = require('multer')

app.set('view engine', 'ejs');
app.set('views', 'views');

// const connection = mysql.createConnection({
//   host : "localhost",
//   user : "root",  
//   database : "complete-nodejs",
//   password : "1234"
// });
// const connection1 = connection.promise();
// const sessionStore = new MySQLStore({}, connection1);

// const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/index');
const authRoutes = require('./routes/auth')
// const authRoutes = require("./routes/auth");

// const fileStorage = multer.diskStorage({
//   destination:(req, file, cb)=>{
//     cb(null, "image");
//   },
//   filename:(req,file,cb)=>{
//     cb(null,file.originalname);
//   }
// })

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({storage: fileStorage}).single('image'));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use('/images',express.static(path.join(__dirname, 'images')));
// app.use('/image',express.static(path.join(__dirname, 'image')));
// app.use(
//   session({
//       secret: 'cookie_secret',
//       resave: true,
//       saveUninitialized: true,
//       store: sessionStore,      // assigning sessionStore to the session
//   })
//   );
  
// app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);
// app.use(authRoutes);
// app.use(errorController.get404);

app.listen(4000,()=>{console.log("server is running on port 4000")});
