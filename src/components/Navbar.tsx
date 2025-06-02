
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { label: 'About Us', href: '#about' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'FAQs', href: '#faqs' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/ee34ecb0-98ab-4495-a2f7-0445311ee258.png" 
              alt="AlphaMatter"
              className="h-10 w-10 mr-3"
            />
            <span className="text-2xl font-bold text-gray-900">AlphaMatter</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#db4d1a] transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="outline" 
              className="border-[#db4d1a] text-[#db4d1a] hover:bg-[#db4d1a] hover:text-white"
              onClick={() => navigate('/auth')}
            >
              Sign In
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-gray-700 hover:text-[#db4d1a] hover:bg-gray-50 rounded-md font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button 
                className="w-full bg-[#db4d1a] hover:bg-[#c44217] text-white"
                onClick={() => navigate('/auth')}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
