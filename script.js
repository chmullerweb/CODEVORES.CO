// subscribe : au clic, la class hidden se éfface de la section inscription (sectionInscription) et la class opacity_activated s'ajoute à l'id opacity. Attention la class hidden doit être ajoutée à l'élément avant d'afficher un nouveau modal
// menuBurger : au clic, il y a un menu déroulant qui se affiche ou se retire
// listJob : au clic, il y a une liste déroulante des métiers présents sur le site
// connexion : au clic, la classe hidden se efface de la section connexion (sectionConnexion) et la class opacity_activated s'ajoute à l'id opacity
//formulaireContact : au clic, la classe hidden se efface de la section formulaire (sectionFormulaireContact) et la class opacity_activated s'ajoute à l'id opacity

//Tous les éléments 'contactPro' de la page ouvre le modal et ajoute de l'opacité sur la page en fond

var eltContactPro = document.querySelectorAll('.contactPro');

eltContactPro.forEach(function (contactPro){
    contactPro.addEventListener('click', function(){
        document.getElementById('sectionInscription').classList.add('hidden');        document.getElementById('sectionConnexion').classList.add('hidden');        document.getElementById('sectionFormulaireContact').classList.add('hidden'); 
        document.getElementById('sectionContactPro').classList.remove('hidden');
        document.getElementById('opacity').classList.add('opacity_activated');
});
});

//L'élément 'formulaireContact' de la page ouvre le modal et ajoute de l'opacité sur la page en fond

var eltFormContact = document.querySelectorAll('.formContact');

eltFormContact.forEach(function (formContact){
    formContact.addEventListener('click', function(){
       document.getElementById('sectionFormulaireContact').classList.remove('hidden');
        document.getElementById('opacity').classList.add('opacity_activated');
});
});

//Tous les éléments 'connexion' ouvrent le modal et ajoute de l'opacité sur la page en fond

var eltConnexion = document.querySelectorAll('.connexion');

eltConnexion.forEach(function (connexion){
    connexion.addEventListener('click', function(){
        document.getElementById('sectionConnexion').classList.remove('hidden');
        document.getElementById('opacity').classList.add('opacity_activated');
});
});

//Tous les éléments 'subscribe' ouvrent le modal et ajoute de l'opacité sur la page en fond

var eltSubscribe = document.querySelectorAll('.subscribe');

eltSubscribe.forEach(function (subscribe){
    subscribe.addEventListener('click', function(){
        document.getElementById('sectionInscription').classList.remove('hidden');
        document.getElementById('opacity').classList.add('opacity_activated');
});
});

//Tous les boutons 'exit' ferment le modal et enlève l'opacity sur la page en fond
var eltExit = document.querySelectorAll('.exit');


eltExit.forEach(function (exit){
    
    exit.addEventListener('click', function(){
        document.getElementById('sectionInscription').classList.add('hidden');        document.getElementById('sectionConnexion').classList.add('hidden');        document.getElementById('sectionFormulaireContact').classList.add('hidden'); document.getElementById('sectionContactPro').classList.add('hidden');

        document.getElementById('opacity').classList.remove('opacity_activated');
});
});

//Le lien bleu "linkModal" du modal ferme son modal actuel et ouvre soit celui de l'inscription/soit de la connexion 

var eltLinkModal = document.querySelectorAll('.linkModal');

eltLinkModal.forEach(function (linkModal){
    
    linkModal.addEventListener('click', function(){
        document.getElementById('sectionInscription').classList.toggle('hidden');        document.getElementById('sectionConnexion').classList.toggle('hidden');         
});
});



//Masquer puis Afficher une réponse avec un bouton 
/*//var mesBoutons = document.querySelectorAll("button");

//mesBoutons.forEach(function (bouton){
//   bouton.addEventListener('click', function(){
        bouton.style.display = 'none';
    document.querySelectorAll("dd").forEach(function (ddElt){
        ddElt.style.display = 'none';
        });
        this.parentNode.nextSibling.style.display = 'block';
    });
});//*/

//Rendre une phrase dynamique : au clic qqch se passe. Ici, ma réponse s'affiche ou se masque

/*var maQuestion = document.querySelectorAll("dt");

maQuestion.forEach(function (sentence){
    sentence.addEventListener('click', function(){
        document.querySelectorAll("dd").forEach(function (ddElt){
            ddElt.style.display = 'none';
        });
        this.nextSibling.style.display = 'block';
    });
});*/