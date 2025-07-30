document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navList.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Quick View Modal
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const modal = document.getElementById('quickViewModal');
    const closeModal = document.querySelector('.close-modal');
    const modalBody = document.getElementById('modalBody');
    
    // Gadget data for modal
    const gadgets = [
        {
            id: 1,
            name: "NeoX Quantum Earbuds",
            price: "$179.99",
            rating: 4.7,
            reviews: 328,
            description: "The NeoX Quantum Earbuds represent a breakthrough in personal audio technology. Featuring our proprietary Neural Sound Processing, these earbuds analyze your hearing profile in real-time and adjust frequencies to deliver perfect sound tailored specifically to your ears. The quantum tunneling drivers provide unparalleled clarity across all frequencies, while the active noise cancellation creates a pure listening environment.",
            features: [
                "AI-powered adaptive sound profile",
                "Quantum tunneling drivers for superior audio",
                "8-hour playtime (32h with case)",
                "Bluetooth 5.3 with ultra-low latency",
                "IPX7 waterproof rating",
                "Touch controls with haptic feedback"
            ],
            colors: ["Space Black", "Moon Silver", "Mars Red"],
            image: "images/quantum-earbuds.jpg"
        },
        {
            id: 2,
            name: "HoloLux Portable Projector",
            price: "$349.99",
            rating: 4.9,
            reviews: 412,
            description: "Transform any surface into a 200-inch cinematic display with the HoloLux Portable Projector. Our patented holographic projection technology delivers stunning 4K HDR visuals with 1500 ANSI lumens brightness. The built-in Android TV gives you instant access to all your streaming services, while the 360° speaker system provides immersive audio without external speakers.",
            features: [
                "200-inch projection size",
                "4K HDR resolution (3840 × 2160)",
                "Built-in Android TV with Google Assistant",
                "360° Dolby Atmos sound system",
                "Portable design with 4-hour battery",
                "Auto-focus and keystone correction"
            ],
            colors: ["Midnight Blue", "Arctic White"],
            image: "images/holo-display.jpg"
        },
        {
            id: 3,
            name: "Aura Smart Ring",
            price: "$129.99",
            rating: 4.2,
            reviews: 195,
            description: "The Aura Smart Ring is your comprehensive health companion that fits on your finger. With medical-grade sensors, it tracks ECG, blood oxygen levels, sleep stages, body temperature, and more. The titanium alloy body is lightweight and durable, while the 7-day battery life ensures continuous monitoring. The companion app provides detailed insights and health trends over time.",
            features: [
                "ECG and SpO2 monitoring",
                "Advanced sleep tracking with REM detection",
                "Body temperature monitoring",
                "7-day battery life",
                "Water resistant up to 100m",
                "Compatible with iOS and Android"
            ],
            colors: ["Titanium Black", "Rose Gold", "Platinum Silver"],
            image: "images/smart-ring.jpg"
        },
        {
            id: 4,
            name: "SkyFold Pro Drone",
            price: "$499.99",
            rating: 5.0,
            reviews: 276,
            description: "The SkyFold Pro redefines portable drone technology. This compact drone folds down to the size of a smartphone yet unfolds to deliver professional-grade aerial photography. The 1-inch CMOS sensor captures stunning 4K/60fps video, while the omnidirectional obstacle avoidance ensures safe flights. The 30-minute flight time and 10km transmission range make it perfect for adventures.",
            features: [
                "Folds to smartphone size",
                "4K/60fps camera with 1-inch sensor",
                "Omnidirectional obstacle sensing",
                "30-minute flight time",
                "10km HD video transmission",
                "GPS and GLONASS positioning"
            ],
            colors: ["Storm Gray", "Glacier White"],
            image: "images/folding-drone.jpg"
        }
    ];
    
    // Open modal with gadget details
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const gadgetId = parseInt(this.getAttribute('data-id'));
            const gadget = gadgets.find(item => item.id === gadgetId);
            
            if (gadget) {
                modalBody.innerHTML = `
                    <div class="modal-grid">
                        <div class="modal-image">
                            <img src="${gadget.image}" alt="${gadget.name}">
                        </div>
                        <div class="modal-content">
                            <h2>${gadget.name}</h2>
                            <div class="modal-rating">
                                <div class="rating">
                                    ${generateStars(gadget.rating)}
                                    <span>${gadget.rating} (${gadget.reviews} reviews)</span>
                                </div>
                                <span class="modal-price">${gadget.price}</span>
                            </div>
                            <p class="modal-description">${gadget.description}</p>
                            <div class="modal-features">
                                <h4>Key Features</h4>
                                <ul>
                                    ${gadget.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="modal-colors">
                                <h4>Available Colors</h4>
                                <div class="color-options">
                                    ${gadget.colors.map(color => `<span class="color-option" style="background-color: ${getColorHex(color)}" title="${color}"></span>`).join('')}
                                </div>
                            </div>
                            <div class="modal-actions">
                                <button class="btn-cart">Add to Cart</button>
                                <button class="btn-wishlist">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                `;
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });
    
    // Close modal
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
    
    // Helper function to generate star ratings
    function generateStars(rating) {
        let stars = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    // Helper function to get color hex values
    function getColorHex(colorName) {
        const colors = {
            "Space Black": "#2b2d42",
            "Moon Silver": "#e5e5e5",
            "Mars Red": "#d90429",
            "Midnight Blue": "#023e8a",
            "Arctic White": "#f8f9fa",
            "Titanium Black": "#343a40",
            "Rose Gold": "#e0bfb8",
            "Platinum Silver": "#ced4da",
            "Storm Gray": "#495057",
            "Glacier White": "#f1faee"
        };
        
        return colors[colorName] || "#cccccc";
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }
    
    // Notify me button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-notify')) {
            e.preventDefault();
            alert("We'll notify you when this product becomes available!");
        }
    });
    
    // Add to cart button functionality
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-cart')) {
            e.preventDefault();
            const productName = e.target.closest('.gadget-card') ? 
                e.target.closest('.gadget-card').querySelector('h3').textContent :
                e.target.closest('.modal-content').querySelector('h2').textContent;
            
            // In a real implementation, you would add to cart here
            alert(`${productName} has been added to your cart!`);
        }
    });
});