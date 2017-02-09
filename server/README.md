# Module "serveur"

Ce module contient l'ensemble de l'application serveur JAVA. En fonction des besoins,
ce module peut être unique ou lui-même contenir d'autres sous-modules afin de mieux organiser
le code applicatif.

Par exemple :
```
+-- server/
    +-- pom.xml
    +-- common/
        +-- pom.xml
        +-- src/
    +-- authentication/
        +-- pom.xml
        +-- src/
    +-- module1/
        +-- pom.xml
        +-- src/
    +-- module2/
        +-- pom.xml
        +-- src/
    +-- application/
        +-- pom.xml
        +-- src/
```

Dans l'exemple ci-dessus, on peut avoir :
* `server` est le module racine de l'application à partir duquel on va construire notre `war`
* Le module `common` est utilisé par tous les sous-modules, 
* Le module `authentication` contient uniquement le code nécessaire à la sécurité et est utilisé par les modules applicatifs,
* `module1` et `module2` sont des modules applicatifs métier.