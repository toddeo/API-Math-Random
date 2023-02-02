const express = require('express');
const app = express();

// Fonction pour générer un nombre aléatoire entre "min" et "max"
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Création d'un endpoint à l'aide de "app.get()" pour retourner un nombre aléatoire entre les valeurs min et max
app.get('/myMath/randomize', function(req, res) {
  // Récupération des valeurs min et max de la requête HTTP
  const min = req.query.min;
  const max = req.query.max;

  // Vérification que les valeurs sont des entiers
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    // Retour d'une erreur 400 avec le message d'erreur si au moins l'un des paramètres n'est pas un entier
    return res.status(400).send({ error: 'Au moins un des paramètres d’entrée n’est pas valide. Entier uniquement.' });
  }

  // Génération du nombre aléatoire
  const randomNumber = randomNumberBetween(min, max);
  // Retour de la réponse avec le nombre aléatoire généré
  res.json({
    "randomNumber": randomNumber
  });
});

// Définition du port à utiliser pour l'application, en utilisant la variable d'environnement "PORT" s'il existe, sinon le port 5000 sera utilisé par défaut
const port = process.env.PORT || 5000;
// Démarrage de l'application pour écouter sur le port spécifié
app.listen(port, () => console.log(`API running on port ${port}`));