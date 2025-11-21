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
