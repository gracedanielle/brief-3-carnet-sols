// Carnet d'observation des sols — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js

import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { HUMIDITES, TEXTURES, ajouterObservation, formaterObservation, listerObservations, trouverParId } from './src/registre.js';
import { filtrerParParcelle, filtrerParTexture, trierParPh } from './src/recherche.js';
import { SEUIL_PH_A_DISCUTER, compterParTexture, phMinMax, pointsADiscuter } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/observations.json';
function afficherMenu() {
  console.log(`===============MENU===============`);
  console.log(`1. Ajouter une observation`)
  console.log(`2. Lister les observations`);
  console.log(`3. Rechercher par parcelle`);
  console.log(`5. Trier par pH`);
  console.log(`6. Synthèse des observations`);
  console.log(`0. Quitter`);
}
//Ajouter une observation
async function ajouter(observations) {
  console.log('');
  console.log(`--- Ajouter une observation ---`);
  const id = await demander(`Point observé (ex.S11) :`);
  if (id === null) return;

  const parcelle = await demander(`Parcelle (ex.P1) :`);
  if (parcelle === null) return;
  
  const texture = await demander(`Texture (${TEXTURES.join(', ')}) :`);
  if (texture === null) return;

  const etatHumidite = await demander(`Humidité (${HUMIDITES.join(', ')}) :`);
  if (etatHumidite === null) return;

  const pH = await demander(`pH (nombre de 0 à 14, sans unité, virgule acceptée) :`);
  if (pH === null) return;

  //Mettre les textes dans la bonne case
  const saisie = {
    id: id.trim().toUpperCase(),
    parcelle: parcelle.trim().toUpperCase(),
    texture: texture.trim().toLowerCase(),
    etatHumidite: etatHumidite.trim().toLowerCase(),
    pH: pH,
  };

  //Ajouter l'observation
  const erreurs = ajouterObservation(observations, saisie);

  if (erreurs.length > 0) {
    console.log(`Observation réfusée:`);

    for(const erreur of erreurs) {
      console.log(`  -${erreur}`);
    }
    console.log(`Le carnet compte toujours ${observations.length} observation(s).`);
  } else {
    await enregistrerJSON(FICHIER_DONNEES, observations);
    console.log(`Observation ${saisie.id} ajoutée. Le carnet compte ${observations.length} observation(s).`);
  }
}
//Lister observations
async function lister(observations) {
  console.log('');
  console.log(`---Liste des observations (${observations.length})`);
  console.log(`---Rechercher une observation---`);

  const type = await demander(`Rechercher par point, parcelle ou texture: `);

  if (type === null) return;

  const typeRecherche = type.trim().toLowerCase();

  let resultat = [];

  if (typeRecherche === 'point') {
    const id = await demander(`Identifiant du point : `);
    if (id === null) return;

    const observation = trouverParId(
      observations,
       id.trim().toUpperCase()
      );

    if (observation !== undefined) {
      resultat.push(observation);
    }
  } else if (typeRecherche === 'parcelle') {
    const parcelle = await demander(`Nom de la parcelle: `);
    if (parcelle === null) return; 

  resultat = filtrerParParcelle(observations, parcelle.trim().toLowerCase());

 } else if (typeRecherche === 'texture') {
  const texture = await demander(`Nom de la texture: `);
    if (texture === null) return;

    resultat = filtrerParTexture(observations, texture.trim().toLowerCase());

  } else {
    console.log(`Type de recherche inconnu.`);
    return;
  }

  if (resultat.length === 0) {
console.log(`Aucune observation trouvée`);
  } else {
    console.log(listerObservations(resultat));
  }
}

//Trier les observations par pH
function trier (observations) {
  console.log('');
  console.log(`---Observations triées par pH---`);

  const resultat = trierParPh(observations);

  console.log(listerObservations(resultat));
}

//Afficher la synthèse
function afficherSynthese (observations) {
console.log('');
console.log(`---Synthèse des observations---`);

const valeurs = phMinMax(observations);
 if (valeurs === null) {
  console.log(`Aucune observation pour faire une synthèse`);
  return;
 }
 console.log(`ph minimum : ${valeurs.min}`);
 console.log(`ph maximum : ${valeurs.max}`);
 console.log(`Nombre d'observations par texture: `);

 const textures = compterParTexture(observations);

 for (const texture in textures) {
  console.log(`${texture} : ${textures[texture]}`);
 }
 const points = pointsADiscuter(observations, SEUIL_PH_A_DISCUTER);
 console.log(`Points à discuter avec le coach (pH inférieur à ${SEUIL_PH_A_DISCUTER}) :`);

 if (points.length === 0) {
  console.log(`Aucun point à discuter.`);
 } else {
  console.log(listerObservations(points));
 }
}


async function main() {
  ouvrirSaisie();
  console.log("À compléter : écrivez le menu dans app.js (fiches/3-ajouter-lister.md).");
  fermerSaisie();
}

main();
