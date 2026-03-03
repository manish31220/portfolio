const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.desktop-nav a');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    });
  },
  {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0
  }
);

sections.forEach(section => observer.observe(section));
