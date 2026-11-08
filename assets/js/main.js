// Atakan Naci Çakır — portfolio interactions (design v3 "Studio")
(() => {
  // Hero icon wall: fill three columns with the real game icons (duplicated for a seamless loop)
  const icons = [...document.querySelectorAll(".game img")].map(i => i.getAttribute("src"));
  document.querySelectorAll(".wall .col").forEach((col, c) => {
    const list = icons.slice(c * 3).concat(icons.slice(0, c * 3));
    const frag = document.createDocumentFragment();
    [...list, ...list].forEach(src => { const img = new Image(); img.src = src; img.alt = ""; img.decoding = "async"; frag.appendChild(img); });
    col.appendChild(frag);
  });

  // Top bar border once scrolled + active section in menu
  const bar = document.getElementById("bar");
  const links = [...document.querySelectorAll(".menu a")];
  const targets = links.map(a => document.querySelector(a.getAttribute("href")));
  const onScroll = () => {
    bar.classList.toggle("scrolled", window.scrollY > 8);
    const y = window.scrollY + window.innerHeight / 3;
    let current = -1;
    targets.forEach((s, i) => { if (s && s.offsetTop <= y) current = i; });
    links.forEach((l, i) => l.classList.toggle("active", i === current));
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile menu
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const setMenu = open => {
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
  };
  burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
  links.forEach(l => l.addEventListener("click", () => setMenu(false)));

  // Certificates gallery: lists every image/PDF in assets/img/certs automatically
  (() => {
    const DIR = "assets/img/certs/";
    const FALLBACK = ["GFA Winter Jam - ODTU Teknokent ATOM.jpg", "Game Development Winter Camp 2022 - Bilisim Vadisi.jpg"];
    const SHOW = 6;
    // Display order: most globally recognised / prestigious first. Files not listed here appear at the end (A–Z).
    const ORDER = [
      "Introduction to Game Design - CalArts (Coursera)",
      "Introduction to Game Development - Michigan State University (Coursera)",
      "Introduction to Git and GitHub - Google (Coursera)",
      "Introduction to C# Programming and Unity - University of Colorado (Coursera)",
      "More C# Programming and Unity - University of Colorado (Coursera)",
      "Intermediate Object-Oriented Programming for Unity Games - University of Colorado (Coursera)",
      "Microsoft Azure ile GPU Tabanlı Veri Bilimi - Microsoft Learn Student Ambassadors",
      "Scrum The Basics - LinkedIn Learning",
      "Game Design Foundations 1 - Ideas, Core Loops and Goals - LinkedIn Learning",
      "Gamifying Training to Improve Learning Outcomes - LinkedIn Learning",
      "Basitleştirilmiş Proje Yönetimi - LinkedIn Learning",
      "Üretken Yapay Zeka Nedir - LinkedIn Learning",
      "İş Analizi Nedir - LinkedIn Learning",
      "Herkese Müttefik Olmak - LinkedIn Learning",
      "Word 2019 Essential Training - LinkedIn Learning",
      "Build a Product Roadmap with Aha - Coursera",
      "Business Analysis and Process Management - Coursera",
      "Create a Project Management Tracker using Microsoft Excel - Coursera",
      "Gamification Learning with Genially - Coursera",
      "Getting Started in Google Analytics - Coursera",
      "Introduction to Microsoft Excel - Coursera",
      "Basic Game Development with Levels using Scratch - Coursera",
      "Go Game İklim Odaklı Oyun Geliştirme Hackathonu (Mentör) - Konya Büyükşehir Gençlik Meclisi",
      "GFA Winter Jam - ODTU Teknokent ATOM",
      "Game Development Winter Camp 2022 - Bilisim Vadisi",
      "Oyunlarda Ürün Yönetimi ve Girişimcilik - BTK Akademi",
      "Unity ile Dijital Oyun Geliştirmeye Giriş - BTK Akademi",
      "Unity ile Dijital Oyun Geliştirmeye Giriş (Sertifika 2) - BTK Akademi",
      "Unity ile Eğitici Oyunlar - BTK Akademi",
      "Unity ile Eğitici Oyunlar (Sertifika 2) - BTK Akademi",
      "Android ile Mobil Programlama (192 saat) - MEB",
      "İki Boyutlu Çizim - Autocad (192 saat) - MEB",
      "Bilgisayar İşletmenliği (163 saat) - MEB",
      "Ofis Programları Kullanımı (72 saat) - MEB",
      "Sıfırdan Unity 3D ile Oyun Geliştirme - Udemy",
      "Unity 3D ile RPG Oyun Geliştirme - Udemy",
      "C# ile Hayatın Gerçekleri - Udemy",
      "C# ile Blockchain Kodlama - Udemy",
      "Blockchain Nedir - Udemy",
      "İş Sağlığı ve Güvenliği (İSG) - Udemy",
      "Mobil Oyun Bootcamp - Patika.dev",
      "Game Design Eğitim Programı - TOGO",
      "Game Development Event - Istinye University DSC",
      "İki Yıldız Dalıcı (Two Star Diver) - TSSF"
    ];
    const rank = n => { const i = ORDER.indexOf(n.replace(/\.[^.]+$/, "")); return i < 0 ? 999 : i; };
    const gal = document.getElementById("cert-gallery");
    const more = document.getElementById("cert-more");
    let files = (window.CERT_FILES && window.CERT_FILES.length) ? window.CERT_FILES : FALLBACK;
    files = files.filter(n => /\.(jpe?g|png|webp|gif|pdf)$/i.test(n)).sort((a, b) => rank(a) - rank(b) || a.localeCompare(b, "tr"));
    const title = n => n.replace(/\.[^.]+$/, "").replace(/[_]+/g, " ").replace(/\s+-\s+/g, " — ");
    const images = [];
    files.forEach((n, i) => {
      const url = DIR + encodeURIComponent(n);
      const pdf = /\.pdf$/i.test(n);
      const a = document.createElement("a");
      a.className = "cert visible" + (i >= SHOW ? " cert-hidden" : "");
      a.href = url; a.target = "_blank"; a.rel = "noopener";
      a.innerHTML = pdf
        ? `<div class="cert-pdf"><i class="fa-solid fa-file-pdf"></i></div><span></span>`
        : `<img loading="lazy" alt="" /><span></span>`;
      a.querySelector("span").textContent = title(n);
      if (!pdf) {
        const img = a.querySelector("img"); img.src = url; img.alt = title(n);
        const idx = images.push({ url, cap: title(n) }) - 1;
        a.addEventListener("click", e => { e.preventDefault(); openLb(idx); });
      }
      gal.appendChild(a);
    });
    if (files.length > SHOW) {
      more.hidden = false;
      more.querySelector("span").textContent = `See all ${files.length} certificates`;
      more.addEventListener("click", () => {
        gal.querySelectorAll(".cert-hidden").forEach(c => c.classList.remove("cert-hidden"));
        more.hidden = true;
      });
    }
    // Lightbox
    const lb = document.getElementById("lightbox");
    const lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
    let cur = 0;
    function openLb(i) { cur = (i + images.length) % images.length; lbImg.src = images[cur].url; lbCap.textContent = images[cur].cap; lb.hidden = false; document.body.style.overflow = "hidden"; }
    function closeLb() { lb.hidden = true; document.body.style.overflow = ""; }
    lb.querySelector(".lb-close").onclick = closeLb;
    lb.querySelector(".lb-prev").onclick = () => openLb(cur - 1);
    lb.querySelector(".lb-next").onclick = () => openLb(cur + 1);
    lb.addEventListener("click", e => { if (e.target === lb) closeLb(); });
    addEventListener("keydown", e => {
      if (lb.hidden) return;
      if (e.key === "Escape") closeLb();
      if (e.key === "ArrowLeft") openLb(cur - 1);
      if (e.key === "ArrowRight") openLb(cur + 1);
    });
  })();

  document.getElementById("year").textContent = new Date().getFullYear();
})();
