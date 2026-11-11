import React from 'react';
import cixImage from '../assets/img/cix.jpg';

export default function TravelDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  const handleOpenWeb = () => {
    window.open('https://las-brisas-de-cix.vercel.app/', '_blank');
  };

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Conozca y Explore Chiclayo',
      headerSubtitle: 'La Capital de la Amistad le espera con toda su energía y sabor.',
      introTitle: '¡Llegó a la tierra del sol y buen ritmo!',
      introText: 'Chiclayo no se mira, se camina, se come y se vive. Desde el primer paso por sus calles le envuelve el calor de su gente, su historia milenaria y una gastronomía norteña que es pura exquisitez.',
      spotsTitle: 'Lo que tiene que recorrer sí o sí:',
      spots: [
        { name: 'Paseo Las Musas', desc: 'Ideal para una caminata relajada, estatuas de la mitología griega y una pileta clásica perfecta para sus fotografías.' },
        { name: 'El Mercado Modelo y el Mercado Central', desc: 'El corazón latiente de la ciudad. Especias, medicina tradicional, el famoso sector de hierbas y un movimiento único.' },
        { name: 'Catedral de Chiclayo y Parque Principal', desc: 'Arquitectura neoclásica impresionante en pleno centro para sentarse a percibir la vibra de la ciudad.' },
        { name: 'Ruta de los Sicán y Tumbas Reales', desc: 'A un paso de la ciudad, historia pura con oro y cultura moche que le sorprenderá por completo.' }
      ],
      foodNote: 'Y ni qué decir de la comida: un seco de cabrito con frijoles, un buen arroz con pato o un ceviche norteño le dejarán sin palabras.',
      webLinkText: 'Ver Guía Web de Chiclayo',
      webPrompt: '👇 Toca aquí para abrir la guía:',
      footer: '¡Disfrute cada rincón de Chiclayo al máximo!'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Explore Chiclayo',
      headerSubtitle: 'The Capital of Friendship welcomes you with all its energy and flavor.',
      introTitle: 'You made it to the land of sun and rhythm!',
      introText: 'Chiclayo isn’t just looked at; it’s walked, tasted, and lived. From your very first step, you will feel the warmth of its people, ancient history, and northern food that is out of this world.',
      spotsTitle: 'Places you must check out:',
      spots: [
        { name: 'Paseo Las Musas', desc: 'Great for a relaxed stroll, featuring Greek mythology statues and a classic fountain.' },
        { name: 'Modelo & Central Markets', desc: 'The beating heart of the city. Spices, traditional crafts, and vibrant local life.' },
        { name: 'Chiclayo Cathedral & Main Square', desc: 'Stunning neoclassical architecture right in the center to soak in the local vibe.' },
        { name: 'Sican & Royal Tombs Route', desc: 'Just a step outside the city, pure history with Moche gold culture.' }
      ],
      foodNote: 'And the food speaks for itself: cabrito, arroz con pato, or northern ceviche will blow your mind.',
      webLinkText: 'Open Chiclayo Web Guide',
      webPrompt: '👇 Tap here to open the guide:',
      footer: 'Enjoy every corner of Chiclayo to the fullest!'
    }
  };

  const currentText = t[lang];

  return (
    <div className="pb-4">
      {/* Botón de retorno */}
      <div className="mb-3">
        <button 
          onClick={onBack}
          className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
        >
          <i className="bi bi-arrow-left"></i> {currentText.backBtn}
        </button>
      </div>

      {/* Encabezado */}
      <div className="mb-4 px-1">
        <h2 className={`fw-bold fs-4 mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.headerTitle}
        </h2>
        <p className="text-muted" style={{ fontSize: '13px' }}>
          {currentText.headerSubtitle}
        </p>
      </div>

      {/* Tarjeta Principal con buen padding interno */}
      <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
        
        {/* Imagen representativa */}
        <div className="rounded-3 overflow-hidden mb-3 shadow-sm" style={{ height: '140px' }}>
          <img 
            src={cixImage} 
            alt="Explorar Chiclayo" 
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        <h4 className="fw-bold text-gold fs-6 mb-2">
          {currentText.introTitle}
        </h4>
        
        <p className={`mb-3 ${darkMode ? 'text-light' : 'text-dark'}`} style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
          {currentText.introText}
        </p>

        <hr className="my-3 opacity-25" />

        <h5 className={`fw-bold fs-6 mb-3 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.spotsTitle}
        </h5>

        {/* Lista de lugares con buen espaciado interno (p-3) para que no peguen al borde */}
        <div className="d-flex flex-column gap-3 mb-3">
          {currentText.spots.map((spot, index) => (
            <div 
              key={index} 
              className="p-3 rounded-3 border" 
              style={{ 
                backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : '#fcfcfc', 
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : '#eee' 
              }}
            >
              <span className="fw-bold text-gold d-block mb-1" style={{ fontSize: '13.5px' }}>
                <i className="bi bi-geo-alt-fill me-1"></i> {spot.name}
              </span>
              <span className={`d-block ${darkMode ? 'text-light' : 'text-muted'}`} style={{ fontSize: '13px', lineHeight: '1.4' }}>
                {spot.desc}
              </span>
            </div>
          ))}
        </div>

        <p className={`fst-italic mb-3 px-1 ${darkMode ? 'text-light opacity-80' : 'text-muted'}`} style={{ fontSize: '13px', lineHeight: '1.4' }}>
          {currentText.foodNote}
        </p>

        {/* Botón Sólido de Acción para la Web Oficial */}
        <div className="mt-4 pt-2">
          <p className="text-center text-muted mb-2 fw-semibold" style={{ fontSize: '12.5px' }}>
            {currentText.webPrompt}
          </p>
          <button 
            onClick={handleOpenWeb}
            className="btn btn-warning w-100 rounded-pill py-3 d-flex align-items-center justify-content-center gap-2 fw-bold shadow"
            style={{ fontSize: '14px', backgroundColor: '#ffc107', borderColor: '#ffc107', color: '#000' }}
          >
            <i className="bi bi-globe fs-5"></i> {currentText.webLinkText} 
            <i className="bi bi-box-arrow-up-right" style={{ fontSize: '12px' }}></i>
          </button>
        </div>

        <p className="text-center text-muted mb-0 mt-3 fst-italic" style={{ fontSize: '12px' }}>
          {currentText.footer}
        </p>
      </div>
    </div>
  );
}