# EventReporter

Voici le projet pour la Nuit de l'info 2015 de l'équipe Elseware (Strasbourg).

L'équipe était composé de : nsutter, zatteo, ludovicm67, sandhose et qwendling.

Il s'agit d'un gestionnaire d'incidents avec géolocalisation.

Nous avons réussis, avec ce projet, à obtenir la première place pour le défi Objectif remote work, proposé par Umanis.


# Mise en route

Tout d'abord veillez à avoir les dernières versions de `npm` et `nodejs`.

Ensuite faites en sorte que vous avez une commande `node`. Si ce n'est pas le cas, il suffira simplement de faire un `sudo ln -s /usr/bin/nodejs /usr/bin/node` pour créer un lien symbolique. En appelant la commande `node` cela va appeler la commande `nodejs`.

Vérifiez ensuite également que vous avez bien une commande `gulp`. Si ce n'est pas le cas, lancez simplement la commande `sudo npm install -g gulp` pour l'installer globalement sur votre système.

Une fois que vous avez tous ces prérequis, lancer un simple `npm install` (ou `sudo yarn` si vous l'avez installé).

Changez également l'url contenu dans `db.js` afin d'établir une connexion avec votre base de données MongoDB. Remplacez :
 * `USER` par l'utilisateur,
 * `PASSWORD` par le mor de passe,
 * `HOST` par le nom d'hôte,
 * `PORT` par le port utilisé (par defaut : 27017),
 * `DATABASE` par le nom de votre base de données

Ensuite il faudra lancer la commande `npm run-script build` ou bien tout simplement `gulp build` pour générer les fichiers manquants.

Pour lancer l'application, il vous suffira alors de lancer la commande `npm start` et vous rendre sur la page [http://localhost:3000](http://localhost:3000) :wink:

