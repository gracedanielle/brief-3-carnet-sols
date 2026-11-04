// Ajouter et lister les observations de sol.
// Fiche : fiches/3-ajouter-lister.md · Vérifier : npm run test:registre
import { versNombre } from './outils.js';

// Listes fermées des classes d'exercice, validées par le coach agronomie.
export const TEXTURES = ['sableux', 'limoneux', 'argileux'];
export const HUMIDITES = ['sec', 'intermédiaire', 'humide'];

// Renvoie une ligne de texte qui décrit l'observation.
// Exemple : 'S01 | P1 | sableux | pH 5.2 | sec'
export function formaterObservation(observation) {
  return `${observation.id} | ${observation.parcelle} | ${observation.texture} | pH ${observation.pH} | ${observation.etatHumidite}`;
  throw new Error('TODO : coder formaterObservation dans src/registre.js');
}

// Renvoie un texte avec une observation par ligne (lignes séparées par '\n'),
// ou 'Aucune observation enregistrée.' si la liste est vide.
export function listerObservations(observations) {
  if (observations.length === 0) {
    return `Aucune observation enregistrée.`;
  } else {
    return observations.map(formaterObservation).join('\n');
  }
}


// Renvoie l'observation qui a cet identifiant de point, ou undefined si elle n'existe pas.
export function trouverParId(observations, id) {
  return observations.find(observation => observation.id === id);
  throw new Error('TODO : coder trouverParId dans src/registre.js');
}

// Contrôle une saisie AVANT de l'ajouter. Tous les champs arrivent sous forme de TEXTE :
// { id: 'S11', parcelle: 'P6', texture: 'limoneux', pH: '5,8', etatHumidite: 'humide' }
// Renvoie un tableau de messages d'erreur, un message par règle non respectée ;
// un tableau vide signifie « saisie valide ».
// Règles : id obligatoire et unique · parcelle obligatoire (n'importe quel texte non vide)
// · texture présente dans TEXTURES · pH nombre entre 0 et 14 (bornes comprises)
// · etatHumidite présent dans HUMIDITES. N'ajoutez aucune autre règle que celles-ci.
export function verifierObservation(saisie, observations) {
   const Erreur = [];
  if (saisie.id === " ") {
    return Erreur.push("id est obligatoire");
  } else { for (const obs of observations) {
      if(obs.id === saisie.id) {
        Erreur.push("id existant");
      }
  }
}

if(TEXTURES.includes(saisie.texture)) {
  observations.texture = saisie.texture;}
  else {
    Erreur.push("La texture est non reconnue");}

const k = Number(saisie.pH.replace(',', '.'));
if (saisie.pH === '' || isNaN(k) || k < 0 || k > 14) {
  Erreur.push("Veuillez un pHvalide entre 0 et 14");
}

if(saisie.parcelle.trim() === '') {
  Erreur.push("Veuillez saisir obligatoirement uneparcelle validée");
}
  
if(!HUMIDITES.includes(saisie.etatHumidite)) {
  Erreur.push(`Veuillez saisir un état d'humidité valide: ${HUMIDITES}`);
}
return Erreur;
  throw new Error('TODO : coder verifierObservation dans src/registre.js');
}

// Fabrique l'observation à enregistrer à partir d'une saisie VALIDE : pH devient un nombre.
export function creerObservation(saisie) {
  const observation = {...saisie};
observation.pH = Number(saisie.pH.replace(',', '.'));
return observation;
  //throw new Error('TODO : coder creerObservation dans src/registre.js');
}

// Ajoute la saisie au carnet si elle est valide (verifierObservation, puis creerObservation).
// Renvoie les erreurs : [] si l'observation a été ajoutée ; sinon les messages, et rien n'est ajouté.
export function ajouterObservation(observations, saisie) {
  const erreurs = verifierObservation(saisie, observations);
  if(erreurs.length > 0) {
    return erreurs;}
    const observation = creerObservation(saisie); {
      observations.push(observation);
      return [];}
}
