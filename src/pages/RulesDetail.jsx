import React from 'react';

export default function RulesDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Reglas del Alojamiento',
      headerSubtitle: 'Para una convivencia armoniosa y agradable',
      cardTitle: 'Reglas del Alojamiento',
      introText: 'Para su comodidad y tranquilidad, por favor tenga en cuenta estas reglas durante su estancia:',
      rules: [
        'Para mantener un ambiente sereno y relajante, le agradecemos que evite realizar fiestas o reuniones ruidosas en el departamento.',
        'Le pedimos que evite fumar dentro del departamento.',
        'Amamos a las mascotas tanto como usted, pero lamentablemente nuestro espacio no está preparado para recibirlas adecuadamente. Agradecemos su comprensión.',
        'No se permiten tomar bebidas alcohólicas.',
        'El número máximo de personas que pueden ingresar al apartamento es el indicado en la reserva en la web de Airbnb. Si desea permitir la entrada a más personas, deberá coordinarlo previamente con el anfitrión y/o la co-anfitriona.'
      ],
      footerText: 'Gracias por su comprensión y cooperación. Si tiene alguna duda o necesita asistencia, no dude en contactarnos.'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'House Rules',
      headerSubtitle: 'For a harmonious and pleasant stay',
      cardTitle: 'House Rules',
      introText: 'For your comfort and peace of mind, please keep these rules in mind during your stay:',
      rules: [
        'To maintain a serene and relaxing environment, please avoid hosting parties or loud gatherings in the apartment.',
        'We ask that you refrain from smoking inside the apartment.',
        'We love pets as much as you do, but unfortunately our space is not properly equipped to receive them. We appreciate your understanding.',
        'Alcoholic beverages are not permitted.',
        'The maximum number of guests allowed in the apartment is the one indicated in your Airbnb reservation. If you wish to allow additional guests, you must coordinate it in advance with the host and/or co-host.'
      ],
      footerText: 'Thank you for your understanding and cooperation. If you have any questions or need assistance, please feel free to contact us.'
    }
  };

  const currentText = t[lang];

  return (
    <div>
      {/* Botón para regresar al menú */}
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

      {/* Tarjeta de Contenido */}
      <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
        
        {/* Icono y Título */}
        <div className="text-center mb-4">
          <div className="rounded-circle bg-gold text-dark d-inline-flex align-items-center justify-content-center shadow-sm mb-2" style={{ width: '60px', height: '60px' }}>
            <i className="bi bi-shield-check fs-3"></i>
          </div>
          <h5 className="fw-bold fs-6 mb-0">{currentText.cardTitle}</h5>
        </div>

        <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
          {currentText.introText}
        </p>

        {/* Lista de reglas con viñetas */}
        <ul className="d-flex flex-column gap-2.5 mb-4 ps-3 text-muted" style={{ fontSize: '13px', lineHeight: '1.5' }}>
          {currentText.rules.map((rule, idx) => (
            <li key={idx}>
              {rule}
            </li>
          ))}
        </ul>

        {/* Nota de pie */}
        <div 
          className="p-3 rounded-3 border text-center fst-italic"
          style={{ 
            fontSize: '12.5px', 
            lineHeight: '1.4',
            backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
            borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
            color: darkMode ? '#e0e0e0' : '#495057'
          }}
        >
          {currentText.footerText}
        </div>

      </div>
    </div>
  );
}