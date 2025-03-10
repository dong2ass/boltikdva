import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, MessageSquare, Database, ChevronRight, ArrowRight, Smile, TrendingUp, Notebook as Robot, Github, Twitter, Linkedin, Mail, Code, Phone, Settings } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import gomorraPhoto from '../assets/gomorraphoto01.jpg';

// Page components
const Agent = () => (
  <div className="min-h-screen bg-black text-white font-mono pt-32 px-4">
    <h1 className="text-4xl font-bold mb-8">AI Chat Agents</h1>
    <p>Detailed information about our AI Chat Agents coming soon...</p>
  </div>
);

const Leads = () => (
  <div className="min-h-screen bg-black text-white font-mono pt-32 px-4">
    <h1 className="text-4xl font-bold mb-8">Lead Generation</h1>
    <p>Detailed information about our Lead Generation services coming soon...</p>
  </div>
);

const Integrations = () => (
  <div className="min-h-screen bg-black text-white font-mono pt-32 px-4">
    <h1 className="text-4xl font-bold mb-8">CRM Integration</h1>
    <p>Detailed information about our CRM Integration solutions coming soon...</p>
  </div>
);

const Careers = () => (
  <div className="min-h-screen bg-black text-white font-mono pt-32 px-4">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Careers at GOMORRA.AI</h1>
      <p className="text-xl text-gray-400 mb-12">Join us in shaping the future of AI-powered business solutions.</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-8 bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
          <ul className="space-y-4">
            <li className="p-4 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-semibold">Senior AI Engineer</h3>
              <p className="text-gray-400">Remote • Full-time</p>
            </li>
            <li className="p-4 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-semibold">Full Stack Developer</h3>
              <p className="text-gray-400">Remote • Full-time</p>
            </li>
            <li className="p-4 bg-white/5 hover:bg-white/10 transition-colors">
              <h3 className="font-semibold">Product Designer</h3>
              <p className="text-gray-400">Remote • Contract</p>
            </li>
          </ul>
        </div>
        
        <div className="p-8 bg-white/5 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1"><Brain className="w-5 h-5" /></div>
              <p>Work with cutting-edge AI technology</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1"><MessageSquare className="w-5 h-5" /></div>
              <p>Collaborative and innovative team culture</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1"><Settings className="w-5 h-5" /></div>
              <p>Flexible work arrangements</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };
    
    const handleScroll = () => {
      if (window.innerWidth > 992) {
        setScrollY(window.scrollY);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Chat Agents",
      description: "Advanced conversational AI that understands and responds naturally to your customers",
      link: "/agent"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Lead Generation",
      description: "Automated lead capture and qualification powered by cutting-edge AI",
      link: "/leads"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "CRM Integration",
      description: "Seamless integration with your existing CRM systems for enhanced workflow",
      link: "/integrations"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website/Application Development",
      description: "Custom web and application development with AI-powered features",
      link: "/development"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI Phone Agent",
      description: "Intelligent phone system that handles calls and appointments automatically",
      link: "/phone-agent"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Service",
      description: "Tailored AI solutions designed specifically for your business needs",
      link: "/custom"
    }
  ];

  const benefits = [
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Automated Support",
      description: "Automate customer support from presenting a product or service to scheduling an appointment"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "50%+ Lead Capture",
      description: "Increase Lead Capture Rate by at least 50%"
    },
    {
      icon: <Robot className="w-8 h-8" />,
      title: "AI-Powered Workflow",
      description: "Empower your administrative workflows with state-of-the-art AI technology"
    }
  ];

  const MainContent = () => (
    <>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold tracking-tighter">GOMORRA.AI</Link>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                Features
              </button>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors tracking-wide">About</a>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-400 hover:text-white transition-colors tracking-wide"
              >
                Contact
              </button>
            </div>
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-none flex items-center space-x-2 transition-all tracking-wider">
              <span>View Docs</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 z-0">
          <Spline 
            className="w-full h-full opacity-60 pointer-events-none" 
            scene="https://prod.spline.design/LPn9MODiHjS1JGwA/scene.splinecode"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-8 leading-tight tracking-tight space-y-4">
            <div className="h-[80px] md:h-[120px] flex items-center justify-center overflow-visible">
              <div 
                className="header-text"
                style={{
                  transform: window.innerWidth > 992 ? `translateY(${scrollY * 0.2}px)` : 'none'
                }}
              >
                Intelligent Automation
              </div>
            </div>
            <span className="block text-white/60 text-2xl md:text-3xl font-normal tracking-widest uppercase">Business Solutions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 tracking-wide">
            Transform your customer interactions with AI-powered automation. Generate leads, engage customers, and streamline your CRM workflow.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="glow-effect bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-none text-lg font-semibold flex items-center justify-center space-x-2 transition-all tracking-wider"
            >
              <span>Book a Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20 bg-gradient-to-b from-black to-zinc-900/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all">
                <div className="mb-6 text-white">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 tracking-wider">{feature.title}</h3>
                <p className="text-gray-400 tracking-wide mb-6">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tighter">
            How This Will Boost Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/30 transition-all transform hover:-translate-y-2 duration-300"
              >
                <div className="mb-6 text-white">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 tracking-wider">{benefit.title}</h3>
                <p className="text-gray-400 tracking-wide">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="p-12 bg-zinc-900/50 border border-white/10">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-6 tracking-tighter">Ready to Transform Your Business?</h2>
              <p className="text-gray-400 mb-8 tracking-wide">Join the AI revolution and stay ahead of the competition. Book a call with our experts today.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-black/50 border border-white/20 focus:border-white outline-none rounded-none tracking-wider"
                />
                <button className="glow-effect bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-none font-semibold whitespace-nowrap transition-all tracking-wider">
                  Book a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tighter">About Mr Gomorra</h2>
              <div className="space-y-4 text-gray-400">
                <p className="leading-relaxed tracking-wide">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="leading-relaxed tracking-wide">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="leading-relaxed tracking-wide">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                </p>
              </div>
            </div>
            <div 
              className="relative overflow-hidden rounded-lg"
              onMouseMove={handleMouseMove}
              style={{
                transform: !isMobile ? `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg)` : 'none',
                transition: 'transform 0.2s ease-out'
              }}
            >
              <img
                src={gomorraPhoto}
                alt="Mr Gomorra Portrait"
                className="w-[600px] h-[900px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/90 backdrop-blur-lg border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GOMORRA.AI</h3>
              <p className="text-gray-400 text-sm">Transforming businesses with intelligent automation solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/agent" className="text-gray-400 hover:text-white transition-colors">AI Chat Agents</Link></li>
                <li><Link to="/leads" className="text-gray-400 hover:text-white transition-colors">Lead Generation</Link></li>
                <li><Link to="/integrations" className="text-gray-400 hover:text-white transition-colors">CRM Integration</Link></li>
                <li><Link to="/development" className="text-gray-400 hover:text-white transition-colors">Website Development</Link></li>
                <li><Link to="/phone-agent" className="text-gray-400 hover:text-white transition-colors">AI Phone Agent</Link></li>
                <li><Link to="/custom" className="text-gray-400 hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 focus:border-white outline-none"
                />
                <button className="w-full bg-white text-black hover:bg-gray-200 px-4 py-2 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm">&copy; 2025 GOMORRA.AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-mono">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;