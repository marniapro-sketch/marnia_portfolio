/* ============================================================
   C’EST ICI QUE TU MODIFIES TON CONTENU
   - SITE : ton nom, ton email, tes liens
   - PROJECTS : un bloc { ... } par projet (copie-colle pour en ajouter)
   ============================================================ */

const SITE = {
  name: "Bouchaib Marnia",
  role: "Directrice artistique junior et designer digitale",
  tagline: "Je conçois des identités visuelles et des interfaces percutantes.",
  email: "marniapro@gmail.com",
  links: [
    { label: "LinkedIn", url: "https://linkedin.com/in/ton-profil" }   // à remplacer
  ]
};

const PROJECTS = [
  {
    id: "echoes-of-love-mitski",
    title: "Direction artistique : Echoes of Love, Mitski",
    year: "",                             // ajoute l’année si tu veux
    role: "Direction artistique",
    tags: ["Packaging", "Campagne"],
    cover: "images/echoes-of-love-mitski/cover.jpg",     // image de la grille d’accueil
    hero: "images/echoes-of-love-mitski/logo.jpg",       // grande image en haut de la page du projet
    summary: "Une nouvelle identité visuelle pour la campagne de promotion d’un album.",
    description: [
      "L’objectif principal de ce projet était de sélectionner une artiste dont la direction artistique n’avait pas encore pleinement évolué, et de concevoir une nouvelle identité visuelle pour une campagne de promotion majeure de son album. Ce projet a permis de repenser l’image de l’artiste, en créant une esthétique moderne et cohérente pour captiver un public plus large.",
      "L’identité se décline sur l’édition CD et son livret, un vinyle en édition limitée, la pochette pour Spotify, et des affiches pour le métro et en affichage grand format."
    ],
    images: [
      { src: "images/echoes-of-love-mitski/cd.jpg", ratio: 1.41, caption: "Album, édition CD" },
      { src: "images/echoes-of-love-mitski/livret.jpg", ratio: 1.415, caption: "Livret du CD" },
      { src: "images/echoes-of-love-mitski/vinyle.jpg", ratio: 1.421, caption: "Vinyle, édition limitée" },
      { src: "images/echoes-of-love-mitski/spotify.jpg", ratio: 1.778, caption: "Pochette de l’album sur Spotify" },
      { src: "images/echoes-of-love-mitski/metro.jpg", ratio: 1.469, caption: "Affiche dans le métro" },
      { src: "images/echoes-of-love-mitski/billboard.jpg", ratio: 1.529, caption: "Affiche en grand format" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "haig-club-x-aespa",
    title: "HAIG CLUB x AESPA",
    year: "2024",                          // non affiché sur le site
    role: "Chef de projet",
    tags: ["Packaging", "Campagne"],
    cover: "images/haig-club-aespa/cover.jpg",   // image de la grille d’accueil
    hero: "",                              // pas de grande bannière pour ce projet
    summary: "Une collaboration entre le groupe de musique AESPA et la marque Haig Club.",
    description: [
      "Dans le cadre de ce projet, nous avons orchestré une collaboration unique entre le groupe de musique AESPA et la marque d’alcool Haig Club. Notre objectif était de fusionner les univers distincts de la musique et des spiritueux pour créer une campagne promotionnelle captivante et innovante. En tant que chef de projet, j’ai supervisé chaque étape de cette collaboration, assurant une intégration harmonieuse des deux marques."
    ],
    images: [
      { src: "images/haig-club-aespa/coffrets.jpg", ratio: 1.77, caption: "Les trois faces du coffret" },
      { src: "images/haig-club-aespa/bouteille-et-coffret.jpg", ratio: 1.77, caption: "Bouteille et coffret" },
      { src: "images/haig-club-aespa/bouteille.jpg", ratio: 1.77, caption: "Bouteille" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "alternance-momji",
    title: "Momji",
    year: "2025",                          // non affiché sur le site
    role: "Design graphique",
    tags: ["Print", "Pédagogie"],
    cover: "images/momji/cover.jpg",       // image de la grille d’accueil
    hero: "",                              // pas de grande bannière
    rowSizes: [2, 3],                      // 2 images sur la 1re ligne, puis 3
    summary: "Conception d’une mallette pédagogique pour apprendre l’anglais aux enfants.",
    description: [
      "Lors de ma première alternance, j’ai eu l’opportunité de participer à la conception d’une mallette pédagogique commercialisée par Momji, destinée aux familles et aux nounous. Ce projet avait pour objectif de faciliter l’apprentissage de l’anglais aux enfants à travers des activités ludiques et interactives. J’ai contribué à la création des supports visuels et du design de la mallette afin de rendre son contenu attractif et accessible aux plus jeunes. Cette expérience m’a permis de développer mes compétences en conception graphique tout en travaillant sur un projet à fort impact éducatif."
    ],
    images: [
      { src: "images/momji/i-spy.jpg", ratio: 1.931, caption: "I Spy, plateaux de jeu Velleda" },
      { src: "images/momji/tic-tac-toe.jpg", ratio: 1.942, caption: "Tic Tac Toe, plateaux de jeu Velleda" },
      { src: "images/momji/tell-me-about-your-day.jpg", ratio: 1.779, caption: "Tell me about your day" },
      { src: "images/momji/recipes.jpg", ratio: 1.88, caption: "Recipes" },
      { src: "images/momji/how-to.jpg", ratio: 1.788, caption: "How to, guide explicatif de la mallette" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "happen-festival",
    title: "Happen Festival",
    year: "2022",                          // non affiché sur le site
    role: "Direction artistique",
    tags: ["Identité visuelle", "Print"],
    cover: "images/happen-festival/cover.jpg",   // image de la grille d’accueil
    hero: "",                              // pas de grande bannière
    rowSizes: [3, 3],                      // 3 images par ligne
    summary: "Identité, affiches et produits dérivés d’un festival de musique indie en Corée du Sud.",
    description: [
      "Création d’un festival en Corée du Sud basé sur la musique Indie, j’ai donc créé un logo, des affiches et des produits dérivés à vendre pendant le festival, Le style et le thème sont chill, le but de ce festival est de profiter des artistes présents avec une boisson chaude et des amis avec qui avoir de bonnes conversations."
    ],
    images: [
      { src: "images/happen-festival/affiches-bleu.jpg", ratio: 1.333, caption: "Affiches, version bleue" },
      { src: "images/happen-festival/affiches-vert.jpg", ratio: 1.333, caption: "Affiches, version verte" },
      { src: "images/happen-festival/affiches-rouge.jpg", ratio: 1.333, caption: "Affiches, version rouge" },
      { src: "images/happen-festival/billets.jpg", ratio: 1.667, caption: "Billets" },
      { src: "images/happen-festival/livret.jpg", ratio: 1.333, caption: "Livret" },
      { src: "images/happen-festival/tote-bag.jpg", ratio: 1.386, caption: "Tote bag" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "projets-personnels",
    title: "Projets personnels",
    year: "2022",                          // non affiché sur le site
    role: "Direction artistique",
    tags: ["Affiches"],
    cover: "images/projets-personnels/cover.jpg",   // image de la grille d’accueil
    hero: "",                              // pas de grande bannière
    rowSizes: [4],                         // une seule ligne (passera à 5 avec Time to Hunt)
    summary: "Série d’affiches : Blessed-Cursed, Starboy, Ningning : Hello, Everglow.",
    description: [],                       // pas de texte pour ce projet
    images: [
      { src: "images/projets-personnels/blessed-cursed.jpg", ratio: 0.707, caption: "Blessed-Cursed" },
      { src: "images/projets-personnels/starboy.jpg", ratio: 0.707, caption: "Starboy" },
      { src: "images/projets-personnels/ningning-hello.jpg", ratio: 0.639, caption: "Ningning : Hello" },
      { src: "images/projets-personnels/everglow.jpg", ratio: 0.707, caption: "Everglow" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "brochure-flyer",
    title: "Brochure & Flyer",
    year: "2022",                          // non affiché sur le site
    role: "Mise en page",
    tags: ["Print", "Édition"],
    cover: "images/brochure-flyer/cover.jpg",   // image de la grille d’accueil
    hero: "",                              // pas de grande bannière
    rowSizes: [3, 2],                      // 3 images sur la 1re ligne, puis 2
    summary: "Mise en page d’une brochure automobile et d’un dépliant beauté.",
    description: [],                       // pas de texte pour ce projet
    images: [
      { src: "images/brochure-flyer/venue-couverture.jpg", ratio: 1.457, caption: "Brochure Venue, couverture" },
      { src: "images/brochure-flyer/venue-highlights.jpg", ratio: 1.44, caption: "Brochure Venue, Highlights" },
      { src: "images/brochure-flyer/venue-space.jpg", ratio: 1.44, caption: "Brochure Venue, Space" },
      { src: "images/brochure-flyer/clio-depliant.jpg", ratio: 1.333, caption: "Dépliant Clio Beauty" },
      { src: "images/brochure-flyer/clio-interieur.jpg", ratio: 1.333, caption: "Dépliant Clio Beauty, intérieur" }
    ],
    figma: "",
    link: ""
  },
  {
    id: "carte-noire",
    title: "Carte Noire",
    year: "2025",                          // non affiché sur le site
    role: "Design digital",
    tags: ["Landing page", "Jeu-concours"],
    cover: "images/carte-noire/cover.jpg",   // image de la grille d’accueil
    hero: "",                              // pas de grande bannière
    summary: "Landing page interactive d’un jeu-concours, créée pendant mon alternance chez Showroomprivé.",
    description: [
      "Jeu-concours Carte Noire, réalisé pendant mon alternance chez Showroomprivé. Chaque participant découvre une surprise : une machine Aroma Signature à gagner ou un code privilège offrant 45 % de réduction. J’ai conçu la landing page et les écrans du jeu sur mobile, de l’accueil jusqu’au résultat, puis décliné le kit de communication."
    ],
    // Ce projet affiche trois choix au lieu d’une galerie. Chaque choix ouvre sa propre page.
    sections: [
      {
        id: "lp",
        title: "Voir la landing page",
        heading: "Landing page",
        image: "images/carte-noire/tuile-lp.jpg",
        // Landing page desktop reconstruite sur le site (aucun lien avec Figma).
        page: "lp/carte-noire/index.html",
      },
      {
        id: "jeux",
        title: "Voir les écrans de jeux",
        heading: "Écrans de jeux",
        image: "images/carte-noire/tuile-ecrans.jpg",
        // Parcours du jeu : défilement horizontal, avec les étapes numérotées
        journey: [
          { src: "images/carte-noire/ecrans/01-accueil.jpg", caption: "Accueil du jeu", sep: "→" },
          { src: "images/carte-noire/ecrans/02-surprise.jpg", caption: "Choix de la boisson", sep: "→" },
          { src: "images/carte-noire/ecrans/05-consentements.jpg", caption: "Consentements", sep: "→" },
          { src: "images/carte-noire/ecrans/03-gagne-machine.jpg", caption: "Gagné : la machine", sep: "ou" },
          { src: "images/carte-noire/ecrans/04-gagne-code.jpg", caption: "Gagné : le code privilège", sep: "→" },
          { src: "images/carte-noire/ecrans/08-merci.jpg", caption: "Remerciement", sep: "|" },
          { src: "images/carte-noire/ecrans/06-deja-participe.jpg", caption: "Déjà participé" },
          { src: "images/carte-noire/ecrans/07-connexion.jpg", caption: "Connexion à l’application" }
        ]
      },
      {
        id: "kit",
        title: "Voir les kits de com",
        heading: "Kits de communication",
        image: "images/carte-noire/tuile-kit.jpg",
        rowSizes: [2, 2, 1],
        images: [
          { src: "images/carte-noire/kit/visuel-principal.jpg", ratio: 1.463, caption: "Visuel principal" },
          { src: "images/carte-noire/kit/visuel-carre.jpg", ratio: 2.0, caption: "Visuel avec logo" },
          { src: "images/carte-noire/kit/visuel-a-la-une.jpg", ratio: 1.778, caption: "Visuel « À la une »" },
          { src: "images/carte-noire/kit/visuel-sans-texte.jpg", ratio: 1.884, caption: "Visuel sans texte" },
          { src: "images/carte-noire/kit/banniere.jpg", ratio: 5.311, caption: "Bannière" }
        ]
      }
    ],
    images: [],
    figma: "",
    link: ""
  },
  {
    id: "armani-beauty",
    title: "Armani Beauty",
    year: "2025",                          // non affiché sur le site
    role: "Design digital",
    tags: ["Landing page", "Vidéo"],
    cover: "images/armani/cover.jpg",      // image de la grille d’accueil
    hero: "",
    summary: "Landing page et vidéo de l’offre exclusive Armani Beauty, créées chez Showroomprivé.",
    description: [
      "Offre exclusive Armani Beauty, réalisée pendant mon alternance chez Showroomprivé : jusqu’à -30 % et trois cadeaux offerts dès 60 € d’achats avec le code SHOWROOM. J’ai conçu la landing page en deux versions, ordinateur et mobile, avec un carrousel de catégories pour les éditions limitées, puis une vidéo animée, pensée pour la landing page et diffusée avant que les visiteurs n’atterrissent dessus."
    ],
    images: [],
    sections: [
      {
        id: "video",
        title: "Voir la vidéo",
        heading: "Vidéo",
        text: "Vidéo réalisée pour la landing page : elle s’affiche avant que les visiteurs n’atterrissent dessus.",
        image: "images/armani/tuile-video.jpg",
        video: { src: "images/armani/video.mp4", poster: "images/armani/poster.jpg" }
      },
      {
        id: "lp",
        title: "Voir la landing page",
        heading: "Landing page",
        image: "images/armani/tuile-lp.jpg",
        shots: { desk: "images/armani/lp-desk.jpg", mob: "images/armani/lp-mob.jpg?v=2" }
      }
    ]
  },
  {
    id: "fdj-halloween-2026",
    title: "FDJ Halloween 2026",
    year: "2026",                          // non affiché sur le site
    role: "Design digital",
    tags: ["Landing page", "Jeu d’argent"],
    cover: "images/fdj-halloween/cover.jpg",   // image de la grille d’accueil
    hero: "",
    summary: "Landing page de l’opération LOTO Halloween 2026, créée chez Showroomprivé.",
    description: [
      "Opération LOTO Halloween 2026 de la FDJ, réalisée pendant mon alternance chez Showroomprivé : un jackpot minimum de 10 millions d’euros à gagner le samedi 31 octobre, avec 10 codes gagnants à 20 000 €. J’ai conçu la landing page aux couleurs d’Halloween en deux versions, ordinateur et mobile, avec un carrousel de packs tirage."
    ],
    images: [],
    sections: [
      {
        id: "lp",
        title: "Voir la landing page",
        heading: "Landing page",
        image: "images/fdj-halloween/tuile-lp.jpg",
        shots: { desk: "images/fdj-halloween/lp-desk.jpg", mob: "images/fdj-halloween/lp-mob.jpg" }
      }
    ]
  },
];
