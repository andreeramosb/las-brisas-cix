import React, { useState } from 'react';

export default function WelcomeDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  // Guardamos solo el ID del tema en lugar de todo el objeto
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Bienvenido (a)',
      headerSubtitle: 'Información esencial para su estancia en Chiclayo',
      
      topics: [
        {
          id: 'checkin',
          title: 'Check-in',
          subtitle: 'Horarios, equipaje y limpieza',
          icon: 'bi-suitcase-lg-fill',
          content: {
            title: 'Información de Check-in',
            time: 'Check-in: Desde las 12:00 p.m.',
            qEarly: '¿Desea llegar antes de esa hora?',
            aEarly: 'Si el apartamento aún está ocupado a su llegada, puede dejar su equipaje encargado con nosotros y salir a recorrer con total tranquilidad. Podrá ingresar oficialmente a partir del mediodía (12:00 p.m.) o antes si ya está desocupado.',
            qWhy: '¿Por qué este horario?',
            aWhy: 'El intervalo entre las 10:00 a.m. y las 12:00 p.m. lo dedicamos exclusivamente a realizar una limpieza y desinfección total para garantizarle un espacio impecable.',
            noteLabel: '¿NECESITA ALGO MÁS?',
            noteText: 'Si requiere un ingreso anticipado consúltenos directamente; estaremos encantados de revisar las opciones disponibles para ayudarle.'
          }
        },
        {
          id: 'weather',
          title: 'Clima',
          subtitle: 'Temporadas y pronóstico en Cix',
          icon: 'bi-sun-fill',
          content: {
            title: 'Información sobre el clima',
            intro: 'Chiclayo tiene un clima agradable, ideal para disfrutar de sus atractivos. Un resumen general:',
            seasons: [
              { icon: 'bi-fire', title: 'Temporada de calor:', desc: 'De diciembre a marzo.' },
              { icon: 'bi-snow', title: 'Temporada fresca:', desc: 'De junio a octubre, con temperaturas más frescas.' },
              { icon: 'bi-cloud-sun', title: 'Temporada de transición:', desc: 'Abril, mayo y noviembre suelen ser meses de transición.' }
            ],
            linkText: 'Ver pronóstico del tiempo en Chiclayo',
            linkUrl: 'https://www.accuweather.com/es/pe/chiclayo/255239/weather-forecast/255239'
          }
        }
      ],
      detailBackBtn: 'Volver a la lista'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Welcome',
      headerSubtitle: 'Essential information for your stay in Chiclayo',
      
      topics: [
        {
          id: 'checkin',
          title: 'Check-in',
          subtitle: 'Schedules, luggage & cleaning',
          icon: 'bi-suitcase-lg-fill',
          content: {
            title: 'Check-in Information',
            time: 'Check-in: From 12:00 p.m.',
            qEarly: 'Want to arrive earlier?',
            aEarly: 'If the apartment is still occupied upon your arrival, you can leave your luggage with us and head out to explore with total peace of mind. You can officially check in from 12:00 p.m. onwards or earlier if it is ready.',
            qWhy: 'Why this schedule?',
            aWhy: 'We dedicate the window between 10:00 a.m. and 12:00 p.m. exclusively to cleaning and full disinfection to ensure a spotless space for you.',
            noteLabel: 'NEED ANYTHING ELSE?',
            noteText: 'If you require early check-in, please contact us directly; we will gladly review the available options to assist you.'
          }
        },
        {
          id: 'weather',
          title: 'Weather',
          subtitle: 'Seasons and forecast in Cix',
          icon: 'bi-sun-fill',
          content: {
            title: 'Weather Information',
            intro: 'Chiclayo enjoys a pleasant climate, perfect for exploring. General breakdown:',
            seasons: [
              { icon: 'bi-fire', title: 'Warm season:', desc: 'From December to March.' },
              { icon: 'bi-snow', title: 'Cool season:', desc: 'From June to October, with cooler temperatures.' },
              { icon: 'bi-cloud-sun', title: 'Transition season:', desc: 'April, May, and November are typical transition months.' }
            ],
            linkText: 'Check forecast in Weather in Chiclayo',
            linkUrl: 'https://www.accuweather.com/es/pe/chiclayo/255239/weather-forecast/255239'
          }
        }
      ],
      detailBackBtn: 'Back to list'
    }
  };

  const currentText = t[lang];

  // Buscamos dinámicamente el tema activo basándonos en el ID y el idioma actual
  const selectedTopic = currentText.topics.find(topic => topic.id === selectedTopicId);

  return (
    <div>
      {/* VISTA 1: LISTA VERTICAL DE TEMAS */}
      {!selectedTopicId ? (
        <>
          {/* Botón de Regreso al Menú Principal */}
          <div className="mb-3">
            <button 
              onClick={onBack}
              className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <i className="bi bi-arrow-left"></i> {currentText.backBtn}
            </button>
          </div>

          {/* Encabezado */}
          <div className="mb-4">
            <h2 className="fw-bold fs-4 mb-1">
              {currentText.headerTitle}
            </h2>
            <p className="text-muted" style={{ fontSize: '13px' }}>
              {currentText.headerSubtitle}
            </p>
          </div>

          {/* LISTA DE TARJETAS VERTICALES */}
          <div className="d-flex flex-column gap-3 mb-4">
            {currentText.topics.map((topic) => (
              <div 
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className="custom-card rounded-4 p-3 shadow-sm d-flex align-items-center justify-content-between transition cursor-pointer"
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
                    <i className={`bi ${topic.icon} fs-5`}></i>
                  </div>
                  <div>
                    <span className="fw-bold d-block text-truncate" style={{ fontSize: '14.5px', lineHeight: '1.2' }}>
                      {topic.title}
                    </span>
                    <span className="text-muted d-block mt-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                      {topic.subtitle}
                    </span>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-muted opacity-75"></i>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* VISTA 2: DETALLE DEL TEMA SELECCIONADO */
        <>
          {/* Botón para regresar a la lista */}
          <div className="mb-3">
            <button 
              onClick={() => setSelectedTopicId(null)}
              className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <i className="bi bi-arrow-left"></i> {currentText.detailBackBtn}
            </button>
          </div>

          {/* Tarjeta de Contenido Detallado */}
          <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
            
            {selectedTopicId === 'checkin' && selectedTopic && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-suitcase-lg-fill text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <div className="badge bg-gold text-dark mb-3 px-3 py-2 rounded-4 fw-semibold w-100 text-center text-wrap" style={{ fontSize: '12px', lineHeight: '1.4' }}>
                  <i className="bi bi-clock me-1"></i> {selectedTopic.content.time}
                </div>

                <div className="mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  <p className="fw-bold text-gold mb-1" style={{ fontSize: '13px' }}>
                    {selectedTopic.content.qEarly}
                  </p>
                  <p className="text-muted mb-0">
                    {selectedTopic.content.aEarly}
                  </p>
                </div>

                <div className="mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  <p className="fw-bold text-gold mb-1" style={{ fontSize: '13px' }}>
                    {selectedTopic.content.qWhy}
                  </p>
                  <p className="text-muted mb-0">
                    {selectedTopic.content.aWhy}
                  </p>
                </div>

                {/* CAJA DE NOTA */}
                <div 
                  className="p-3 rounded-3 border"
                  style={{ 
                    fontSize: '12.5px', 
                    lineHeight: '1.4',
                    backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                    borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                    color: darkMode ? '#e0e0e0' : '#495057'
                  }}
                >
                  <span className="fw-bold text-gold">{selectedTopic.content.noteLabel} </span>
                  <span>{selectedTopic.content.noteText}</span>
                </div>
              </div>
            )}

            {selectedTopicId === 'weather' && selectedTopic && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-sun-fill text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  {selectedTopic.content.intro}
                </p>

                <ul className="list-unstyled d-flex flex-column gap-2.5 mb-4" style={{ fontSize: '13.5px' }}>
                  {selectedTopic.content.seasons.map((season, idx) => (
                    <li key={idx} className="d-flex align-items-start gap-2">
                      <i className={`bi ${season.icon} text-gold mt-0.5`}></i>
                      <div>
                        <span className="fw-bold">{season.title}</span> <span className="text-muted">{season.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <a 
                    href={selectedTopic.content.linkUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn btn-sm rounded-pill px-4 py-2 w-100 fw-semibold transition ${
                      darkMode 
                        ? 'bg-gold text-dark border-0 shadow-sm' 
                        : 'btn-outline-gold'
                    }`}
                    style={{ fontSize: '13px' }}
                  >
                    <i className="bi bi-box-arrow-up-right me-1"></i> {selectedTopic.content.linkText}
                  </a>
                </div>
              </div>
            )}

          </div>
        </>
      )}

    </div>
  );
}