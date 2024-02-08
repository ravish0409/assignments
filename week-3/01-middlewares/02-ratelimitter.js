const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();
let numberOfRequestsForUser = {};
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second


app.use(limit);


function limit(req,res,next){
  let id=req.header('user-id');
  if (!id) {
    return res.status(400).send('User ID is required');
  }
  if(!numberOfRequestsForUser[id]){
    numberOfRequestsForUser[id]=1
  }
  else{
    numberOfRequestsForUser[id]++;
  }
  if(numberOfRequestsForUser[id]>5){
    return res.status(404).send('Too many requests');
  }
  next();

}

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;