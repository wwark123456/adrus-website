const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('.booking-form');
const success = document.getElementById('form-success');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || 'Thanks').toString().trim();
    success.textContent = `${name}, your enquiry has been captured in this demo. Connect this form to your email or CRM before publishing.`;
    form.reset();
  });
}
