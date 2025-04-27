# Dance Battle App

## Description
Dance Battle App est une application React qui permet aux utilisateurs de créer et d'afficher une liste de battles de danse à venir. Les utilisateurs peuvent soumettre des informations sur les battles, y compris les noms des danseurs, le style de danse, la date et l'heure. L'application affiche également une liste de ces battles avec un bouton "Voir plus" pour afficher des détails supplémentaires dans un modal.

## Structure du projet
```
dance-battle-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── battle
│   │   │   ├── Battle.jsx
│   │   │   └── BattleModal.jsx
│   │   ├── form
│   │   │   ├── Form.jsx
│   │   │   └── form.css
│   │   └── list
│   │       ├── BattleList.jsx
│   │       └── list.css
│   ├── App.jsx
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## Installation
1. Clone le dépôt:
   ```
   git clone <URL_DU_DEPOT>
   ```
2. Accédez au répertoire du projet:
   ```
   cd dance-battle-app
   ```
3. Installez les dépendances:
   ```
   npm install
   ```

## Exécution
Pour démarrer l'application, utilisez la commande suivante:
```
npm run dev
```
Cela lancera l'application dans votre navigateur par défaut à l'adresse `http://localhost:3000`.

## Fonctionnalités
- Soumettre des informations sur les battles de danse via un formulaire.
- Afficher une liste de battles de danse à venir.
- Voir plus de détails sur chaque battle dans un modal.

## Technologies utilisées
- React
- CSS
- JavaScript

## Contribuer
Les contributions sont les bienvenues! Veuillez soumettre une demande de tirage pour toute amélioration ou correction de bogue.
