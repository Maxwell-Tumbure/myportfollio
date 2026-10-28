import React, { useState, useEffect, useRef } from 'react';
import portfolioPortrait from './assets/home-portrait.png';
import ContactPage from './ContactPage.jsx';
import {
  Code2,
  GraduationCap,
  Briefcase,
  MapPin,
  FileText,
  Mail,
  Menu,
  X,
  ExternalLink,
  Globe,
} from 'lucide-react';

const XLogo = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WigglingGithubIcon = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 250 250"
    className={className}
    fill="currentColor"
    style={{ overflow: 'visible' }}
  >
    <g transform="translate(125, 125) rotate(-45) scale(1.8) translate(-165, -91)">
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor"
        className="animate-wiggle-arm"
        style={{ transformOrigin: "130px 106px" }}
      />
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [page, setPage] = useState(window.location.pathname.startsWith('/contact') ? 'contact' : 'home');

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  useEffect(() => {
    const handlePopState = () => {
      setPage(window.location.pathname.startsWith('/contact') ? 'contact' : 'home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    const destination = path === '/contact/email' ? '/contact#contact-email-form' : path;
    if (`${window.location.pathname}${window.location.hash}` !== destination) {
      window.history.pushState({}, '', destination);
    }
    setPage(destination.startsWith('/contact') ? 'contact' : 'home');
    setActiveMenu(null);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navigateToSection = (sectionId) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const features = [
    { num: '01.', title: 'Web Frameworks', desc: 'Proficient in React and Next.js for building scalable, interactive user interfaces.', technologies: ['React', 'Next.js'] },
    { num: '02.', title: 'Core Tech Stack', desc: 'Building robust software solutions with cutting-edge technologies.', technologies: ['Flutter', 'Python', 'PHP', 'JavaScript'] },
    { num: '03.', title: 'Deployment', desc: 'Experience deploying and managing applications on Vercel with CI/CD integration.', technologies: ['Vercel', 'CI/CD'] },
    { num: '04.', title: 'Enterprise IT', desc: 'Managed business systems for African Sun Ltd (Elephant Hills, Hwange Safari Lodge).', technologies: ['African Sun Ltd', 'Elephant Hills Resort', 'Hwange Safari Lodge'] },
    { num: '05.', title: 'UI Engineering', desc: 'Crafting responsive mobile layouts, dynamic routing, and fluid animations.', technologies: ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript'] },
    { num: '06.', title: 'Academic Research', desc: 'Documented complex workflows and algorithms via detailed industrial attachment reports.', technologies: ['Research', 'Algorithms', 'Technical reports'] }
  ];

  if (page === 'contact') {
    return <ContactPage onHome={() => navigate('/')} />;
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      
      {/* Global Styles & Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.15; transform: scale(1) translateX(-50%); }
          50% { opacity: 0.25; transform: scale(1.05) translateX(-50%); }
        }
        @keyframes wiggleArm {
          0%, 100% { transform: rotate(0); }
          20%, 60% { transform: rotate(-25deg); }
          40%, 80% { transform: rotate(10deg); }
        }
        @keyframes portraitScan {
          0% { top: 0%; opacity: 0; }
          10%, 85% { opacity: 0.65; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes portraitFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes portraitPulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .animate-pulse-glow { animation: pulseGlow 8s ease-in-out infinite; }
        .animate-wiggle-arm { animation: wiggleArm 2s ease-in-out infinite; }
        .portrait-scan { animation: portraitScan 5s ease-in-out infinite; }
        .portrait-float { animation: portraitFloat 4s ease-in-out infinite; }
        .portrait-pulse { animation: portraitPulse 2.4s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .portrait-scan, .portrait-float, .portrait-pulse { animation: none; }
          .portrait-scan { display: none; }
        }
      `}} />

      {/* Background Ambience */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0 animate-pulse-glow"></div>

      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav 
          onMouseLeave={() => setActiveMenu(null)}
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden bg-[#0f0f0f]/80 backdrop-blur-2xl border border-white/10 shadow-[0_16px_40px_-10px_rgba(0,0,0,0.8)] flex flex-col origin-top
            ${activeMenu ? 'rounded-[32px] w-[850px] max-w-full h-[360px]' : 'rounded-full w-[600px] max-w-full h-14'}`}
        >
          {/* Top Pill Bar */}
          <div className="h-14 px-5 flex items-center justify-between shrink-0">
            <div className="flex items-center space-x-2 text-white cursor-pointer group">
              <Code2 className="text-gray-300 group-hover:text-white transition-colors" size={20} />
              <span className="font-bold tracking-tight text-[15px]">Maxwell</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button 
                  key={item}
                  onClick={
                    item === 'Contact'
                      ? () => navigate('/contact')
                      : item === 'About'
                        ? () => navigateToSection('about')
                        : item === 'Experience'
                          ? () => navigateToSection('experience')
                          : undefined
                  }
                  className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-300 flex items-center space-x-1 border 
                  ${activeMenu === item.toLowerCase() ? 'bg-white/10 border-white/10 text-white shadow-inner' : 'border-transparent text-gray-400 hover:text-gray-200'}`}
                >
                  <span>{item}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <button 
                className="md:hidden text-gray-400 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Expanded Dropdown Area */}
          <div className={`relative flex-1 w-full transition-opacity duration-500 ${activeMenu ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 border-t border-white/5">
              
              {/* About Panel */}
              <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeMenu === 'about' ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                <div className="flex h-full grid-cols-2 gap-8">
                  <div className="flex-1">
                    <h4 className="text-[10px] font-bold text-gray-500 tracking-widest mb-4 uppercase">Education</h4>
                    <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition-colors cursor-default">
                      <GraduationCap className="text-blue-400 mb-3" size={28} />
                      <h3 className="text-base font-bold text-white mb-1">Bindura University of Science Education</h3>
                      <p className="text-[13px] text-gray-400">Pursuing Bachelor of Science in Computer Science.</p>
                      <div className="mt-4 flex items-center text-[11px] text-gray-500 font-mono">
                        <MapPin size={12} className="mr-1" /> Bindura, Zimbabwe
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-[10px] font-bold text-gray-500 tracking-widest mb-4 uppercase">Technical Skills</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['React', 'Next.js', 'HTML / CSS', 'JavaScript', 'Vercel', 'Tailwind CSS'].map((skill, i) => (
                        <div key={i} className="flex items-center space-x-2 bg-white/[0.03] border border-white/5 p-2.5 rounded-xl hover:bg-white/[0.08] transition-colors cursor-default">
                          <Code2 size={14} className="text-gray-400" />
                          <span className="text-[13px] text-gray-200 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Panel */}
              <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeMenu === 'experience' ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                <div className="w-full flex flex-col h-full">
                  <h4 className="text-[10px] font-bold text-gray-500 tracking-widest mb-4 uppercase">Professional Experience</h4>
                  <div className="flex-1 bg-white/[0.03] border border-white/5 rounded-2xl p-6 flex items-start space-x-5 hover:bg-white/[0.05] transition-colors">
                    <div className="bg-blue-500/20 p-3 rounded-xl border border-blue-500/30">
                      <Briefcase className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Business Information Systems Intern</h3>
                      <p className="text-[14px] text-gray-300 font-medium mb-3">African Sun Limited</p>
                      <p className="text-[13px] text-gray-400 leading-relaxed max-w-xl">
                        Managed IT infrastructure and business systems across premium tourism properties including 
                        <strong className="text-gray-200 font-medium"> Elephant Hills Resort</strong> and 
                        <strong className="text-gray-200 font-medium"> Hwange Safari Lodge</strong>. Ensured high availability of critical hospitality systems.
                      </p>
                      <div className="mt-4 flex space-x-3">
                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-gray-300 font-mono">System Admin</span>
                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-gray-300 font-mono">IT Support</span>
                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] text-gray-300 font-mono">Hospitality Tech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects Panel */}
              <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeMenu === 'projects' ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                <div className="flex h-full grid-cols-2 gap-6">
                  <div className="flex-1 group bg-gradient-to-br from-[#1a1a2e] to-[#11111a] border border-blue-900/30 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-500/50 transition-colors cursor-pointer shadow-lg">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-blue-500/20 p-2 rounded-lg"><Globe className="text-blue-400" size={20} /></div>
                        <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">Victoria Falls Explorer</h3>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        A modern tourism marketing web application featuring interactive activity listings, high-altitude adventure bookings, and safari showcases.
                      </p>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] text-gray-300 font-mono border border-white/5">Next.js</span>
                      <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] text-gray-300 font-mono border border-white/5">React</span>
                      <span className="px-2 py-0.5 rounded bg-black/50 text-[10px] text-gray-300 font-mono border border-white/5">Vercel</span>
                    </div>
                  </div>

                  <div className="flex-1 group bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col justify-between hover:bg-white/[0.06] transition-colors cursor-pointer">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="bg-white/10 p-2 rounded-lg"><FileText className="text-gray-300" size={20} /></div>
                      </div>
                      <h3 className="text-base font-bold text-white mb-2">Industrial Attachment Report</h3>
                      <p className="text-[13px] text-gray-400 leading-relaxed">
                        Comprehensive academic documentation detailing applied computer science methodologies and real-world system implementations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Panel */}
              <div className={`absolute inset-0 p-6 transition-all duration-500 ${activeMenu === 'contact' ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                 <div className="w-full h-full flex flex-col items-center justify-center text-center space-y-6">
                    <Mail size={32} className="text-gray-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Let's build something together</h3>
                      <p className="text-gray-400 text-sm">Open for web development roles and collaborations.</p>
                    </div>
                    <div className="flex space-x-4">
                      <a href="mailto:maxtumbure@gmail.com" className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors border border-white/10">
                        Send Email
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/maxwell-tumbure-02939a343"
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/10 hover:bg-white/20 text-white p-2 px-4 rounded-full text-sm font-medium transition-colors border border-white/10 flex items-center"
                      >
                        <LinkedInIcon size={16} className="mr-2"/> LinkedIn
                      </a>
                      <a
                        href="/contact"
                        onClick={(event) => {
                          event.preventDefault();
                          navigate('/contact');
                        }}
                        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors border border-white/10"
                      >
                        Contact page
                      </a>
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-4 right-4 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl py-4 px-6 flex flex-col space-y-4 animate-[fadeIn_0.2s_ease-out_both] shadow-2xl">
          {navItems.map(item => item === 'Contact' ? (
            <a key={item} href="/contact" onClick={(event) => {
              event.preventDefault();
              navigate('/contact');
            }} className="text-gray-300 hover:text-white font-medium">
              {item}
            </a>
          ) : (
            <a
              key={item}
              href={item === 'About' ? '#about' : item === 'Experience' ? '#experience' : `#${item.toLowerCase()}`}
              onClick={(event) => {
                if (item === 'About' || item === 'Experience') {
                  event.preventDefault();
                  navigateToSection(item === 'About' ? 'about' : 'experience');
                  return;
                }
                setMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:text-white font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}

      <main id="about" className="scroll-mt-24 relative z-10 pt-32 pb-16 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Hero Text Content */}
            <div className="w-full lg:w-1/2 text-left">
              <div className="inline-flex items-center rounded-full border border-[#333] bg-[#111] px-3 py-1 text-xs font-medium text-gray-300 mb-6 opacity-0 animate-fade-in-up">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                System Online
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 opacity-0 animate-fade-in-up delay-100">
                Hie I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                  emjay
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up delay-200">
                I'm a Certified Software Engineer from Harare, Zimbabwe. I enjoy building things that live on the internet, from websites to web apps. I am currently better at the first one, but I'm always learning.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 opacity-0 animate-fade-in-up delay-300" aria-label="Social profiles">
                <a
                  href="https://www.linkedin.com/in/maxwell-tumbure-02939a343"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#090b0c] text-[#50d5c6] transition-all duration-300 hover:scale-110 hover:border-[#50d5c6]/60 hover:bg-[#101516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50d5c6] sm:h-[52px] sm:w-[52px]"
                >
                  <LinkedInIcon size={22} />
                </a>
                <a
                  href="https://x.com/mtumbure?s=11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#090b0c] text-[#50d5c6] transition-all duration-300 hover:scale-110 hover:border-[#50d5c6]/60 hover:bg-[#101516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50d5c6] sm:h-[52px] sm:w-[52px]"
                >
                  <XLogo size={22} />
                </a>
                <a
                  href="https://www.instagram.com/munyaradzi__zw?exln=MXNmeTR6M2ppYXV0dw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#090b0c] text-[#50d5c6] transition-all duration-300 hover:scale-110 hover:border-[#50d5c6]/60 hover:bg-[#101516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50d5c6] sm:h-[52px] sm:w-[52px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/263774198648"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#090b0c] text-[#50d5c6] transition-all duration-300 hover:scale-110 hover:border-[#50d5c6]/60 hover:bg-[#101516] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50d5c6] sm:h-[52px] sm:w-[52px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#25D366"
                      d="M12.03 2a9.96 9.96 0 0 0-8.55 15.07L2 22l5.1-1.34A9.96 9.96 0 1 0 12.03 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.8.81-2.96-.2-.31a8.1 8.1 0 1 1 6.85 3.78Z"
                    />
                    <path
                      fill="#25D366"
                      d="M12.03 4.1a7.85 7.85 0 0 0-6.7 11.93l.28.45-.48 1.74 1.78-.47.43.26a7.85 7.85 0 1 0 4.69-13.91Z"
                    />
                    <path
                      fill="#fff"
                      d="M16.58 13.78c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.07-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.59.12.17 1.77 2.7 4.28 3.78.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side: Designer vs Developer Motion Portrait */}
            <div className="w-full lg:w-1/2 opacity-0 animate-fade-in-up delay-400">
              <div className="relative mx-auto w-full max-w-[540px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.55)]">
                <img
                  src={portfolioPortrait}
                  alt="Designer and software engineer portrait with Zimbabwe flag colors"
                  className="block h-auto w-full"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="portrait-scan absolute left-0 right-0 h-20 bg-gradient-to-b from-transparent via-cyan-300/15 to-transparent" />
                  <div className="absolute inset-3 rounded-xl border border-white/20 sm:inset-4">
                    <span className="absolute -left-px -top-px h-5 w-5 border-l-2 border-t-2 border-cyan-300/80 sm:h-7 sm:w-7" />
                    <span className="absolute -right-px -top-px h-5 w-5 border-r-2 border-t-2 border-cyan-300/80 sm:h-7 sm:w-7" />
                    <span className="absolute -bottom-px -left-px h-5 w-5 border-b-2 border-l-2 border-cyan-300/80 sm:h-7 sm:w-7" />
                    <span className="absolute -bottom-px -right-px h-5 w-5 border-b-2 border-r-2 border-cyan-300/80 sm:h-7 sm:w-7" />
                  </div>
                  <span className="portrait-float absolute left-5 top-5 rounded-lg border border-cyan-200/30 bg-slate-950/75 px-2.5 py-1.5 font-mono text-[10px] text-cyan-100 shadow-lg backdrop-blur-sm sm:left-8 sm:top-8 sm:text-xs">
                    &lt;developer /&gt;
                  </span>
                  <span className="portrait-float absolute bottom-5 right-5 rounded-lg border border-emerald-200/30 bg-slate-950/75 px-2.5 py-1.5 font-mono text-[10px] text-emerald-100 shadow-lg backdrop-blur-sm sm:bottom-8 sm:right-8 sm:text-xs" style={{ animationDelay: '900ms' }}>
                    {'{'} creativity: true {'}'}
                  </span>
                  <span className="portrait-pulse absolute right-6 top-1/2 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/70 px-2.5 py-1.5 font-mono text-[9px] text-white/90 backdrop-blur-sm sm:right-9 sm:text-[10px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    BUILDING
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Parallax Window Divider */}
      <div 
        className="w-full h-32 md:h-48 bg-fixed bg-center bg-cover bg-no-repeat relative border-y border-[#262626] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-brightness-75"></div>
      </div>

      <section id="experience" className="scroll-mt-24 relative overflow-hidden border-t border-[#1a1a1a] bg-gradient-to-br from-[#111111] via-[#101516] to-[#111111] py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-32 top-12 h-80 w-80 rounded-full bg-[#50d5c6]/[0.06] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-6">
          <RevealOnScroll>
            <div className="mb-12 md:mb-14">
              <p className="mb-4 font-mono text-xs font-semibold tracking-[0.24em] text-[#50d5c6]">WHAT I BRING</p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">System Capabilities</h2>
              <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#50d5c6] to-blue-500" />
              <p className="text-gray-400 text-lg max-w-2xl">A brief overview of my technical skills, professional experience, and academic background.</p>
            </div>
          </RevealOnScroll>

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <RevealOnScroll key={index} delay={index * 150}>
                <div className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.045] to-white/[0.01] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#50d5c6]/40 hover:shadow-[0_16px_45px_rgba(80,213,198,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#50d5c6]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-4">
                    <span className="font-mono text-3xl font-light text-[#50d5c6]/50 transition-all duration-300 group-hover:text-[#50d5c6]">
                      {feature.num}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-gray-100 transition-colors duration-300 group-hover:text-white">{feature.title}</h3>
                  {feature.technologies ? (
                    <>
                      <p className="mb-4 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        {feature.desc}
                      </p>
                      <div className="mt-auto grid grid-cols-2 gap-2">
                        {feature.technologies.map((technology) => (
                          <div key={technology} className="rounded-lg border border-white/[0.08] bg-black/20 px-2.5 py-2">
                            <span className="text-xs font-medium text-gray-200">{technology}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                      {feature.desc}
                    </p>
                  )}
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <div
        className="relative h-32 w-full border-y border-[#262626] bg-fixed bg-cover bg-center bg-no-repeat shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] md:h-48"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-[#050505]/60 backdrop-brightness-75" />
      </div>

      <ContactPage embedded onHome={() => navigate('/')} />

      <footer className="border-t border-[#1a1a1a] bg-black py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
            <Code2 className="text-gray-500" size={24} />
            <span className="text-lg font-bold tracking-tight text-gray-300">Maxwell<span className="text-gray-600">.workspace</span></span>
          </div>
          
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Maxwell Tumbure. All rights reserved.
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500">
            <a href="https://github.com/Maxwell-Tumbure" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform flex items-center justify-center"><WigglingGithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/maxwell-tumbure-02939a343" target="_blank" rel="noreferrer" className="hover:text-white transition-colors hover:scale-110 transform"><LinkedInIcon size={20} /></a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform"><XLogo size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}