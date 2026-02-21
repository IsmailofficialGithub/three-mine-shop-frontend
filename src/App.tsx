import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, Star, ArrowRight, Mail, Instagram, Twitter, Facebook, Music, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

// Product type definition
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  badge?: string;
  isNew?: boolean;
}

// Products data
const products: Product[] = [
  // Hoodies
  {
    id: 1,
    name: "Thee Mine Classic Hoodie - White",
    category: "Hoodies",
    price: 89,
    image: "/images/Professional_product_photography_202602170312.jpeg",
    rating: 4.9,
    isNew: true
  },
  {
    id: 2,
    name: "Thee Mine Signature Hoodie - Purple",
    category: "Hoodies",
    price: 95,
    image: "/images/Professional_product_photography_202602170311.jpeg",
    rating: 5.0,
    badge: "Bestseller"
  },
  {
    id: 3,
    name: "Thee Mine Essential Hoodie - Black",
    category: "Hoodies",
    price: 89,
    image: "/images/Professional_product_photography_202602162331.jpeg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Thee Mine Street Hoodie - Grey",
    category: "Hoodies",
    price: 92,
    image: "/images/Editorial_lifestyle_photography_202602170121.jpeg",
    rating: 4.7
  },
  // T-Shirts
  {
    id: 5,
    name: "Thee Mine Classic Tee - White",
    category: "T-Shirts",
    price: 45,
    image: "/images/Fashion_lifestyle_photography_202602170127.jpeg",
    rating: 4.8,
    isNew: true
  },
  {
    id: 6,
    name: "Thee Mine Urban Tee - White",
    category: "T-Shirts",
    price: 45,
    image: "/images/Fashion_lifestyle_photography_202602170125.jpeg",
    rating: 4.9
  },
  {
    id: 7,
    name: "Thee Mine Essential Tee - Black",
    category: "T-Shirts",
    price: 42,
    image: "/images/Overhead_product_photography_202602170121.jpeg",
    rating: 4.7,
    badge: "Popular"
  },
  {
    id: 8,
    name: "Thee Mine Premium Tee - Black",
    category: "T-Shirts",
    price: 48,
    image: "/images/Overhead_product_photography_202602170120.jpeg",
    rating: 4.8
  },
  {
    id: 9,
    name: "Thee Mine Logo Tee - Black",
    category: "T-Shirts",
    price: 45,
    image: "/images/Professional_ecommerce_product_202602162331.jpeg",
    rating: 4.9
  },
  // Drinkware
  {
    id: 10,
    name: "Thee Mine Sport Bottle - Black",
    category: "Drinkware",
    price: 35,
    image: "/images/Product_photography_of_202602170315.jpeg",
    rating: 4.8,
    isNew: true
  },
  {
    id: 11,
    name: "Thee Mine Ceramic Mug - White",
    category: "Drinkware",
    price: 28,
    image: "/images/Overhead_flat_lay_202602170314.jpeg",
    rating: 4.9,
    badge: "Bestseller"
  },
  {
    id: 12,
    name: "Thee Mine Coffee Mug - Black",
    category: "Drinkware",
    price: 28,
    image: "/images/Product_photography_of_202602170313.jpeg",
    rating: 4.7
  },
  {
    id: 13,
    name: "Thee Mine Hydration Bottle",
    category: "Drinkware",
    price: 32,
    image: "/images/Product_photography_of_202602170028.jpeg",
    rating: 4.6
  },
  {
    id: 14,
    name: "Thee Mine Limited Edition Bottle",
    category: "Drinkware",
    price: 55,
    image: "/images/Commercial_beverage_photography_202602170026.jpeg",
    rating: 5.0,
    badge: "Limited"
  },
  {
    id: 15,
    name: "Thee Mine Classic Mug - White",
    category: "Drinkware",
    price: 25,
    image: "/images/Overhead_flat_lay_202602162330.jpeg",
    rating: 4.8
  },
  {
    id: 16,
    name: "Thee Mine Minimalist Mug",
    category: "Drinkware",
    price: 25,
    image: "/images/Professional_product_photography_202602162330.jpeg",
    rating: 4.7
  }
];

const categories = ["All", "Hoodies", "T-Shirts", "Drinkware"];

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'shop'>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check current page
    const path = window.location.pathname;
    if (path === '/shop') {
      setCurrentPage('shop');
    } else {
      setCurrentPage('home');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const navigateTo = (page: 'home' | 'shop') => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : '/shop');
    window.scrollTo(0, 0);
  };

  // Homepage Component
  const HomePage = () => (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium animate-pulse">
        COMING SOON - GET READY FOR EPIC CONCERTS AT THEE MINE AMPHITHEATER
      </div>

      {/* Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="flex items-center space-x-2">
              <img src="/images/asad.PNG" alt="Thee Mine" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white hidden sm:block">thee Mine</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
              <a href="#history" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">History</a>
              <a href="#experience" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Experience</a>
              <a href="#gallery" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Gallery</a>
              <button onClick={() => navigateTo('shop')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Shop</button>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={() => navigateTo('shop')} className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 text-gray-300 hover:text-white"><Menu className="w-6 h-6" /></button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-border w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">About</a>
                    <a href="#history" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">History</a>
                    <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Experience</a>
                    <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Gallery</a>
                    <button onClick={() => { setMobileMenuOpen(false); navigateTo('shop'); }} className="text-lg text-gray-300 hover:text-purple-400 text-left">Shop</button>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Contact</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline src="/images/hero.mp4" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-purple-900/40" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-purple-600/80 text-white border-0 px-6 py-2 text-sm font-semibold tracking-wider">
            COMING SOON 
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            THEE MINE <span className="text-gradient">ROCKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-light">
           op Get Ready for Epic Concerts and Events at Thee Mine Amphitheater
          </p>
          <p className="text-lg text-purple-400 mb-8 max-w-2xl mx-auto">
            4th Quarter  - Where Nature and Sound Meet in Perfect Harmony
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold animate-pulse-glow">
              Explore Thee Mine <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg">
              Get Early Access
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
              Moments
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore The <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From epic concerts to serene camping, discover what awaits you at Thee Mine.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {[
              "Music livebanner.png",
              "campinginforces.png",
              "camps2.png",
              "concertofsinger.png",
              "image copy 10.png",
              "image copy 11.png",
              "image copy 12.png",
              "image copy 8.png",
              "image copy.png",
              "image.png",
              "nightcampshine.png",
              "railwaytrack.png"
            ].map((img, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer hover-lift">
                <img 
                  src={`/images/concerts/${img}`} 
                  alt="Thee Mine Event"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white font-medium text-lg block">Captured Moment</span>
                    <span className="text-purple-300 text-sm">Thee Mine Amphitheater</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
              <Star className="w-3 h-3 mr-1" /> Welcome to Thee Mine
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Step Into the <span className="text-gradient">Wonder</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Journey into an enchanted twilight realm, where ancient oaks crown rolling hills 
                and golden light spills across the land.
              </p>
              <p>
                Welcome to <strong className="text-white">Thee Mine Amphitheater</strong>—a breathtaking 
                outdoor sanctuary carved by time and touched by magic.
              </p>
              <p>
                As the Florida sun sets in a blaze of gold, the stage awakens—hosting world-renowned 
                musical artists and unforgettable food and wine celebrations.
              </p>
              <p className="text-purple-400 font-medium">
                All of it unfolds beneath a canopy of stars, where the night sky becomes part of the performance.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glow-purple">
              <img src="/images/Commercial_beverage_photography_202602170026.jpeg" alt="Thee Mine Experience" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-purple-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">28,000</div>
              <div className="text-sm opacity-80">Seat Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
              <MapPin className="w-3 h-3 mr-1" /> Our Story
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              History of <span className="text-gradient">Thee Mine</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-video">
                <img src="/images/concerts/railwaytrack.png" alt="Thee Mine History" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-transparent" />
              </div>
              <div className="absolute -top-4 -right-4 bg-background border border-purple-500/30 text-white p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-500">125+</div>
                <div className="text-xs text-gray-400">Years of History</div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-400 text-lg leading-relaxed">
                Once a phosphate mine carved into Florida's heartland in the early 1900s, 
                this sacred ground has been transformed by nature and time. For 125 years, 
                God has shaped it—layer by layer—into something extraordinary.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                Now, beneath the canopy of towering <strong className="text-white">80-foot oak trees</strong>, 
                Thee Mine rises again—this time as a 28,000-seat open-air amphitheater.
              </p>
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-white text-xl font-medium italic">
                  "This isn't just a concert venue. It's a time portal, where century-old roots 
                  anchor you while world-class music lifts you skyward."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
            Natural Beauty
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beautiful <span className="text-gradient">Natural Setting</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover-lift group">
            <div className="h-48 overflow-hidden relative">
              <img src="/images/concerts/image.png" alt="Lush Forests" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 pt-0 relative z-10 -mt-6">
              <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20">
                <Star className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Lush Forests</h3>
              <p className="text-gray-400">Enveloped by lush forests and rolling grassy meadows that concertgoers can freely explore.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover-lift group">
            <div className="h-48 overflow-hidden relative">
              <img src="/images/concerts/campinginforces.png" alt="Camping & Glamping" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 pt-0 relative z-10 -mt-6">
              <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20">
                <MapPin className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Camping & Glamping</h3>
              <p className="text-gray-400">Visitors can go camping, glamping or hike the many scenic wooded trails surrounding the amphitheater.</p>
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover-lift group">
            <div className="h-48 overflow-hidden relative">
              <img src="/images/concerts/concertofsinger.png" alt="State-of-the-Art" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-8 pt-0 relative z-10 -mt-6">
              <div className="w-14 h-14 bg-background border border-border rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-purple-900/20">
                <Music className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">State-of-the-Art</h3>
              <p className="text-gray-400">From jaw-dropping locale to state-of-the-art sound and lighting equipment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section with Video */}
      <section id="shop" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-purple-900/30" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
          <Badge className="mb-6 bg-purple-600/80 text-white border-0 px-6 py-2 text-sm font-semibold">
            <ShoppingBag className="w-4 h-4 mr-2 inline" /> Official Merchandise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wear the <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Show your love for Thee Mine with our exclusive collection of apparel and accessories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg font-semibold animate-pulse-glow" onClick={() => navigateTo('shop')}>
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">Hoodies</div>
              <div className="text-sm text-gray-400">From $89</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">T-Shirts</div>
              <div className="text-sm text-gray-400">From $42</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">Drinkware</div>
              <div className="text-sm text-gray-400">From $25</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Be the First to <span className="text-gradient">Know</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Get news and exclusive access to presales when we announce our upcoming calendar of events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 bg-background border border-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold">Subscribe</Button>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img src="/images/asad.PNG" alt="Thee Mine" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 mb-6">Where nature and sound meet in perfect harmony.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#history" className="text-gray-400 hover:text-purple-400 transition-colors">History</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-purple-400 transition-colors">Experience</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-purple-400 transition-colors">Gallery</a></li>
                <li><button onClick={() => navigateTo('shop')} className="text-gray-400 hover:text-purple-400 transition-colors">Shop</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Info</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Shows</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Schedule</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>hello@theemine.com</li>
                <li>Florida, USA</li>
                <li className="text-purple-400">Opening Soon</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm"> Thee Mine Amphitheater. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  // Shop Page Component
  const ShopPage = () => (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium">
        FREE SHIPPING ON ORDERS OVER $75 | USE CODE: MINESHIP
      </div>

      {/* Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-2">
              <img src="/images/asad.PNG" alt="Thee Mine" className="h-10 w-auto" />
              <span className="text-xl font-bold text-white hidden sm:block">thee Mine</span>
            </button>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateTo('home')} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Home</button>
              <a href="#shop" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Shop</a>
              <a href="#hoodies" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Hoodies</a>
              <a href="#tees" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">T-Shirts</a>
              <a href="#drinkware" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Drinkware</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>
                )}
              </button>
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 text-gray-300 hover:text-white"><Menu className="w-6 h-6" /></button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-border w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <button onClick={() => { setMobileMenuOpen(false); navigateTo('home'); }} className="text-lg text-gray-300 hover:text-purple-400 text-left">Home</button>
                    <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Shop</a>
                    <a href="#hoodies" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Hoodies</a>
                    <a href="#tees" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">T-Shirts</a>
                    <a href="#drinkware" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300 hover:text-purple-400">Drinkware</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Shop Hero with Video */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/Concert_photography_from_202602180029.jpeg" alt="Shop Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-purple-600/80 text-white border-0 px-4 py-1 text-sm">
            Concert Events Merchandise
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Wear the <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Official merchandise from the hottest concert events in your area. 
            Premium quality apparel and accessories for true music lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold animate-pulse-glow" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-500 text-white hover:bg-white/10 px-8 py-6 text-lg" onClick={() => navigateTo('home')}>
              Back to Home
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Shop by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Browse our collections and find the perfect merch for your style
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#hoodies" id="hoodies" className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img src="/images/Professional_product_photography_202602170311.jpeg" alt="Hoodies" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Hoodies</h3>
                <p className="text-gray-300 mb-4">Stay warm in style with our premium hoodies</p>
                <span className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">Shop Hoodies <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
            <a href="#tees" id="tees" className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img src="/images/Fashion_lifestyle_photography_202602170127.jpeg" alt="T-Shirts" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">T-Shirts</h3>
                <p className="text-gray-300 mb-4">Classic tees for everyday concert vibes</p>
                <span className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">Shop T-Shirts <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
            <a href="#drinkware" id="drinkware" className="group relative overflow-hidden rounded-2xl aspect-[4/5]">
              <img src="/images/Commercial_beverage_photography_202602170026.jpeg" alt="Drinkware" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Drinkware</h3>
                <p className="text-gray-300 mb-4">Hydrate in style with our bottles and mugs</p>
                <span className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">Shop Drinkware <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section id="shop" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            All <span className="text-gradient">Products</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Premium merchandise designed for concert enthusiasts.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeCategory === category ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'bg-secondary text-gray-300 hover:bg-muted hover:text-white'
            }`}>
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="group bg-card rounded-xl overflow-hidden border border-border hover-lift hover:border-purple-500/50 transition-all duration-300" style={{ animationDelay: `${index * 50}ms` }}>
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.badge && <Badge className="absolute top-3 left-3 bg-purple-600 text-white border-0">{product.badge}</Badge>}
                {product.isNew && !product.badge && <Badge className="absolute top-3 left-3 bg-green-600 text-white border-0">New</Badge>}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button onClick={addToCart} className="bg-purple-600 hover:bg-purple-700 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Add to Cart</Button>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  <span className="text-sm text-gray-400">{product.rating}</span>
                </div>
                <h3 className="text-white font-medium mb-2 line-clamp-2 group-hover:text-purple-400 transition-colors">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  {product.originalPrice && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          {/* <Button variant="outline" size="lg" className="border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
            View All Products <ArrowRight className="ml-2 w-5 h-5" />
          </Button> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">About Thee Mine</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Born from the <span className="text-gradient">Music</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Thee Mine is more than just merchandise – it's a celebration of live music culture. 
              Born from the energy of concert events in our local scene, we create premium apparel 
              and accessories that let you carry the concert experience wherever you go.
            </p>
            <div className="flex flex-wrap gap-8">
              <div><div className="text-3xl font-bold text-purple-500 mb-1">10K+</div><div className="text-gray-500">Happy Fans</div></div>
              <div><div className="text-3xl font-bold text-purple-500 mb-1">50+</div><div className="text-gray-500">Events Covered</div></div>
              <div><div className="text-3xl font-bold text-purple-500 mb-1">100%</div><div className="text-gray-500">Quality Guaranteed</div></div>
            </div>
          </div>
          <div className="relative">
            <img src="/images/Black and White Minimalist Simple Modern Technology AI Logo.png" alt="Thee Mine Logo" className="w-full max-w-md mx-auto opacity-90" />
            <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-purple-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 text-purple-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the <span className="text-gradient">Community</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Subscribe to get exclusive access to new drops, concert updates, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 bg-background border border-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <img src="/images/asad.PNG" alt="Thee Mine" className="h-12 w-auto mb-4" />
              <p className="text-gray-400 mb-6">Premium concert merchandise for music lovers.</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">All Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Hoodies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">T-Shirts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Drinkware</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>hello@theemine.com</li>
                <li>Florida, USA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm"> Thee Mine. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

  return currentPage === 'home' ? <HomePage /> : <ShopPage />;
}

export default App;
