const exp = require('express');
const app = exp();
const userModel = require('./models/user');
const cookieParser = require('cookie-parser');

app.set('view engine',"ejs");
app.use(exp.json());
app.use(exp.urlencoded({extended: true}));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.render('index');
});

app.listen(3000);