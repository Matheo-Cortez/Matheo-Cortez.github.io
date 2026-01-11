document.addEventListener('DOMContentLoaded', () => {
    
    // --- GESTION DES COMPÉTENCES (TAB SYSTEM) ---
    const compBtns = document.querySelectorAll('.comp-btn');
    const projectLists = document.querySelectorAll('.projects-list');

    compBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Retirer la classe 'active' de tous les boutons
            compBtns.forEach(b => b.classList.remove('active'));
            
            // 2. Ajouter 'active' au bouton cliqué
            btn.classList.add('active');
            
            // 3. Cacher toutes les listes de projets
            projectLists.forEach(list => list.classList.remove('active'));
            
            // 4. Afficher la liste correspondant au data-target
            const targetId = btn.getAttribute('data-target');
            const targetList = document.getElementById(targetId);
            if (targetList) {
                targetList.classList.add('active');
            }
        });
    });

    // --- DONNÉES PROJETS (STAR) ---
    // Tu peux remplir ça avec tes vraies infos
    const projectsData = {
        'proj1': {
            title: "Application Web React",
            context: "Projet académique (3 personnes) - 2024",
            desc: "Développement d'une plateforme de gestion de tâches.",
            star: `
                <strong>Situation :</strong> Dans le cadre d'une SAé, nous devions créer une application front-end dynamique.<br><br>
                <strong>Tâche :</strong> Concevoir une interface réactive et consommer une API externe.<br><br>
                <strong>Action :</strong> J'ai mis en place l'architecture React, utilisé Axios pour les requêtes et Redux pour l'état global.<br><br>
                <strong>Résultat :</strong> Application livrée dans les temps, note de 17/20, zéro bug critique lors de la démo.
            `
        },
        'proj2': {
            title: "Algorithme de Tri",
            context: "Projet Personnel - Optimisation",
            desc: "Comparaison de performances entre QuickSort et BubbleSort.",
            star: `
                <strong>Situation :</strong> Besoin de comprendre l'impact de la complexité algorithmique sur de gros volumes de données.<br><br>
                <strong>Tâche :</strong> Implémenter et benchmarker différents algos de tri en Python.<br><br>
                <strong>Action :</strong> J'ai codé 3 algorithmes et généré des jeux de données de 1 million d'entrées pour mesurer le temps d'exécution.<br><br>
                <strong>Résultat :</strong> Mise en évidence que QuickSort est 100x plus rapide sur ce dataset.
            `
        }
    };

    // --- GESTION DE LA MODALE ---
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.querySelector('.close-modal');

    // Fonction globale pour ouvrir la modale
    window.openModal = (id) => {
        const data = projectsData[id];
        if(!data) return;

        // Injection du HTML
        modalContent.innerHTML = `
            <h2 style="color:white; margin-bottom:5px;">${data.title}</h2>
            <p style="color:#94a3b8; font-style:italic; margin-bottom:20px;">${data.context}</p>
            <p style="color:#f1f5f9; margin-bottom:20px;">${data.desc}</p>
            <div style="background:#0f172a; padding:20px; border-radius:8px; border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; line-height:1.6;">
                ${data.star}
            </div>
        `;

        // Affichage (Flex pour centrer)
        modalOverlay.style.display = 'flex';
        // Empêcher le scroll du body derrière
        document.body.style.overflow = 'hidden';
    };

    // Fermeture Modale
    const closeModal = () => {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto'; // Réactiver le scroll
    };

    closeModalBtn.addEventListener('click', closeModal);

    // Fermer si on clique en dehors de la boîte
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
            closeModal();
        }
    });
});