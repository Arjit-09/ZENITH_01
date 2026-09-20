// ===== ZENITH PORTFOLIO — Cinematic JavaScript =====

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================
  // 1. PRELOADER
  // ===================================================
  const preloader  = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloader-fill');
  const preloaderPct  = document.getElementById('preloader-pct');

  // Prevent scroll while loading
  document.body.style.overflow = 'hidden';

  let pct = 0;
  let step = 0;

  const pctInterval = setInterval(() => {
    // Slow start, fast middle, slow end — feels organic
    if (pct < 30)       step = Math.random() * 3 + 0.5;
    else if (pct < 70)  step = Math.random() * 6 + 2;
    else if (pct < 90)  step = Math.random() * 3 + 0.5;
    else                step = Math.random() * 1.5 + 0.2;

    pct = Math.min(pct + step, 100);
    const rounded = Math.floor(pct);

    if (preloaderFill) preloaderFill.style.width  = pct + '%';
    if (preloaderPct)  preloaderPct.textContent    = rounded + '%';

    if (pct >= 100) {
      clearInterval(pctInterval);
      setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
      }, 400);
    }
  }, 45);

  // ===================================================
  // 2. CUSTOM CURSOR
  // ===================================================
  const cursorDot  = document.getElementById('cursor-dot');
  const cursorRing = document.getElementById('cursor-ring');

  // Only activate on non-touch devices
  if (window.matchMedia('(hover: hover)').matches && cursorDot && cursorRing) {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top  = mouseY + 'px';
    });

    // Lagged ring for the trailing effect
    const animRing = () => {
      ringX += (mouseX - ringX) * 0.10;
      ringY += (mouseY - ringY) * 0.10;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();

    // Hover-grow on interactive elements
    const addHover = (selector) => {
      document.querySelectorAll(selector).forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    };

    addHover('a, button, .pcard, .svc-card, .filter-tab, .cdd-item, .afd-item, .fsoc, .back-to-top');
  }

  // ===================================================
  // 3. NAVBAR — scroll state & active links
  // ===================================================
  const navbar   = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleNavScroll = () => {
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else                      navbar.classList.remove('scrolled');
  };

  const highlightNav = () => {
    const scrollPos = window.scrollY + 130;
    sections.forEach(section => {
      const top    = section.offsetTop;
      const height = section.offsetHeight;
      const id     = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
        });
      }
    });
  };

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  window.addEventListener('scroll', highlightNav,    { passive: true });

  // ===================================================
  // 4. HAMBURGER / FULL-SCREEN MENU
  // ===================================================
  const hamburger   = document.getElementById('nav-hamburger');
  const menuOverlay = document.getElementById('menu-overlay');
  let menuOpen      = false;

  const toggleMenu = (forceClose = false) => {
    menuOpen = forceClose ? false : !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    menuOverlay.classList.toggle('open', menuOpen);
    hamburger.setAttribute('aria-expanded', String(menuOpen));
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  };

  if (hamburger) hamburger.addEventListener('click', () => toggleMenu());

  // Close on any menu link click
  document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOpen) toggleMenu(true);
  });

  // ===================================================
  // 5. SMOOTH SCROLL
  // ===================================================
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href   = link.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===================================================
  // 6. HERO AMBIENT CONSTELLATION CANVAS
  // ===================================================
  const canvas = document.getElementById('hero-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles = [];
    let mouse = { x: null, y: null };

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor(Math.min(w * h / 20000, 45));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 1.8 + 1,
          color: Math.random() > 0.4 ? 'rgba(201, 164, 106,' : 'rgba(255, 255, 255,'
        });
      }
    };

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    resize();

    const renderCanvas = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const alpha = (1 - dist / 130) * 0.14;
            ctx.strokeStyle = `rgba(201, 164, 106, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

        // Particle movement
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // Draw particle dot
        ctx.fillStyle = `${p.color} 0.65)`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(renderCanvas);
    };

    renderCanvas();
  }

  // ===================================================
  // 7. SCROLL REVEAL
  // ===================================================
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 80px 0px' });

  revealEls.forEach(el => revealObs.observe(el));

  // ===================================================
  // 8. SCROLL-SCRUBBED SHOWREEL VIDEO
  // ===================================================
  const showreelSection = document.querySelector('.showreel');
  const showreelWrap    = document.getElementById('showreel-wrap');
  const showreelVideo   = document.getElementById('showreel-video');
  const showreelFill    = document.getElementById('showreel-fill');

  if (showreelSection && showreelVideo) {
    // Load the video metadata
    showreelVideo.load();

    // Play once to unlock autoplay policy then immediately pause
    const unlockVideo = () => {
      showreelVideo.play().then(() => {
        showreelVideo.pause();
        showreelVideo.currentTime = 0;
      }).catch(() => {/* autoplay blocked, scrub still works on scroll */});
      document.removeEventListener('scroll', unlockVideo);
    };
    document.addEventListener('scroll', unlockVideo, { once: true, passive: true });

    window.addEventListener('scroll', () => {
      const rect         = showreelSection.getBoundingClientRect();
      const sectionH     = showreelSection.offsetHeight;
      const viewportH    = window.innerHeight;
      const scrollable   = sectionH - viewportH;

      // progress: 0 → 1 as section scrolls from entering to leaving
      const raw      = Math.max(0, -rect.top);
      const progress = Math.min(1, raw / scrollable);

      // 1. Scrub video by current time
      if (showreelVideo.readyState >= 1 && showreelVideo.duration) {
        showreelVideo.currentTime = progress * showreelVideo.duration;
      }

      // 2. Expand video size: 34% → 99%
      const size = 34 + progress * 65;
      if (showreelWrap) showreelWrap.style.width = size + '%';

      // 3. Update progress bar
      if (showreelFill) showreelFill.style.width = (progress * 100) + '%';

    }, { passive: true });
  }

  // ===================================================
  // 9. HORIZONTAL PROJECT SCROLL (Sticky Pin)
  // ===================================================
  const projectsSection = document.getElementById('projects');
  const projectsTrack   = document.getElementById('projects-track');
  let projectScrollDist = 0;

  const setupHorizontalScroll = () => {
    if (!projectsSection || !projectsTrack) return;

    if (window.innerWidth <= 900) {
      // Mobile: reset to normal flow
      projectsSection.style.height = 'auto';
      projectsTrack.style.transform = '';
      projectScrollDist = 0;
      return;
    }

    requestAnimationFrame(() => {
      const trackW   = projectsTrack.scrollWidth;
      const vpW      = window.innerWidth;
      const padding  = 80; // left padding offset
      projectScrollDist = Math.max(0, trackW - vpW + padding);

      // The section must be tall enough for the full scroll distance plus 1 viewport
      projectsSection.style.height = `calc(100vh + ${projectScrollDist}px)`;
    });
  };

  setupHorizontalScroll();
  window.addEventListener('resize', setupHorizontalScroll);

  // Drive the horizontal translation on scroll
  window.addEventListener('scroll', () => {
    if (!projectsSection || !projectsTrack) return;
    if (window.innerWidth <= 900 || projectScrollDist === 0) return;

    const rect      = projectsSection.getBoundingClientRect();
    const scrollH   = projectsSection.offsetHeight - window.innerHeight;
    const progress  = Math.max(0, Math.min(1, -rect.top / scrollH));
    const translateX = progress * projectScrollDist;

    projectsTrack.style.transform = `translateX(-${translateX}px)`;
  }, { passive: true });

  // ===================================================
  // 10. PROJECT FILTER TABS
  // ===================================================
  const filterTabs  = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.pcard');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active state
      filterTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      // Recalculate scroll after filter changes track width
      setTimeout(setupHorizontalScroll, 80);
    });
  });

  // ===================================================
  // 11. SERVICE CARD 3D TILT
  // ===================================================
  document.querySelectorAll('.svc-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x  = e.clientX - rect.left;
      const y  = e.clientY - rect.top;
      const cx = rect.width  / 2;
      const cy = rect.height / 2;
      const rx = ((y - cy) / cy) * -5;
      const ry = ((x - cx) / cx) *  5;
      card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  });

  // ===================================================
  // 12. CONTACT FORM (Formspree)
  // ===================================================
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn  = document.getElementById('form-submit');
      const originalHTML = submitBtn.innerHTML;
      submitBtn.innerHTML  = '<span>Sending…</span>';
      submitBtn.disabled   = true;

      const formData = new FormData(contactForm);

      fetch('https://formspree.io/f/xpwzgqbl', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(Object.fromEntries(formData))
      })
      .then(res => {
        if (res.ok) {
          contactForm.style.display = 'none';
          if (formSuccess) formSuccess.classList.add('show');
        } else {
          alert('Something went wrong. Please try again or email us directly.');
        }
      })
      .catch(() => {
        alert('Network error. Please check your connection and try again.');
      })
      .finally(() => {
        submitBtn.innerHTML  = originalHTML;
        submitBtn.disabled   = false;
      });
    });
  }

  // ===================================================
  // 13. BACK TO TOP
  // ===================================================
  const backToTop = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (!backToTop) return;
    if (window.scrollY > 600) backToTop.classList.add('visible');
    else                       backToTop.classList.remove('visible');
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===================================================
  // 14. PROJECT CARD MAGNETIC HOVER (desktop only)
  // ===================================================
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.pcard').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width  / 2) * 0.04;
        const y = (e.clientY - rect.top  - rect.height / 2) * 0.04;
        card.style.transform = `translateY(-4px) translate(${x}px, ${y}px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ===================================================
  // 15. ABOUT MANIFESTO FADE-IN
  // ===================================================
  const aboutManifesto = document.querySelector('.about-manifesto');
  if (aboutManifesto) {
    const manifestoObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          aboutManifesto.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
          aboutManifesto.style.opacity = '1';
          aboutManifesto.style.transform = 'translateY(0)';
          manifestoObs.unobserve(aboutManifesto);
        }
      });
    }, { threshold: 0.3 });
    manifestoObs.observe(aboutManifesto);
  }

});
