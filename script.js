document.addEventListener('DOMContentLoaded', () => {

  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  const skills = [
    { name: 'HTML',       stars: 5, pct: 100 },
    { name: 'CSS',        stars: 5, pct: 100 },
    { name: 'SQL',        stars: 5, pct: 100 },
    { name: 'Python',     stars: 4, pct: 80  },
    { name: 'Excel',      stars: 4, pct: 80  },
    { name: 'JavaScript', stars: 3, pct: 60  },
    { name: 'Power BI',   stars: 3, pct: 60  },
  ];

  const techGrid = document.getElementById('techSkillsGrid');
  if (techGrid) {
    skills.forEach(s => {
      const filled = '★'.repeat(s.stars);
      const empty  = '★'.repeat(5 - s.stars);
      const card = document.createElement('div');
      card.className = 'skill-card';
      card.innerHTML = `
        <div class="skill-name">${s.name}</div>
        <div class="skill-stars">
          <span class="filled">${filled}</span><span class="empty">${empty}</span>
        </div>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-width="${s.pct}%"></div>
        </div>`;
      techGrid.appendChild(card);
    });
  }

  const fadeEls = document.querySelectorAll('.fade-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  fadeEls.forEach(el => fadeObserver.observe(el));

  const skillGrid = document.getElementById('techSkillsGrid');
  if (skillGrid) {
    const barObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach((bar, i) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.width;
            }, i * 80);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    barObserver.observe(skillGrid);
  }

  const sections = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.menu-links a');

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(s => navObserver.observe(s)); });


