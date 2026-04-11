// ========== ACTIVE NAVBAR LINK ON SCROLL ==========
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========== THEME TOGGLE (LIGHT/DARK) ==========
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            document.body.style.backgroundColor = '#f5f5f7';
            document.body.style.color = '#1a1a1a';
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            document.body.style.backgroundColor = '#0a0a0a';
            document.body.style.color = '#e5e5e5';
        }
    });
}

// ========== RESUME DOWNLOAD (SINGLE BUTTON) ==========
const downloadBtn = document.getElementById('downloadResumeBtn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // Option 1: Direct download if you have a PDF file in the same folder
        // window.location.href = 'Aryan_Verma_Resume.pdf';
        
        // Option 2: Print-friendly version (opens print dialog)
        alert('Your resume is ready. Click OK to open print-friendly version.');
        window.print();
        
        // Option 3: You can also use this to trigger a custom download link
        // const link = document.createElement('a');
        // link.href = 'Aryan_Verma_Resume.pdf';
        // link.download = 'Aryan_Verma_Resume.pdf';
        // link.click();
    });
}

// ========== SCROLL TO TOP BUTTON ==========
const scrollTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========== CUSTOM CURSOR ==========
const cursor = document.getElementById('customCursor');
if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

// ========== LIGHT MODE ADDITIONAL STYLES (DYNAMIC) ==========
const style = document.createElement('style');
style.textContent = `
    body.light-mode .navbar {
        background: rgba(245, 245, 247, 0.9);
        border-bottom-color: rgba(0,0,0,0.1);
    }
    body.light-mode .nav-link {
        color: #333;
    }
    body.light-mode .skill-category,
    body.light-mode .project-card,
    body.light-mode .contact-container {
        background: rgba(255,255,255,0.8);
        border-color: #ddd;
    }
    body.light-mode .skill-items span,
    body.light-mode .tech-stack span {
        background: rgba(139,92,246,0.15);
        color: #1a1a1a;
    }
    body.light-mode .hero-subtitle,
    body.light-mode .about-content p,
    body.light-mode .project-card p {
        color: #4a4a4a;
    }
    body.light-mode .btn-secondary {
        border-color: rgba(0,0,0,0.2);
        color: #1a1a1a;
    }
    body.light-mode .contact-form input,
    body.light-mode .contact-form textarea {
        background: rgba(0,0,0,0.05);
        border-color: #ccc;
        color: #1a1a1a;
    }
    body.light-mode footer {
        background: #e5e5e7;
    }
    body.light-mode .footer-section a {
        color: #333;
    }
`;
document.head.appendChild(style);