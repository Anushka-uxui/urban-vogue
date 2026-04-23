// Mock Database for Urban Vogue - Reverted to Premium Unsplash Images

const mockProducts = [
    // Women's Collection (10 items)
    {
        id: 1,
        name: "Silk Slip Dress",
        price: 2499,
        category: "Women",
        rating: 4.8,
        reviews: 124,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    },
    {
        id: 2,
        name: "Classic Trench Coat",
        price: 4599,
        category: "Women",
        rating: 4.9,
        reviews: 89,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80"
    },
    {
        id: 3,
        name: "Oversized Denim Jacket",
        price: 2999,
        category: "Women",
        rating: 4.7,
        reviews: 210,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&q=80"
    },
    {
        id: 4,
        name: "Pleated Midi Skirt",
        price: 1599,
        category: "Women",
        rating: 4.6,
        reviews: 56,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    },
    {
        id: 5,
        name: "Floral Summer Maxi",
        price: 2299,
        category: "Women",
        rating: 5.0,
        reviews: 42,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80"
    },
    {
        id: 6,
        name: "Lace Trim Cami Top",
        price: 999,
        category: "Women",
        rating: 4.5,
        reviews: 73,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&q=80"
    },
    {
        id: 7,
        name: "High-Waist Trousers",
        price: 1899,
        category: "Women",
        rating: 4.8,
        reviews: 156,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80"
    },
    {
        id: 8,
        name: "Cashmere Blend Sweater",
        price: 3499,
        category: "Women",
        rating: 4.4,
        reviews: 88,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80"
    },
    {
        id: 9,
        name: "Cotton Poplin Shirt",
        price: 1499,
        category: "Women",
        rating: 4.7,
        reviews: 112,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    },
    {
        id: 10,
        name: "Sequined Evening Gown",
        price: 8999,
        category: "Women",
        rating: 4.9,
        reviews: 34,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80"
    },

    // Men's Collection (10 items)
    {
        id: 11,
        name: "Minimalist Urban Hoodie",
        price: 1999,
        category: "Men",
        rating: 4.8,
        reviews: 320,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    },
    {
        id: 12,
        name: "Vintage Cargo Pants",
        price: 2199,
        category: "Men",
        rating: 4.6,
        reviews: 185,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"
    },
    {
        id: 13,
        name: "Classic Oxford Shirt",
        price: 1499,
        category: "Men",
        rating: 4.7,
        reviews: 210,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&q=80"
    },
    {
        id: 14,
        name: "Slim Fit Chinos",
        price: 1799,
        category: "Men",
        rating: 4.5,
        reviews: 140,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    },
    {
        id: 15,
        name: "Classic Biker Jacket",
        price: 5299,
        category: "Men",
        rating: 4.9,
        reviews: 310,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
    },
    {
        id: 16,
        name: "Graphic Print Tee",
        price: 799,
        category: "Men",
        rating: 4.3,
        reviews: 420,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&q=80"
    },
    {
        id: 17,
        name: "Linen Blend Blazer",
        price: 3999,
        category: "Men",
        rating: 4.7,
        reviews: 95,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    },
    {
        id: 18,
        name: "Distressed Denim Jeans",
        price: 2499,
        category: "Men",
        rating: 4.6,
        reviews: 280,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
    },
    {
        id: 19,
        name: "Fleece Zip-up Sweatshirt",
        price: 1899,
        category: "Men",
        rating: 4.5,
        reviews: 150,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&q=80"
    },
    {
        id: 20,
        name: "Textured Knit Polo",
        price: 1299,
        category: "Men",
        rating: 4.4,
        reviews: 120,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    },
    // Men's Additional
    {
        id: 21,
        name: "Urban Layered Coat",
        price: 3499,
        category: "Men",
        rating: 4.8,
        reviews: 94,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80"
    },
    {
        id: 22,
        name: "Casual Light Jacket",
        price: 2299,
        category: "Men",
        rating: 4.5,
        reviews: 42,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
    },
    {
        id: 23,
        name: "Tech-Fleece Pullover",
        price: 1599,
        category: "Men",
        rating: 4.7,
        reviews: 210,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80"
    },
    {
        id: 24,
        name: "Techwear Cargo Pants",
        price: 1899,
        category: "Men",
        rating: 4.4,
        reviews: 58,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"
    },

    // Ethnic Collection
    {
        id: 25,
        name: "Elegant Evening Kurta",
        price: 4999,
        category: "Ethnic",
        rating: 4.9,
        reviews: 320,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80"
    },
    {
        id: 26,
        name: "Silk Blend Saree",
        price: 7599,
        category: "Ethnic",
        rating: 5.0,
        reviews: 512,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80"
    },
    {
        id: 27,
        name: "Festive Draped Saree",
        price: 3299,
        category: "Ethnic",
        rating: 4.6,
        reviews: 84,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
    },
    {
        id: 28,
        name: "Cotton Block Lehenga",
        price: 1499,
        category: "Ethnic",
        rating: 4.7,
        reviews: 143,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80"
    },

    // Accessories Collection
    {
        id: 29,
        name: "Minimalist Leather Watch",
        price: 2999,
        category: "Accessories",
        rating: 4.8,
        reviews: 410,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&q=80"
    },
    {
        id: 30,
        name: "Geometric Sunglasses",
        price: 1299,
        category: "Accessories",
        rating: 4.5,
        reviews: 219,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"
    },
    {
        id: 31,
        name: "Classic Wayfarers",
        price: 899,
        category: "Accessories",
        rating: 4.7,
        reviews: 155,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"
    },
    {
        id: 32,
        name: "Canvas Tote Bag",
        price: 699,
        category: "Accessories",
        rating: 4.9,
        reviews: 89,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80"
    },
    
    // Streetwear Collection
    {
        id: 33,
        name: "Oversized Street Tee",
        price: 1299,
        category: "Streetwear",
        rating: 4.8,
        reviews: 245,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=600&q=80"
    },
    {
        id: 34,
        name: "Vintage Street Jacket",
        price: 4999,
        category: "Streetwear",
        rating: 5.0,
        reviews: 310,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80"
    },
    {
        id: 35,
        name: "Baggy Street Jeans",
        price: 2499,
        category: "Streetwear",
        rating: 4.7,
        reviews: 180,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
    },
    {
        id: 36,
        name: "Urban Cargo Street Pants",
        price: 2199,
        category: "Streetwear",
        rating: 4.5,
        reviews: 112,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1475178626620-a4d074967452?w=600&q=80"
    }
];

const homeHeroImages = [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&q=80"
];

const lookbookImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80",
    "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=600&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80"
];

// Helper functions for data access
const getProducts = () => mockProducts;
const getProductById = (id) => mockProducts.find(p => p.id === parseInt(id));
const getFeaturedProducts = () => [mockProducts[0], mockProducts[2], mockProducts[10], mockProducts[14]]; // 4 items
const getNewArrivals = () => mockProducts.filter(p => p.isNew);
const getCategories = () => ["All", "Women", "Men", "Streetwear", "Ethnic", "Accessories"];

const testimonialsData = [
    {
        name: "Sarah Jenkins",
        rating: 5,
        review: "Absolutely love the streetwear collection! The quality of the oversized tees is unmatched.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&fit=crop&q=80"
    },
    {
        name: "David Chen",
        rating: 5,
        review: "Fast shipping and the clothes fit perfectly. Definitely my new go-to store for trendy outfits.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&fit=crop&q=80"
    },
    {
        name: "Ayesha Khan",
        rating: 4,
        review: "Great customer service and the dresses look exactly like the pictures. Highly recommended!",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&fit=crop&q=80"
    }
];

const faqsData = [
    {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for all unworn and unwashed items with tags still attached. Simply contact our support team to initiate a return."
    },
    {
        question: "Do you ship internationally?",
        answer: "Currently, we ship all across the country. We are working on expanding our logistics to offer international shipping soon!"
    },
    {
        question: "How long does shipping take?",
        answer: "Standard shipping takes 3-5 business days. We also offer express 2-day shipping at checkout."
    },
    {
        question: "How do I know my size?",
        answer: "Each product page features a detailed sizing chart. We recommend comparing your measurements with the chart to find your perfect fit."
    }
];

const getTestimonials = () => testimonialsData;
const getFaqs = () => faqsData;

