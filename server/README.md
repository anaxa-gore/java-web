# Module "serveur"

Ce module contient l'ensemble de l'application **serveur** JAVA. 

#### Exemple 1 : application simple
```
+-- server/
|  +-- pom.xml
|  +-- src/
|  |  +-- main/
|  |  |  +-- webapp/
|  |  |  |  +-- WEB-INF/
|  |  |  |     +-- web.xml
```
L'application est simple. Toute l'application est contenue dans le module `server` qui est packagé
directement en `war`.

#### Exemple 2 : application complexe
Sur un projet plus important, il peut être intéressant de créer plusieurs sous-modules afin de mieux 
organiser le code applicatif.

Par exemple
```
+-- server/
|  +-- pom.xml
|  +-- common/
|  |  +-- pom.xml
|  |  +-- src/
|  +-- authentication/
|  |  +-- pom.xml
|  |  +-- src/
|  +-- module1/
|  |  +-- pom.xml
|  |  +-- src/
|  +-- module2/
|  |  +-- pom.xml
|  |  +-- src/
|  +-- application/
|  |  +-- pom.xml
|  |  +-- src/
|  |  |  +-- main/
|  |  |  |  +-- webapp/
|  |  |  |  |  +-- WEB-INF/
|  |  |  |  |  |  +-- web.xml
```
Dans l'exemple ci-dessus, on peut avoir :
* `server` est le module racine de l'application qui contient tous les modules dont l'application va 
avoir besoin
* Le module `common` est utilisé par tous les sous-modules et est en mode packaging `jar`, 
* Le module `authentication` contient uniquement le code nécessaire à la sécurité et est utilisé par
les modules applicatifs. Il est également en mode packaging `jar`,
* `module1` et `module2` sont des modules applicatifs métier, également en mode packaging `jar`
* `application` est l'application serveur elle-même et est en mode packaging `war`.