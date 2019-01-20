const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model');
const mongoose = require('mongoose');
const db = "mongodb://devakrishna33:aaaaaaaa8@ds159377.mlab.com:59377/doctorsdb";
mongoose.connect(db, err => {
  console.log(err);
});

router.get('/', (req, res) => {
  res.send("Hello world");
});

router.post('/register', (req, res) => {
  const userData = new UserModel(req.body);
  userData.save((err, data) => {
    if(err){
      console.log(err);
      return;
    }
    else{
      res.status(200).send(data);
    }
  })
});

router.post('/login', (req, res) => {
  UserModel.findOne({email: req.body.email}, (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    if(!data){
      return res.status(401).send("No user found");
    }
    if( !(data.password == req.body.password) ){
      return res.status(401).send("Incorrect Password");
    }
    return res.status(200).send("success");
  })
});

module.exports = router;
