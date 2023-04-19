// Récupérer les éléments i correspondant à chaque icône
const appleIcon = document.getElementById("linkedin");
const twitterIcon = document.getElementById("twitter");
const githubIcon = document.getElementById("github");
const facebookIcon = document.getElementById("facebook");

// Ajouter un gestionnaire d'événements clic à chaque icône
appleIcon.addEventListener("click", function() {
    alert("Clic sur l'icône linkedin!");
});
githubIcon.addEventListener("click", function() {
    alert("Clic sur l'icône GitHub!");
});
facebookIcon.addEventListener("click", function() {
     alert("Clic sur l'icône Facebook!");
});