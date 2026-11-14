# Pocket Studio

Un petit studio de poche pour ne plus perdre une idée de mélodie.

J'avais toujours un riff ou une ligne de basse en tête au mauvais moment : dans le métro, sur le canapé, à moitié endormi. Ouvrir un DAW prend trop de temps, et l'idée est partie avant. Pocket Studio, c'est le carnet de croquis : j'ouvre, je pose trois notes, j'exporte dans mon DAW, et je termine tranquillement plus tard sur l'ordinateur.

## Dedans

| | Écran | Ce que ça fait |
|---|---|---|
| 🎹 | Piano roll | Clavier, basse, guitare. On tape pour poser, on glisse pour allonger |
| 🥁 | Batterie | Grille de 16 pas, 8 éléments, 2 kits |
| 🎚️ | Pistes | Jusqu'à 8, avec solo, muet, supprimer |
| ✂️ | Sélection | Lasso, couper, copier, coller, dupliquer |
| 📤 | Export | Un `.mid` par piste, tempo, signature, tonalité si tu veux |

## Parti pris

Rapide, gros boutons, une main. Moins de trois secondes entre l'ouverture et la première note. Pas de partition, pas de tablature, pas de mixage, pas d'effets : tout ça se fait dans le DAW.

Rien ne quitte le téléphone. Pas de compte, pas de pub, pas de suivi. Le morceau en cours est gardé dans le navigateur, et c'est tout.

## Exporter

Le bouton ⤓ en haut à droite. Tu donnes un nom au morceau (c'est aussi le nom du zip), et tu choisis :

- **.zip** : un `.mid` par piste, à glisser tel quel dans ton DAW
- **fichiers .mid séparés** : les téléchargements l'un après l'autre

Chaque fichier garde le tempo et la signature, la batterie part sur le canal 10.

## Installer

1. Ouvre l'adresse de l'app dans Safari (iPhone) ou Chrome (Android).
2. iPhone : Partager → *Sur l'écran d'accueil*. Android : ⋮ → *Installer l'application*.
3. C'est tout. Ça marche ensuite sans réseau.

## Pour les curieux

Une seule page HTML, aucune dépendance, polices incluses. Tous les fichiers sont à la racine, sans sous-dossier. Hébergée sur GitHub Pages : Settings → Pages → `main` / root.

Après chaque mise à jour, change `VERSION` dans `sw.js`, sinon les téléphones gardent l'ancienne version en cache.

En local : `python3 -m http.server 8000`, puis http://localhost:8000.

## Pas encore là

Enregistrer la voix ou la guitare calé sur le métronome, et l'export WAV.
