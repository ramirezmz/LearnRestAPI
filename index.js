const express = require('express');
const app = express()

let userList = [
  {
    name: "Robertopaolo",
    age: 23,
    married: true,
  },
  {
    name: "Amanda",
    age: 23,
    married: true,
  },
  {
    name: "Pedro",
    age: 1,
    married: false,
  },
  {
    name: "Thor",
    age: 18,
    married: false,
  },
]

app.get('/getMessage', (req, res) => {
  res.json(userList);
});

app.listen('3001', () => {
  console.log("Server running on port 3001");
});  