import { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBag, Menu, ArrowRight, Mail, Instagram, Twitter, Facebook, 
  Music, TreePine, Star, MapPin, VolumeX, Volume2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Announcement Bar */}
      <div className="bg-purple-600 text-white text-center py-2 text-sm font-medium animate-pulse">
        COMING SOON  - GET READY FOR EPIC CONCERTS AT THEE MINE AMPHITHEATER
      </div>

      {/* Navigation */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <img 
                src="/images/asad.PNG" 
                alt="Thee Mine" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-white hidden sm:block">thee Mine</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">About</a>
              <a href="#history" onClick={(e) => { e.preventDefault(); scrollToSection('history'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">History</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Experience</a>
              <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Gallery</a>
              <a href="#shop" onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Shop</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-gray-300 hover:text-purple-400 transition-colors font-medium">Contact</a>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <a href="/shop" className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <ShoppingBag className="w-6 h-6" />
              </a>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <button className="p-2 text-gray-300 hover:text-white">
                    <Menu className="w-6 h-6" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-border w-80">
                  <div className="flex flex-col space-y-6 mt-8">
                    <a href="#about" onClick={() => { setMobileMenuOpen(false); scrollToSection('about'); }} className="text-lg text-gray-300 hover:text-purple-400">About</a>
                    <a href="#history" onClick={() => { setMobileMenuOpen(false); scrollToSection('history'); }} className="text-lg text-gray-300 hover:text-purple-400">History</a>
                    <a href="#experience" onClick={() => { setMobileMenuOpen(false); scrollToSection('experience'); }} className="text-lg text-gray-300 hover:text-purple-400">Experience</a>
                    <a href="#gallery" onClick={() => { setMobileMenuOpen(false); scrollToSection('gallery'); }} className="text-lg text-gray-300 hover:text-purple-400">Gallery</a>
                    <a href="#shop" onClick={() => { setMobileMenuOpen(false); scrollToSection('shop'); }} className="text-lg text-gray-300 hover:text-purple-400">Shop</a>
                    <a href="#contact" onClick={() => { setMobileMenuOpen(false); scrollToSection('contact'); }} className="text-lg text-gray-300 hover:text-purple-400">Contact</a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Amphitheater */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/Concert_photography_from_202602180029.jpeg" 
            alt="Thee Mine Amphitheater" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-purple-900/40" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <Badge className="mb-6 bg-purple-600/80 text-white border-0 px-6 py-2 text-sm font-semibold tracking-wider">
            COMING SOON 
          </Badge>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            THEE MINE <span className="text-gradient">ROCKS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto font-light">
            Get Ready for Epic Concerts and Events at Thee Mine Amphitheater
          </p>
          <p className="text-lg text-purple-400 mb-8 max-w-2xl mx-auto">
            4th Quarter  - Where Nature and Sound Meet in Perfect Harmony
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg font-semibold animate-pulse-glow"
              onClick={() => scrollToSection('about')}
            >
              Explore Thee Mine <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Early Access
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-purple-500 rounded-full" />
          </div>
        </div>
      </section>

  

      {/* About Section - Step Into the Wonder */}
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
              <div className="mt-8 pt-6 border-t border-purple-900/30">
                <p className="text-sm text-gray-500 font-medium">
                  Created by <a href="https://YourAIExecutive.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Your AI Executive</a> & <a href="https://Aithical.pro" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Aithical pro</a>
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <Music className="w-5 h-5 text-purple-500" />
                <span>World-Class Artists</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <TreePine className="w-5 h-5 text-purple-500" />
                <span>Natural Setting</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-5 h-5 text-purple-500" />
                <span>Unforgettable Experience</span>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] glow-purple">
              <img 
                src="/images/about.png" 
                alt="Thee Mine Experience"
                className="w-full h-full object-cover"
              />
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
                <img 
                  src="/images/Editorial_lifestyle_photography_202602170121.jpeg" 
                  alt="Thee Mine History"
                  className="w-full h-full object-cover"
                />
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
                Surrounded by living witnesses to history, you'll feel the echoes of the past 
                and the pulse of the present.
              </p>
              <div className="bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-xl">
                <p className="text-white text-xl font-medium italic">
                  "This isn't just a concert venue. It's a time portal, where century-old roots 
                  anchor you while world-class music lifts you skyward."
                </p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                The crumbling remnants of the old mine form the backdrop, as the world's 
                biggest bands create unforgettable moments under the stars.
              </p>
              <div className="flex gap-4">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => scrollToSection('contact')}
                >
                  Step Into Thee Mine <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Natural Setting */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
            <TreePine className="w-3 h-3 mr-1" /> Natural Beauty
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Beautiful <span className="text-gradient">Natural Setting</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Unlike traditional concrete music venues, Thee Mine is nestled right in the heart of nature
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover-lift">
            <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
              <TreePine className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lush Forests</h3>
            <p className="text-gray-400">
              Enveloped by lush forests and rolling grassy meadows that concertgoers can freely explore before the show.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover-lift">
            <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Camping & Glamping</h3>
            <p className="text-gray-400">
              Visitors can go camping, glamping or hike the many scenic wooded trails surrounding the amphitheater.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover-lift">
            <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
              <Music className="w-7 h-7 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">State-of-the-Art</h3>
            <p className="text-gray-400">
              From jaw-dropping locale to state-of-the-art sound and lighting equipment for an unforgettable experience.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            <strong className="text-white">Thee Mine</strong> has been exquisitely designed to provide music fans 
            with a one-of-a-kind outdoor festival and concert experience they'll never forget.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/50">
              <Star className="w-3 h-3 mr-1" /> Moments
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

      {/* Shop Section with Video Hero */}
      <section id="shop" className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-purple-900/30" />
        </div>

        {/* Video Controls */}
        <button
          onClick={toggleMute}
          className="absolute top-6 right-6 z-20 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Shop Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-24">
          <Badge className="mb-6 bg-purple-600/80 text-white border-0 px-6 py-2 text-sm font-semibold">
            <ShoppingBag className="w-4 h-4 mr-2 inline" /> Official Merchandise
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Wear the <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Show your love for Thee Mine with our exclusive collection of apparel and accessories. 
            From hoodies to drinkware, represent the music wherever you go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/shop">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-6 text-lg font-semibold animate-pulse-glow"
              >
                Shop Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg"
              onClick={() => scrollToSection('contact')}
            >
              Get Updates
            </Button>
          </div>

          {/* Quick Shop Preview */}
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

      {/* Newsletter/Contact Section */}
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
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-background border border-border rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to receive updates from Thee Mine Amphitheater.
          </p>

          {/* Social Links */}
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <img 
                src="/images/asad.PNG" 
                alt="Thee Mine" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-6">
                Where nature and sound meet in perfect harmony. 
                Experience unforgettable concerts under the stars.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#history" onClick={(e) => { e.preventDefault(); scrollToSection('history'); }} className="text-gray-400 hover:text-purple-400 transition-colors">History</a></li>
                <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="text-gray-400 hover:text-purple-400 transition-colors">Experience</a></li>
                <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }} className="text-gray-400 hover:text-purple-400 transition-colors">Gallery</a></li>
                <li><a href="#shop" onClick={(e) => { e.preventDefault(); scrollToSection('shop'); }} className="text-gray-400 hover:text-purple-400 transition-colors">Shop</a></li>
              </ul>
            </div>

            {/* Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Info</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Shows</a></li>
                <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Schedule</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li>hello@theemine.com</li>
                <li>Florida, USA</li>
                <li className="text-purple-400">Opening Soon</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
               Thee Mine Amphitheater. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Created by <a href="https://YourAIExecutive.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Your AI Executive</a> & <a href="https://Aithical.pro" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">Aithical pro</a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
