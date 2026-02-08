const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.textContent = 'Thanks! Your message has been received.';
    contactForm.reset();
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

if (lightbox && lightboxImage && lightboxCaption && lightboxTriggers.length > 0) {
  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const image = trigger.dataset.image;
      const title = trigger.dataset.title;
      lightboxImage.src = image;
      lightboxCaption.textContent = title;
      lightbox.showModal();
    });
  });
}

if (lightbox && lightboxClose) {
  lightboxClose.addEventListener('click', () => {
    lightbox.close();
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });
}
