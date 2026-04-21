// State & Init
let cart = JSON.parse(localStorage.getItem('urbanVogueCart')) || [];
let isDarkMode = localStorage.getItem('theme') === 'dark' || false;
let currentHeroSlide = 0;
let heroInterval;

const updateCartStorage = () => {
    localStorage.setItem('urbanVogueCart', JSON.stringify(cart));
    renderCartCount();
};

const renderCartCount = () => {
    const counts = document.querySelectorAll('.cart-count');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    counts.forEach(el => {
        el.innerText = total;
        if (total > 0) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
};

const toggleTheme = () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    applyTheme();
};

const applyTheme = () => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
        // Switch between sun and moon icon classes based on phosphor icons
        if (isDarkMode) {
            icon.classList.remove('ph-moon');
            icon.classList.add('ph-sun');
        } else {
            icon.classList.remove('ph-sun');
            icon.classList.add('ph-moon');
        }
    });
};

// Components
const Navbar = () => `
    <nav class="fixed top-0 left-0 w-full z-50 glass-card transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <a href="#/" class="flex-shrink-0 flex items-center gap-2">
                    <span class="font-display font-bold text-2xl tracking-tight">URBAN <span class="text-brand-gold">VOGUE</span></span>
                </a>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-8 items-center font-medium">
                    <a href="#/" class="hover:text-brand-gold transition-colors">Home</a>
                    <a href="#/collections" class="hover:text-brand-gold transition-colors">Collections</a>
                    <a href="#/lookbook" class="hover:text-brand-gold transition-colors">Lookbook</a>
                </div>
                
                <!-- Icons -->
                <div class="flex items-center space-x-6">
                    <button onclick="toggleTheme()" class="text-xl hover:text-brand-gold transition-colors" aria-label="Toggle Dark Mode">
                        <i class="ph ph-moon theme-toggle-icon"></i>
                    </button>
                    <a href="#/cart" class="relative text-xl hover:text-brand-gold transition-colors" aria-label="Cart">
                        <i class="ph ph-shopping-bag"></i>
                        <span class="cart-count hidden absolute -top-2 -right-2 bg-brand-gold text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
                    </a>
                </div>
            </div>
        </div>
    </nav>
`;

const Footer = () => `
    <footer class="bg-white dark:bg-brand-darkcard pt-16 pb-8 border-t dark:border-gray-800 transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <span class="font-display font-bold text-2xl tracking-tight mb-4 block">URBAN <span class="text-brand-gold">VOGUE</span></span>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Style That Speaks You. Modern streetwear and premium collections.</p>
            </div>
            <div>
                <h3 class="font-semibold mb-4 text-lg">Shop</h3>
                <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a href="#/collections?cat=Women" class="hover:text-brand-gold">Women</a></li>
                    <li><a href="#/collections?cat=Men" class="hover:text-brand-gold">Men</a></li>
                    <li><a href="#/collections?cat=Streetwear" class="hover:text-brand-gold">Streetwear</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-semibold mb-4 text-lg">Help</h3>
                <ul class="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                    <li><a href="#" class="hover:text-brand-gold">Track Order</a></li>
                    <li><a href="#" class="hover:text-brand-gold">Returns</a></li>
                    <li><a href="#" class="hover:text-brand-gold">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h3 class="font-semibold mb-4 text-lg">Newsletter</h3>
                <div class="flex">
                    <input type="email" placeholder="Email Address" class="px-3 py-2 w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-800 rounded-l outline-none focus:border-brand-gold text-sm">
                    <button class="bg-brand-gold text-white px-4 py-2 rounded-r text-sm font-medium hover:bg-yellow-600 transition-colors">Subscribe</button>
                </div>
            </div>
        </div>
        <div class="text-center mt-12 text-sm text-gray-400">&copy; 2026 Urban Vogue. All rights reserved.</div>
    </footer>
    
    <!-- WhatsApp Button -->
    <a href="#" class="whatsapp-btn" aria-label="Chat on WhatsApp">
        <i class="ph-fill ph-whatsapp text-3xl"></i>
    </a>
`;

// Views
const HomeView = () => {
    // Hero Slider logic will be mounted after render
    const featured = getFeaturedProducts();
    const newArrivals = getNewArrivals();
    
    return `
        <div class="view-enter view-enter-active">
            <!-- Hero -->
            <section class="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0 z-0">
                    <img id="hero-img" src="${homeHeroImages[0]}" class="w-full h-full object-cover transition-opacity duration-1000" alt="Fashion Model" />
                    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                <div class="relative z-10 text-center text-white px-4">
                    <h1 class="font-display text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">Style That Speaks You</h1>
                    <p class="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto drop-shadow">Discover the latest in premium streetwear and modern fashion aesthetics.</p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#/collections" class="bg-brand-gold text-white px-8 py-3 rounded uppercase font-semibold tracking-wide hover:bg-white hover:text-brand-gold transition-colors duration-300">Shop Now</a>
                        <a href="#/lookbook" class="bg-transparent border border-white text-white px-8 py-3 rounded uppercase font-semibold tracking-wide hover:bg-white hover:text-black transition-colors duration-300">Explore Lookbook</a>
                    </div>
                </div>
            </section>

            <!-- Featured Categories -->
            <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 class="font-display text-3xl font-bold text-center mb-12">Shop by Category</h2>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    ${['Women', 'Men', 'Streetwear'].map((cat, i) => `
                        <a href="#/collections?cat=${cat}" class="relative h-96 group overflow-hidden rounded-lg">
                            <img src="${mockProducts[i].imageUrl}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${cat}">
                            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                <h3 class="text-white text-2xl font-bold">${cat}</h3>
                            </div>
                        </a>
                    `).join('')}
                </div>
            </section>

            <!-- Trending -->
            <section class="py-20 bg-gray-50 dark:bg-[#181818] transition-colors duration-300">
                <div class="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 class="font-display text-3xl font-bold text-center mb-12">Trending Now</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        ${featured.map(ProductCard).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;
};

const CollectionsView = () => {
    const hashParts = window.location.hash.split('?cat=');
    const currentCat = hashParts.length > 1 ? decodeURIComponent(hashParts[1]) : 'All';
    let products = getProducts();
    const categories = getCategories();
    
    if (currentCat !== 'All') {
        products = products.filter(p => p.category === currentCat);
    }
    
    return `
        <div class="view-enter view-enter-active pt-8 pb-20 max-w-7xl mx-auto px-4 md:px-8">
            <h1 class="font-display text-4xl font-bold mb-8">All Collections</h1>
            
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Filters Sidebar -->
                <div class="w-full md:w-64 flex-shrink-0">
                    <div class="glass-card p-6 rounded-lg sticky top-28">
                        <h3 class="font-semibold text-lg mb-4">Categories</h3>
                        <ul class="space-y-3 mb-6">
                            ${categories.map(c => `
                                <li>
                                    <label class="flex items-center space-x-3 cursor-pointer group">
                                        <input type="radio" name="category" value="${c}" ${c === currentCat ? 'checked' : ''} class="text-brand-gold focus:ring-brand-gold accent-brand-gold" onchange="window.location.hash = '#/collections?cat=${encodeURIComponent(c)}'">
                                        <span class="group-hover:text-brand-gold transition-colors text-sm">${c}</span>
                                    </label>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                
                <!-- Product Grid -->
                <div class="flex-grow">
                    <div class="${products.length > 0 ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex items-center justify-center py-20 text-gray-500'}" id="products-grid">
                        ${products.length > 0 ? products.map(ProductCard).join('') : '<p class="text-xl">No products found in this category.</p>'}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const ProductCard = (product) => `
    <div class="group relative bg-white dark:bg-brand-darkcard rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border dark:border-gray-800">
        <a href="#/product/${product.id}" class="block overflow-hidden relative">
            <div class="aspect-w-3 aspect-h-4 bg-gray-100 dark:bg-gray-800">
                <img src="${product.imageUrl}" alt="${product.name}" onerror="this.onerror=null;this.src='https://placehold.co/600x800/eeeeee/aaaaaa?text=${encodeURIComponent(product.name).replace(/'/g, '')}';" class="w-full h-[350px] object-cover img-zoom">
            </div>
            ${product.isNew ? '<span class="absolute top-4 left-4 bg-brand-gold text-white text-xs font-bold px-2 py-1 rounded">NEW</span>' : ''}
        </a>
        <div class="p-4">
            <h3 class="font-medium text-lg mb-1"><a href="#/product/${product.id}" class="hover:text-brand-gold transition-colors">${product.name}</a></h3>
            <p class="text-brand-gold font-semibold mb-2">₹${product.price.toLocaleString('en-IN')}</p>
            <div class="flex items-center text-sm text-gray-500 mb-4">
                <i class="ph-fill ph-star text-yellow-400 mr-1"></i> ${product.rating} (${product.reviews})
            </div>
            <button onclick="addToCart(${product.id})" class="w-full bg-black dark:bg-white text-white dark:text-black py-2 rounded font-medium hover:bg-brand-gold dark:hover:bg-brand-gold dark:hover:text-white transition-colors">
                Add to Cart
            </button>
        </div>
    </div>
`;

const ProductDetailView = (id) => {
    const product = getProductById(id);
    if(!product) return `<div class="p-20 text-center">Product not found.</div>`;
    
    return `
        <div class="view-enter view-enter-active pt-12 pb-20 max-w-7xl mx-auto px-4 md:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <!-- Image Gallery -->
                <div class="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                    <img src="${product.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/600x800/eeeeee/aaaaaa?text=${encodeURIComponent(product.name).replace(/'/g, '')}';" class="w-full h-[600px] object-cover" alt="${product.name}">
                </div>
                
                <!-- Details -->
                <div class="flex flex-col justify-center">
                    <span class="text-sm text-brand-gold font-bold uppercase tracking-wider mb-2">${product.category}</span>
                    <h1 class="font-display text-4xl font-bold mb-4">${product.name}</h1>
                    <div class="flex items-center mb-6">
                        <i class="ph-fill ph-star text-yellow-400 mr-1 text-xl"></i>
                        <span class="font-medium mr-2">${product.rating}</span>
                        <span class="text-gray-500 text-sm">(${product.reviews} reviews)</span>
                    </div>
                    <p class="text-3xl font-light mb-8">₹${product.price.toLocaleString('en-IN')}</p>
                    
                    <p class="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        Premium quality materials blended with modern streetwear aesthetics. Designed for comfort and crafted to stand out. Elevate your daily wardrobe with this versatile piece.
                    </p>
                    
                    <div class="mb-8">
                        <h4 class="font-semibold mb-3">Select Size</h4>
                        <div class="flex gap-3">
                            ${['S', 'M', 'L', 'XL'].map(s => `
                                <button class="w-12 h-12 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:border-brand-gold focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors">${s}</button>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <button onclick="addToCart(${product.id})" class="flex-grow bg-brand-gold text-white py-4 rounded text-lg font-bold hover:bg-yellow-600 transition-colors shadow-lg">
                            Add to Cart
                        </button>
                        <button class="w-16 h-14 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center hover:text-red-500 hover:border-red-500 transition-colors text-2xl">
                            <i class="ph ph-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const LookbookView = () => `
    <div class="view-enter view-enter-active pt-8 pb-20 max-w-7xl mx-auto px-4 md:px-8">
        <div class="text-center mb-12">
            <h1 class="font-display text-4xl font-bold mb-4">Summer Lookbook</h1>
            <p class="text-gray-500 max-w-2xl mx-auto">Get inspired by our latest community styles. Hover to see outfit details.</p>
        </div>
        
        <div class="masonry-grid">
            ${lookbookImages.map((img, i) => `
                <div class="masonry-item relative group overflow-hidden rounded-lg cursor-pointer">
                    <img src="${img}" class="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" loading="lazy" alt="Lookbook ${i+1}">
                    <div class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                        <div class="text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            <h3 class="text-white text-xl font-bold mb-4">Shop The Look</h3>
                            <button class="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-brand-gold hover:text-white transition-colors">View Items</button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

const CartView = () => {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartItems = cart.length === 0 
        ? `<div class="text-center py-20 text-gray-500">Your cart is empty. <br><a href="#/collections" class="text-brand-gold mt-4 inline-block font-medium">Continue Shopping</a></div>`
        : cart.map((item, index) => `
            <div class="flex items-center gap-6 py-6 border-b dark:border-gray-700">
                <img src="${item.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/100x130/eeeeee/aaaaaa?text=${encodeURIComponent(item.name).replace(/'/g, '')}';" class="w-24 h-32 object-cover rounded" alt="${item.name}">
                <div class="flex-grow">
                    <h3 class="font-semibold text-lg"><a href="#/product/${item.id}">${item.name}</a></h3>
                    <p class="text-gray-500 text-sm mb-2">${item.category}</p>
                    <p class="font-medium font-display text-lg">₹${item.price.toLocaleString('en-IN')}</p>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex items-center border dark:border-gray-600 rounded">
                        <button onclick="updateQuantity(${index}, -1)" class="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">-</button>
                        <span class="px-3 py-1 font-medium">${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" class="px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">+</button>
                    </div>
                    <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700 transition-colors p-2 text-xl" aria-label="Remove item"><i class="ph ph-trash"></i></button>
                </div>
            </div>
        `).join('');

    return `
        <div class="view-enter view-enter-active pt-8 pb-20 max-w-7xl mx-auto px-4 md:px-8">
            <h1 class="font-display text-4xl font-bold mb-8">Shopping Cart</h1>
            <div class="flex flex-col lg:flex-row gap-12">
                <div class="flex-grow">
                    ${cartItems}
                </div>
                ${cart.length > 0 ? `
                    <div class="w-full lg:w-96 flex-shrink-0">
                        <div class="bg-gray-50 dark:bg-brand-darkcard p-8 rounded-lg border dark:border-gray-800">
                            <h3 class="font-bold text-xl mb-6">Order Summary</h3>
                            <div class="flex justify-between mb-4 text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span>₹${total.toLocaleString('en-IN')}</span>
                            </div>
                            <div class="flex justify-between mb-4 text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div class="border-t dark:border-gray-700 py-4 mt-4 flex justify-between font-bold text-xl">
                                <span>Total</span>
                                <span>₹${total.toLocaleString('en-IN')}</span>
                            </div>
                            <a href="#/checkout" class="block text-center w-full bg-brand-gold text-white py-3 rounded mt-6 font-bold hover:bg-yellow-600 transition-colors uppercase tracking-wide">
                                Proceed to Checkout
                            </a>
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
};

const CheckoutView = () => {
    let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if(cart.length === 0) return `<script>window.location.hash = '#/cart';</script>`;

    return `
        <div class="view-enter view-enter-active pt-8 pb-20 max-w-4xl mx-auto px-4 md:px-8">
            <h1 class="font-display text-4xl font-bold mb-8 text-center border-b pb-4 dark:border-gray-800">Secure Checkout</h1>
            
            <div class="glass-card p-8 rounded-xl relative overflow-hidden">
                <!-- Decorative Mock Element -->
                <div class="absolute -top-10 -right-10 text-9xl text-gray-100 dark:text-gray-800 opacity-50 pointer-events-none"><i class="ph-fill ph-lock-key"></i></div>
                
                <h3 class="text-xl font-bold mb-6 flex items-center gap-2"><i class="ph ph-credit-card text-brand-gold"></i> Payment Gateway <span class="text-xs ml-2 font-normal text-gray-400">(Mockup)</span></h3>
                
                <div class="bg-white dark:bg-black p-6 rounded border dark:border-gray-800 mb-8 shadow-inner">
                    <p class="text-sm text-gray-500 mb-4 text-center">Amount to pay</p>
                    <p class="text-4xl font-display font-bold text-center mb-8">₹${total.toLocaleString('en-IN')}</p>
                    
                    <form onsubmit="handlePayment(event)" class="space-y-6 max-w-md mx-auto">
                        <div>
                            <label class="block text-sm font-medium mb-3">Select Payment Method</label>
                            <div class="grid grid-cols-2 gap-4">
                                <label class="flex items-center gap-2 p-3 border dark:border-gray-700 rounded cursor-pointer hover:border-brand-gold transition-colors">
                                    <input type="radio" name="payment" value="card" checked class="text-brand-gold focus:ring-brand-gold accent-brand-gold" onchange="toggleCardDetails(true)">
                                    <span class="text-sm font-medium flex-1">Credit Card</span>
                                    <i class="ph ph-credit-card text-gray-400"></i>
                                </label>
                                <label class="flex items-center gap-2 p-3 border dark:border-gray-700 rounded cursor-pointer hover:border-brand-gold transition-colors">
                                    <input type="radio" name="payment" value="gpay" class="text-brand-gold focus:ring-brand-gold accent-brand-gold" onchange="toggleCardDetails(false)">
                                    <span class="text-sm font-medium flex-1">Google Pay</span>
                                    <i class="ph ph-google-logo text-gray-400"></i>
                                </label>
                                <label class="flex items-center gap-2 p-3 border dark:border-gray-700 rounded cursor-pointer hover:border-brand-gold transition-colors">
                                    <input type="radio" name="payment" value="phonepe" class="text-brand-gold focus:ring-brand-gold accent-brand-gold" onchange="toggleCardDetails(false)">
                                    <span class="text-sm font-medium flex-1">PhonePe</span>
                                    <i class="ph ph-device-mobile text-gray-400"></i>
                                </label>
                                <label class="flex items-center gap-2 p-3 border dark:border-gray-700 rounded cursor-pointer hover:border-brand-gold transition-colors">
                                    <input type="radio" name="payment" value="cod" class="text-brand-gold focus:ring-brand-gold accent-brand-gold" onchange="toggleCardDetails(false)">
                                    <span class="text-sm font-medium flex-1">Cash on Delivery</span>
                                    <i class="ph ph-money text-gray-400"></i>
                                </label>
                            </div>
                        </div>

                        <!-- Card Details Section (Toggled) -->
                        <div id="card-details" class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1">Card Number</label>
                                <input type="text" placeholder="0000 0000 0000 0000" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded outline-none focus:border-brand-gold font-mono" id="card-num" required>
                            </div>
                            <div class="flex gap-4">
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1">Expiry Date</label>
                                    <input type="text" placeholder="MM/YY" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded outline-none focus:border-brand-gold" id="card-exp" required>
                                </div>
                                <div class="flex-1">
                                    <label class="block text-sm font-medium mb-1">CVC</label>
                                    <input type="text" placeholder="123" class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border dark:border-gray-700 rounded outline-none focus:border-brand-gold" id="card-cvc" required>
                                </div>
                            </div>
                        </div>

                        <div class="pt-4">
                            <button type="submit" class="w-full bg-black dark:bg-white text-white dark:text-black py-4 rounded font-bold hover:bg-brand-gold dark:hover:bg-brand-gold transition-all duration-300 flex justify-center items-center gap-2 text-lg shadow-lg">
                                <i class="ph ph-lock"></i> Complete Payment
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};


// Actions
window.toggleCardDetails = (show) => {
    const cardSection = document.getElementById('card-details');
    if (!cardSection) return;
    const inputs = cardSection.querySelectorAll('input');
    if (show) {
        cardSection.style.display = 'block';
        inputs.forEach(i => i.setAttribute('required', 'true'));
    } else {
        cardSection.style.display = 'none';
        inputs.forEach(i => i.removeAttribute('required'));
    }
};

window.addToCart = (id) => {
    const product = getProductById(id);
    if (!product) return;
    
    const existingIndex = cart.findIndex(item => item.id === id);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartStorage();
    
    // Simple toast logic could go here
    alert(`${product.name} added to cart!`);
};

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    updateCartStorage();
    renderView();
};

window.updateQuantity = (index, delta) => {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCartStorage();
        renderView();
    }
};

window.handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! Thank you for your purchase from Urban Vogue.");
    cart = [];
    updateCartStorage();
    window.location.hash = '#/';
};

// Routing
const router = () => {
    const hash = window.location.hash || '#/';
    let content = '';

    if (hash === '#/') content = HomeView();
    else if (hash.startsWith('#/collections')) content = CollectionsView();
    else if (hash.startsWith('#/product/')) {
        const id = hash.split('/')[2];
        content = ProductDetailView(id);
    }
    else if (hash === '#/lookbook') content = LookbookView();
    else if (hash === '#/cart') content = CartView();
    else if (hash === '#/checkout') content = CheckoutView();
    else content = '<div class="text-center py-20 text-2xl font-bold">404 - Page Not Found</div>';

    return content;
};

const renderView = () => {
    const appEl = document.getElementById('app');
    
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    appEl.innerHTML = `
        ${Navbar()}
        <main class="flex-grow flex-shrink-0 w-full relative z-10 bg-white dark:bg-brand-darkbg transition-colors duration-300">
            ${router()}
        </main>
        ${Footer()}
    `;
    
    // Initialize hero slider if on home page
    if (window.location.hash === '#/' || window.location.hash === '') {
        const heroImg = document.getElementById('hero-img');
        if (heroImg) {
            clearInterval(heroInterval);
            heroInterval = setInterval(() => {
                heroImg.style.opacity = '0.5';
                setTimeout(() => {
                    currentHeroSlide = (currentHeroSlide + 1) % homeHeroImages.length;
                    heroImg.src = homeHeroImages[currentHeroSlide];
                    heroImg.style.opacity = '1';
                }, 500);
            }, 5000);
        }
    }
    
    renderCartCount();
    applyTheme();
};

// Setup Listeners
window.addEventListener('hashchange', renderView);

// Initialization
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const app = document.getElementById('app');
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            app.style.opacity = '1';
            renderView();
        }, 500);
    }, 1000); // 1s fake load for aesthetic
});
