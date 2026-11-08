// ===== Aztech Games — Portfolio interactions =====
(() => {
  // Typing effect
  const roles = ["mobile games.", "Unity tools.", "game systems.", "fun experiences."];
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
  const cards = document.querySelectorAll(".project-card");
  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    cards.forEach(card => card.classList.toggle("hide", f !== "all" && card.dataset.cat !== f));
  }));

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
