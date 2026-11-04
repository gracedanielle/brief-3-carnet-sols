# Carnet d'observation des sols

> Projet individuel du SAS DFS, brief 3 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le carnet d'observation des sols est utilisé par l'équipe de la ferme pédagogique, notamment par les assistants terrain en Agritech. Leur geste professionnel consiste à observer différents points de sol à l'aide de la fiche de terrain et à relever leurs caractéristiques. Ils ont besoin de conserver les observations, de retrouver facilement les points concernés et d'identifier les valeurs qui nécessitent une vérification avec le coach agronome. Pour cela, l'utilisateur saisit l'identifiant du point, la parcelle, la texture du sol, la valeur du pH et l'état d'humidité du sol. Le programme permet d'ajouter et d'enregistrer les observations dans un fichier JSON, de les afficher, de les rechercher et de les trier par pH. Il présente également une synthèse avec les pH minimum et maximum, le nombre d'observations par texture et les points dont le pH est inférieur à 5,5, à discuter avec le coach. Cet outil facilite le suivi et la conservation des données de terrain. Cependant, il ne réalise aucun diagnostic agronomique, ne donne aucun conseil de fertilisation et ne remplace pas l'analyse ou l'avis de l'agronome.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-3-carnet-sols.git
cd brief-3-carnet-sols
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [X] Données lues et enregistrées dans `donnees/observations.json`
- [ ] Ajouter une observation, saisies invalides refusées sans arrêter le programme
- [ ] Lister les observations, message si le carnet est vide
- [ ] Rechercher par point ou par parcelle ; filtrer par texture
- [X] Trier par pH
- [X] Synthèse : pH minimum et maximum, nombre par texture, points à discuter (pH < 5,5)
- [X] Bonus : supprimer et modifier une observation (choix 6 et 7)
- [X] Bonus : tri par pH décroissant, texture la plus fréquente

## Données

✏️ *Le fichier, le nombre d'observations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), le pH sans unité. Rappelez qu'elles sont fictives.*


## Limites

✏️ *Au moins trois. Par exemple : le carnet repère des valeurs à discuter, mais ne produit aucun diagnostic de fertilisation.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
Grace Danielle YOBOUE, gracedanielle, Entraide: 