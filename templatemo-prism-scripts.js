// ===============================
// PORTFÓLIO DATA (SEM IMAGEM)
// ===============================
const portfolioData = [
    {
        id: 1,
        title: 'Designs Gráficos',
        description: 'Imagens para aumentar a credibilidade do seu negócio!',
        tech: ['Photoshop', 'Figma'],
        link: 'https://www.behance.net/gallery/245643923/Exemplos-de-Design'
    },
    {
        id: 2,
        title: 'Vídeos Curtos',
        description: 'Conteúdo para redes sociais e engajamento.',
        tech: ['TikTok', 'Instagram'],
        link: 'https://www.instagram.com/reel/DV_VybHjVvL/'
    },
    {
        id: 3,
        title: 'Promocionais',
        description: 'Vídeos para tráfego pago e marketing digital.',
        tech: ['CapCut', 'After Effects'],
        link: 'https://drive.google.com/drive/folders/1FpeKLh2a9bMJYJd6k3h9UCZvML2uWY3m'
    },
    {
        id: 4,
        title: 'Curtas',
        description: 'Projetos cinematográficos e narrativos.',
        tech: ['Cinema', 'After Effects'],
        link: 'https://www.youtube.com/@CineDivas'
    },
    {
        id: 5,
        title: 'Eventos',
        description: 'Cobertura completa de eventos.',
        tech: ['Foto', 'Filmmaker'],
        link: 'https://www.instagram.com/reel/DW_z0LHDlfU/'
    }
];

// ===============================
// SKILLS
// ===============================
const skillsData = [
    { name: 'Premiere Pro', icon: '🎬', level: 70 },
    { name: 'After Effects', icon: '✨', level: 80 },
    { name: 'CapCut', icon: '✂️', level: 100 },
    { name: 'Figma', icon: '🎨', level: 100 },
    { name: 'Photoshop', icon: '🖌️', level: 100 }
];

// ===============================
// UTIL
// ===============================
function openProjectLink(url) {
    if (url) window.open(url, '_blank');
}

// ===============================
// LOADER (NUNCA TRAVA)
// ===============================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) loader.style.display = 'none';
    }, 1000);
});

// ===============================
// CARROSSEL (SEM IMAGEM)
// ===============================
let currentIndex = 0;

function getCarousel() {
    return document.getElementById('carousel');
}

function getIndicators() {
    return document.getElementById('indicators');
}

function createCard(data) {
    const el = document.createElement('div');
    el.className = 'carousel-item';

    const tech = (data.tech || [])
        .map(t => `<span class="tech">${t}</span>`)
        .join('');

    el.innerHTML = `
        <div class="card">

            <div class="card-number">0${data.id}</div>

            <h3 class="card-title">${data.title}</h3>

            <p class="card-description">${data.description}</p>

            <div class="card-tech">
                ${tech}
            </div>

            <button class="card-btn" onclick="openProjectLink('${data.link}')">
                Explorar
            </button>

        </div>
    `;

    return el;
}

function initCarousel() {
    const carousel = getCarousel();
    const indicators = getIndicators();

    if (!carousel || !indicators) return;

    carousel.innerHTML = '';
    indicators.innerHTML = '';

    portfolioData.forEach((item, i) => {
        carousel.appendChild(createCard(item));

        const dot = document.createElement('div');
        dot.className = 'indicator';
        if (i === 0) dot.classList.add('active');

        dot.onclick = () => goToSlide(i);
        indicators.appendChild(dot);
    });

    updateCarousel();
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.indicator');

    if (!items.length) return;

    items.forEach((item, i) => {
        const offset = i - currentIndex;

        item.style.transition = 'all 0.6s ease';

        if (offset === 0) {
            item.style.transform = 'translateX(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (offset === 1 || offset === -1) {
            item.style.transform = `translateX(${offset * 280}px) scale(0.85)`;
            item.style.opacity = '0.6';
            item.style.zIndex = '5';
        } else {
            item.style.transform = `translateX(${offset * 320}px) scale(0.7)`;
            item.style.opacity = '0.2';
            item.style.zIndex = '1';
        }
    });

    dots.forEach((d, i) => {
        d.classList.toggle('active', i === currentIndex);
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

function goToSlide(i) {
    currentIndex = i;
    updateCarousel();
}

// ===============================
// SKILLS SIMPLES
// ===============================
function initSkills() {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    skillsData.forEach(skill => {
        const el = document.createElement('div');
        el.className = 'skill';

        el.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>

            <div class="skill-bar">
                <div class="skill-fill" style="width:${skill.level}%"></div>
            </div>

            <div class="skill-percent">${skill.level}%</div>
        `;

        grid.appendChild(el);
    });
}

// ===============================
// CONTROLES
// ===============================
document.getElementById('nextBtn')?.addEventListener('click', nextSlide);
document.getElementById('prevBtn')?.addEventListener('click', prevSlide);

setInterval(() => {
    if (!document.hidden) nextSlide();
}, 5000);

// teclado
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

// resize
window.addEventListener('resize', updateCarousel);

// ===============================
// INIT SEGURO
// ===============================
window.addEventListener('DOMContentLoaded', () => {
    try {
        initCarousel();
        initSkills();
    } catch (err) {
        console.error('Erro:', err);
    }
});
