
// Build nav links so we can set aria-current correctly per page
const nav = document.getElementById('site-nav');
if (nav) {
  const links = [
    { href: 'index.html', label: 'Home' },
    { href: 'about.html', label: 'About Us' },
    { href: 'services.html', label: 'Services' },
    { href: 'resources.html', label: 'Resources' },
    { href: 'contact.html', label: 'Contact Us' },
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = links.map(l => 
    '<a class="nav-link" href="' + l.href + '"' + (l.href === current ? ' aria-current="page"' : '') + '>' + l.label + '</a>'
  ).join('');
}

// Mobile menu
const toggle = document.querySelector('.menu-toggle');
if (toggle) {
  toggle.addEventListener('click', () => {
    const nav = document.getElementById('site-nav');
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Contact form -> mailto: fallback (no backend, no signup)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const to = document.getElementById('contact-email').textContent.trim() || 'hello@example.com';

    const subject = encodeURIComponent('Website inquiry from ' + name);
    const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);
    const mailto = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    window.location.href = mailto;

    // Optional: show a gentle toast
    alert('Opening your email app to send the message. If nothing happens, email us directly at ' + to + '.');
  });
}
