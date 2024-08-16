import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1 className="company-name">Constructora Sabado</h1>
        <nav className="nav">
          <a href="#about">Sobre Nosotros</a>
          <a href="#projects">Proyectos</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Construimos el Futuro</h2>
        <p>Calidad, compromiso y confianza en cada proyecto que realizamos.</p>
        <button className="cta-button">Contáctanos</button>
      </section>

      <section id="about" className="about">
        <h3>Sobre Nosotros</h3>
        <p>
          Somos una constructora con más de 20 años de experiencia, dedicados a
          entregar soluciones innovadoras y de alta calidad en el sector de la
          construcción.
        </p>
      </section>

      <section id="projects" className="projects">
        <h3>Nuestros Proyectos</h3>
        <div className="project-gallery">
          <div className="project-card">Proyectito 1</div>
          <div className="project-card">Proyectito 2</div>
          <div className="project-card">Proyectito 3</div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h3>Testimonios</h3>
        <p>“Excelente servicio, entregaron a tiempo y con gran calidad.” - Cliente A</p>
        <p>“Superaron nuestras expectativas en cada detalle.” - Cliente B</p>
      </section>

      <section id="contact" className="contact">
        <h3>Contacto</h3>
        <p>Teléfono: +123 456 789</p>
        <p>Email: info@constructorasabado.com</p>
        <button className="cta-button">Enviar Mensaje</button>
      </section>

      <footer className="footer">
        <p>© 2024 Constructora Sabado. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
