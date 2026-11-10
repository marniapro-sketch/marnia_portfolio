const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const page = document.body.dataset.page;

/* Lien Figma normal -> lien intégrable */
function figmaEmbed(url) {
  if (!url) return "";
  const u = url.replace("https://www.figma.com/", "https://embed.figma.com/");
  return u + (u.includes("?") ? "&" : "?") + "embed-host=share";
}

/* En-tête et pied de page communs */
const nav = [["index.html", "Projets", "home"], ["about.html", "À propos", "about"], ["contact.html", "Contact", "contact"]];
document.body.insertAdjacentHTML("afterbegin", `
  <header class="top"><a class="logo" href="index.html">${esc(SITE.name)}</a>
  <nav>${nav.map(([h, l, p]) => `<a href="${h}"${p === page || (page === "project" && p === "home") ? ' aria-current="page"' : ""}>${l}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend", `
  <footer class="foot"><span>© ${new Date().getFullYear()} ${esc(SITE.name)}</span>
  <span>${SITE.links.map(l => `<a href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}</span></footer>`);

function cover(p) {
  return p.cover
    ? `<img src="${esc(p.cover)}" alt="" loading="lazy">`
    : `<div class="ph" aria-hidden="true">${esc(p.title.charAt(0))}</div>`;
}

/* Accueil */
if (page === "home") {
  document.getElementById("name").textContent = SITE.name;
  document.getElementById("role").textContent = SITE.role;
  document.getElementById("grid").innerHTML = PROJECTS.map(p => `
    <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
      <div class="thumb">${cover(p)}</div>
      <div class="info">
        <h2>${esc(p.title)}</h2>
        <p>${esc(p.summary)}</p>
      </div>
    </a>`).join("");
}

/* Galerie : lignes de 3 images à hauteur égale, sans recadrage */
function rows(images) {
  const list = images.map(im => (typeof im === "string" ? { src: im } : im));
  let html = "";
  for (let i = 0; i < list.length; i += 3) {
    html += `<div class="row">${list.slice(i, i + 3).map(s => `<figure class="shot" style="flex:${s.ratio || 1.4} 1 0"><img src="${esc(s.src)}" alt="${esc(s.caption || "")}" loading="lazy"></figure>`).join("")}</div>`;
  }
  return html;
}

/* Détail d'un projet */
if (page === "project") {
  const id = new URLSearchParams(location.search).get("id");
  const i = PROJECTS.findIndex(p => p.id === id);
  const el = document.getElementById("project");
  if (i < 0) {
    el.innerHTML = `<h1>Projet introuvable</h1><p><a href="index.html">Retour aux projets</a></p>`;
  } else {
    const p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
    document.title = `${p.title} – ${SITE.name}`;
    
    const [lead, ...more] = p.description;
    el.className = "project";
    el.innerHTML = `
      <a class="back" href="index.html">Tous les projets</a>
      <h1>${esc(p.title)}</h1>
      <p class="lead">${esc(lead)}</p>
      <ul class="tags"><li>${esc(p.role)}</li>${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}${p.year ? `<li>${esc(p.year)}</li>` : ""}</ul>
      ${(p.hero || p.cover) ? `<img class="hero-img" src="${esc(p.hero || p.cover)}" alt="${esc(p.title)}">` : ""}
      ${p.images.length ? `<div class="gallery">${rows(p.images)}</div>` : ""}
      ${more.length ? `<div class="prose">${more.map(t => `<p>${esc(t)}</p>`).join("")}</div>` : ""}
      ${p.figma ? `<h2>Prototype interactif</h2><div class="figma"><iframe src="${esc(figmaEmbed(p.figma))}" title="Prototype Figma : ${esc(p.title)}" allowfullscreen></iframe></div>` : ""}
      ${p.link ? `<p style="text-align:center;margin-top:32px"><a class="btn" href="${esc(p.link)}">Voir le projet en ligne</a></p>` : ""}
      <a class="next" href="project.html?id=${encodeURIComponent(next.id)}"><small>Projet suivant</small><strong>${esc(next.title)}</strong></a>`;
  }
}

/* Contact */
if (page === "contact") {
  const a = document.getElementById("mail");
  a.href = "mailto:" + SITE.email; a.textContent = SITE.email;
  document.getElementById("links").innerHTML = SITE.links.map(l => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join("");
}
