// Dados do portfólio para o carrossel
const portfolioData = [
    {
        id: 1,
        title: 'Designs Gráficos',
        description: 'Imagens para aumentar a credibilidade e confiança do seu negócio!',
        tech: ['Photoshop', 'Figma'],
        link: 'https://www.behance.net/gallery/245643923/Exemplos-de-Design'
    },
    {
        id: 2,
        title: 'Vídeos Curtos',
        description: 'Vídeos curtos para destacar seu projeto!',
        tech: ['Vídeos Curtos', 'TikTok', 'Instagram'],
        link: 'https://www.instagram.com/reel/DV_VybHjVvL/'
    },
    {
        id: 3,
        title: 'Promocionais',
        description: 'Imersão de propagandas para tráfego.',
        tech: ['Vídeos curtos', 'Tráfego pago', 'Cap Cut', 'After Effects'],
        link: 'https://drive.google.com/drive/folders/1FpeKLh2a9bMJYJd6k3h9UCZvML2uWY3m'
    },
    {
        id: 4,
        title: 'Curtas',
        description: 'Imersão de histórias, um projeto feito por estudantes de cinema.',
        tech: ['Longos', 'After Effects'],
        link: 'https://www.youtube.com/@CineDivas'
    },
    {
        id: 5,
        title: 'Cobertura de Eventos',
        description: 'Fotografia e filmagem de cada etapa marcante do seu evento.',
        tech: ['Fotografia', 'Filmmaker'],
        link: 'https://www.instagram.com/reel/DW_z0LHDlfU/?igsh=anQ3bHQ4eDNta2Vv'
    }
];

// Dados de habilidades
const skillsData = [
    { name: 'Premiere Pro', icon: '🎬', level: 70, category: 'frontend' },
    { name: 'After Effects', icon: '✨', level: 80, category: 'backend' },
    { name: 'Cap Cut', icon: '✂️', level: 100, category: 'frontend' },
    { name: 'Figma', icon: '🎨', level: 100, category: 'cloud' },
    { name: 'Photoshop', icon: '🖌️', level: 100, category: 'cloud' }
];

// Abrir link do projeto
function openProjectLink(url) {
    if (url) window.open(url, '_blank');
}

// -------------------------
// PARTICLES
// -------------------------
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        particlesContainer.appendChild(particle);
    }
}

// -------------------------
// CARROSSEL
// -------------------------
let currentIndex = 0;
const carousel = document.getElementById('carousel');
const indicatorsContainer = document.getElementById('indicators');

function createCarouselItem(data, index) {
    const item = document.createElement('div');
    item.className = 'carousel-item';
    item.dataset.index = index;

    const techBadges = data.tech.map(tech =>
        `<span class="tech-badge">${tech}</span>`
    ).join('');

    item.innerHTML = `
        <div class="card">
            <div class="card-number">0${data.id}</div>
            <div class="card-image">
                <img src="${data.image || ''}" alt="${data.title}">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="openProjectLink('${data.link}')">
                Explorar
            </button>
        </div>
    `;

    return item;
}

function initCarousel() {
    if (!carousel) return;

    carousel.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    portfolioData.forEach((data, index) => {
        const item = createCarouselItem(data, index);
        carousel.appendChild(item);

        const indicator = document.createElement('div');
        indicator.className = 'indicator';
        if (index === 0) indicator.classList.add('active');

        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    const totalItems = items.length;
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1024;

    items.forEach((item, index) => {
        let offset = index - currentIndex;

        if (offset > totalItems / 2) offset -= totalItems;
        if (offset < -totalItems / 2) offset += totalItems;

        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;

        let spacing1 = isMobile ? 280 : isTablet ? 340 : 400;
        let spacing2 = isMobile ? 420 : isTablet ? 520 : 600;
        let spacing3 = isMobile ? 550 : isTablet ? 650 : 750;

        item.style.transition = 'all 0.8s ease';

        if (absOffset === 0) {
            item.style.transform = `translate(-50%, -50%) translateZ(0) scale(1)`;
            item.style.opacity = '1';
            item.style.zIndex = '10';

        } else if (absOffset === 1) {
            item.style.transform = `
                translate(-50%, -50%)
                translateX(${sign * spacing1}px)
                translateZ(-200px)
                rotateY(${-sign * 30}deg)
                scale(0.85)
            `;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';

        } else if (absOffset === 2) {
            item.style.transform = `
                translate(-50%, -50%)
                translateX(${sign * spacing2}px)
                translateZ(-350px)
                rotateY(${-sign * 40}deg)
                scale(0.7)
            `;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';

        } else if (absOffset === 3) {
            item.style.transform = `
                translate(-50%, -50%)
                translateX(${sign * spacing3}px)
                translateZ(-450px)
                rotateY(${-sign * 45}deg)
                scale(0.6)
            `;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';

        } else {
            item.style.opacity = '0';
            item.style.zIndex = '0';
        }
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % portfolioData.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// -------------------------
// SKILLS
// -------------------------
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');

    if (!skillsGrid) return;

    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';

        const filtered = category === 'all'
            ? skillsData
            : skillsData.filter(s => s.category === category);

        filtered.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon';

            hexagon.style.animationDelay = `${index * 0.1}s`;

            hexagon.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width:${skill.level}%"></div>
                        </div>
                        <div class="skill-percentage-hex">${skill.level}%</div>
                    </div>
                </div>
            `;

            skillsGrid.appendChild(hexagon);
        });
    }

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            displaySkills(tab.dataset.category);
        });
    });

    displaySkills();
}

// -------------------------
// CONTROLES
// -------------------------
document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 5000);

// teclado
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// resize
window.addEventListener('resize', updateCarousel);

// -------------------------
// INIT
// -------------------------
window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSkillsGrid();
    initParticles();
});

// menu mobile
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// header scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 100);
});

// nav active
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY + 100;

    sections.forEach(sec => {
        if (scroll >= sec.offsetTop && scroll < sec.offsetTop + sec.offsetHeight) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href').slice(1) === sec.id);
            });
        }
    });
});

// alert form (caso exista)
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(contactForm));

    alert(`Obrigado ${data.name || ''}! Mensagem enviada.`);
    contactForm.reset();
});

// loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader')?.classList.add('hidden');
    }, 1500);
});
