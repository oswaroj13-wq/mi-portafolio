import React, { useEffect } from 'react';
import './App.css'; 
import './components.css'; 
import fotoPerfil from './assets/foto-perfil.jpg'; 

export default function App() {
  const technologies = ["Python", "JavaScript", "Flutter", "Bootstrap", "CSS", "PHP", "SQL", "Redes FTTH", "Soporte Técnico"];

  const services = [
    { 
      title: "Desarrollo Móvil Multiplataforma", 
      desc: "Aplicaciones nativas e híbridas de alto rendimiento para Android e iOS creadas con Flutter." 
    },
    { 
      title: "Desarrollo Web & Frontend", 
      desc: "Sitios dinámicos e interactivos utilizando JavaScript puro, PHP, CSS avanzado y maquetación ágil con Bootstrap." 
    },
    { 
      title: "Backend & Automatización", 
      desc: "Lógica de servidor robusta, APIs eficientes y scripts inteligentes con Python para optimización de sistemas." 
    },
    { 
      title: "Telecomunicaciones y Redes", 
      desc: "Gestión, diseño y optimización de redes FTTH y operaciones técnicas de conectividad de datos." 
    }
  ];

  const experience = [
    {
      role: "Gerente del Departamento de Operaciones",
      company: "Fullfibra TIC, C.A.",
      period: "Junio 2024 - Diciembre 2024",
      desc: "Supervisión de operaciones técnicas y liderazgo de equipos de instalación para garantizar la ejecución exitosa de proyectos de telecomunicaciones y redes FTTH."
    },
    {
      role: "Coordinador de Sistemas",
      company: "Hospital Dr. Pedro del Corral",
      period: "Mayo 2026 - Presente",
      desc: "Liderazgo del departamento técnico, gestión de infraestructura informática, soporte de redes y optimización de sistemas críticos para garantizar la continuidad operativa del entorno hospitalario."
    },
    {
      role: "Colaborador Técnico",
      company: "AMAB",
      period: "Febrero 2021 - Marzo 2021",
      desc: "Desarrollo y mantenimiento de un sistema web local para mejorar la eficiencia operativa y el acceso de los usuarios dentro de la organización."
    }
  ];

  const projects = [
    { 
      title: "Sistema Web Local AMAB", 
      tech: "Desarrollo Web • Eficiencia Operativa", 
      desc: "Plataforma interna implementada para automatizar flujos de trabajo y facilitar el acceso a la información corporativa.",
      image: "https://unsplash.com" 
    },
    { 
      title: "Infraestructura & Gestión FTTH", 
      tech: "Telecomunicaciones • Redes de Fibra", 
      desc: "Diseño lógico y supervisión operativa para el despliegue óptimo de redes de fibra óptica de última milla.",
      image: "https://unsplash.com" 
    },
    { 
      title: "App de Control de Equipos", 
      tech: "Flutter • API Python • SQL", 
      desc: "Concepto de aplicación móvil multiplataforma para el seguimiento técnico de cuadrillas e instalaciones en tiempo real.",
      image: "https://unsplash.com" 
    }
  ];

  // LOGICA DEL CANVAS ANIMADO DE NODOS INTERCONECTADOS
  useEffect(() => {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let pts = [];
    const numPoints = window.innerWidth < 768 ? 40 : 100;
    const maxDist = 120;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < numPoints; i++) {
      pts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.5)';
        ctx.fill();
      });

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="portfolio-container">
      <canvas id="network-canvas" className="global-network-background" />
      
      <HeroSection technologies={technologies} fotoPerfil={fotoPerfil} />
      <ServicesSection services={services} />
      <ExperienceSection experience={experience} />
      <EducationSection />
      <PortfolioSection projects={projects} />
      <ContactSection />
      <FooterSection />
      <ChatbotAssistant />
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
          <p className="hero-subtitle">
            Especialista en desarrollo web, soporte técnico, gestión de redes de telecomunicaciones FTTH y desarrollo avanzado con soluciones de Inteligencia Artificial.
          </p>
          <div className="tech-tags">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-tag">{tech}</span>
            ))}
          </div>
          <div className="hero-buttons">
            <a href="#portfolio" className="btn-primary">Ver Portafolio</a>
            <a href="#contacto" className="btn-secondary">Contactar Ahora</a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-photo-wrapper">
            <img src={fotoPerfil} alt="Oswar Ojeda" className="hero-photo" />
          </div>
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
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
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
        {experience.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-meta">
              <span className="exp-period">{exp.period}</span>
              <h4 className="exp-company">{exp.company}</h4>
            </div>
            <div className="exp-info">
              <h3>{exp.role}</h3>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="education-section">
      <div className="section-header animated-header">
        <h2>Educación & Certificaciones</h2>
        <p>Formación académica continua y especializaciones técnicas.</p>
      </div>
      <div className="education-box">
        <div className="edu-card">
          <span className="edu-year">Graduado en 2019</span>
          <h3>Ingeniería en Sistemas</h3>
          <p>UNEFA - Universidad Nacional Experimental Politécnica de la Fuerza Armada</p>
        </div>
        <div className="edu-card">
          <span className="edu-year">Graduado en 2014</span>
          <h3>Bachiller en Ciencias</h3>
          <p>UEN "José Calixto Morín"</p>
        </div>
        <div className="edu-card certification-card">
          <span className="edu-year bg-badge-ia">Junio 2026</span>
          <h3>Certificado de Iniciación al Desarrollo con IA</h3>
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
      <div className="section-header animated-header">
        <h2>Proyectos & Despliegues</h2>
        <p>Desliza horizontalmente para explorar mis casos prácticos y soluciones.</p>
      </div>
      <div className="native-carousel">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrapper">
              <img src={proj.image} alt={proj.title} className="project-image" />
              <div className="project-gradient" />
            </div>
            <div className="project-info">
              <span className="project-tech">{proj.tech}</span>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
              <a href="#contacto" className="project-link">Consultar Solución</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="section-header animated-header">
        <h2>¿Iniciamos un Proyecto?</h2>
        <p>Ubicado en Tucupido, Guárico, Venezuela. Disponible para trabajo remoto y consultorías.</p>
      </div>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <div className="form-group"><label>Nombre</label><input type="text" required /></div>
          <div className="form-group"><label>Correo</label><input type="email" required /></div>
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea rows="4" placeholder="Describe brevemente tus requerimientos técnicos..." required></textarea>
        </div>
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
        <a href="mailto:Oswar2312@gmail.com" className="footer-link-text">Oswar2312@gmail.com</a>
        <span className="footer-link-text">0412-4938848</span>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link-text">@oswar_ojeda</a>
      </div>
    </footer>
  );
}
function ChatbotAssistant() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { text: "¡Hola! 👋 Soy el asistente virtual de Oswar. ¿En qué solución técnica te puedo ayudar hoy?", isBot: true }
  ]);

  const faq = [
    { q: "💼 ¿Qué servicios ofreces?", a: "Ofrezco Desarrollo Full Stack (React, PHP, Python), aplicaciones móviles nativas con Flutter, despliegue de redes de telecomunicación FTTH y consultoría en optimización de sistemas críticos." },
    { q: "🚀 ¿Tienes disponibilidad inmediata?", a: "¡Sí! Actualmente tengo disponibilidad para asumir proyectos freelance bajo modalidad remota o consultorías técnicas en la región." },
    { q: "📍 ¿Dónde estás ubicado?", a: "Estoy ubicado en Tucupido, Guárico, Venezuela. Trabajo con clientes de cualquier parte del mundo de forma remota." },
    { q: "📞 ¿Cómo te contacto directo?", a: "Puedes escribirme al correo Oswar2312@gmail.com, llamarme al 0412-4938848 o completar el formulario al final de la página." }
  ];

  const handleQuestion = (question, answer) => {
    setMessages(prev => [
      ...prev,
      { text: question, isBot: false },
      { text: answer, isBot: true }
    ]);
    
    setTimeout(() => {
      const box = document.getElementById('chat-body');
      if (box) box.scrollTop = box.scrollHeight;
    }, 50);
  };

  return (
    <div className="bot-wrapper">
      <button className="bot-trigger-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir asistente">
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="bot-window">
          <div className="bot-header">
            <div className="bot-avatar-status">
              <div className="status-indicator" />
              <h3>Sistemas Bot</h3>
            </div>
            <span>En línea</span>
          </div>
          
          <div id="chat-body" className="bot-body">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.isBot ? 'msg-bot' : 'msg-user'}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="bot-footer-faq">
            <p className="faq-hint">Haz clic en una pregunta frecuente:</p>
            <div className="faq-options-grid">
              {faq.map((item, i) => (
                <button key={i} className="faq-btn" onClick={() => handleQuestion(item.q, item.a)}>
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
