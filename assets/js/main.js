// ===== Aztech Games — Portfolio interactions =====
(() => {
  // Typing effect
  const roles = ["mobile games.", "Unity tools.", "game dev teams.", "future game developers."];
  const typed = document.getElementById("typed");
  let r = 0, c = 0, deleting = false;
  function type() {
    const word = roles[r];
    typed.textContent = word.slice(0, c);
    if (!deleting && c < word.length) c++;
    else if (deleting && c > 0) c--;
    else if (!deleting) { deleting = true; return setTimeout(type, 1600); }
    else { deleting = false; r = (r + 1) % roles.length; }
    setTimeout(type, deleting ? 45 : 90);
  }
  type();

  // Navbar state + active link
  const nav = document.getElementById("nav");
  const links = [...document.querySelectorAll(".nav-links a")];
  const sections = links.map(a => document.querySelector(a.getAttribute("href")));
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    const y = window.scrollY + window.innerHeight / 3;
    sections.forEach((s, i) => {
      if (s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y) {
        links.forEach(l => l.classList.remove("active"));
        links[i].classList.add("active");
      }
    });
  }, { passive: true });

  // Mobile menu
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("nav-links");
  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
  links.forEach(l => l.addEventListener("click", () => {
    burger.classList.remove("open");
    navLinks.classList.remove("open");
  }));

  // Reveal on scroll + skill bars + counters
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add("visible");
      el.querySelectorAll(".bar-fill").forEach(b => (b.style.width = b.dataset.w + "%"));
      el.querySelectorAll(".stat-num").forEach(countUp);
      io.unobserve(el);
    });
  }, { threshold: 0.15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  function countUp(el) {
    const target = +el.dataset.count;
    const start = performance.now();
    const dur = 1600;
    (function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    })(start);
  }

  // Project filters
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card, .game-card");
  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    cards.forEach(card => card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f));
  }));

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

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();

  // Particle network background
  const canvas = document.getElementById("bg-canvas");
  const ctx = canvas.getContext("2d");
  let w, h, pts;
  const mouse = { x: -999, y: -999 };
  function init() {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
    const n = Math.min(80, Math.floor((w * h) / 18000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.fillStyle = "rgba(0,212,255,.6)";
      ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 130) {
          ctx.strokeStyle = `rgba(124,92,255,${0.18 * (1 - d / 130)})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      if (dm < 160) {
        ctx.strokeStyle = `rgba(0,212,255,${0.35 * (1 - dm / 160)})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
    init(); draw();
    addEventListener("resize", init);
    addEventListener("mousemove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  }
})();
