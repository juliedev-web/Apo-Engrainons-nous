<p align="center">
  <a href="https://engrainons-nous.com">
    <img alt="Engrainons-nous-logo's" height="" src="https://nsa40.casimages.com/img/2021/08/23/210823090920339037.png">
  </a>	


Ce projet a été réalisé dans le cadre de l'Apothéose, le projet de fin de formation de l'école [O'Clock](https://oclock.io/). Il a été réalisé en un mois avec une équipe de 5 personnes : 3 devs front et 2 devs back, en méthode agile avec des sprints d'une semaine.

- Sprint 0 : rédaction du cahier des charges
- Sprint 1 et 2 : code
- Sprint 3 : terminer les fonctionnalités commencées si besoin, résolution de bugs, améliorations CSS
- A la fin du sprint 3 : démo live sur la [chaîne YouTube de l'école](https://www.youtube.com/watch?v=vfZ4V3Wco-Y)


**Engrainons-Nous** est une plateforme d'échanges de graines de semences potagères, libres de droit et reproductibles, pour préserver les semences et la biodiversité. La plateforme permet aux utilisateurs :

- D'échanger leurs graines sur le site
- D'obtenir des informations sur les types de graines via des cartes détaillées
- D'obtenir les coordonnées des autres utilisateurs pour échanger les graines qui les intéressent

<a href='https://www.casimages.com/i/210819044439208775.png.html' target='_blank' title='Wireframe'><img src='https://nsa40.casimages.com/img/2021/08/19/210819044439208775.png' border='0' alt='Mon image' /></a>


## Stack technique

-  <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"> HTML  
- <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"> CSS and SCSS <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg">
- <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"> JavaScript
- <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"> React.js
- <img height="20px" src="https://redux.js.org/img/redux.svg"> Redux
- <img height="20px" src="https://assets.zabbix.com/img/brands/nodejs.svg"> Node.js
- <img height="20px" src="https://github.com/expressjs/expressjs.com/raw/gh-pages/images/favicon.png"> Express.js
- <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"> PostgreSQL
- <img height="20px" src="https://grafikart.fr/uploads/icons/jwt.svg"> JWT (authentication )
- <img height="20px" src="https://user-images.githubusercontent.com/43313420/105893220-1bae8780-6013-11eb-87be-eeac845ecc6f.png"> Axios
  

Pour cette V1, react.paginate a été utilisé pour générer une pagination, et chat engine pour la mise en place d'une messagerie entre utilisateurs

Nodemailer a été utilisé pour la confirmation d'inscription par mail

Whimsical a servi à dessiner les wireframes et Trello était utilisé pour la gestion du projet

## Pour les versions suivantes
Pas mal d'idées étaient présentes pour la V2 et les versions suivantes :

- <img height="20px" src="https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg"> Socket.io pour refaire le chat
- ajout de favoris
- ajout d'une page de blog sur les actualités
- possibilité de voir les graines d'un autre utilisateur (si on est intéressé par plusieurs variétés)
- etc.

## Charte graphique

### Logo (font : Indie Flower)

<a href='https://www.casimages.com/i/210823090920339037.png.html' target='blank' title='Mon image'><img src='https://nsa40.casimages.com/img/2021/08/23/210823090920339037.png' border='0' alt='Mon image' /></a>


### Site
**Nunito** <a href='https://www.casimages.com/i/210823091156206191.png.html' target='_blank' title="font's screenshot"><img src='https://nsa40.casimages.com/img/2021/08/23/210823091156206191.png' border='0' alt="Font Nunito in regular et Bold" /></a>

### Palette de couleurs

- White : <input type="color" value="#FFFFFF"> (#FFFFFF)</input>
- Alabaster : <input type="color" value="#E9EDE6"> (#E9EDE6)</input>
- Alice Blue : <input type="color" value="#E4EBF0"> (#E4EBF0)</input>
- Prussian Blue : <input type="color" value="#173042"> (#173042)</input>
- Dark Olive Green : <input type="color" value="#4A6C2F"> (#4A6C2F)</input>

<a href='https://www.casimages.com/i/210823090920253557.png.html' target='_blank' title='Color palette of website'><img src='https://nsa40.casimages.com/img/2021/08/23/210823090920253557.png' border='0' alt='Color palette : White (#FFFFFF), Alabaster (#E9EDE6), Alice Blue (#E4EBF0), Prussian Blue (#173042), Dark Olive Green (#4A6C2F)' /></a>

### Déploiement 
Le site a été déployé sur Netlify pour la démo. Il devrait être redéployé sur une adresse dédiée plus tard.

## Pour tester le projet localement après l'avoir cloné

**La version 14 (minimum) de Node est requise**

Install Node.js :

Debian / Ubuntu
```
sudo apt-get update
sudo apt-get install nodejs npm
```
Pour vérifier la version de node.js installée :
```
nodejs --version
```
Une fois node.JS & NPM installés :
```
npm install
```
Cette commande installera les dépendances nécessaires au projet (à retrouver dans le fichier package.json)
