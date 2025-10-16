# Exercice2-John-WILLIAM
Todolist API - Node.js & Express (Terminal CLI)
Description

Projet de gestion de Todolist avec Node.js et Express.

Les tâches sont stockées en mémoire (pas de base de données).

Interface CLI pour gérer les tâches directement dans le terminal.

Suivi des tâches : ajouter, supprimer, afficher.

Installation

Cloner le projet :

git clone <url-du-repo>
cd Exercice2

Installer les dépendances :

npm install

Créer un fichier .env à la racine :

PORT=5000

Lancer le projet
1. Démarrer le serveur Express
npm run dev

Le serveur écoute par défaut sur le port 5000.

2. Lancer le CLI dans un autre terminal
node cli.js

Tu verras un menu interactif pour :

Afficher les tâches

Ajouter une tâche

Supprimer une tâche

Quitter

Scripts utiles

Commande	Description
npm run dev	Démarre le serveur en mode développement (avec nodemon)
npm start	Démarre le serveur en mode production
node cli.js	Lance l’interface CLI pour gérer les tâches
