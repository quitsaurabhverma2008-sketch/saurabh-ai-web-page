/* ================================================
   SAURABH AI - ADVANCED ANIMATIONS & INTERACTIONS
   ================================================ */

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initLoader();
    initThreeJS();
    initParticles();
    initScrollAnimations();
    initNavbar();
    initTiltEffect();
    initModelCarousel();
    initModeTabs();
    initThemeToggle();
    initMobileMenu();
});

/* ================================================
   LOADER
   ================================================ */
function initLoader() {
    const loader = document.getElementById('loader');
    
    // Hide loader after content loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('hidden');
            // Trigger initial animations
            triggerInitialAnimations();
        }, 2500);
    });
}

function triggerInitialAnimations() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animated');
        }, index * 100);
    });
}

/* ================================================
   THREE.JS 3D BACKGROUND
   ================================================ */
function initThreeJS() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create floating geometric shapes
    const shapes = [];
    const geometries = [
        new THREE.TetrahedronGeometry(1, 0),
        new THREE.OctahedronGeometry(0.8, 0),
        new THREE.IcosahedronGeometry(0.6, 0),
        new THREE.TorusGeometry(0.5, 0.2, 16, 100)
    ];
    
    const colors = [
        0x6366f1, // Primary
        0x8b5cf6, // Secondary
        0x06b6d4  // Accent
    ];
    
    // Create multiple shapes
    for (let i = 0; i < 30; i++) {
        const geometry = geometries[Math.floor(Math.random() * geometries.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        const material = new THREE.MeshBasicMaterial({
            color: color,
            wireframe: true,
            transparent: true,
            opacity: 0.3
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        
        // Random positions
        mesh.position.x = (Math.random() - 0.5) * 50;
        mesh.position.y = (Math.random() - 0.5) * 50;
        mesh.position.z = (Math.random() - 0.5) * 30 - 10;
        
        // Random rotations
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;
        
        // Store rotation speeds
        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.02 + 0.01,
            floatOffset: Math.random() * Math.PI * 2
        };
        
        scene.add(mesh);
        shapes.push(mesh);
    }
    
    // Create particle system for stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 1000;
    const positions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 100;
        positions[i + 1] = (Math.random() - 0.5) * 100;
        positions[i + 2] = (Math.random() - 0.5) * 50 - 20;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.05,
        transparent: true,
        opacity: 0.6
    });
    
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);
    
    camera.position.z = 15;
    
    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        
        const time = Date.now() * 0.001;
        
        // Rotate shapes
        shapes.forEach((shape) => {
            shape.rotation.x += shape.userData.rotationSpeed.x;
            shape.rotation.y += shape.userData.rotationSpeed.y;
            shape.position.y += Math.sin(time * shape.userData.floatSpeed + shape.userData.floatOffset) * 0.01;
        });
        
        // Rotate stars slowly
        stars.rotation.y += 0.0002;
        stars.rotation.x += 0.0001;
        
        // Camera follows mouse slightly
        camera.position.x += (mouseX * 3 - camera.position.x) * 0.02;
        camera.position.y += (-mouseY * 3 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
        
        renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

/* ================================================
   PARTICLE SYSTEM
   ================================================ */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 15;
    
    // Random gradient colors
    const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#ec4899', '#22c55e'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${left}%;
        background: ${color};
        box-shadow: 0 0 ${size * 2}px ${color};
        animation-delay: -${delay}s;
        animation-duration: ${duration}s;
    `;
    
    container.appendChild(particle);
    
    // Recreate particle after animation
    particle.addEventListener('animationend', () => {
        particle.remove();
        createParticle(container);
    });
}

/* ================================================
   SCROLL ANIMATIONS
   ================================================ */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

/* ================================================
   NAVBAR SCROLL EFFECT
   ================================================ */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* ================================================
   3D TILT EFFECT
   ================================================ */
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ================================================
   MODEL CAROUSEL
   ================================================ */
function initModelCarousel() {
    const track = document.getElementById('modelsTrack');
    if (!track) return;
    
    const prevBtn = document.getElementById('modelPrev');
    const nextBtn = document.getElementById('modelNext');
    
    let scrollPosition = 0;
    const cardWidth = 200;
    
    // Duplicate cards for infinite scroll effect
    const cards = track.innerHTML;
    track.innerHTML = cards + cards;
    
    function scrollCarousel(direction) {
        const maxScroll = track.scrollWidth / 2;
        
        if (direction === 'next') {
            scrollPosition += cardWidth;
            if (scrollPosition >= maxScroll) {
                scrollPosition = 0;
            }
        } else {
            scrollPosition -= cardWidth;
            if (scrollPosition < 0) {
                scrollPosition = maxScroll - cardWidth;
            }
        }
        
        track.style.transform = `translateX(-${scrollPosition}px)`;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => scrollCarousel('next'));
    }
    
    // Auto scroll
    setInterval(() => scrollCarousel('next'), 3000);
}

/* ================================================
   MODE TABS
   ================================================ */
function initModeTabs() {
    const tabs = document.querySelectorAll('.mode-tab');
    const cards = document.querySelectorAll('.mode-card');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const filter = tab.dataset.mode;
            
            // Filter cards
            cards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter || card.dataset.category === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease forwards';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

/* ================================================
   THEME TOGGLE
   ================================================ */
function initThemeToggle() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    
    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        applyLightTheme();
    }
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
        
        if (document.body.classList.contains('light')) {
            applyLightTheme();
            localStorage.setItem('theme', 'light');
        } else {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    });
}

function applyLightTheme() {
    document.documentElement.style.setProperty('--dark', '#f8fafc');
    document.documentElement.style.setProperty('--dark-light', '#ffffff');
    document.documentElement.style.setProperty('--dark-lighter', '#f1f5f9');
    document.documentElement.style.setProperty('--white', '#0f172a');
    document.documentElement.style.setProperty('--gray-300', '#475569');
    document.documentElement.style.setProperty('--gray-400', '#64748b');
    document.documentElement.style.setProperty('--gray-500', '#94a3b8');
}

function applyDarkTheme() {
    document.documentElement.style.setProperty('--dark', '#0a0a0f');
    document.documentElement.style.setProperty('--dark-light', '#111118');
    document.documentElement.style.setProperty('--dark-lighter', '#1a1a25');
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.documentElement.style.setProperty('--gray-300', '#d1d5db');
    document.documentElement.style.setProperty('--gray-400', '#9ca3af');
    document.documentElement.style.setProperty('--gray-500', '#6b7280');
}

/* ================================================
   MOBILE MENU
   ================================================ */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!menuBtn || !navMenu) return;
    
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
    
    // Close menu on link click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });
}

/* ================================================
   DEMO CHAT - REAL API INTEGRATION
   ================================================ */
const demoInput = document.getElementById('demoInput');
const sendBtn = document.querySelector('.send-btn');
const demoChat = document.querySelector('.demo-chat');

// API Configuration
const API_BASE = 'http://localhost:8000';
let chatHistory = [];

if (demoInput && sendBtn && demoChat) {
    
    function addUserMessage(message) {
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.innerHTML = `
            <div class="message-content" style="background: linear-gradient(135deg, var(--primary), var(--secondary)); margin-left: auto; border-radius: 15px 0 15px 15px;">
                <p>${escapeHtml(message)}</p>
            </div>
        `;
        demoChat.appendChild(userMsg);
        demoChat.scrollTop = demoChat.scrollHeight;
    }
    
    function addBotMessage(content, isStreaming = false) {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-message bot';
        botMsg.innerHTML = `
            <div class="avatar">
                <svg viewBox="0 0 100 100">
                    <polygon points="50,5 95,85 5,85" fill="none" stroke="#fff" stroke-width="3"/>
                    <circle cx="50" cy="55" r="15" fill="none" stroke="#fff" stroke-width="2"/>
                    <circle cx="50" cy="55" r="6" fill="#fff"/>
                </svg>
            </div>
            <div class="message-content">
                <p class="bot-text"></p>
                <span class="time">Just now</span>
            </div>
        `;
        demoChat.appendChild(botMsg);
        demoChat.scrollTop = demoChat.scrollHeight;
        return botMsg.querySelector('.bot-text');
    }
    
    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    async function sendToAPI(message) {
        // Add user message to chat
        addUserMessage(message);
        
        // Add to history
        chatHistory.push({ role: 'user', content: message });
        
        // Create bot message element
        const botTextEl = addBotMessage('');
        botTextEl.innerHTML = '<span class="typing-indicator"><span>.</span><span>.</span><span>.</span></span>';
        
        try {
            const response = await fetch(`${API_BASE}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'llama-3.3-70b-versatile',
                    messages: chatHistory,
                    skip_behavior: false
                })
            });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            // Handle streaming response
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            let fullResponse = '';
            
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') continue;
                        
                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.choices && parsed.choices[0].delta.content) {
                                fullResponse += parsed.choices[0].delta.content;
                                botTextEl.innerHTML = escapeHtml(fullResponse).replace(/\n/g, '<br>');
                                demoChat.scrollTop = demoChat.scrollHeight;
                            }
                        } catch (e) {
                            // Skip malformed JSON
                        }
                    }
                }
            }
            
            // Add to history
            chatHistory.push({ role: 'assistant', content: fullResponse });
            
        } catch (error) {
            console.error('API Error:', error);
            botTextEl.innerHTML = `<span style="color: #ef4444;">Error: Server nahi chal raha ya API key nahi hai. Backend start karo: python backend/server.py</span>`;
        }
    }
    
    function sendMessage() {
        const message = demoInput.value.trim();
        if (!message) return;
        
        demoInput.value = '';
        sendToAPI(message);
    }
    
    sendBtn.addEventListener('click', sendMessage);
    demoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

/* ================================================
   COUNTER ANIMATION
   ================================================ */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.innerText = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = counter.dataset.count || target;
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

/* ================================================
   PARALLAX EFFECT
   ================================================ */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-visual');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

/* ================================================
   CURSOR GLOW EFFECT
   ================================================ */
const cursorGlow = document.createElement('div');
cursorGlow.className = 'cursor-glow';
cursorGlow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
`;
document.body.appendChild(cursorGlow);

document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Hide cursor glow on touch devices
if ('ontouchstart' in window) {
    cursorGlow.style.display = 'none';
}
