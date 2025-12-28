import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-accent-600 text-white' : 'bg-white text-accent-600'}`}>
              <Home className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-extrabold text-lg leading-tight uppercase tracking-wide ${isScrolled ? 'text-brand-900' : 'text-white'}`}>
                Nhà Phố Gò Vấp
              </span>
              <span className={`text-xs font-medium tracking-wider ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
                Nguồn Chuẩn Pháp Lý
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('details')} 
              className={`font-semibold hover:text-accent-500 transition ${isScrolled ? 'text-brand-800' : 'text-white'}`}
            >
              Thông tin
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className={`font-semibold hover:text-accent-500 transition ${isScrolled ? 'text-brand-800' : 'text-white'}`}
            >
              Vị trí
            </button>
             <button 
              onClick={() => scrollToSection('register-form')}
              className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-orange-500/30 transition transform hover:-translate-y-0.5 flex items-center space-x-2"
            >
              <span>ĐẶT LỊCH XEM NHÀ</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
               <X className={`w-8 h-8 ${isScrolled ? 'text-brand-900' : 'text-white'}`} />
            ) : (
               <Menu className={`w-8 h-8 ${isScrolled ? 'text-brand-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-4 flex flex-col space-y-4 animate-fade-in-down">
          <button onClick={() => scrollToSection('details')} className="text-left px-4 py-2 font-semibold text-brand-800 border-b border-gray-100">
            Thông tin chi tiết
          </button>
          <button onClick={() => scrollToSection('location')} className="text-left px-4 py-2 font-semibold text-brand-800 border-b border-gray-100">
            Vị trí
          </button>
          <button onClick={() => scrollToSection('benefits')} className="text-left px-4 py-2 font-semibold text-brand-800 border-b border-gray-100">
            Tiện ích
          </button>
          <button 
            onClick={() => scrollToSection('register-form')}
            className="bg-accent-600 text-white w-full py-3 rounded-lg font-bold text-center uppercase shadow-md"
          >
            ĐẶT LỊCH XEM NHÀ
          </button>
          <a href="tel:0974801129" className="flex items-center justify-center space-x-2 text-brand-600 font-bold py-2">
            <Phone className="w-5 h-5" />
            <span>Hotline: 0974 801 129</span>
          </a>
        </div>
      )}
    </header>
  );
};