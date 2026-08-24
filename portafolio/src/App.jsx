import React from 'react';
import './App.css';
import { 
  FaUser, 
  FaGraduationCap, 
  FaLaptopCode, 
  FaTools, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload 
} from 'react-icons/fa';

function App() {
  return (
    <div className="portfolio-container">
      {/* Barra de Navegación */}
      <nav className="navbar">
        <span className="logo">{'<Daniela Robert/>'}</span>
        <div className="nav-links">
          <a href="#about"><FaUser style={{marginRight: '6px'}}/>Sobre mí</a>
          <a href="#studies"><FaGraduationCap style={{marginRight: '6px'}}/>Estudios</a>
          <a href="#projects"><FaLaptopCode style={{marginRight: '6px'}}/>Proyectos</a>
          <a href="#skills"><FaTools style={{marginRight: '6px'}}/>Habilidades</a>
          <a href="#contact"><FaEnvelope style={{marginRight: '6px'}}/>Contacto</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hola, soy <span className="highlight">Daniela Robert</span></h1>
          <h2>Desarrolladora Frontend & Soluciones Digitales</h2>
          <p>
            Apasionada por la arquitectura web simple, limpia y alineada a problemas reales del mercado. 
            Me especializo en transformar procesos manuales en soluciones digitales robustas e intuitivas.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">Ver Proyectos</a>
            <a href="/cv.pdf" download="CV_Daniela_Robert.pdf" className="btn secondary"><FaFileDownload style={{marginRight: '6px'}}/>Ver CV</a>
          </div>
        </div>
      </header>

      {/* Sección Sobre Mí */}
      <section id="about" className="section bg-alt">
        <h2>Sobre mí</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Además de mi experiencia técnica en desarrollo independiente, cuento con una sólida trayectoria 
              coordinando equipos operativos y dictando formación técnica. Esto me ha permitido consolidar habilidades clave 
              en comunicación asertiva, resolución ágil de incidencias y un pensamiento estructurado y pedagógico.
            </p>
            <p>
              Disfruto diseñando experiencias limpias, controlando la consistencia de los datos en cada flujo de trabajo 
              y traduciendo requerimientos complejos en aplicaciones mantenibles y de alto impacto.
            </p>
          </div>
          <div className="about-image-container">
            <img src="/foto.webp.jpg" alt="Daniela Robert" className="about-photo" />
          </div>
        </div>
      </section>

      {/* Sección de Estudios y Formación */}
      <section id="studies" className="section">
        <h2>Estudios y Formación</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3><FaGraduationCap className="card-icon" /> Licenciatura en Tecnologías Digitales</h3>
            <p><strong>UNICABA</strong> — Actualmente cursando. Enfoque universitario avanzado en tecnologías modernas y transformación digital.</p>
            <div className="tech-tags">
              <span>UNICABA</span>
              <span>Tecnologías</span>
              <span>Universitario</span>
            </div>
          </div>

          <div className="project-card">
            <h3><FaGraduationCap className="card-icon" /> Técnico Superior en Análisis de Sistemas</h3>
            <p><strong>IFTS Nº12 (GCBA)</strong> — Formación integral en diseño, desarrollo y análisis de sistemas orientados a resolver necesidades tecnológicas.</p>
            <div className="tech-tags">
              <span>Sistemas</span>
              <span>Análisis</span>
              <span>Bases de Datos</span>
            </div>
          </div>

          <div className="project-card">
            <h3><FaGraduationCap className="card-icon" /> Técnico Superior en Administración de Empresas</h3>
            <p><strong>IFTS Nº9 (GCBA)</strong> (Título intermedio: Auxiliar Administrativo) — Enfoque analítico en la gestión operativa y de procesos comerciales.</p>
            <div className="tech-tags">
              <span>Gestión</span>
              <span>Procesos</span>
              <span>Administración</span>
            </div>
          </div>

          <div className="project-card" style={{ borderColor: 'var(--accent)' }}>
            <h3>⭐ Curso Destacado: Desarrollo Full Stack con React JS</h3>
            <p><strong>GCBA - Codo a Codo 4.0 / Talento Tech</strong> — Capacitación intensiva enfocada en la creación de aplicaciones web modernas, componentes interactivos, consumo de APIs y buenas prácticas de desarrollo Frontend.</p>
            <div className="tech-tags">
              <span>React JS</span>
              <span>JavaScript</span>
              <span>Frontend</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proyectos */}
      <section id="projects" className="section bg-alt">
        <h2>Proyectos Destacados</h2>
        <div className="projects-grid">
          
          {/* CampusControl */}
          <div className="project-card" style={{ borderColor: 'var(--accent)' }}>
            <h3><FaLaptopCode className="card-icon" /> CampusControl</h3>
            <p>Plataforma web interactiva para la gestión institucional y registro ágil de incidencias por aulas y sectores, optimizando los tiempos de respuesta operativa.</p>
            <div className="tech-tags">
              <span>React</span>
              <span>React Router</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Daniela8438" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            </div>
          </div>

          {/* PymeFlow */}
          <div className="project-card">
            <h3><FaLaptopCode className="card-icon" /> PymeFlow</h3>
            <p>Plataforma integral orientada a optimizar la gestión y automatizar los flujos operativos de pequeñas y medianas empresas, desarrollada con PHP y MySQL.</p>
            <div className="tech-tags">
              <span>PHP</span>
              <span>MySQL</span>
              <span>Gestión</span>
              <span>Backend</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/Daniela8438" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            </div>
          </div>

        </div>
      </section>

      {/* Sección de Habilidades */}
      <section id="skills" className="section">
        <h2>Habilidades Técnicas</h2>
        <div className="skills-grid">
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React.js & Vite</div>
          <div className="skill-item">HTML5 / CSS3</div>
          <div className="skill-item">MySQL</div>
          <div className="skill-item">PHP</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">Power BI & Looker Studio</div>
          <div className="skill-item">Git & GitHub</div>
          <div className="skill-item">REST APIs</div>
        </div>
      </section>

      {/* Sección de Contacto / Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <h2>¡Hablemos!</h2>
          <p>¿Tenés un proyecto en mente o querés sumar un dev a tu equipo? Escribime.</p>
          <div className="footer-contact-info">
            <p><FaPhone /> 11-5597-6175</p>
            <p><FaEnvelope /> robertdaniela39@gmail.com</p>
          </div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/daniela-beatriz-robert-21d-05m-1984a-" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            <a href="https://github.com/Daniela8438" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
            <a href="mailto:robertdaniela39@gmail.com"><FaEnvelope /> Email</a>
            <a href="/cv.pdf" download="CV_Daniela_Robert.pdf"><FaFileDownload /> Descargar CV</a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Daniela Robert. Desarrollado con foco en simplicidad y performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;