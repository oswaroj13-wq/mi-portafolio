import React, { useEffect } from 'react';
import './App.css'; 
import './components.css'; // Archivo donde irá la Parte 4
import fotoPerfil from './assets/foto-perfil.jpg'; 

export default function App() {
  const technologies = ["Python", "JavaScript", "Flutter", "Bootstrap", "CSS", "PHP", "SQL", "Redes FTTH", "Desarrollo con IA"];

  const services = [
    { title: "Desarrollo Móvil Multiplataforma", desc: "Aplicaciones nativas e híbridas de alto rendimiento para Android e iOS creadas con Flutter." },
    { title: "Desarrollo Web & Frontend", desc: "Sitios dinámicos e interactivos utilizando JavaScript puro, PHP, CSS avanzado y maquetación ágil con Bootstrap." },
    { title: "Backend & Automation", desc: "Lógica de servidor robusta, APIs eficientes y scripts inteligentes con Python para optimización de sistemas." },
    { title: "Inteligencia Artificial Aplicada", desc: "Diseño e integración de flujos de trabajo inteligentes apoyados en la programación con agentes de IA." }
  ];

  const experience = [
    { role: "Gerente del Departamento de Operaciones", company: "Fullfibra TIC, C.A.", period: "Junio 2024 - Diciembre 2024", desc: "Supervisión de operaciones técnicas y liderazgo de equipos de instalación para garantizar la ejecución exitosa de proyectos de telecomunicaciones y redes FTTH." },
    { role: "Coordinador de Sistemas", company: "Hospital Dr. Pedro del Corral", period: "Mayo 2026 - Presente", desc: "Liderazgo del departamento técnico, gestión de infraestructura informática, soporte de redes y optimización de sistemas críticos para garantizar la continuidad operativa del entorno hospitalario." },
    { role: "Colaborador Técnico", company: "AMAB", period: "Febrero 2021 - Marzo 2021", desc: "Desarrollo y mantenimiento de un sistema web local para mejorar la eficiencia operativa y el acceso de los usuarios dentro de la organización." }
  ];

  const projects = [
    { title: "Sistema Web Local AMAB", tech: "Desarrollo Web • Eficiencia", desc: "Plataforma interna implementada para automatizar flujos de trabajo y facilitar el acceso a la información corporativa.", image: "https://unsplash.com" },
    { title: "Infraestructura & Gestión FTTH", tech: "Telecomunicaciones • Fibra", desc: "Diseño lógico y supervisión operativa para el despliegue óptimo de redes de fibra óptica de última milla.", image: "https://unsplash.com" },
    { title: "Integración de Agentes de IA", tech: "Python • IA Avanzada", desc: "Desarrollo conceptual de scripts optimizados para la automatización de tareas lógicas complejas utilizando flujos inteligentes.", image: "https://unsplash.com" }
  ];

  // EFECTO MATEMÁTICO: Animación del canvas de nodos
  useEffect(() => {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId, pts = [];
    const numPoints = window.innerWidth < 768 ? 40 : 100;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < numPoints; i++) {
      pts.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4, r: Math.random() * 2 + 1 });
    }

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.4)'; ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dist = Math.getDistance ? Math.getDistance(pts[i], pts[j]) : Math.sqrt((pts[i].x - pts[j].x)**2 + (pts[i].y - pts[j].y)**2);
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - dist / 120) * 0.12})`; ctx.lineWidth = 0.7; ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(animationId); };
  }, []);

  return (
    <div className="portfolio-container">
      <canvas id="network-canvas" className="global-network-background" />
      
      {/* RENDERIZADO DE LAS SECCIONES (PARTE 2) */}
      <HeroSection technologies={technologies} fotoPerfil={fotoPerfil} />
      <ServicesSection services={services} />
      <ExperienceSection experience={experience} />
      <EducationSection />
      <PortfolioSection projects={projects} />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
function HeroSection({ technologies, fotoPerfil }) {
  return (
    <section className="hero-section">
      <div className="glow-left" /><div className="glow-right" />
      <div className="hero-grid">
        <div className="hero-content">
          <span className="hero-badge">⚡ Oswar De Jesús Ojeda Briceño</span>
          <h1 className="hero-title animate-text-gradient">Ingeniero en Sistemas</h1>
          <p className="hero-subtitle">Especialista en desarrollo web, soporte técnico, gestión de redes de telecomunicaciones FTTH y desarrollo avanzado con soluciones de Inteligencia Artificial.</p>
          <div className="tech-tags">
            {technologies.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
          </div>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">Ver Portafolio</a>
            <a href="#contacto" className="btn-secondary">Contactar Ahora</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-photo-wrapper"><img src={fotoPerfil} alt="Oswar" className="hero-photo" /></div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }) {
  return (
    <section className="services-section">
      <div className="section-header animated-header">
        <h2>Servicios Profesionales</h2>
        <p>Soluciones de ingeniería y desarrollo diseñadas para la eficiencia tecnológica.</p>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card"><h3>{s.title}</h3><p>{s.desc}</p></div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ experience }) {
  return (
    <section className="experience-section">
      <div className="section-header animated-header">
        <h2>Trayectoria Profesional</h2>
        <p>Experiencia liderando operaciones e implementando soluciones técnicas.</p>
      </div>
      <div className="experience-timeline">
        {experience.map((e, i) => (
          <div key={i} className="experience-item">
            <div className="exp-meta"><span className="exp-period">{e.period}</span><h4 className="exp-company">{e.company}</h4></div>
            <div className="exp-info"><h3>{e.role}</h3><p>{e.desc}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="education-section">
      <div className="section-header animated-header"><h2>Educación & Certificaciones</h2><p>Formación académica continua y especializaciones técnicas.</p></div>
      <div className="education-box">
        <div className="edu-card"><span className="edu-year">Graduado en 2019</span><h3>Ingeniería en Sistemas</h3><p>UNEFA - Universidad Nacional Experimental Politécnica de la Fuerza Armada</p></div>
        <div className="edu-card"><span className="edu-year">Graduado en 2014</span><h3>Bachiller en Ciencias</h3><p>UEN "José Calixto Morín"</p></div>
        <div className="edu-card certification-card">
          <span className="edu-year bg-badge-ia">Junio 2026</span><h3>Certificado de Iniciación al Desarrollo con IA</h3>
          <p className="cert-program">Jornadas Formativas: "Desarrollo con IA: Programa con Agentes"</p>
          <p className="cert-issuer">Otorgado por: <strong>BIG school</strong> (mouredev & Romuald Fons)</p>
          <span className="cert-duration">Duración: 6 horas</span>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection({ projects }) {
  return (
    <section id="portfolio" className="portfolio-carousel-section">
      <div className="section-header animated-header"><h2>Proyectos & Despliegues</h2><p>Desliza horizontalmente para explorar mis casos prácticos y soluciones.</p></div>
      <div className="native-carousel">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <div className="project-image-wrapper"><img src={p.image} alt={p.title} className="project-image" /><div className="project-gradient" /></div>
            <div className="project-info"><span className="project-tech">{p.tech}</span><h3>{p.title}</h3><p>{p.desc}</p><a href="#contacto" className="project-link">Consultar Solución</a></div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="section-header animated-header"><h2>¿Iniciamos un Proyecto?</h2><p>Ubicado en Tucupido, Guárico, Venezuela. Disponible para trabajo remoto y consultorías.</p></div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group"><label>Nombre</label><input type="text" required /></div>
          <div className="form-group"><label>Correo</label><input type="email" required /></div>
        </div>
        <div className="form-group"><label>Mensaje</label><textarea rows="4" placeholder="Describe tus requerimientos técnicos..." required></textarea></div>
        <button type="submit" className="btn-submit">Enviar Mensaje Directo</button>
      </form>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="portfolio-footer">
      <p>© 2026 Oswar Ojeda. Todos los derechos reservados.</p>
      <div className="footer-socials">
        <a href="mailto:Oswar2312@gmail.com" className="footer-link-text">Oswar2312@gmail.com</a><span className="footer-link-text">0412-4938848</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link-text">@oswar_ojeda</a>
      </div>
    </footer>
  );
}
