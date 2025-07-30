// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-menu').style.display = 'none';
    });
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thanks for subscribing with ${email}! We'll keep you updated.`);
    this.reset();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Category Page Specific Interactions

// Article View Counter (Simulated)
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function() {
        const articleId = this.getAttribute('data-article');
        // In real implementation, send to server
        console.log(`Article ${articleId} viewed`);
    });
});

// Newsletter Subscription
document.querySelector('.newsletter-cta .newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Simulate API call
    setTimeout(() => {
        alert(`Thank you for subscribing to our AI newsletter!\nWe've sent a confirmation to ${email}`);
        this.reset();
    }, 500);
});

// Bookmark Articles
document.querySelectorAll('.bookmark-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('bookmarked');
        const articleId = this.getAttribute('data-article');
        const action = this.classList.contains('bookmarked') ? 'saved' : 'removed';
        
        // Feedback to user
        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.textContent = `Article ${action} to bookmarks`;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    });
});

// Lazy Load Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});




// Tab System
const tabs = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.guide-section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Show corresponding section
        const target = tab.dataset.tab;
        sections.forEach(section => {
            section.classList.toggle('hidden', section.id !== target);
        });
        
        // Smooth scroll
        document.getElementById(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Code Copy Functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const codeBlock = btn.previousElementSibling;
        const code = codeBlock.textContent;
        
        navigator.clipboard.writeText(code)
            .then(() => {
                btn.textContent = 'Copied!';
                setTimeout(() => {
                    btn.textContent = 'Copy Code';
                }, 2000);
            });
    });
});

// Interactive Quiz
const quizOptions = document.querySelectorAll('.quiz-options button');
const quizResult = document.querySelector('.quiz-result');
const resultText = document.getElementById('quiz-result');

quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        const recommendation = option.dataset.score;
        resultText.textContent = recommendation.toUpperCase();
        quizResult.classList.remove('hidden');
        
        // Scroll to result
        quizResult.scrollIntoView({ behavior: 'smooth' });
    });
});

// Quiz Retry
document.querySelector('.retry-btn').addEventListener('click', () => {
    quizResult.classList.add('hidden');
});

// Smart Footer Behavior
const footer = document.querySelector('.smart-footer');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        footer.classList.add('scrolled');
    } else {
        footer.classList.remove('scrolled');
    }
});

// Back to Top
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});