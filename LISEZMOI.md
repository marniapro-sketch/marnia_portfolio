# Mon portfolio

## Mettre en ligne (GitHub Pages)
1. Crée un dépôt public sur GitHub (ex. `portfolio`, ou `ton-pseudo.github.io` pour une adresse plus courte).
2. Envoie tous ces fichiers à la racine du dépôt (bouton « Add file » > « Upload files »).
3. Dans « Settings » > « Pages », choisis la branche `main` et le dossier `/ (root)`.
4. Après une minute, le site est en ligne.

## Modifier le contenu
- `data.js` : ton nom, ton email, tes liens et tous tes projets.
- `about.html` : ton texte de présentation et ton parcours.
- Les images sont rangées par projet : `images/nom-du-projet/image.jpg`.

## Ajouter un projet
1. Ouvre `data.js` sur GitHub et clique sur le crayon.
2. Copie un bloc `{ ... }` de `PROJECTS`, colle-le à la suite (n’oublie pas la virgule entre deux blocs) et change le texte. Chaque `id` doit être unique.
3. Ajoute tes images dans `images/` et indique leur chemin (`images/mon-projet.jpg`).
4. Clique sur « Commit changes » : le site se met à jour.

## Ajouter un prototype Figma
1. Dans Figma, ouvre le prototype, clique sur « Share » et mets l’accès sur « Anyone with the link can view ».
2. Copie le lien (il commence par `https://www.figma.com/proto/...` ou `.../design/...`).
3. Colle-le dans le champ `figma` du projet. Il s’affiche dans la page du projet, sans autre réglage.
