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
// --- ANIMATION SCROLL TIMELINE ---
    const timelineItems = document.querySelectorAll('.timeline-item');

    const checkTimeline = () => {
        const triggerBottom = window.innerHeight / 5 * 4; // Déclenchement quand l'élément est à 80% du bas

        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.classList.add('show');
            } else {
                // Optionnel : Enlever la classe si on veut que ça redisparaisse en remontant
                // item.classList.remove('show'); 
            }
        });
    };

    // Vérifier au chargement + au scroll
    window.addEventListener('scroll', checkTimeline);
    checkTimeline();
    // --- DONNÉES PROJETS (STAR) ---
    // Tu peux remplir ça avec tes vraies infos
    const projectsData = {
        'proj1': {
            title: "Création d'un Sudoku",
            context: "Projet scolaire (1 personne) - 2023",
            desc: "Création d'un jeu de Sudoku sur terminal.",
            star: `
                <strong>Situation :</strong> Dans le cadre scolaire, nous devions créer un jeu de sudoku sur un terminal.<br><br>
                <strong>Tâche :</strong> Réaliser à l'aide du language c un jeu fonctionnel de sudoku.<br><br>
                <strong>Action :</strong> J'ai mis en place lune grille de sudoku en 3x3 et 4x4, avec le language C.<br><br>
                <strong>Compétences acquises :</strong> Code en language C et utilisation d'un terminal de commande. Travail en autonomie.
            `
        },
        'proj2': {
            title: "Création d'une application de gestion",
            context: "Projet scolaire (4 personnes) - 2023",
            desc: "Créer une application de gestion de réservation de places.",
            star: `
                <strong>Situation :</strong> Apprendre à coder une application avec Java/JavaFX.<br><br>
                <strong>Tâche :</strong> Développer une application<br><br>
                <strong>Action :</strong> Réalisation de l'interface client avec JavaFX.<br><br>
                <strong>Compétences acquises :</strong> Code en Java/JavaFX, travail organisé en équipes.
            `
        },
        'proj13': {
            title: "Création d'un site web vitrine",
            context: "Projet professionnel (1 personne) - 2025",
            desc: "Créer un site onepage pour une entreprise cliente (AGD Groupe).",
            star: `
                <strong>Situation :</strong> Fusion de deux entreprises en un seul groupe.<br><br>
                <strong>Tâche :</strong> Développer un site global pour présenter le groupe fusionné.<br><br>
                <strong>Action :</strong> Réalisation du site entier avec Wordpress et JS.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de Wordpress, communication client, travail en autonomie.
            `
        },
        'proj14': {
            title: "Création d'un multi-site-web",
            context: "Projet professionnel (1 personne) - 2025",
            desc: "Créer un site multiple pour une entreprise cliente (Bowlcenter).",
            star: `
                <strong>Situation :</strong> Plusieurs complexes de bowling (Echirolles, Nantes...)<br><br>
                <strong>Tâche :</strong> Développer un multi-site pour tous les complexes.<br><br>
                <strong>Action :</strong> Réalisation du site entier avec Wordpress et JS.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de Wordpress, communication client, travail en autonomie.
            `
        },
        'proj16': {
            title: "Création d'un système de recommandation",
            context: "Projet scolaire (8 personnes) - 2025/2026",
            desc: "Créer un système de recommandation de musiques avec Python.",
            star: `
                <strong>Situation :</strong> Recommander des musiques selon des modèles de similarités.<br><br>
                <strong>Tâche :</strong> Réaliser le système de recommandation et l'interface à partir de données récupérées.<br><br>
                <strong>Action :</strong> Réalisation de la base de données, d'un formulaire de données, de systèmes de recommandations user-based et item-based.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de techniques d'ia, similarité cosinus/Jaccard, travail en équipe.
            `
        },
        'proj17': {
            title: "Création d'un site d'offres touristiques.",
            context: "Projet scolaire (7 personnes) - 2024/2025",
            desc: "Créer un site web d'offres touristiques complets.",
            star: `
                <strong>Situation :</strong> Réaliser un site web complet d'offres touristiques.<br><br>
                <strong>Tâche :</strong> Réaliser le site avec gestion de comptes, chatbot d'assistance, création de factures...<br><br>
                <strong>Action :</strong> Réalisation de pages et de la BDD.<br><br>
                <strong>Compétences acquises :</strong> Travail en équipe, réalisation d'un site complet, réalisation d'une BDD complète.
            `
        },
        'proj3': {
            title: "Création d'un résolveur de Sudoku",
            context: "Projet scolaire (1 personne) - 2023",
            desc: "Créer un résolveur optimisé de sudoku automatique en language C.",
            star: `
                <strong>Situation :</strong> Apprendre à optimiser un code.<br><br>
                <strong>Tâche :</strong> Développer un résolveur de sudoku le plus rapide et efficace possible.<br><br>
                <strong>Action :</strong> Réalisation du résolveur de sudoku.<br><br>
                <strong>Compétences acquises :</strong> Code en C, optimisation d'un code.
            `
        },
        'proj4': {
            title: "Postier chinois",
            context: "Projet scolaire (3 personnes) - 2023",
            desc: "Créer un programme du Postier Chinois en Python.",
            star: `
                <strong>Situation :</strong> Trouver le chemin le plus court et optimisé d'un graphe.<br><br>
                <strong>Tâche :</strong> Réaliser un programme utilisant les techniques de Postier Chinois sur un graphe.<br><br>
                <strong>Action :</strong> Utilisation de techniques eulériennes.<br><br>
                <strong>Compétences acquises :</strong> Code en python, optimisation d'un code, manipulation d'un graphe.
            `
        },
        'proj15': {
            title: "Générateur de devis",
            context: "Projet professionnel (1 personne) - 2025",
            desc: "Créer un générateur de devis en JS pour l'entreprise.",
            star: `
                <strong>Situation :</strong> Générer un devis pour accélérer le travail de l'entreprise.<br><br>
                <strong>Tâche :</strong> Réaliser un programme en Javascript et interface qui généreront le devis à copier.<br><br>
                <strong>Action :</strong> Création d'une interface, devis réglable avec des paramètres et calcul du coût.<br><br>
                <strong>Compétences acquises :</strong> Code en JS, interface, travail en autonomie, optimisation de temps.
            `
        },
        'proj5': {
            title: "Installation d'un poste de développement",
            context: "Projet scolaire (4 personnes) - 2023",
            desc: "Créer une documentation automatique d'un projet.",
            star: `
                <strong>Situation :</strong> SAE1.03<br><br>
                <strong>Tâche :</strong> Générer une documentation automatique d'une page et d'un projet avec PHP.<br><br>
                <strong>Action :</strong> Utilisation de PHP, bash et docker pour générer une documentation automatique du projet.<br><br>
                <strong>Compétences acquises :</strong> Code en PHP, utilisation de docker et bash, travail en équipe.
            `
        },
        'proj6': {
            title: "Installation de services réseaux",
            context: "Projet scolaire (2 personnes) - 2023",
            desc: "Apprendre à installer et utiliser des VM.",
            star: `
                <strong>Situation :</strong> SAE2.03, nécessité d'apprendre l'usage des VM.<br><br>
                <strong>Tâche :</strong> Réaliser une suite d'exercice pour apprendre à utiliser des VM.<br><br>
                <strong>Action :</strong> Utilisation d'Apache, connexion à des VM et réseaux.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de VM.
            `
        },
        'proj7': {
            title: "Création d'une base de données",
            context: "Projet scolaire (1 personne) - 2023",
            desc: "Apprendre à réaliser une base de donnée.",
            star: `
                <strong>Situation :</strong> Nécessité d'apprendre à créer une base de données.<br><br>
                <strong>Tâche :</strong> Réaliser une base de données concernant le programme national.<br><br>
                <strong>Action :</strong> Création d'UML, de schéma d'intégrité relationnel, et d'une base de données.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de SQL, et UML.
            `
        },
        'proj8': {
            title: "Implémentation d'une base de donnée",
            context: "Projet scolaire (1 personne) - 2023",
            desc: "Apprendre à réaliser une base de donnée via des données CSV.",
            star: `
                <strong>Situation :</strong> Nécessité d'apprendre à implémenter des données existantes dans une nouvelle base de données.<br><br>
                <strong>Tâche :</strong> Implémenter des fichiers CSV dans la database.<br><br>
                <strong>Action :</strong> Création d'UML, de schéma d'intégrité relationnel, et d'une base de données, implémentation de fichiers csv.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de SQL, et UML, et CSV.
            `
        },
        'proj9': {
            title: "Création d'un site de streaming",
            context: "Projet scolaire (4 personnes) - 2023",
            desc: "Créer un site web de streaming type Netflix.",
            star: `
                <strong>Situation :</strong> Nécessité d'apprendre à créer des sites web complexes avec des pages multiples.<br><br>
                <strong>Tâche :</strong> Créer un site web complet avec les films/Series, leurs castings, leurs notes...<br><br>
                <strong>Action :</strong> Création de plusieurs pages, d'un système de notes, d'avis.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de HTML/CSS, JS et travail d'équipe.
            `
        },
        'proj10': {
            title: "Gestion d'un projet",
            context: "Projet scolaire (4 personnes) - 2023",
            desc: "Gérer un projet auprès d'un client.",
            star: `
                <strong>Situation :</strong> Gérer la partie administratif d'un projet de création d'application.<br><br>
                <strong>Tâche :</strong> Créer des notes de cadrages, prévoir le coût du projet avec un budget, les mains d'oeuvres...<br><br>
                <strong>Action :</strong> Création de notes de cadrages, diagramme gantt, calcul des charges.<br><br>
                <strong>Compétences acquises :</strong> Utilisation de gantt, gestion d'un projet.
            `
        },
        'proj18': {
            title: "Anime Predictor",
            context: "Projet scolaire (2 personnes) - 2025",
            desc: "Prédire la popularité d'un animé",
            star: `
                <strong>Situation :</strong> Prédire la popularité d'un animé.<br><br>
                <strong>Tâche :</strong> Créer un programme qui prédit la note d'un animé à partir de ses caractéristiques de productions.<br><br>
                <strong>Action :</strong> Implémentation de csv dans un dataframe, création de graphiques d'analyse des données.<br><br>
                <strong>Compétences acquises :</strong> Code en pythin (pandas, matplotlib, tkinter, seaborn...)
            `
        },
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