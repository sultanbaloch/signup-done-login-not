var users = [{
    name: "ahmer",
    email: "ahmer@gmail.com",
    password: "123",
}]


var express = require("express");
var cors = require('cors')
var morgan = require('morgan')
// const PORT = process.env.PORT || 3000
var bodyParser = require('body-parser')
var app = express();

app.use(cors());
app.use(morgan('dev'))
app.use(bodyParser.json())

app.post("/signUpInformation", (req, res, next) => {

    var nEmail = req.body.email
    
    var isFound = false;

    for(i=0; i<users.length; i++){

        if (users[i].email === nEmail){
            isFound = true;
            break;
        }

    }
    
    if (isFound){
        res.send("Email Already Exists")
    }

    else {
        users.push(req.body)
        res.send("Sign Up Success fully")
    }

    console.log(users);

});
app.listen(3000, function () {
    console.log("server is running");
}
);
