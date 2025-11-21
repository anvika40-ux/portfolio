<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Anuradha Chaurasiya — Anvika TechNova</title>
  <meta name="description" content="Anuradha Chaurasiya — Web Developer | Frontend Developer | AI Learner. Building the future with code.">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
  <!-- AOS CSS -->
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="site">

    <!-- NAV -->
    <nav class="nav container">
      <div class="brand" data-aos="fade-down">
        <div class="logo">AT</div>
        <div class="brand-text">
          <div class="brand-name">Anvika TechNova</div>
          <div class="brand-sub">Anuradha Chaurasiya</div>
        </div>
      </div>
      <div class="nav-links" data-aos="fade-down" data-aos-delay="80">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>

    <!-- HERO -->
    <header class="hero container">
      <div class="hero-left" data-aos="fade-right">
        <h1 class="name">Anuradha <span class="highlight">Chaurasiya</span></h1>
        <p class="titles">Web Developer • Frontend Developer • Student + Developer</p>
        <p class="tagline">Building the future with code.</p>

        <div class="cta-row">
          <a class="btn primary" href="mailto:helloanvika7@gmail.com" target="_blank">Hire Me</a>
          <a class="btn outline" href="resume.pdf" download>Download Resume</a>
        </div>

        <div class="meta" data-aos="fade-up" data-aos-delay="140">
          <span>📍 Ghazipur, Uttar Pradesh</span>
          <span>📧 helloanvika7@gmail.com</span>
          <span>📱 +91 6386892158</span>
        </div>
      </div>

      <aside class="hero-right card" data-aos="fade-left" data-aos-delay="80">
        <div class="card-title">Quick Skills</div>
        <ul class="skills">
          <li>HTML / CSS / JS</li>
          <li>React (basics)</li>
          <li>Python (scripts & data)</li>
          <li>Responsive Design</li>
          <li>Git • Netlify • GitHub</li>
        </ul>
        <div class="card-cta">
          <a class="btn small" href="#contact">Let’s Talk</a>
        </div>
      </aside>
    </header>

    <!-- ABOUT -->
    <section id="about" class="section about container" data-aos="fade-up">
      <h2>About Me</h2>
      <p>I am a B.Sc Mathematics student and web developer building modern, accessible and fast websites. I combine strong mathematical foundations, Python knowledge and frontend craftsmanship to create practical digital products and business websites under my brand <strong>Anvika TechNova</strong>.</p>
    </section>

    <!-- SERVICES -->
    <section id="services" class="section services container" data-aos="fade-up">
      <h2>Services</h2>
      <div class="services-grid">
        <div class="service" data-aos="zoom-in" data-aos-delay="60">
          <h3>Website Development</h3>
          <p>Responsive business & portfolio websites using modern HTML/CSS/JS.</p>
        </div>
        <div class="service" data-aos="zoom-in" data-aos-delay="120">
          <h3>Landing Pages</h3>
          <p>Conversion focused landing pages for promotions and lead capture.</p>
        </div>
        <div class="service" data-aos="zoom-in" data-aos-delay="180">
          <h3>AI-powered Tools</h3>
          <p>Prototype chatbots and small AI integrations (NLP basics).</p>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section projects container" data-aos="fade-up">
      <h2>Selected Projects</h2>
      <div class="grid">
        <article class="project" data-aos="flip-left">
          <h3>Anvika TechNova — Business Site</h3>
          <p>Agency website & brand (this live site). Designed for small business conversions.</p>
          <a class="link" href="https://github.com/anvika40-ux/anvika-technova" target="_blank">View Repo</a>
        </article>

        <article class="project" data-aos="flip-left" data-aos-delay="80">
          <h3>Portfolio Template</h3>
          <p>Animated modern portfolio template built with AOS + GSAP.</p>
          <a class="link" href="https://github.com/anvika40-ux/portfolio" target="_blank">View Repo</a>
        </article>

        <article class="project" data-aos="flip-left" data-aos-delay="160">
          <h3>AI Experiment (Coming)</h3>
          <p>Small NLP experiments and datasets — coming soon.</p>
          <a class="link" href="#" onclick="alert('Coming soon')">Details</a>
        </article>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="section contact container" data-aos="fade-up">
      <h2>Contact</h2>
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-title">Say hello</div>
          <p>Email: <a href="mailto:helloanvika7@gmail.com">helloanvika7@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/916386892158" target="_blank">+91 6386892158</a></p>
          <div class="socials">
            <a href="https://github.com/anvika40-ux" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
          </div>
        </div>

        <form class="contact-form" id="contactForm" onsubmit="onContactSubmit(event)" data-aos="fade-left">
          <!-- If you want real inbox, replace action with Formspree/Netlify Forms -->
          <label>
            Your name
            <input type="text" name="name" required>
          </label>
          <label>
            Email or phone
            <input type="text" name="contact" required>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required></textarea>
          </label>
          <button class="btn primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>

    <footer class="footer container" data-aos="fade-up">
      <div>© <span id="year"></span> Anuradha Chaurasiya — Anvika TechNova</div>
    </footer>
  </div>

  <!-- AOS JS -->
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <!-- GSAP (for hero micro-animation) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <script src="script.js"></script>
  <script> AOS.init({ duration:700, once:true }); </script>
</body>
</html>

:root{
  --bg:#071025;
  --card:#0f1724;
  --muted:#9aa6b2;
  --accent1:#0ab3ff; /* Neon Tech Blue */
  --accent2:#7a5cff; /* Digital Purple */
  --glass: rgba(255,255,255,0.03);
  --radius:12px;
  --container:1100px;
}
*{box-sizing:border-box}
body{margin:0;font-family:Inter,system-ui,Arial;background:linear-gradient(180deg,#04061a 0%, #071025 60%);color:#e8f6ff;-webkit-font-smoothing:antialiased}
.container{max-width:var(--container);margin:0 auto;padding:22px}

/* NAV */
.nav{display:flex;align-items:center;justify-content:space-between;gap:12px}
.brand{display:flex;align-items:center;gap:12px}
.logo{width:52px;height:52px;border-radius:10px;background:linear-gradient(135deg,var(--accent1),var(--accent2));display:flex;align-items:center;justify-content:center;color:#041026;font-weight:800}
.brand-name{font-weight:700}
.brand-sub{font-size:12px;color:var(--muted)}

/* NAV LINKS */
.nav-links a{color:var(--muted);margin-left:14px;text-decoration:none;font-weight:600}
.nav-links a:hover{color:var(--accent1)}

/* HERO */
.hero{display:grid;grid-template-columns:1fr 340px;gap:28px;align-items:start;padding:36px 0}
.name{font-size:38px;margin:0;line-height:1}
.highlight{background:linear-gradient(90deg,var(--accent1),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
.titles{color:var(--muted);margin:10px 0 6px;font-weight:600}
.tagline{margin:12px 0 18px;color:#cfeeff;font-weight:600}
.cta-row{display:flex;gap:12px;flex-wrap:wrap}
.btn{display:inline-block;padding:10px 16px;border-radius:10px;font-weight:700;text-decoration:none;cursor:pointer;border:0}
.primary{background:linear-gradient(90deg,var(--accent1),var(--accent2));color:#041026;box-shadow:0 12px 40px rgba(10,179,255,0.08)}
.outline{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}
.meta{margin-top:14px;color:var(--muted);display:flex;gap:12px;flex-wrap:wrap;font-size:14px}

/* right card */
.card{background:var(--card);padding:18px;border-radius:var(--radius);border:1px solid rgba(255,255,255,0.03)}
.card-title{font-weight:700;margin-bottom:10px}
.skills{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
.skills li{background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:10px;border-radius:10px;color:var(--muted);font-weight:600}

/* sections */
.section{margin-top:32px}
.section h2{font-size:20px;margin:0 0 12px}

/* services */
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px}
.service{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:16px;border-radius:10px;border:1px solid rgba(255,255,255,0.03)}
.service h3{margin-top:0}

/* projects */
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px}
.project{padding:16px;border-radius:10px;background:linear-gradient(180deg,rgba(255,255,255,0.02), rgba(255,255,255,0.01));border:1px solid rgba(255,255,255,0.03)}
.link{color:var(--accent1);text-decoration:none;font-weight:700}

/* contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.contact-card{background:var(--card);padding:16px;border-radius:10px}
.contact-form label{display:block;margin-bottom:10px;color:var(--muted)}
.contact-form input,.contact-form textarea{width:100%;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;margin-top:6px}
.contact-form button{margin-top:8px}

/* footer */
.footer{margin-top:36px;padding:18px;text-align:center;color:var(--muted);font-size:14px}

/* small screens */
@media(max-width:980px){
  .hero{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .nav-links{display:none}
  .container{padding:16px}
}
// small helpers & animations
document.getElementById('year').innerText = new Date().getFullYear();

// GSAP hero micro animation (if GSAP loaded)
try {
  gsap.from(".name", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out" });
  gsap.from(".tagline", { y: 18, opacity: 0, duration: 0.9, delay: 0.2, ease: "power3.out" });
  gsap.from(".cta-row .btn", { y: 18, opacity: 0, duration: 0.8, delay: 0.35, stagger: 0.12 });
} catch (e) { /* ignore if GSAP not loaded */ }

function onContactSubmit(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const contact = f.contact.value.trim();
  const message = f.message.value.trim();
  if(!name || !contact || !message){ alert('Please fill all fields'); return; }

  // Replace with Netlify Forms or Formspree integration for real emails.
  alert('Thanks ' + name + '! I will contact you soon — Anvika TechNova');
  f.reset();
}
