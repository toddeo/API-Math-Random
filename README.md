# API-Math-Random

Ce code crée une API Express qui retourne un nombre aléatoire compris entre deux entrées fournies par le client.

La première ligne importe le module Express pour créer une instance de l'application Express, app.

La fonction randomNumberBetween retourne un nombre aléatoire compris entre les valeurs minimales et maximales passées en entrée. Elle utilise la méthode Math.floor() pour arrondir le nombre aléatoire à l'entier inférieur et Math.random() pour générer un nombre aléatoire compris entre 0 et 1.

Le endpoint /myMath/randomize est créé en utilisant la méthode app.get(). Lorsqu'un client effectue une requête GET sur ce point de terminaison, le code dans la fonction de rappel sera exécuté. Les valeurs minimales et maximales sont récupérées en utilisant req.query.min et req.query.max.

Les entrées sont vérifiées pour s'assurer qu'elles sont des entiers en utilisant la méthode Number.isInteger(). Si une ou les deux entrées ne sont pas des entiers, le code retourne une erreur avec le statut 400 et le message "Au moins un des paramètres d’entrée n’est pas valide. Entier uniquement."

Si les entrées sont des entiers, la fonction randomNumberBetween() est appelée pour générer un nombre aléatoire compris entre les entrées minimales et maximales. Le résultat est ensuite retourné dans la réponse au client sous forme d'un objet JSON avec une propriété randomNumber.

Enfin, l'application écoute sur le port 5000 ou sur le port défini par la variable d'environnement PORT. Si aucun port n'est défini par la variable d'environnement, 5000 est utilisé par défaut. La méthode console.log() est utilisée pour afficher un message indiquant que l'API est en cours d'exécution sur le port spécifié.