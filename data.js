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
    id: "landing-pages-showroomprive",
    title: "Landing pages pour Showroomprivé",
    year: "2025–2026",
    role: "Graphiste designer (alternance)",
    tags: ["Web", "UI design"],
    cover: "",            // ex. "landing-pages.jpg" (mets l’image à côté de index.html)
    summary: "Conception de landing pages et amélioration saisonnière de l’interface du site.",
    description: [
      "Dans le cadre de mon alternance chez Showroomprivé, j’ai conçu des landing pages sur Figma et fait évoluer l’interface du site au fil des saisons."
    ],
    images: [],
    figma: "",            // colle ici le lien de partage Figma
    link: ""
  },
  {
    id: "visuels-ia-promotionnels",
    title: "Visuels promotionnels et kits de communication",
    year: "2025–2026",
    role: "Graphiste designer (alternance)",
    tags: ["Intelligence artificielle", "Communication"],
    cover: "",
    summary: "Visuels générés avec l’IA et kits de communication pour les marques et les ventes.",
    description: [
      "J’ai créé des visuels promotionnels avec des outils d’IA (Midjourney, Gemini, Claude) et des kits de communication pour les marques et les ventes, avec Figma et Photoshop."
    ],
    images: [],
    figma: "",
    link: ""
  },
  {
    id: "pdf-interactif-momji",
    title: "PDF interactif et contenus pédagogiques",
    year: "2023–2025",
    role: "Assistante graphiste (alternance)",
    tags: ["Édition", "Motion"],
    cover: "",
    summary: "PDF interactif, fichiers pédagogiques et contenus vidéo pour les réseaux sociaux.",
    description: [
      "Chez Momji / Kinougarde, j’ai créé des PDF interactifs sur InDesign, des fichiers pédagogiques et du contenu vidéo pour les réseaux sociaux avec After Effects et Premiere Pro."
    ],
    images: [],
    figma: "",
    link: ""
  },
  {
    id: "lettrage-manga-focube",
    title: "Lettrage et mise en page de mangas",
    year: "2022–2023",
    role: "Lettreuse et maquettiste (stage)",
    tags: ["Édition", "Typographie"],
    cover: "",
    summary: "Adaptation graphique et lettrage de mangas pour des maisons d’édition.",
    description: [
      "Chez Focube, j’ai réalisé le lettrage, l’adaptation typographique, les retouches graphiques et la mise en page de mangas, en respectant l’esthétique d’origine."
    ],
    images: [],
    figma: "",
    link: ""
  }
];
