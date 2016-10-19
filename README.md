# EventReporter

Voici le projet pour la Nuit de l'info 2015 de l'équipe Elseware (Strasbourg).

Il s'agit d'un gestionnaire d'incidents avec géolocalisation.

Nous avons réussis, avec ce projet, à obtenir la première place pour le défi [Objectif remote work](http://www.nuitdelinfo.com/n2i/defis/16).

Liens utiles :
 * [Le sujet de la Nuit de l'info 2015](http://www.nuitdelinfo.com/nuitinfo/_media/la_nuit_de_l_info_2015_-_sujet.pdf)
 * [Les résultats des différents défis](http://www.nuitdelinfo.com/nuitinfo/defis2015:start)

# Mise en route

Tout d'abord veillez à avoir les dernières versions de `npm` et `nodejs`.

Ensuite faites en sorte que vous avez une commande `node`. Si ce n'est pas le cas, il suffira simplement de faire un `sudo ln -s /usr/bin/nodejs /usr/bin/node` pour créer un lien symbolique. En appelant la commande `node` cela va appeler la commande `nodejs`.

Vérifiez ensuite également que vous avez bien une commande `gulp`. Si ce n'est pas le cas, lancez simplement la commande `sudo npm install -g gulp` pour l'installer globalement sur votre système.

Une fois que vous avez tous ces prérequis, lancer un simple `npm install` (ou `yarn` si vous l'avez installé).

Ensuite il faudra lancer la commande `npm run-script build` ou bien tout simplement `gulp build` pour générer les fichiers manquants.

Pour lancer l'application, il vous suffira alors de lancer la commande `npm start` et vous rendre sur la page [http://localhost:3000](http://localhost:3000) :wink:

