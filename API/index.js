const express = require('express');
const app = express();

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

app.get('/myMath/randomize', function(req, res) {
  const min = req.query.min;
  const max = req.query.max;

  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return res.status(400).send({ error: 'Au moins un des paramètres d’entrée n’est pas valide. Entier uniquement.' });
  }
  
  const randomNumber = randomNumberBetween(min, max);
  res.json({
    "randomNumber": randomNumber
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on port ${port}`));