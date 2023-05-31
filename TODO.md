_NOTE _

**Sprint 2**
  
  connexion animals
    - navbar, companion, reminderOwner 

**A faireau sprint 3**
ROUTES & composants

- Créé le composant "vous êtes inscrit"
- Créé le composant de la route 404
- Ajouter les liens sur les icones de la navBar + liens sur les animaux dans account
- Mettre "à venir" sur les fonctionnalités non créés
- empecher l'accès à la page Vetrinary depuis owner et vice versa
- Page de l'équipe
- Attention lors d'une recherche dont le resultat est null, erreur
- Modifier la date dans le contact du veterinaire
- Boutton nouvelle recherche car impossible de lancer une seconde recherche

CSS

- Ajouter le responsive sur toutes les pages
- Page account => modifier les icones et la mise en pages des animaux
- NavBar toujours de la meme taille selon les pages + longueur
- icons comanion dans account

REFACTO

- Pensez à remplacer les clés unique par les ID,
- Refacto les formulaires dans un composant à part

Reminder : 
- Changer les champs disponibles selon le role de l'utilisateur : Veterinaire - Ne pas boucler sur les animaux / Owner - Boucler sur les animaux.
- Changer les routes : ne plus afficher  <Route path="/account/reminders/new" element={<RemindersOwner />} /> mais  <Route path="/account/reminders/new" element={<RemindersOwner />} />
- Changer le nom du fichier

**Aide au code**

- Seul le formulaire d'inscription doit avoir accès aux valeurs des inputs (que ce soit text, email, password ou radio) -> useState (inutile d'alourdir le projet avec Redux)

- Il faut intercepter le formulaire à sa soumission

- A la soumission du formulaire, on a deux choix :

  - Utiliser un middleware pour consommer l'API
  - Consommer l'API directement dans le composant de la page Register

- La consommation de l'API (via axios) doit inclure les différentes valeurs. Comme on ne passe pas par Redux, il faut faire ça :
  - Cas du middleware :
    - Transmettre dans l'action un payload (= charge utile, soit la donnée sous forme d'objet -> { username: '', password: '', /_ ... _/ })
  - Cas de la consommation dans le composant :
    - Utiliser les valeurs des useState (c'est directement dans le composant, c'est donc plus pratique !)
- Une fois la réponse obtenue (= await axios.post() || axios.post().then()), il faudrait envisager la redirection sur la page "/" (accueil)

1. `git init` pour initialiser un projet en local
2. `git remote add origin git@github.com:VotrePseudoGithub/VotreRepoPerso` pour lier votre dépot local sur le repos distant (personnel, pas apothéose !)
3. `git remote add apotheose git@github.com:O-clock-Quasar/projet-15-dogtolib-front` pour lier ce dépôt distant en parallèle de votre dépôt personnel
4. `git pull apotheose master` pour récupérer les données du dépôt d'apothéose
5. `git add . && git commit -m "merge from apotheose" && git push` pour pousser les données récupérées plus tôt depuis le dépôt d'apothéose, vers votre dépôt personnel (pour la première fois, il faudra peut-être faire un --set-upstream)

Fiche récap multi remotes : https://kourou.oclock.io/ressources/fiche-recap/git-remotes/
