import React from 'react';
import InfoCard from '../components/InfoCard/InfoCard';
import cixImage from '../assets/img/cix.jpg'; // Tu imagen de Chiclayo

export default function Home({ darkMode, setDarkMode, lang, setLang, onEnter }) {
  const handleOpenMaps = () => {
    window.open('https://maps.app.goo.gl/n4uRQyB8eRWo31yV6', '_blank');
  };

  const handleOpenParkingMaps = () => {
    window.open('https://maps.app.goo.gl/tbo8J9Yd3NzyHaDf8', '_blank');
  };

  // Textos traducidos
  const t = {
    ES: {
      badgeHost: 'HOSPEDAJE CÁLIDO',
      welcome: 'Bienvenido a',
      welcomeBrand: 'Las Brisas de Cix',
      description: 'Disfrute su estadía; aquí encontrará toda la información que necesite para una excelente experiencia.',
      slogan: 'Su hogar lejos de casa',
      bannerTitle: 'Ciudad de la Amistad y del Papa León XIV',
      bannerSubtitle: '¡Tierra bendita de fe, calidez y sabor norteño!',
      addressTitle: 'Av. Prolongación Bolognesi Mz. B lote 10 - Las Brisas',
      mapsText: 'Toca aquí para abrir en ',
      parkingTitle: '¿Cochera?',
      parkingSubtitle: 'No disponemos de cochera propia. Pulse aquí para consultar la ubicación de la cochera.',
      enterBtn: 'Ingresar'
    },
    EN: {
      badgeHost: 'WARM STAY',
      welcome: 'Welcome to',
      welcomeBrand: 'Las Brisas de Cix',
      description: 'Enjoy your stay, here you will find all the information you need for a great experience.',
      slogan: 'Your home away from home',
      bannerTitle: 'City of Friendship & Pope Leo XIV',
      bannerSubtitle: 'Blessed land of faith, warmth and northern flavor!',
      addressTitle: 'Av. Prolongación Bolognesi Mz. B lote 10 - Las Brisas',
      mapsText: 'Tap here to open in ',
      parkingTitle: 'Parking?',
      parkingSubtitle: 'We do not have private parking. Tap here to view the garage location.',
      enterBtn: 'Enter'
    }
  };

  const currentText = t[lang];

  return (
    <div>
      {/* Filtros de Ubicación / Categoría */}
      <div className="d-flex gap-2 mb-3">
        <div className="badge-pill-custom rounded-pill px-3 py-2 d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
          <i className="bi bi-house text-gold"></i>
          <span className="fw-semibold">{currentText.badgeHost}</span>
        </div>
        <div className="badge-pill-custom rounded-pill px-3 py-2 d-flex align-items-center gap-2" style={{ fontSize: '12px' }}>
          <i className="bi bi-geo-alt-fill text-gold"></i>
          <span className="fw-semibold">Chiclayo, Perú</span>
        </div>
      </div>

      {/* Encabezado Principal */}
      <div className="mb-3">
        <h2 className="fw-bold display-6 mb-1">
          {currentText.welcome} <br />
          <span className="text-gold">{currentText.welcomeBrand}</span>
        </h2>
        <p className="text-muted mt-2 mb-2" style={{ fontSize: '14px', lineHeight: '1.5' }}>
          {currentText.description}
        </p>
        <h3 className="fst-italic text-gold fw-normal fs-5 mt-2">
          {currentText.slogan}
        </h3>
      </div>

      {/* BANNER VISUAL CON LA FOTO DE CIX */}
      <div className="position-relative rounded-4 overflow-hidden mb-3 shadow-sm" style={{ height: '160px' }}>
        <img 
          src={cixImage} 
          alt="Chiclayo" 
          className="w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 10%, rgba(0,0,0,0.1) 90%)' }}>
          <span className="text-white fw-bold fs-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
            {currentText.bannerTitle}
          </span>
          <span className="text-light opacity-90" style={{ fontSize: '12px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
            {currentText.bannerSubtitle}
          </span>
        </div>
      </div>

      {/* TARJETA DE DIRECCIÓN */}
      <div className="mb-3">
        <InfoCard 
          iconClass="bi-geo-alt-fill"
          iconBg="bg-gold"
          title={
            <span className="fw-bold" style={{ fontSize: '15px', lineHeight: '1.4', display: 'block' }}>
              {currentText.addressTitle}
            </span>
          }
          subtitle={
            <span style={{ fontSize: '13px' }}>
              {currentText.mapsText} <span className="text-decoration-underline">Google Maps</span> <i className="bi bi-box-arrow-up-right" style={{ fontSize: '10px' }}></i>
            </span>
          }
          onClick={handleOpenMaps}
        />
      </div>

      {/* TARJETA DE COCHERA */}
      <div className="mb-4">
        <InfoCard 
          iconClass="bi-p-square-fill"
          iconBg="bg-secondary"
          title={
            <span className="fw-bold" style={{ fontSize: '14.5px', lineHeight: '1.4', display: 'block' }}>
              {currentText.parkingTitle}
            </span>
          }
          subtitle={
            <span style={{ fontSize: '12.5px', lineHeight: '1.3', display: 'block', marginTop: '2px' }}>
              {currentText.parkingSubtitle} <i className="bi bi-box-arrow-up-right" style={{ fontSize: '10px' }}></i>
            </span>
          }
          onClick={handleOpenParkingMaps}
        />
      </div>

      {/* BOTÓN FINAL DE ACCIÓN */}
      <div className="pb-4 pt-1">
        <button 
          onClick={onEnter}
          className="btn btn-gold w-100 rounded-pill py-3 shadow d-flex align-items-center justify-content-center gap-2 fs-6"
        >
          <i className="bi bi-box-arrow-in-right"></i> {currentText.enterBtn}
        </button>
      </div>
    </div>
  );
}