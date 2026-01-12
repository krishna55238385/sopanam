import './style.css';

// Navigation Data
const links = [
  { name: 'Home', href: '/' }, // For dev server this works, for file:// it might need adjustment but sticking to standard.
  { name: 'About', href: '/about.html' },
  { name: 'Programs', href: '/programs.html' },
  { name: 'Wall of Love', href: '/wall-of-love.html' },
  { name: 'Our Team', href: '/team.html' },
  { name: 'Gallery', href: '/gallery.html' },
  { name: 'Blog', href: '/blog.html' },
  { name: 'Contact', href: '/contact.html' },
];

function createNavbar() {
  const currentPath = window.location.pathname;
  const navHtml = `
    <nav class="navbar">
      <a href="/" class="brand-logo">SOPANAM SATTVA</a>
      <button class="mobile-menu-btn" aria-label="Toggle Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <ul class="nav-links">
        ${links.map(link => `
          <li><a href="${link.href}" class="nav-link ${currentPath === link.href ? 'active' : ''}">${link.name}</a></li>
        `).join('')}
      </ul>
    </nav>
  `;
  document.body.insertAdjacentHTML('afterbegin', navHtml);
}

function createFooter() {
  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h4>Sopanam Sattva</h4>
            <p>Nature Living & Yoga Village.<br>Equanimity through Yoga.</p>
          </div>
          <div class="footer-column">
            <h5>Quick Links</h5>
            <ul class="footer-links">
              ${links.map(link => `<li><a href="${link.href}">${link.name}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-column">
            <h5>Contact Us</h5>
            <p>Near SNDP, Chemmanda,<br>Irinjalakuda, Thrissur,<br>Kerala – 680711, India</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Sopanam Sattva. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footerHtml);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  createNavbar();
  createFooter();

  // Mobile Menu Toggle (Simple)
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select elements to animate
  document.querySelectorAll('.section, .program-card, .footer-column, .card-grid > *').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  // Dynamic Navbar Background on Scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      // Toggle class 'active' on nav-links
      navLinks.classList.toggle('active');

      // Optional: Animate hamburger to X (can add .open to btn later if needed)
    });
  }
});
