const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm && formMessage) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    formMessage.textContent = 'Sending...';

    try {
      const formData = new FormData(contactForm);
      const formName = contactForm.getAttribute('name');
      if (formName && !formData.has('form-name')) {
        formData.append('form-name', formName);
      }
      const body = new URLSearchParams(formData).toString();
      const action = contactForm.getAttribute('action') || '/';

      const response = await fetch(action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      const isSuccess =
        response.ok ||
        response.type === 'opaqueredirect' ||
        (response.status >= 300 && response.status < 400);

      if (!isSuccess) {
        throw new Error('Form submission failed');
      }

      formMessage.textContent = 'Thanks! Your message has been received.';
      contactForm.reset();
    } catch (error) {
      formMessage.textContent =
        'Sorry, something went wrong. Please try again.';
    }
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
