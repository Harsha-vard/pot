// Scroll-triggered animations
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Skill bar animations
const skillBars = document.querySelectorAll('.bar');

window.addEventListener('scroll', () => {
  skillBars.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.setProperty('--width', bar.dataset.progress);
      bar.style.width = bar.dataset.progress;
    }
  });
});

// Contact form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for your message!');
  form.reset();
});

// Dark/Light mode toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
