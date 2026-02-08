// Основной файл JavaScript для автомобильного сайта

// Данные автомобилей
const carsData = [
    {
        id: 1,
        name: "Tesla Model S Plaid",
        category: "electric",
        price: 129990,
        power: 1020,
        acceleration: 1.99,
        range: 637,
        topSpeed: 322,
        description: "Самый быстрый серийный автомобиль в мире с революционной технологией",
        features: ["Три двигателя", "Автопилот", "0-100 за 1.99с", "1020 л.с."],
        image: "🚗",
        color: "#c00",
        year: 2024
    },
    {
        id: 2,
        name: "Porsche 911 Turbo S",
        category: "sport",
        price: 249900,
        power: 650,
        acceleration: 2.7,
        range: 430,
        topSpeed: 330,
        description: "Легендарный спортивный автомобиль с невероятной динамикой",
        features: ["Би-турбо", "PDK", "AWD", "650 л.с."],
        image: "🏎️",
        color: "#1a1a1a",
        year: 2024
    },
    {
        id: 3,
        name: "Lamborghini Urus",
        category: "suv",
        price: 350000,
        power: 650,
        acceleration: 3.6,
        range: 450,
        topSpeed: 305,
        description: "Самый быстрый SUV в мире с агрессивным дизайном",
        features: ["V8 4.0", "Полный привод",  "650 л.с.", "Спорт режим"],
        image: "🚙",
        color: "#ffd700",
        year: 2024
    },
    {
        id: 4,
        name: "Mercedes S-Class",
        category: "luxury",
        price: 185000,
        power: 435,
        acceleration: 4.8,
        range: 680,
        topSpeed: 250,
        description: "Эталон роскоши и технологий в автомобильном мире",
        features: ["Массаж сидений", "Берлинер звук", "Автопилот", "435 л.с."],
        image: "🚘",
        color: "#2a4b8d",
        year: 2024
    },
    {
        id: 5,
        name: "Audi e-tron GT",
        category: "electric",
        price: 145000,
        power: 590,
        acceleration: 3.1,
        range: 487,
        topSpeed: 245,
        description: "Электрический Gran Turismo с футуристичным дизайном",
        features: ["800V архитектура", "Quattro", "590 л.с.", "Fast charging"],
        image: "🔌",
        color: "#1a1a1a",
        year: 2024
    },
    {
        id: 6,
        name: "Ferrari SF90 Stradale",
        category: "sport",
        price: 625000,
        power: 1000,
        acceleration: 2.5,
        range: 400,
        topSpeed: 340,
        description: "Гибридный гиперкар с технологиями Формулы 1",
        features: ["V8 + электромоторы", "1000 л.с.", "4WD", "F1 технологии"],
        image: "🏁",
        color: "#c00",
        year: 2024
    },
    {
        id: 7,
        name: "Range Rover Autobiography",
        category: "suv",
        price: 220000,
        power: 525,
        acceleration: 5.4,
        range: 550,
        topSpeed: 250,
        description: "Вершина роскоши и внедорожных возможностей",
        features: ["Полный привод", "Пневмоподвеска", "525 л.с.", "Премиум салон"],
        image: "🚗",
        color: "#1a1a1a",
        year: 2024
    },
    {
        id: 8,
        name: "BMW i7",
        category: "electric",
        price: 145000,
        power: 544,
        acceleration: 4.7,
        range: 625,
        topSpeed: 240,
        description: "Электрический флагман с инновационными технологиями",
        features: ["31-дюймовый экран", "544 л.с.", "625 км заряд", "Автопилот"],
        image: "⚡",
        color: "#c0c0c0",
        year: 2024
    }
];

// Данные новостей
const newsData = [
    {
        id: 1,
        title: "Tesla представляет новую технологию аккумуляторов",
        date: "15.03.2024",
        category: "Технологии",
        excerpt: "Новые аккумуляторы увеличат запас хода на 50%...",
        image: "🔋"
    },
    {
        id: 2,
        title: "Lamborghini анонсирует полностью электрический суперкар",
        date: "10.03.2024",
        category: "Электроавтомобили",
        excerpt: "Первое полностью электрическое Lamborghini выйдет в 2025...",
        image: "⚡"
    },
    {
        id: 3,
        title: "Новый Porsche 911 Hybrid: революция в спортивных автомобилях",
        date: "05.03.2024",
        category: "Спорткары",
        excerpt: "Гибридная система увеличила мощность на 150 л.с...",
        image: "🏎️"
    }
];

// Глобальные переменные
let selectedCars = [];
let currentCarIndex = 0;
let isRotating = false;
let carRotation = 0;
let performanceChart = null;
let carComparisonData = [];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация
    initPreloader();
    initParticles();
    initNavigation();
    initHeroSection();
    initCarsCatalog();
    initComparisonTool();
    initConfigurator();
    initStats();
    initNews();
    initModals();
    initScrollTop();
    initTheme();
    initNotifications();
    
    // Загрузка данных
    loadCars();
    loadNews();
    updateLiveStats();
    
    // Запуск анимаций
    startAnimations();
    
    console.log('AutoElite инициализирован! 🚗');
});

// ========== ИНИЦИАЛИЗАЦИЯ КОМПОНЕНТОВ ==========

function initPreloader() {
    setTimeout(() => {
        document.querySelector('.preloader').classList.add('hidden');
        setTimeout(() => {
            document.querySelector('.preloader').style.display = 'none';
        }, 500);
    }, 2000);
}

function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100}, ${Math.random() * 100 + 155}, 0.5)`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x > canvas.width) this.x = 0;
            else if (this.x < 0) this.x = canvas.width;
            
            if (this.y > canvas.height) this.y = 0;
            else if (this.y < 0) this.y = canvas.height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticlesArray() {
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let particle of particles) {
            particle.update();
            particle.draw();
            
            // Соединение частиц
            for (let otherParticle of particles) {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 62, 0, ${0.1 * (1 - distance/100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animateParticles);
    }
    
    initParticlesArray();
    animateParticles();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function initNavigation() {
    // Прокрутка к секциям
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Обновление активной ссылки
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Переключение темы
    document.getElementById('themeToggle').addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'light';
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        this.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        showNotification(`Тема изменена на ${isDark ? 'темную' : 'светлую'}`);
    });
    
    // Мобильное меню
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.nav-menu').classList.toggle('show');
    });
}

function initHeroSection() {
    // Анимация заголовка
    const titleWords = document.querySelectorAll('.title-word');
    titleWords.forEach((word, index) => {
        word.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Кнопка исследования
    document.getElementById('exploreBtn').addEventListener('click', function() {
        const carsSection = document.getElementById('cars');
        window.scrollTo({
            top: carsSection.offsetTop - 80,
            behavior: 'smooth'
        });
        showNotification('Начинаем путешествие по миру автомобилей! 🚗');
    });
    
    // Кнопка видео
    document.getElementById('videoBtn').addEventListener('click', function() {
        const videoModal = document.getElementById('videoModal');
        const videoFrame = document.getElementById('videoFrame');
        videoFrame.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'; // Пример видео
        videoModal.classList.add('show');
    });
    
    // Управление 3D автомобилем
    const carModel = document.getElementById('carModel');
    let rotation = 0;
    
    document.getElementById('rotateLeft').addEventListener('click', () => {
        rotation -= 45;
        carModel.style.transform = `rotateY(${rotation}deg)`;
    });
    
    document.getElementById('rotateRight').addEventListener('click', () => {
        rotation += 45;
        carModel.style.transform = `rotateY(${rotation}deg)`;
    });
    
    document.getElementById('zoomIn').addEventListener('click', () => {
        const currentScale = parseFloat(carModel.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        carModel.style.transform = `scale(${currentScale * 1.2}) rotateY(${rotation}deg)`;
    });
    
    document.getElementById('zoomOut').addEventListener('click', () => {
        const currentScale = parseFloat(carModel.style.transform.match(/scale\(([^)]+)\)/)?.[1] || 1);
        carModel.style.transform = `scale(${currentScale / 1.2}) rotateY(${rotation}deg)`;
    });
    
    // Автоматическое вращение
    setInterval(() => {
        if (!isRotating) return;
        rotation += 0.5;
        carModel.style.transform = `rotateY(${rotation}deg)`;
    }, 50);
}

function initCarsCatalog() {
    // Фильтрация автомобилей
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            filterCars(filter);
        });
    });
    
    // Сортировка
    document.getElementById('sortCars').addEventListener('change', function() {
        sortCars(this.value);
    });
}

function initComparisonTool() {
    const slots = document.querySelectorAll('.comparison-slot');
    
    slots.forEach(slot => {
        slot.addEventListener('click', function() {
            if (this.querySelector('.car-comparison-item')) return;
            
            // Показываем модальное окно для выбора автомобиля
            showCarSelectionModal(this.dataset.slot);
        });
    });
}

function initConfigurator() {
    // Выбор цвета
    document.querySelectorAll('.color-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            
            const color = this.dataset.color;
            updateCarColor(color);
            updatePrice();
        });
    });
    
    // Выбор дисков
    document.querySelectorAll('.wheel-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.wheel-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            
            const wheelType = this.dataset.wheel;
            updateCarWheels(wheelType);
            updatePrice();
        });
    });
    
    // Выбор салона
    document.querySelectorAll('.interior-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.interior-option').forEach(o => o.classList.remove('active'));
            this.classList.add('active');
            
            const interior = this.dataset.interior;
            updateCarInterior(interior);
            updatePrice();
        });
    });
    
    // Управление вращением
    document.getElementById('rotateCar').addEventListener('click', function() {
        isRotating = !isRotating;
        this.classList.toggle('active');
        this.innerHTML = isRotating ? 
            '<i class="fas fa-pause"></i> Пауза' : 
            '<i class="fas fa-sync-alt"></i> Вращать';
    });
    
    // Сброс конфигурации
    document.getElementById('resetConfig').addEventListener('click', function() {
        resetConfigurator();
        showNotification('Конфигурация сброшена');
    });
    
    // Сохранение конфигурации
    document.getElementById('saveConfig').addEventListener('click', function() {
        saveConfiguration();
    });
}

function initStats() {
    // Инициализация графика
    const ctx = document.getElementById('performanceChart').getContext('2d');
    
    performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
            datasets: [{
                label: 'Мощность (л.с.)',
                data: [450, 480, 520, 560, 600, 650],
                borderColor: '#ff3e00',
                backgroundColor: 'rgba(255, 62, 0, 0.1)',
                tension: 0.4
            }, {
                label: 'Разгон 0-100 (с)',
                data: [4.5, 4.2, 3.9, 3.6, 3.3, 3.0],
                borderColor: '#00d4ff',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: '#fff'
                    }
                }
            },
            scales: {
                y: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    });
}

function initNews() {
    // Будут загружены динамически
}

function initModals() {
    // Закрытие модальных окон
    document.querySelectorAll('.modal-close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
            const videoFrame = document.getElementById('videoFrame');
            if (videoFrame) {
                videoFrame.src = '';
            }
        });
    });
    
    // Закрытие по клику вне окна
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('show');
                const videoFrame = document.getElementById('videoFrame');
                if (videoFrame) {
                    videoFrame.src = '';
                }
            }
        });
    });
    
    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('show');
            });
            const videoFrame = document.getElementById('videoFrame');
            if (videoFrame) {
                videoFrame.src = '';
            }
        }
    });
}

function initScrollTop() {
    const scrollBtn = document.getElementById('scrollTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initTheme() {
    // Проверка сохраненной темы
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.innerHTML = savedTheme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
}

function initNotifications() {
    // Инициализация системы уведомлений
}

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С ДАННЫМИ ==========

function loadCars() {
    const carsGrid = document.getElementById('carsGrid');
    if (!carsGrid) return;
    
    carsGrid.innerHTML = '';
    
    carsData.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
    
    updateStats();
}

function createCarCard(car) {
    const div = document.createElement('div');
    div.className = 'car-card';
    div.dataset.category = car.category;
    div.dataset.id = car.id;
    
    const badge = car.category === 'electric' ? 'Электро' : 
                  car.category === 'sport' ? 'Спорт' :
                  car.category === 'luxury' ? 'Люкс' : 'SUV';
    
    div.innerHTML = `
        <div class="car-image" style="background: linear-gradient(135deg, ${car.color} 0%, #333 100%)">
            <div class="car-icon">${car.image}</div>
            <div class="car-badge">${badge}</div>
        </div>
        <div class="car-content">
            <div class="car-header">
                <h3 class="car-title">${car.name}</h3>
                <div class="car-price">$${car.price.toLocaleString()}</div>
            </div>
            <p class="car-description">${car.description}</p>
            <div class="car-specs">
                <div class="spec-item">
                    <i class="fas fa-horse-head"></i>
                    <span>${car.power} л.с.</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span>${car.acceleration}с 0-100</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-road"></i>
                    <span>${car.range} км</span>
                </div>
            </div>
            <div class="car-actions">
                <button class="btn-primary view-details" data-id="${car.id}">
                    <i class="fas fa-eye"></i>
                    <span>Подробнее</span>
                </button>
                <button class="btn-secondary compare-btn" data-id="${car.id}">
                    <i class="fas fa-balance-scale"></i>
                    <span>Сравнить</span>
                </button>
            </div>
        </div>
    `;
    
    // Добавление обработчиков событий
    div.querySelector('.view-details').addEventListener('click', () => showCarDetails(car.id));
    div.querySelector('.compare-btn').addEventListener('click', () => addToComparison(car.id));
    
    return div;
}

function filterCars(filter) {
    const cars = document.querySelectorAll('.car-card');
    
    cars.forEach(car => {
        if (filter === 'all' || car.dataset.category === filter) {
            car.style.display = 'block';
            setTimeout(() => {
                car.style.opacity = '1';
                car.style.transform = 'translateY(0)';
            }, 100);
        } else {
            car.style.opacity = '0';
            car.style.transform = 'translateY(20px)';
            setTimeout(() => {
                car.style.display = 'none';
            }, 300);
        }
    });
    
    updateStats();
}

function sortCars(sortBy) {
    let sortedCars = [...carsData];
    
    switch(sortBy) {
        case 'price-asc':
            sortedCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            sortedCars.sort((a, b) => b.price - a.price);
            break;
        case 'power':
            sortedCars.sort((a, b) => b.power - a.power);
            break;
        case 'acceleration':
            sortedCars.sort((a, b) => a.acceleration - b.acceleration);
            break;
    }
    
    const carsGrid = document.getElementById('carsGrid');
    carsGrid.innerHTML = '';
    
    sortedCars.forEach(car => {
        const carCard = createCarCard(car);
        carsGrid.appendChild(carCard);
    });
}

function loadNews() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    newsGrid.innerHTML = '';
    
    newsData.forEach(news => {
        const newsCard = createNewsCard(news);
        newsGrid.appendChild(newsCard);
    });
    
    // Обновления в реальном времени
    loadLiveUpdates();
}

function createNewsCard(news) {
    const div = document.createElement('div');
    div.className = 'news-card';
    
    div.innerHTML = `
        <div class="news-image">
            <div class="news-icon">${news.image}</div>
        </div>
        <div class="news-content">
            <div class="news-meta">
                <span class="news-date">${news.date}</span>
                <span class="news-category">${news.category}</span>
            </div>
            <h3 class="news-title">${news.title}</h3>
            <p class="news-excerpt">${news.excerpt}</p>
            <button class="btn-secondary read-more">
                <i class="fas fa-arrow-right"></i>
                <span>Читать далее</span>
            </button>
        </div>
    `;
    
    return div;
}

function loadLiveUpdates() {
    const updatesList = document.getElementById('updatesList');
    if (!updatesList) return;
    
    const updates = [
        { time: 'Только что', text: 'Новый Mercedes EQE добавлен в каталог' },
        { time: '5 мин назад', text: 'Обновлены цены на Tesla Model 3' },
        { time: '15 мин назад', text: 'Добавлены фото BMW i4' },
        { time: '30 мин назад', text: 'Новые тест-драйвы доступны' }
    ];
    
    updatesList.innerHTML = '';
    
    updates.forEach(update => {
        const div = document.createElement('div');
        div.className = 'update-item';
        div.innerHTML = `
            <div class="update-time">${update.time}</div>
            <div class="update-text">${update.text}</div>
        `;
        updatesList.appendChild(div);
    });
}

function updateLiveStats() {
    // Анимированные счетчики
    animateCounter('avgSpeed', 0, 185, 2000);
    animateCounter('electricCars', 0, 42, 1500);
    animateCounter('totalCars', 0, carsData.length, 1000);
    animateCounter('fuelEfficiency', 0, 8.2, 2500);
    
    // Обновление каждые 30 секунд
    setInterval(() => {
        const newSpeed = 180 + Math.random() * 20;
        const newElectric = 40 + Math.random() * 10;
        const newEfficiency = 7.5 + Math.random() * 2;
        
        animateCounter('avgSpeed', parseInt(document.getElementById('avgSpeed').textContent), Math.round(newSpeed), 1000);
        animateCounter('electricCars', parseInt(document.getElementById('electricCars').textContent), Math.round(newElectric), 1000);
        animateCounter('fuelEfficiency', parseFloat(document.getElementById('fuelEfficiency').textContent), newEfficiency.toFixed(1), 1000);
    }, 30000);
}

function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        
        if (elementId === 'fuelEfficiency') {
            element.textContent = value.toFixed(1);
        } else {
            element.textContent = value;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

function updateStats() {
    const totalCars = carsData.length;
    const electricCars = carsData.filter(car => car.category === 'electric').length;
    const avgPrice = Math.round(carsData.reduce((sum, car) => sum + car.price, 0) / totalCars);
    const avgPower = Math.round(carsData.reduce((sum, car) => sum + car.power, 0) / totalCars);
    
    // Обновление статистики
    document.getElementById('totalCars').textContent = totalCars;
    document.getElementById('electricCars').textContent = electricCars;
}

// ========== ФУНКЦИИ КОНФИГУРАТОРА ==========

function updateCarColor(color) {
    const configCar = document.getElementById('configCar');
    configCar.style.backgroundColor = color;
    showNotification(`Цвет изменен`);
}

function updateCarWheels(wheelType) {
    const configCar = document.getElementById('configCar');
    const wheelSize = wheelType === '1' ? '60px' : wheelType === '2' ? '65px' : '70px';
    configCar.style.setProperty('--wheel-size', wheelSize);
    showNotification(`Диски обновлены`);
}

function updateCarInterior(interior) {
    const configCar = document.getElementById('configCar');
    configCar.dataset.interior = interior;
    showNotification(`Салон изменен`);
}

function updatePrice() {
    const basePrice = 250000;
    const colorPrice = document.querySelector('.color-option.active').dataset.color === '#ffd700' ? 5000 : 0;
    const wheelPrice = document.querySelector('.wheel-option.active').dataset.wheel === '3' ? 8000 : 
                      document.querySelector('.wheel-option.active').dataset.wheel === '2' ? 4000 : 0;
    const interiorPrice = document.querySelector('.interior-option.active').dataset.interior === 'red' ? 12000 : 0;
    
    const totalPrice = basePrice + colorPrice + wheelPrice + interiorPrice;
    document.getElementById('totalPrice').textContent = `$${totalPrice.toLocaleString()}`;
}

function resetConfigurator() {
    document.querySelector('.color-option[data-color="#1a1a1a"]').click();
    document.querySelector('.wheel-option[data-wheel="1"]').click();
    document.querySelector('.interior-option[data-interior="black"]').click();
    document.getElementById('totalPrice').textContent = '$250,000';
}

function saveConfiguration() {
    const config = {
        color: document.querySelector('.color-option.active').dataset.color,
        wheels: document.querySelector('.wheel-option.active').dataset.wheel,
        interior: document.querySelector('.interior-option.active').dataset.interior,
        price: document.getElementById('totalPrice').textContent
    };
    
    localStorage.setItem('carConfig', JSON.stringify(config));
    showNotification('Конфигурация сохранена! 💾');
}

// ========== ФУНКЦИИ СРАВНЕНИЯ ==========

function showCarSelectionModal(slotNumber) {
    const modal = document.createElement('div');
    modal.className = 'modal selection-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close"><i class="fas fa-times"></i></button>
            <h3>Выберите автомобиль для сравнения</h3>
            <div class="car-selection-grid">
                ${carsData.map(car => `
                    <div class="car-selection-item" data-id="${car.id}" data-slot="${slotNumber}">
                        <div class="selection-car-icon">${car.image}</div>
                        <h4>${car.name}</h4>
                        <p>${car.price.toLocaleString()} $</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.remove();
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
    
    modal.querySelectorAll('.car-selection-item').forEach(item => {
        item.addEventListener('click', function() {
            const carId = parseInt(this.dataset.id);
            const slotNum = this.dataset.slot;
            addCarToComparisonSlot(carId, slotNum);
            modal.remove();
        });
    });
    
    setTimeout(() => modal.classList.add('show'), 10);
}

function addCarToComparisonSlot(carId, slotNumber) {
    const car = carsData.find(c => c.id === carId);
    if (!car) return;
    
    const slot = document.querySelector(`.comparison-slot[data-slot="${slotNumber}"]`);
    if (!slot) return;
    
    // Проверяем, не добавлена ли уже эта машина
    if (carComparisonData.some(c => c.id === carId)) {
        showNotification('Этот автомобиль уже добавлен для сравнения', 'warning');
        return;
    }
    
    // Добавляем в данные для сравнения
    carComparisonData.push(car);
    
    // Обновляем слот
    slot.innerHTML = `
        <div class="car-comparison-item">
            <div class="comparison-car-icon">${car.image}</div>
            <h4>${car.name}</h4>
            <p class="car-price">$${car.price.toLocaleString()}</p>
            <button class="remove-comparison" data-id="${carId}">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Обработчик удаления
    slot.querySelector('.remove-comparison').addEventListener('click', (e) => {
        e.stopPropagation();
        removeFromComparison(carId, slotNumber);
    });
    
    updateComparisonResults();
    showNotification(`${car.name} добавлен для сравнения`);
}

function removeFromComparison(carId, slotNumber) {
    // Удаляем из данных
    carComparisonData = carComparisonData.filter(car => car.id !== carId);
    
    // Обновляем слот
    const slot = document.querySelector(`.comparison-slot[data-slot="${slotNumber}"]`);
    slot.innerHTML = `
        <div class="slot-placeholder">
            <i class="fas fa-plus"></i>
            <span>Добавить автомобиль</span>
        </div>
    `;
    
    // Добавляем обработчик обратно
    slot.addEventListener('click', function() {
        showCarSelectionModal(slotNumber);
    });
    
    updateComparisonResults();
}

function updateComparisonResults() {
    const results = document.getElementById('comparisonResults');
    
    if (carComparisonData.length < 2) {
        results.innerHTML = `
            <div class="results-placeholder">
                <i class="fas fa-balance-scale"></i>
                <h3>Добавьте еще ${2 - carComparisonData.length} автомобиль(я) для сравнения</h3>
                <p>Минимум 2 автомобиля для детального сравнения характеристик</p>
            </div>
        `;
        return;
    }
    
    // Создаем таблицу сравнения
    let tableHTML = `
        <div class="comparison-table">
            <table>
                <thead>
                    <tr>
                        <th>Характеристика</th>
                        ${carComparisonData.map(car => `<th>${car.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Цена</td>
                        ${carComparisonData.map(car => `<td>$${car.price.toLocaleString()}</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Мощность</td>
                        ${carComparisonData.map(car => `<td>${car.power} л.с.</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Разгон 0-100 км/ч</td>
                        ${carComparisonData.map(car => `<td>${car.acceleration} с</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Запас хода</td>
                        ${carComparisonData.map(car => `<td>${car.range} км</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Макс. скорость</td>
                        ${carComparisonData.map(car => `<td>${car.topSpeed} км/ч</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Особенности</td>
                        ${carComparisonData.map(car => `<td>${car.features.join(', ')}</td>`).join('')}
                    </tr>
                    <tr>
                        <td>Год выпуска</td>
                        ${carComparisonData.map(car => `<td>${car.year}</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    results.innerHTML = tableHTML;
}
