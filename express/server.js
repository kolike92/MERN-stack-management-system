
const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, '/www')));
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) { //for CORS error
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header(
	  "Access-Control-Allow-Headers",
	  "Origin, X-Requested-With, Content-Type, Accept, Authorization"
	);
	next();
  });

  //connecting Mongo DB
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://kolike92:********@app1-shard-00-00-efhao.mongodb.net:27017,app1-shard-00-01-efhao.mongodb.net:27017,app1-shard-00-02-efhao.mongodb.net:27017/test?ssl=true&replicaSet=app1-shard-0&authSource=admin&retryWrites=true&w=majority');
  //connecting the Schema
  const User = require('./users')
// A route for /  home page 
var home = (req, res) => {
    //find all users
    User.find((err, users) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(users);
            console.log(users);
        }
    });
}
var cUser = (req, res) => {
  let user= new User(req.body); 
  user.save()
  .then(()=>{ 
    console.log('User created!');
    User.find(function(err, users) {
      if (err) {
        console.log(err);
      }
      else {
        res.status(200).json({'user': 'user added successfully'});
      }
  })})
  .catch(err => {
    res.status(400).send('adding new user failed');
  });
}

var dUser=(req,res)=>{
  let  id=req.body.body;
  User.remove({ _id: id})
      .then(()=>{
        console.log('User Deleted!')
        User.find((err, users) => {
          if (err) {
              console.log(err);
          }
          else {
              res.send(users);
              console.log(users);
          }
      });
    }
      )
      .catch(err=>{
        res.status(400).send('Delete Failed!');
        }
      )
}
var oneUser = (req, res) => {
  let id= req.params.id; 
  User.findById(id, (err, user) => {
    if (err) {
      console.log(err);
    }
    else {
      res.send(user);
      console.log(user);
    }
  });
}

var eUser = (req, res) => {
  let id=req.body[1]
  //console.log('helloo',req.body) 
  User.findById(id, function(err, user) {
    if (err) {
      console.log(err);
    }
    else {
      user.fname=req.body[0].fname
      user.lname=req.body[0].lname
      user.sex=req.body[0].sex
      user.age=req.body[0].age
      user.password=req.body[0].password
      user.save(function(err) {
        if (err) {
          console.log(err);
        }
        else {
          console.log('User updated');
          User.findById(id, function(err, user) {
              if (err) {
                console.log(err);
              }
              else {
                console.log('now this is updated user',user);
                res.send(user)//(200).json({'user': 'user updated successfully'});
              }
          });
        }
      });
    }
  });
}


app.get('/', home);
app.get('/eUser/:id', oneUser);
app.put('/eUser/',eUser);
app.post('/cUser', cUser);
app.delete('/dUser',dUser);

app.use((req, res) => {
	res.send("404");
	}
);
app.listen(8888, () => 
                    console.log('Listening on port 8888!')
                );
