import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import portrait from './assets/designer-developer-portrait.png';

const currentYear = new Date().getFullYear();

const XIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M12.03 2a9.96 9.96 0 0 0-8.55 15.07L2 22l5.1-1.34A9.96 9.96 0 1 0 12.03 2Zm0 18.1a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.03.8.81-2.96-.2-.31a8.1 8.1 0 1 1 6.85 3.78Z" />
    <path d="M16.58 13.78c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.52.11-.11.25-.3.38-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.07-.12-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.42 1.03 2.59.12.17 1.77 2.7 4.28 3.78.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z" fill="#080808" />
  </svg>
);

const socialLinks = [
  { label: 'X', href: 'https://x.com/mtumbure?s=11', icon: <XIcon />, color: 'hover:border-white/30 hover:text-white' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maxwell-tumbure-02939a343', icon: <LinkedInIcon />, color: 'hover:border-sky-400/40 hover:text-sky-300' },
  { label: 'Instagram', href: 'https://www.instagram.com/munyaradzi__zw?exln=MXNmeTR6M2ppYXV0dw%3D%3D&utm_source=qr', icon: <InstagramIcon />, color: 'hover:border-pink-400/40 hover:text-pink-300' },
  { label: 'WhatsApp', href: 'https://wa.me/263774198648', icon: <WhatsAppIcon />, color: 'hover:border-emerald-400/40 hover:text-emerald-300' },
];

function EmailForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:maxtumbure@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10">
      <p className="mb-3 font-mono text-xs font-semibold tracking-[0.24em] text-[#50d5c6]">CONTACT // EMAIL</p>
      <h1 className="mb-2 text-3xl font-semibold text-white sm:text-4xl">Send me an email</h1>
      <p className="mb-8 text-sm text-gray-400">Fill out the form and it’ll open a new message in your email app.</p>
      <form onSubmit={handleSubmit} className="grid gap-x-6 gap-y-5 md:grid-cols-2">
        <div className="space-y-5">
          <div>
            <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-300">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" required className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-[#50d5c6] focus:ring-2 focus:ring-[#50d5c6]/20" />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-300">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-[#50d5c6] focus:ring-2 focus:ring-[#50d5c6]/20" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-300">Message</label>
          <textarea id="contact-message" name="message" rows="6" required className="min-h-36 w-full flex-1 resize-y rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-white outline-none transition-colors focus:border-[#50d5c6] focus:ring-2 focus:ring-[#50d5c6]/20" />
        </div>
        <div className="md:col-span-2 md:flex md:justify-end">
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#50d5c6] md:w-auto">
            Send email
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ContactPage({ onHome, embedded = false }) {
  useEffect(() => {
    if (window.location.pathname === '/contact/email') {
      window.history.replaceState({}, '', '/contact#contact-email-form');
    }
    if (window.location.hash === '#contact-email-form') {
      document.getElementById('contact-email-form')?.scrollIntoView();
    }
  }, []);

  return (
    <div id={embedded ? 'contact-section' : undefined} className={`${embedded ? 'scroll-mt-24 border-t border-white/10' : 'min-h-screen'} overflow-x-hidden bg-black text-white selection:bg-blue-500/30 selection:text-white`}>
      {!embedded && (
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onHome();
            }}
            className="flex items-center gap-2 text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] font-mono text-sm text-[#50d5c6]">&lt;/&gt;</span>
            <span className="font-semibold tracking-tight">Maxwell<span className="text-gray-500">.workspace</span></span>
          </a>
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              onHome();
            }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-gray-300 transition-colors hover:border-white/20 hover:text-white"
          >
            Home
          </a>
        </header>
      )}

      {!embedded && (
        <div
          className="relative h-32 w-full border-y border-[#262626] bg-fixed bg-cover bg-center bg-no-repeat shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] md:h-48"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-[#050505]/60 backdrop-brightness-75" />
        </div>
      )}

      <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 sm:pb-28 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="lg:order-2">
              <p className="mb-4 font-mono text-xs font-semibold tracking-[0.24em] text-[#50d5c6]">LET'S CONNECT</p>
              <h1 className="mb-5 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">Contact.</h1>
              <p className="max-w-xl text-lg leading-relaxed text-gray-400 sm:text-xl">
                Get in touch with me via social media or send me an email. I’m always happy to talk about ideas, projects, and opportunities.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                {socialLinks.map(({ label, href, icon, color }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-gray-300 transition-colors ${color}`}>
                    {icon}
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
              <a href="mailto:maxtumbure@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-[#50d5c6]">
                <Mail size={16} />
                maxtumbure@gmail.com
              </a>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:order-1">
              <img src={portrait} alt="Designer and software engineer portrait" className="block h-auto w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-xs text-gray-200 backdrop-blur">
                Harare, Zimbabwe
              </span>
            </div>
        </div>
        <div id="contact-email-form" className="scroll-mt-8 mt-16 sm:mt-24">
          <EmailForm />
        </div>
      </main>

      {!embedded && (
        <footer className="border-t border-white/10 px-6 py-6 text-center font-mono text-xs text-gray-500">
          © {currentYear} Maxwell Tumbure
        </footer>
      )}
    </div>
  );
}
