# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : 
pH min: 4.8 (S04); pHmax: 7.6(SO8)
Nombre par texture: "sableux; 4limoneux; 3argileux
Points avec pH < 5.5:S01, S04, S06, S06


**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajout valide|L'observation doit etre ajoutée |10 observations |DIBY |
| chaque règle réfusée|aucune observation enregistrée |observtion réfusée |DIBY |
| une recherche introuvable|introuvable |choix inconnu <<11>> |DIBY |
| chaque tri (pH croissant)|tri avec succès réussi| |DIBY |
| la synthèse|affichage des statistiques de l'observation |succès |DIBY |
| Rechercher par texture|les observations |succès |DIBY |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) 
