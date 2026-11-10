const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const page = document.body.dataset.page;

/* Lien Figma normal -> lien intégrable */
function figmaEmbed(url, bare) {
  if (!url) return "";
  let u = url.replace("https://www.figma.com/", "https://embed.figma.com/");
  const add = (k, v) => { if (!new RegExp("[?&]" + k + "=").test(u)) u += (u.includes("?") ? "&" : "?") + k + "=" + v; };
  add("embed-host", "share");
  if (bare) { add("hide-ui", "1"); add("hotspot-hints", "0"); add("footer", "false"); }   // sans l'interface Figma
  return u;
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
    ? `<img src="${esc(p.cover)}" alt="" loading="lazy"${p.coverFocus ? ` style="object-position:${esc(p.coverFocus)}"` : ""}>`
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

/* Galerie : lignes de 3 images à hauteur égale, sans recadrage. `start` = numéro de la première image dans l'agrandissement */
function rows(images, start, sizes) {
  const list = images.map(im => (typeof im === "string" ? { src: im } : im));
  let html = "", i = 0, r = 0;
  while (i < list.length) {
    const n = (sizes && sizes[r]) || 3;   // `sizes` = nombre d'images par ligne (3 par défaut)
    html += `<div class="row">${list.slice(i, i + n).map((s, k) => `<figure class="shot" style="flex:${s.ratio || 1.4} 1 0"><button class="zoom" type="button" data-i="${start + i + k}" aria-label="Agrandir l’image"><img src="${esc(s.src)}" alt="${esc(s.caption || "")}" loading="lazy"></button></figure>`).join("")}</div>`;
    i += n; r++;
  }
  return html;
}

/* Agrandissement des images : clic pour ouvrir, flèches ou glissement pour changer, Échap pour fermer */
function lightbox(list) {
  let i = 0, opener = null, x0 = null;
  const box = document.createElement("div");
  box.className = "lb"; box.hidden = true;
  box.setAttribute("role", "dialog"); box.setAttribute("aria-modal", "true"); box.setAttribute("aria-label", "Image agrandie");
  box.innerHTML = `<button class="lb-close" type="button" aria-label="Fermer">✕</button>
    ${list.length > 1 ? `<button class="lb-nav lb-prev" type="button" aria-label="Image précédente">‹</button><button class="lb-nav lb-next" type="button" aria-label="Image suivante">›</button><span class="lb-count"></span>` : ""}
    <img alt="">`;
  document.body.appendChild(box);
  const img = box.querySelector("img"), count = box.querySelector(".lb-count");
  const show = n => {
    i = (n + list.length) % list.length;
    img.src = list[i].src; img.alt = list[i].alt || "";
    if (count) count.textContent = `${i + 1} / ${list.length}`;
  };
  const close = () => { box.hidden = true; document.body.style.overflow = ""; img.removeAttribute("src"); if (opener) opener.focus(); };
  box.addEventListener("click", e => { if (e.target === box) close(); });
  box.querySelector(".lb-close").addEventListener("click", close);
  if (list.length > 1) {
    box.querySelector(".lb-prev").addEventListener("click", () => show(i - 1));
    box.querySelector(".lb-next").addEventListener("click", () => show(i + 1));
    box.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    box.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) show(i + (dx < 0 ? 1 : -1));
    });
  }
  document.addEventListener("keydown", e => {
    if (box.hidden) return;
    if (e.key === "Escape") close();
    if (list.length > 1 && e.key === "ArrowLeft") show(i - 1);
    if (list.length > 1 && e.key === "ArrowRight") show(i + 1);
  });
  return (n, from) => { opener = from; show(n); box.hidden = false; document.body.style.overflow = "hidden"; box.querySelector(".lb-close").focus(); };
}

/* Détail d'un projet */
if (page === "project") {
  const qs = new URLSearchParams(location.search);
  const id = qs.get("id");
  const i = PROJECTS.findIndex(p => p.id === id);
  const el = document.getElementById("project");
  if (i < 0) {
    el.innerHTML = `<h1>Projet introuvable</h1><p><a href="index.html">Retour aux projets</a></p>`;
  } else {
    const p = PROJECTS[i];
    const sec = (p.sections || []).find(s => s.id === qs.get("section"));
    el.className = "project";
    if (sec) {
      /* Page d'un choix (landing page, écrans de jeux, kits de com…) */
      document.title = `${sec.heading || sec.title} – ${p.title} – ${SITE.name}`;
      const shots = (sec.images || []).map(im => (typeof im === "string" ? { src: im } : im));
      const phones = sec.phones || [];
      const journey = sec.journey || [];
      const zoomList = [...journey, ...phones, ...shots].map(s => ({ src: s.src, alt: s.caption || "" }));
      el.innerHTML = `
        <a class="back" href="project.html?id=${encodeURIComponent(p.id)}">${esc(p.title)}</a>
        <h1>${esc(sec.heading || sec.title)}</h1>
        ${sec.text ? `<p class="lead">${esc(sec.text)}</p>` : ""}
        ${sec.figma && sec.frame === "desktop" ? `<div class="monitor"><div class="monitor-screen"><iframe src="${esc(figmaEmbed(sec.figma, true))}" title="Landing page interactive : ${esc(p.title)}" allowfullscreen></iframe></div></div><p class="phone-hint">Cliquez dans l’écran et faites défiler pour essayer la landing page.</p>` : ""}
        ${sec.figma && !sec.frame ? `<div class="figma"><iframe src="${esc(figmaEmbed(sec.figma))}" title="Prototype Figma : ${esc(p.title)}" allowfullscreen></iframe></div>` : ""}
        ${phones.length ? `<div class="phones">${phones.map((s, k) => `<figure class="phone"><button class="zoom" type="button" data-i="${k}" aria-label="Agrandir l’écran"><img src="${esc(s.src)}" alt="${esc(s.caption || "")}" loading="lazy"></button></figure>`).join("")}</div>` : ""}
        ${journey.length ? `<div class="journey"><button class="j-nav j-prev" type="button" aria-label="Précédent">‹</button><button class="j-nav j-next" type="button" aria-label="Suivant">›</button><ol class="track">${journey.map((s, k) => `${s.sep === "|" ? "" : ""}<li class="step"><button class="zoom" type="button" data-i="${k}" aria-label="Agrandir l’écran"><img src="${esc(s.src)}" alt="${esc(s.caption || "")}" loading="lazy"></button><p class="cap"><b>${String(k + 1).padStart(2, "0")}</b> ${esc(s.caption || "")}</p></li>${s.sep && s.sep !== "|" ? `<li class="sep" aria-hidden="true">${esc(s.sep)}</li>` : ""}${s.sep === "|" ? `<li class="sep-line" aria-hidden="true"><span>Cas particuliers</span></li>` : ""}`).join("")}</ol></div>` : ""}
        ${shots.length ? `<div class="gallery">${rows(shots, phones.length, sec.rowSizes)}</div>` : ""}
        <p class="back-bottom"><a class="back" href="project.html?id=${encodeURIComponent(p.id)}">Retour à ${esc(p.title)}</a></p>`;
      if (zoomList.length) {
        const open = lightbox(zoomList);
        el.querySelectorAll(".zoom").forEach(b => b.addEventListener("click", () => open(+b.dataset.i, b)));
      }
      const track = el.querySelector(".track");
      if (track) {
        const by = dir => track.scrollBy({ left: dir * Math.max(300, track.clientWidth * 0.7), behavior: "smooth" });
        el.querySelector(".j-prev").addEventListener("click", () => by(-1));
        el.querySelector(".j-next").addEventListener("click", () => by(1));
      }
    } else {
      document.title = `${p.title} – ${SITE.name}`;
      const [lead, ...more] = p.description;
      const heroSrc = ("hero" in p) ? p.hero : p.cover;   // hero: "" = pas de bannière
      const shots = p.images.map(im => (typeof im === "string" ? { src: im } : im));
      const zoomList = [...(heroSrc ? [{ src: heroSrc, alt: p.title }] : []), ...shots.map(s => ({ src: s.src, alt: s.caption || "" }))];
      // Les 3 projets suivants dans la liste (sans le projet actuel)
      const others = [1, 2, 3].map(k => PROJECTS[(i + k) % PROJECTS.length]).filter((o, k, a) => o.id !== p.id && a.findIndex(q => q.id === o.id) === k);
      el.innerHTML = `
        <a class="back" href="index.html">Tous les projets</a>
        <h1>${esc(p.title)}</h1>
        ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
        <ul class="tags"><li>${esc(p.role)}</li>${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.sections ? `<div class="more-grid choices">${p.sections.map(s => `
          <a class="mini" href="project.html?id=${encodeURIComponent(p.id)}&section=${encodeURIComponent(s.id)}">
            <div class="mini-img"><img src="${esc(s.image)}" alt="" loading="lazy"></div>
            <div class="mini-cap"><strong>${esc(s.title)}</strong></div>
          </a>`).join("")}</div>` : ""}
        ${heroSrc ? `<button class="zoom hero-zoom" type="button" data-i="0" aria-label="Agrandir l’image"><img class="hero-img" src="${esc(heroSrc)}" alt="${esc(p.title)}"></button>` : ""}
        ${shots.length ? `<div class="gallery">${rows(shots, heroSrc ? 1 : 0, p.rowSizes)}</div>` : ""}
        ${more.length ? `<div class="prose">${more.map(t => `<p>${esc(t)}</p>`).join("")}</div>` : ""}
        ${p.figma ? `<h2>Prototype interactif</h2><div class="figma"><iframe src="${esc(figmaEmbed(p.figma))}" title="Prototype Figma : ${esc(p.title)}" allowfullscreen></iframe></div>` : ""}
        ${p.link ? `<p style="text-align:center;margin-top:32px"><a class="btn" href="${esc(p.link)}">Voir le projet en ligne</a></p>` : ""}
        ${others.length ? `<section class="more"><h2>Autres projets</h2><div class="more-grid">${others.map(o => `
          <a class="mini" href="project.html?id=${encodeURIComponent(o.id)}">
            <div class="mini-img">${cover(o)}</div>
            <div class="mini-cap"><strong>${esc(o.title)}</strong></div>
          </a>`).join("")}</div></section>` : ""}`;
      if (zoomList.length) {
        const open = lightbox(zoomList);
        el.querySelectorAll(".zoom").forEach(b => b.addEventListener("click", () => open(+b.dataset.i, b)));
      }
    }
  }
}

/* Contact */
if (page === "contact") {
  const a = document.getElementById("mail");
  a.href = "mailto:" + SITE.email; a.textContent = SITE.email;
  document.getElementById("links").innerHTML = SITE.links.map(l => `<li><a href="${esc(l.url)}">${esc(l.label)}</a></li>`).join("");
}
