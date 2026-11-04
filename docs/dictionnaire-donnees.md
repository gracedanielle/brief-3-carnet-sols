# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | chaine de caractère(string) | non vide, absent des données | — | S07 |
| `parcelle` |Identifiant de la parcelle |chaine de caractère(string) |Non vide | - | P7|
| `texture` |Texture du sol |chaine de caractère(string) |Non vide | - |argileux |
| `pH` |Potentiel hydrogène(acidité/basicité) |nombre(number) |Compris entre 0 et 14 | - |5.5 |
| `etatHumidite` |Humidité du sol|chaine de caractère(string) |Non vide | - |sec |

**Listes de valeurs autorisées** : 
#ID
Concaténation d'une lettre en majuscule suivi de deux chiffres: S02

#PARCELLE
Concaténation de la lettre P en majuscule suivi du numéro de la parcelle: P7

#TEXTURE
La texture du sol est soit: sableuse, limoneuse ou argileuse

#pH


#ETATHUMIDITE

**Sources** : SUJET.md, net
