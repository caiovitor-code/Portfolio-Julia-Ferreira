// Dados do portfólio para o carrossel
const portfolioData = [
    {
        id: 1,
        title: 'Designs Gráficos',
        description: 'Imagens para aumentar a credibilidade e confiança do seu négocio!',
        tech: ['Photoshop', 'Figma'],
        link: 'https://www.instagram.com/p/DWO0n3zAA1B/?igsh=Y25vbGR4eW8wd3Np'
    },
    {
        id: 2,
        title: 'Videos Curtos',
        description: 'Vídeos curtos para destacar seu projeto!',
        tech: ['Videos Curtos', 'TikTok', 'Instagram'],
        link: 'https://www.instagram.com/reel/DV1DGUYhf2M/'
    },
    {
        id: 3,
        title: 'Motions',
        description: 'Vídeos com mais edições, feitos para prender a atenção e geralmente sincronizados com a música.',
        tech: ['Edição mais elaborada','Premiere','After Effects' ],
        link: 'https://drive.google.com/drive/folders/1FpeKLh2a9bMJYJd6k3h9UCZvML2uWY3m'
    },
     {
        id: 4,
        title: 'Promocionais',
        description: 'Imersão completa do início ao fim, com edição envolvente e narrativa que prende a atenção.',
        tech: ['Videos curtos', 'Tráfego pago', 'Cap Cut','After Effects' ],
        link: 'https://drive.google.com/drive/folders/1FpeKLh2a9bMJYJd6k3h9UCZvML2uWY3m'
    },
    // {
    //     id: 4,
    //     title: 'Ciberdefesa',
    //     description: 'Estrutura de cibersegurança de nível militar com detecção de ameaças em tempo real e resposta automatizada.',
    //     image: 'images/cyber-defense.jpg',
    //     tech: ['Zero Trust', 'IA Defense', 'Encryption'],
    //     link: 'https://www.youtube.com/watch?v=mvtQc5wmbqM&t=1s4'
    // },
    // {
    //     id: 5,
    //     title: 'Nexus de Dados',
    //     description: 'Plataforma de processamento de Big Data capaz de analisar petabytes de informações em tempo real.',
    //     image: 'images/data-nexus.jpg',
    //     tech: ['Apache Spark', 'Hadoop', 'Kafka'],
    //     link: 'https://www.youtube.com/watch?v=mvtQc5wmbqM&t=1s'
    // },
    // {
    //     id: 6,
    //     title: 'Interface RA',
    //     description: 'Sistema de realidade aumentada para visualização imersiva de dados e experiências interativas.',
    //     image: 'images/ar-interface.jpg',
    //     tech: ['Unity', 'ARCore', 'Visão Computacional'],
    //     link: 'https://www.youtube.com/watch?v=mvtQc5wmbqM&t=1s'
    // },
    // {
    //     id: 7,
    //     title: 'Matriz IoT',
    //     description: 'Ecossistema IoT inteligente conectando milhões de dispositivos com capacidades de computação de borda.',
    //     image: 'images/iot-matrix.jpg',
    //     tech: ['MQTT', 'Edge AI', '5G'],
    //     link: 'https://www.youtube.com/watch?v=mvtQc5wmbqM&t=1s'
    // }
];

// Dados de Habilidades (Arsenal)
const skillsData = [
    { name: 'Premiere Pro', icon: '', level: 70, category: 'frontend' },
    { name: 'After Effects', icon: '', level: 80, category: 'backend' },
    { name: 'Cap Cut', icon: '', level: 100, category: 'frontend' },
    { name: 'Figma', icon: '', level: 100, category: 'cloud' },
    { name: 'Photoshop', icon: '', level: 100, category: 'cloud' },
    // { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
    // { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
    // { name: 'GraphQL', icon: '◈', level: 87, category: 'backend' },
    // { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
    // { name: 'Blockchain', icon: '🔗', level: 75, category: 'emerging' },
    // { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
    // { name: 'MongoDB', icon: '🍃', level: 90, category: 'backend' }
];

// Função para abrir link externo
function openProjectLink(url) {
    if(url && url !== '#') {
        window.open(url, '_blank');
    }
}

// Inicializa partículas para a seção de filosofia
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

// Inicialização do Carrossel 3D
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
                <img src="${data.image}" alt="${data.title}">
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-description">${data.description}</p>
            <div class="card-tech">${techBadges}</div>
            <button class="card-cta" onclick="openProjectLink('${data.link}')">Explorar</button>
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
        indicator.dataset.index = index;
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
        
        if (offset > totalItems / 2) {
            offset -= totalItems;
        } else if (offset < -totalItems / 2) {
            offset += totalItems;
        }
        
        const absOffset = Math.abs(offset);
        const sign = offset < 0 ? -1 : 1;
        
        item.style.transform = '';
        item.style.opacity = '';
        item.style.zIndex = '';
        item.style.transition = 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)';
        
        let spacing1 = 400;
        let spacing2 = 600;
        let spacing3 = 750;
        
        if (isMobile) {
            spacing1 = 280;
            spacing2 = 420;
            spacing3 = 550;
        } else if (isTablet) {
            spacing1 = 340;
            spacing2 = 520;
            spacing3 = 650;
        }
        
        if (absOffset === 0) {
            item.style.transform = 'translate(-50%, -50%) translateZ(0) scale(1)';
            item.style.opacity = '1';
            item.style.zIndex = '10';
        } else if (absOffset === 1) {
            const translateX = sign * spacing1;
            const rotation = isMobile ? 25 : 30;
            const scale = isMobile ? 0.88 : 0.85;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.8';
            item.style.zIndex = '5';
        } else if (absOffset === 2) {
            const translateX = sign * spacing2;
            const rotation = isMobile ? 35 : 40;
            const scale = isMobile ? 0.75 : 0.7;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.5';
            item.style.zIndex = '3';
        } else if (absOffset === 3) {
            const translateX = sign * spacing3;
            const rotation = isMobile ? 40 : 45;
            const scale = isMobile ? 0.65 : 0.6;
            item.style.transform = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
            item.style.opacity = '0.3';
            item.style.zIndex = '2';
        } else {
            item.style.transform = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
            item.style.opacity = '0';
            item.style.zIndex = '1';
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

// Inicialização da grade hexagonal de habilidades
function initSkillsGrid() {
    const skillsGrid = document.getElementById('skillsGrid');
    const categoryTabs = document.querySelectorAll('.category-tab');
    if (!skillsGrid) return;
    
    function displaySkills(category = 'all') {
        skillsGrid.innerHTML = '';
        
        const filteredSkills = category === 'all' 
            ? skillsData 
            : skillsData.filter(skill => skill.category === category);
        
        filteredSkills.forEach((skill, index) => {
            const hexagon = document.createElement('div');
            hexagon.className = 'skill-hexagon';
            hexagon.style.animationDelay = `${index * 0.1}s`;
            
            hexagon.innerHTML = `
                <div class="hexagon-inner">
                    <div class="hexagon-content">
                        <div class="skill-icon-hex">${skill.icon}</div>
                        <div class="skill-name-hex">${skill.name}</div>
                        <div class="skill-level">
                            <div class="skill-level-fill" style="width: ${skill.level}%"></div>
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

// Controles do Carrossel
if(document.getElementById('nextBtn')) document.getElementById('nextBtn').addEventListener('click', nextSlide);
if(document.getElementById('prevBtn')) document.getElementById('prevBtn').addEventListener('click', prevSlide);

// Rotação automática
let autoSlide = setInterval(nextSlide, 5000);

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
});

window.addEventListener('resize', () => {
    updateCarousel();
});

// Inicializar tudo ao carregar
window.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initSkillsGrid();
    initParticles();
});

// Alternar menu móvel
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Cabeçalho
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Rolagem suave
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            if(navMenu) navMenu.classList.remove('active');
            if(menuToggle) menuToggle.classList.remove('active');
        }
    });
});

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href').substring(1);
                if (href === sectionId) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Contador
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(number => {
                if (!number.classList.contains('animated')) {
                    number.classList.add('animated');
                    animateCounter(number);
                }
            });
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) observer.observe(statsSection);

// Formulário
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        alert(`Obrigado ${data.name}! Mensagem enviada.`);
        contactForm.reset();
    });
}

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if(loader) loader.classList.add('hidden');
    }, 1500);
});
