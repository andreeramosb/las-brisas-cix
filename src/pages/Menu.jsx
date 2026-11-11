import React from 'react';

export default function Menu({ darkMode, setDarkMode, lang, setLang, onBack, onSelectCard }) {
  const t = {
    ES: {
      backBtn: 'Volver al inicio',
      title: 'Guía de Huéspedes',
      subtitle: 'Seleccione una opción para ver la información detallada',
      cards: [
        {
          id: 'welcome',
          title: 'Bienvenida e Información',
          subtitle: 'Detalles generales y primera orientación',
          icon: 'bi-emoji-smile-fill'
        },
        {
          id: 'apartment',
          title: 'El Apartamento',
          subtitle: 'Guía del apartamento y uso del televisor',
          icon: 'bi-house-heart-fill'
        },
        {
          id: 'access',
          title: 'Ingreso al Apartamento',
          subtitle: 'Cómo abrir la reja y llegar al tercer piso',
          icon: 'bi-key-fill'
        },
        {
          id: 'wifi',
          title: 'Red Wi-Fi y Conexión',
          subtitle: 'Nombre de red y contraseña de acceso',
          icon: 'bi-wifi'
        },
        {
          id: 'places',
          title: 'Para Conocer',
          subtitle: 'Comercios, restaurantes y sitios para visitar',
          icon: 'bi-geo-alt-fill'
        },
        {
          id: 'rules',
          title: 'Normas de la Casa',
          subtitle: 'Reglas y convivencias básicas',
          icon: 'bi-shield-check'
        },
        {
          id: 'contact',
          title: 'Contactos y Emergencias',
          subtitle: 'Anfitrión y números de emergencia locales',
          icon: 'bi-telephone-fill'
        },
        {
          id: 'goodbye',
          title: 'Instrucciones para la Salida',
          subtitle: 'Detalles finales al dejar el apartamento',
          icon: 'bi-box-arrow-right'
        }
      ]
    },
    EN: {
      backBtn: 'Back to home',
      title: 'Guest Guide',
      subtitle: 'Select an option to view detailed information',
      cards: [
        {
          id: 'welcome',
          title: 'Welcome & Information',
          subtitle: 'General details and initial orientation',
          icon: 'bi-emoji-smile-fill'
        },
        {
          id: 'apartment',
          title: 'The Apartment',
          subtitle: 'Apartment guide and TV usage',
          icon: 'bi-house-heart-fill'
        },
        {
          id: 'access',
          title: 'Apartment Access',
          subtitle: 'How to open the gate and reach the 3rd floor',
          icon: 'bi-key-fill'
        },
        {
          id: 'wifi',
          title: 'Wi-Fi & Connection',
          subtitle: 'Network name and access password',
          icon: 'bi-wifi'
        },
        {
          id: 'places',
          title: 'Explore & Discover',
          subtitle: 'Shops, restaurants and places to visit',
          icon: 'bi-geo-alt-fill'
        },
        {
          id: 'rules',
          title: 'House Rules',
          subtitle: 'Basic guidelines and coexistence',
          icon: 'bi-shield-check'
        },
        {
          id: 'contact',
          title: 'Contacts & Emergencies',
          subtitle: 'Host contact & local emergency numbers',
          icon: 'bi-telephone-fill'
        },
        {
          id: 'goodbye',
          title: 'Departure Instructions',
          subtitle: 'Final details when leaving the apartment',
          icon: 'bi-box-arrow-right'
        }
      ]
    }
  };

  const currentText = t[lang];

  return (
    <div>
      <div className="mb-3">
        <button 
          onClick={onBack}
          className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
        >
          <i className="bi bi-arrow-left"></i> {currentText.backBtn}
        </button>
      </div>

      <div className="mb-4">
        <h2 className={`fw-bold fs-4 mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.title}
        </h2>
        <p className="text-muted" style={{ fontSize: '13px' }}>
          {currentText.subtitle}
        </p>
      </div>

      <div className="d-flex flex-column gap-3 mb-4">
        {currentText.cards.map((card) => (
          <div 
            key={card.id}
            onClick={() => onSelectCard(card.id)}
            className="custom-card rounded-4 p-3 shadow-sm d-flex align-items-center justify-content-between transition cursor-pointer"
            style={{ cursor: 'pointer' }}
          >
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
                <i className={`bi ${card.icon} fs-5`}></i>
              </div>
              <div>
                <span className={`fw-bold d-block text-truncate ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14.5px', lineHeight: '1.2' }}>
                  {card.title}
                </span>
                <span className="text-muted d-block mt-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                  {card.subtitle}
                </span>
              </div>
            </div>
            <i className="bi bi-chevron-right text-muted opacity-75"></i>
          </div>
        ))}
      </div>
    </div>
  );
}