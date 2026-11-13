import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMenu,
  FiX,
  FiDownload,
  FiAward,
  FiMoon,
  FiSun,
} from 'react-icons/fi';
import Contact from '../components/Contact';

const projects = [
  ['STEEZYWURLD','Client work','Fashion / E-commerce','steezywurld.png','Lagos streetwear. A worldwide storefront. An online home for a brand with its own point of view.','https://www.steezywurld.xyz/'],
  ['Septagon Solicitors','Client work','Legal / Business website','septagon-solicitors.png','A professional presence bringing together a law firm’s people, practice areas, and insights.','https://septagonsolicitors.com'],
  ['Yew! Couture','Client work','Fashion / E-commerce','yew-couture.png','A digital storefront for Nigerian ready-to-wear, connecting the collection with its next customer.','https://yewcouture.org'],
  ['Fabrication Legend','Client work','Fabrication / Business website','fabrication-legend.png','Showcasing aluminium, steel, and interior fit-out services for a Kampala-based fabrication company.','https://fabricationlegend.com'],
  ['Bob Review Coach','Independent builds','AI / Developer tools','bob-review-coach.png','AI-assisted code reviews across security, correctness, and maintainability. Built for the IBM Bob 2.0 Hackathon.','https://bobreviewcoach-nine.vercel.app/'],
  ['FinSync','Independent builds','Finance / Web application','finsync.png','A personal finance tracker for making sense of income, expenses, and everyday budgets.','https://finsync-few1.onrender.com/'],
  ['ShopSpire','Independent builds','Commerce / Multi-vendor platform','shopspire.png','Independent stores, one marketplace. A platform for vendors to manage stores and customers to shop across them.','https://shopspire.onrender.com/'],
  ['Jadoo','Independent builds','Travel / Tourism','jadoo.png','A travel experience for discovering new destinations and planning the next trip.','https://jadoo-yfr7.onrender.com'],
  ['School Management System','Independent builds','Education / Web application','https://res.cloudinary.com/djbtdlzrj/image/upload/v1738102417/Screenshot_2025-01-28_231209_wmkvwt.png','Student records, classes, and administration brought together in a school management application.','https://chizzy-kids-school.onrender.com/'],
];

const stack = [
  ['01','Interfaces','React · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind CSS · Bootstrap'],
  ['02','Behind the scenes','Node.js · MongoDB · PostgreSQL · Prisma · Drizzle ORM · Supabase'],
  ['03','Tools & delivery','Git · Vercel · Render · Cloudinary · HTTPie · VS Code'],
];

const navItems = [
  ['Home','/'],
  ['Work','/work'],
  ['Experience','/experience'],
  ['Certificate','/#certificate'],
  ['Contact','/contact'],
  ['CV ↓','/Abdulazeem-Salau-CV.pdf'],
];

const pageMetadata = {
  home: {
    title: 'Shabbaz | Abdulazeem Salau - Full-Stack Developer',
    description: 'Full-stack developer Abdulazeem Salau builds clear, useful digital experiences, websites, and applications.',
  },
  work: {
    title: 'Work | Shabbaz - Full-Stack Developer',
    description: 'Selected client projects and independent web applications built by full-stack developer Abdulazeem Salau.',
  },
  experience: {
    title: 'Experience | Shabbaz - Full-Stack Developer',
    description: 'Professional experience and technical toolkit of full-stack developer Abdulazeem Salau.',
  },
  contact: {
    title: 'Contact | Shabbaz - Full-Stack Developer',
    description: 'Contact Abdulazeem Salau for web development, product design, and collaboration opportunities.',
  },
  privacy: {
    title: 'Privacy Policy | Shabbaz',
    description: 'Read the Shabbaz website privacy policy and learn how contact information is handled.',
  },
  terms: {
    title: 'Terms of Service | Shabbaz',
    description: 'Terms governing the use of the Shabbaz portfolio website.',
  },
};

export default function Portfolio({ mode = 'home' }) {
  const [filter, setFilter] = useState('All work');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('shabbaz-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shabbaz-theme', theme);
  }, [theme]);

  useEffect(() => {
    const metadata = pageMetadata[mode] || pageMetadata.home;
    const canonicalUrl = `https://www.shabbaz.dev${window.location.pathname}`;
    const setMetaContent = (selector, content) => {
      document.head.querySelector(selector)?.setAttribute('content', content);
    };

    document.title = metadata.title;
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', canonicalUrl);
    setMetaContent('meta[name="description"]', metadata.description);
    setMetaContent('meta[property="og:title"]', metadata.title);
    setMetaContent('meta[property="og:description"]', metadata.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', metadata.title);
    setMetaContent('meta[name="twitter:description"]', metadata.description);
  }, [mode]);

  useEffect(() => {
    if (mode === 'work') setFilter('All work');
  }, [mode]);

  const visible = projects.filter((project) => filter === 'All work' || project[1] === filter);
  const homepageProjects = visible
    .filter(([title]) => ['STEEZYWURLD', 'Septagon Solicitors', 'FinSync', 'Bob Review Coach'].includes(title))
    .slice(0, 4);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="page-width site-header__inner">
          <Link className="wordmark" to="/" aria-label="shabbaz.dev home">
            <img className="wordmark-mark" src="/logo-mark.png" alt="" />
            <span className="wordmark-name">shabbaz.dev</span>
          </Link>

          <div className="site-controls">
            <button
              type="button"
              className="theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-pressed={theme === 'dark'}
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            >
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((value) => !value)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => {
              const isPdf = href.endsWith('.pdf');
              if (isPdf) {
                return (
                  <a
                    key={href}
                    href={href}
                    download="Abdulazeem-Salau-CV.pdf"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                );
              }

              return (
                <Link key={href} to={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      <main id="main">
        {mode === 'home' && (
          <>
            <section className="intro page-width" aria-labelledby="intro-title">
              <div className="intro-meta">
                <span><i className="status-dot" /> FULL-STACK DEVELOPER</span>
                <span>LAGOS, NIGERIA / WORLDWIDE</span>
              </div>

              <div className="intro-shell">
                <div className="intro-copy">
                  <h1 id="intro-title">
                    Good ideas.<br />
                    Thoughtfully <em>built.</em>
                    <span className="hero-star" aria-hidden="true">*</span>
                  </h1>

                  <div className="intro-bottom">
                    <p>
                      I’m Abdulazeem Salau, a full-stack developer building clear, useful digital
                      experiences from interface to database.
                    </p>
                    <Link to="/work" className="round-link">
                      Explore my work
                      <span className="arrow-circle"><FiArrowUpRight /></span>
                    </Link>
                  </div>
                </div>

                <aside className="hero-panel" aria-label="Quick overview">
                  <div className="mini-label">Currently</div>
                  <h2>Building digital products that feel as good as they work.</h2>
                  <div className="hero-stats">
                    <div>
                      <strong>7+</strong>
                      <span>Live builds</span>
                    </div>
                  </div>
                  <div className="hero-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>PostgreSQL</span>
                  </div>
                </aside>
              </div>

              <div className="intro-footnote">
                <span>REACT · NODE.JS · NEXT.JS</span>
              </div>
            </section>

            <section id="work" className="work-section page-width" aria-labelledby="work-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">01 / SELECTED WORK</p>
                  <h2 id="work-title">A few things<br />I’ve put into the world.</h2>
                </div>
                <p>
                  Client collaborations and independent experiments.<br />
                  Different challenges. The same attention to detail.
                </p>
              </div>

              <div className="work-filters" role="group" aria-label="Filter projects">
                {['All work','Client work','Independent builds'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={filter === item ? 'active' : ''}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                    <span>{item === 'All work' ? projects.length : projects.filter((project) => project[1] === item).length}</span>
                  </button>
                ))}
              </div>

              <p className="visually-hidden" role="status">Showing {homepageProjects.length} projects</p>

              <div className="work-grid">
                {homepageProjects.map(([title, category, type, image, description, url]) => (
                  <article className="work-card" key={title}>
                    <a className="project-image-link" href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title} (opens in new tab)`}>
                      <div className="project-browser">
                        <i />
                        <i />
                        <i />
                        <small>{new URL(url).hostname}</small>
                      </div>
                      <div className="project-image">
                        <img src={image.startsWith('https:') ? image : `/projects/${image}`} alt={`${title} website preview`} loading="lazy" />
                      </div>
                      <span className="project-visit">Visit website <FiArrowUpRight /></span>
                    </a>

                    <div className="project-title">
                      <h3>
                        <a href={url} target="_blank" rel="noreferrer">{title} <FiArrowUpRight /></a>
                      </h3>
                      <span>{category === 'Client work' ? 'CLIENT' : 'INDEPENDENT'}</span>
                    </div>
                    <p className="project-type">{type}</p>
                    <p className="project-description">{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="about" className="about-section" aria-labelledby="about-title">
              <div className="page-width about-grid">
                <div className="portrait-wrap">
                  <img src="https://res.cloudinary.com/duw8lbca7/image/upload/v1745314841/IMG-20250421-WA0024_fart7l.jpg" alt="Abdulazeem Salau" loading="lazy" />
                  <span className="portrait-caption">ABDULAZEEM SALAU / AKA SHABBAZ</span>
                </div>

                <div className="about-copy">
                  <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
                  <h2 id="about-title">Curious by nature.<br />A builder at heart.</h2>
                  <p>I’m Abdulazeem Salau, a full-stack developer based in Lagos, Nigeria, with a passion for turning ideas into digital experiences people genuinely use.</p>
                  <p>I enjoy working across the full product stack, from interface design and product thinking to APIs, data flow, and the systems behind the scenes. The best solutions come from understanding both the user and the architecture that supports them.</p>
                  <p>Over the years, I’ve built products and business websites for real clients, helping brands launch storefronts, digital experiences, and tools that are clear, reliable, and useful. My work is grounded in JavaScript, React, Node.js, Express, MongoDB, and increasingly Next.js, TypeScript, PostgreSQL, and Prisma.</p>
                  <p>What matters most to me is not just writing code, but creating products that solve real problems and feel effortless to use. I’m still learning, still exploring, and always building because good ideas deserve to be thoughtfully built.</p>

                  <div className="current-role">
                    <p className="role-label">EXPERIENCE</p>
                    <div className="role-entry">
                      <h3>Full-Stack Developer</h3>
                      <p>Agunwami Enterprise <span>Oct 2026 to Present</span></p>
                    </div>
                    <div className="role-entry">
                      <h3>Freelance Full-Stack Developer</h3>
                      <p>Shabbaz <span>Sep 2025 to Present</span></p>
                    </div>
                  </div>

                  <a className="cv-download" href="/Abdulazeem-Salau-CV.pdf" download="Abdulazeem-Salau-CV.pdf">
                    <FiDownload aria-hidden="true" /> Download my CV <span>PDF</span>
                  </a>

                  <div className="about-socials">
                    <a href="https://github.com/shabbazanwar" target="_blank" rel="noreferrer">
                      <FiGithub /> GitHub <FiArrowUpRight />
                    </a>
                    <a href="https://linkedin.com/in/abdulazeem-salau-47b86a341" target="_blank" rel="noreferrer">
                      <FiLinkedin /> LinkedIn <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="stack" className="stack-section page-width" aria-labelledby="stack-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">03 / MY TOOLKIT</p>
                  <h2 id="stack-title">From browser<br />to database.</h2>
                </div>
                <p>The tools I work with to build polished products from idea to launch.</p>
              </div>

              <div className="stack-list">
                {stack.map(([number, title, description]) => (
                  <div className="stack-row" key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <FiArrowUpRight />
                  </div>
                ))}
              </div>
            </section>

            <section id="certificate" className="certificate-section page-width" aria-labelledby="certificate-title">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">04 / CERTIFICATION</p>
                  <h2 id="certificate-title">Learning, put into practice.</h2>
                </div>
                <p>A foundation in software development, completed through GOMYCODE’s bootcamp.</p>
              </div>

              <article className="certificate-card">
                <div className="certificate-card__icon" aria-hidden="true">
                  <FiAward />
                </div>
                <div className="certificate-card__content">
                  <p>GOMYCODE <span>·</span> 31 January 2025</p>
                  <h3>Software Developer Bootcamp</h3>
                  <span>Certificate of Completion</span>
                </div>
                <div className="certificate-actions">
                  <a
                    href="/Abdulazeem-Salau-Software-Developer-Bootcamp-Certificate.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate <FiArrowUpRight aria-hidden="true" />
                  </a>
                  <a
                    href="/Abdulazeem-Salau-Software-Developer-Bootcamp-Certificate.pdf"
                    download="Abdulazeem-Salau-Software-Developer-Bootcamp-Certificate.pdf"
                  >
                    <FiDownload aria-hidden="true" /> Download PDF
                  </a>
                </div>
              </article>
            </section>

            <div className="contact-section">
              <Contact />
            </div>
          </>
        )}

        {mode === 'work' && (
          <section className="page-width work-section work-page" aria-labelledby="work-page-title">
            <div className="section-heading work-page-header">
              <div>
                <p className="eyebrow">WORK</p>
                <h2 id="work-page-title">Selected builds and client work.</h2>
              </div>
              <p>Products, storefronts, and digital experiences built with a UX-first mindset.</p>
            </div>

            <div className="work-filters" role="group" aria-label="Filter projects">
              {['All work','Client work','Independent builds'].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={filter === item ? 'active' : ''}
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                  <span>{item === 'All work' ? projects.length : projects.filter((project) => project[1] === item).length}</span>
                </button>
              ))}
            </div>

            <div className="work-grid">
              {visible.map(([title, category, type, image, description, url]) => (
                <article className="work-card" key={title}>
                  <a className="project-image-link" href={url} target="_blank" rel="noreferrer" aria-label={`Visit ${title} (opens in new tab)`}>
                    <div className="project-browser">
                      <i />
                      <i />
                      <i />
                      <small>{new URL(url).hostname}</small>
                    </div>
                    <div className="project-image">
                      <img src={image.startsWith('https:') ? image : `/projects/${image}`} alt={`${title} website preview`} loading="lazy" />
                    </div>
                    <span className="project-visit">Visit website <FiArrowUpRight /></span>
                  </a>

                  <div className="project-title">
                    <h3>
                      <a href={url} target="_blank" rel="noreferrer">{title} <FiArrowUpRight /></a>
                    </h3>
                    <span>{category === 'Client work' ? 'CLIENT' : 'INDEPENDENT'}</span>
                  </div>
                  <p className="project-type">{type}</p>
                  <p className="project-description">{description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {mode === 'experience' && (
          <section className="page-width stack-section experience-page" aria-labelledby="experience-title">
            <div className="section-heading experience-page-header">
              <div>
                <p className="eyebrow">EXPERIENCE</p>
                <h2 id="experience-title">A product-minded engineering story.</h2>
              </div>
              <p>Design thinking, engineering craft, and shipping what matters.</p>
            </div>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-date">Oct 2026 to Present</div>
                <div className="timeline-card">
                  <h3>Full-Stack Developer</h3>
                  <p className="timeline-company">Agunwami Enterprise</p>
                  <p>Building clean, fast, conversion-focused products for business operations and digital growth.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Sep 2025 to Present</div>
                <div className="timeline-card">
                  <h3>Freelance Full-Stack Developer</h3>
                  <p className="timeline-company">Shabbaz</p>
                  <p>Designing and shipping client websites and custom digital experiences across e-commerce and business brands.</p>
                </div>
              </div>
            </div>

            <div className="stack-list">
              {stack.map(([number, title, description]) => (
                <div className="stack-row" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <FiArrowUpRight />
                </div>
              ))}
            </div>
          </section>
        )}

        {mode === 'contact' && (
          <section className="page-width contact-page">
            <div className="section-heading contact-header">
              <div>
                <p className="eyebrow">CONTACT</p>
                <h2>Let’s build something thoughtful.</h2>
              </div>
              <p>Available for product design, builds, and long-term collaborations.</p>
            </div>

            <div className="contact-panel-grid">
              <div className="contact-section contact-page-form">
                <Contact />
              </div>
            </div>
          </section>
        )}

        {(mode === 'privacy' || mode === 'terms') && (
          <section className="page-width legal-page" aria-labelledby="legal-title">
            <div className="section-heading legal-header">
              <div>
                <p className="eyebrow">LEGAL</p>
                <h2 id="legal-title">{mode === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}</h2>
              </div>
              <p>Last updated: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            </div>

            <div className="legal-content">
              {mode === 'privacy' ? (
                <>
                  <p>Shabbaz respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or contact us through the form on this site.</p>

                  <h3>Information we collect</h3>
                  <p>When you use our contact form, we may collect your name, email address, subject, message, and any other information you provide in your inquiry. We may also collect technical information such as browser type, IP address, device information, and pages visited to help maintain and improve the site.</p>

                  <h3>How we use your information</h3>
                  <p>We use the information you provide to respond to enquiries, discuss project opportunities, and improve the usability and performance of the website. We do not sell or rent personal information to third parties.</p>

                  <h3>Cookies and local preferences</h3>
                  <p>We may use cookies or local storage to remember theme preferences and improve the browsing experience. These settings are limited to functional preferences and do not track sensitive personal data.</p>

                  <h3>Third-party services</h3>
                  <p>Our website may link to external services, portfolios, or project sites. We are not responsible for the privacy practices or content of those external websites. If we use third-party hosting, email delivery, or analytics services in the future, we will disclose this in a clear update to this policy.</p>

                  <h3>Data retention</h3>
                  <p>We retain contact messages only as long as necessary to respond to your enquiry and maintain business records. If you would like your contact information removed, please email us and we will process the request as reasonably possible.</p>

                  <h3>Your rights</h3>
                  <p>You may request access to, correction of, or deletion of personal information you have provided to us. You may also ask that we stop sending communications to you at any time.</p>

                  <h3>Contact</h3>
                  <p>If you have any questions about this Privacy Policy, please contact Abdulazeem Salau at <a href="mailto:abdulazeemsalau@gmail.com">abdulazeemsalau@gmail.com</a>.</p>
                </>
              ) : (
                <>
                  <p>These Terms of Service govern your use of Shabbaz and any associated portfolio or project information presented on this website. By accessing or using the site, you agree to these terms.</p>

                  <h3>Website use</h3>
                  <p>The website is provided for informational and professional purposes. You may view, read, and share content for personal or business use, but you may not misuse the site, attempt to interfere with its operation, or access it in a way that violates applicable law.</p>

                  <h3>Project and portfolio content</h3>
                  <p>All work, images, project summaries, and written content are presented for portfolio and demonstration purposes. While we strive for accuracy, project descriptions and examples may evolve over time, and some external links may redirect to live services or client-owned platforms.</p>

                  <h3>Client inquiries and service discussions</h3>
                  <p>Any communication sent via our contact form or email should be treated as a business inquiry. We may use the information you share to respond, assess a project need, or arrange a further conversation. We do not guarantee project acceptance or a response to every request, but we will do our best to reply in a timely and professional manner.</p>

                  <h3>Intellectual property</h3>
                  <p>Unless otherwise stated, the content on this site, including text, branding, visuals, and code examples, is the property of Abdulazeem Salau or the relevant rights holder. You may not reproduce, republish, or redistribute the site’s content without prior written consent.</p>

                  <h3>Third-party links</h3>
                  <p>Our site may contain links to other websites or online services. We do not control those platforms and are not responsible for their content, accuracy, or terms. Visiting third-party sites is at your own risk.</p>

                  <h3>Availability</h3>
                  <p>We aim to keep the site available and secure, but we do not guarantee uninterrupted access, zero downtime, or the absence of errors. Service availability may be affected by maintenance, hosting issues, or external factors beyond our control.</p>

                  <h3>Changes to these terms</h3>
                  <p>We may update these Terms of Service from time to time to reflect changes in our business, legal requirements, or website functionality. Continued use of the site after updates indicates your acceptance of the revised terms.</p>

                  <h3>Contact</h3>
                  <p>Questions about these Terms of Service can be sent to <a href="mailto:abdulazeemsalau@gmail.com">abdulazeemsalau@gmail.com</a>.</p>
                </>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className="portfolio-footer">
        <div className="page-width">
          <div className="portfolio-footer__main">
            <Link className="portfolio-footer__brand" to="/" aria-label="shabbaz.dev home">
              <img src="/logo-mark.png" alt="" />
              <span>shabbaz.dev</span>
            </Link>

            <nav className="portfolio-footer__nav" aria-label="Footer navigation">
              <Link to="/work">Work</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/#certificate">Certificate</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
            </nav>

            <div className="portfolio-footer__socials" aria-label="Social profiles">
              <a href="https://github.com/shabbazanwar" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/abdulazeem-salau-47b86a341" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="portfolio-footer__bottom">
            <p>© {new Date().getFullYear()} Abdulazeem Salau. All rights reserved.</p>
            <a href="#main">Back to top <FiArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
