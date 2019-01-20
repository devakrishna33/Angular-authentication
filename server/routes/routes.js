const express = require('express');
const router = express.Router();
const UserModel = require('../models/user.model');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const db = "mongodb://devakrishna33:aaaaaaaa8@ds159377.mlab.com:59377/doctorsdb";
mongoose.connect(db, err => {
  console.log(err);
});

//Verifying token
function verifyToken(req, res, next){
  if( !req.headers.authorization ){
    return res.status(401).send('Unauthorized');
  }
  const token = req.headers.authorization.split(' ')[1];
  const payload = jwt.verify(token, 'secretKey');
  if( !payload ){
    return res.status(401).send('Unauthorized');
  }
  req.userId = payload.subject;
  next();
}

router.post('/register', (req, res) => {
  const userData = new UserModel(req.body);
  userData.save((err, data) => {
    if(err){
      console.log(err);
      return;
    }
    else{
      const payload = {
        subject: data._id,
      };
      const token = jwt.sign(payload, 'secretKey', )
      return res.status(200).send({token});
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
    const payload = {
      subject: data._id,
    };
    const token = jwt.sign(payload, 'secretKey', )
    return res.status(200).send({token});
  })
});


router.get('/doctors', (req, res) => {
  const doctors = [
    {
      name: 'David Tennant',
      speciality: 'Hair',
    },
    {
      name: 'Matt Smith',
      speciality: 'Run',
    },
    {
      name: 'Peter Capaldi',
      speciality: 'Anger',
    },
  ];
  return res.send(doctors);
});


router.get('/companions', verifyToken, (req, res) => {
  const companion = [
    {
      name: 'Rose Taylor',
      end: 'Love',
    },
    {
      name: 'Martha',
      end: 'Left',
    },
    {
      name: 'Donna',
      end: 'Forgot',
    },
  ];
  return res.send(companion);
});

module.exports = router;
