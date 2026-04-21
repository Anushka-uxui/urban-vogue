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
        imageUrl: "https://images.unsplash.com/photo-1583391733958-d25e07fac04f?w=600&q=80"
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
        name: "Cargo Street Pants",
        price: 2199,
        category: "Men",
        rating: 4.6,
        reviews: 185,
        isNew: false,
        imageUrl: "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=600&q=80"
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
        name: "Faux Leather Jacket",
        price: 4999,
        category: "Men",
        rating: 4.9,
        reviews: 310,
        isNew: true,
        imageUrl: "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=600&q=80"
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
        imageUrl: "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=600&q=80"
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
    "https://images.unsplash.com/photo-1520975954732-57dd22299614?w=600&q=80",
    "https://images.unsplash.com/photo-1550614000-4b95d466f20e?w=600&q=80"
];

// Helper functions for data access
const getProducts = () => mockProducts;
const getProductById = (id) => mockProducts.find(p => p.id === parseInt(id));
const getFeaturedProducts = () => [mockProducts[0], mockProducts[2], mockProducts[10], mockProducts[14]]; // 4 items
const getNewArrivals = () => mockProducts.filter(p => p.isNew);
const getCategories = () => ["All", "Women", "Men", "Streetwear", "Ethnic", "Accessories"];
