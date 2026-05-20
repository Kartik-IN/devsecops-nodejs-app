const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('DevSecOps CI/CD Pipeline Running Successfully 🚀');
});

app.listen(3000, () => {
  console.log('Application running on port 3000');
});