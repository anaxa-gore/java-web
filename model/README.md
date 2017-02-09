# Module "modèle"

Ce module contient l'ensemble des scripts **SQL** nécessaires à l'initilisation et la mise 
en place de la base de données.

Les scripts nécessaires à la création de la base doivent se trouver dans le répertoire `scripts`.

Si le modèle est généré, le code de génération doit se trouver dans `src/main/java`.
Les fichiers **SQL** générés doivent se trouver dans le répertoire `scripts` au moement de la phase
`package` de maven afin d'être packagés dans le `tar.gz` de scripts avant la fin du build.