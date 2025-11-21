// small helpers
document.getElementById('year').innerText = new Date().getFullYear();

function onContactSubmit(e){
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const contact = f.contact.value.trim();
  const message = f.message.value.trim();
  if(!name || !contact || !message){ alert('Please fill all fields'); return; }

  // simple client-side "send" simulation — replace with Netlify Forms or Formspree later
  alert('Thanks ' + name + '! I will contact you soon — Anvika TechNova');
  f.reset();
}
