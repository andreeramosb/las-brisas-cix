import React from 'react';

export default function Navbar({ darkMode, setDarkMode, lang, setLang }) {
  // Función para alternar el idioma entre ES y EN
  const handleLangToggle = () => {
    setLang((prev) => (prev === 'ES' ? 'EN' : 'ES'));
  };

  return (
    <nav className="d-flex justify-content-between align-items-center mb-3">
      {/* Título o Logo de la Guía */}
      <div className="d-flex align-items-center gap-2">
        <div className="rounded-circle bg-gold d-flex align-items-center justify-content-center text-dark fw-bold" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
          <i className="bi bi-house-door-fill"></i>
        </div>
        <div>
          <h1 className="fw-bold fs-6 mb-0 text-truncate" style={{ maxWidth: '200px' }}>
            Las Brisas de Cix
          </h1>
          <span className="text-muted d-block" style={{ fontSize: '10.5px', letterSpacing: '0.5px' }}>
            {lang === 'ES' ? 'TU GUÍA DE HOSPEDAJE' : 'GUEST GUIDEBOOK'}
          </span>
        </div>
      </div>

      {/* Controles de Modo Oscuro e Idioma */}
      <div className="d-flex align-items-center gap-2">
        {/* Botón de Modo Oscuro */}
        <button 
          onClick={() => setDarkMode(!darkMode)} 
          className="btn btn-sm badge-pill-custom rounded-circle d-flex align-items-center justify-content-center shadow-sm"
          style={{ width: '36px', height: '36px', minWidth: '36px' }}
          title="Cambiar modo"
        >
          <i className={`bi ${darkMode ? 'bi-sun-fill text-gold' : 'bi-moon-fill'}`}></i>
        </button>

        {/* Botón de Idioma (Muestra EN si estás en ES, o ES si estás en EN) */}
        <button 
          onClick={handleLangToggle}
          className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 fw-semibold d-flex align-items-center gap-1 shadow-sm"
          style={{ fontSize: '12px' }}
        >
          <i className="bi bi-globe"></i> {lang === 'ES' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  );
}