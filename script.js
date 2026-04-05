// Attendre que tout le document soit chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Le site 'Qui Survivra ?' est prêt !");

    // Sélectionner tous les boutons de réseaux sociaux
    const socialButtons = document.querySelectorAll('.social-btn');

    // Ajouter un événement au clic pour les liens vides
    socialButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Si le lien est juste "#", on empêche le comportement par défaut (remonter en haut de page)
            if(button.getAttribute('href') === '#') {
                event.preventDefault();
                alert("Les liens vers les réseaux sociaux de l'émission arriveront bientôt !");
            }
        });
    });

});
