import React, { useState } from 'react';

// Importamos la imagen del horno desde tu carpeta de assets
import hornoCableImg from '../assets/img/horno.png'; // Ajusta la ruta según tu estructura de carpetas

export default function KitchenDetail({ darkMode, lang, onBack }) {
  // Estado para controlar el sub-acordeón del horno dentro de cocina
  const [openOven, setOpenOven] = useState(false);

  const t = {
    ES: {
      backMenu: 'Volver al menú',
      headerTitle: 'Cocina Equipada',
      headerSubtitle: 'Electrodomésticos, menaje y utensilios a su disposición',
      introText: 'La cocina está totalmente equipada para su comodidad y la de su familia durante su estancia:',
      
      items: [
        'Una refrigeradora para mantener los alimentos frescos.',
        'Olla arrocera para preparar arroz de manera fácil.',
        'Licuadora para jugos y batidos.',
        'Hervidor de agua eléctrico.',
        'Horno microondas.',
        'Utensilios de cocina (ollas, sartén, platos, cubiertos, etc.).',
        'Utensilios pequeños para niños (platos, cucharas, etc.).',
        'Implementos básicos de cocina (sal, aceite, etc.).'
      ],

      ovenAccordion: {
        title: 'Cocina con Horno Eléctrico (Guía de uso)',
        subtitle: 'Instrucciones para conectar y encender el horno',
        badgeOpen: 'Ocultar guía del horno',
        badgeClose: 'Ver cómo usar el horno',
        step1: 'Ubique el cable del horno en el compartimento del gabinete, situado en el lado izquierdo e inferior de la cocina.',
        step2: 'Conecte el cable al enchufe correspondiente para encender el horno.',
        imageCaption: 'Ubicación del enchufe y cable del horno en el gabinete inferior izquierdo',
        videoTitle: 'Video tutorial de uso:',
        videoUrl: 'https://youtu.be/zanPeHvgkz0',
        footer: 'Para una correcta utilización, asegúrese de desconectar el horno al terminar de usarlo.'
      }
    },
    EN: {
      backMenu: 'Back to menu',
      headerTitle: 'Equipped Kitchen',
      headerSubtitle: 'Appliances, cookware and utensils at your disposal',
      introText: 'The kitchen is fully equipped for your comfort during your stay:',
      
      items: [
        'Refrigerator to keep food fresh.',
        'Rice cooker for easy meal preparation.',
        'Blender for smoothies and juices.',
        'Electric water kettle.',
        'Microwave oven.',
        'Kitchen utensils (pots, pan, plates, cutlery, etc.).',
        'Small utensils for kids (plates, spoons, etc.).',
        'Basic kitchen essentials (salt, oil, etc.).'
      ],

      ovenAccordion: {
        title: 'Electric Oven (Usage Guide)',
        subtitle: 'Instructions to plug in and turn on the oven',
        badgeOpen: 'Hide oven guide',
        badgeClose: 'View oven guide',
        step1: 'Locate the oven cable in the cabinet compartment, located on the lower left side of the kitchen.',
        step2: 'Plug the cable into the corresponding outlet to power on the oven.',
        imageCaption: 'Location of the oven plug and cable in the lower left cabinet',
        videoTitle: 'Video tutorial:',
        videoUrl: 'https://youtu.be/zanPeHvgkz0',
        footer: 'For proper use, make sure to unplug the oven after you finish cooking.'
      }
    }
  };

  const currentText = t[lang];

  return (
    <div>
      {/* Botón de retroceso */}
      <div className="mb-3">
        <button 
          onClick={onBack}
          className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
        >
          <i className="bi bi-arrow-left"></i> {currentText.backMenu}
        </button>
      </div>

      {/* Cabecera */}
      <div className="mb-4">
        <h2 className={`fw-bold fs-4 mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.headerTitle}
        </h2>
        <p className="text-muted" style={{ fontSize: '13px' }}>
          {currentText.headerSubtitle}
        </p>
      </div>

      {/* Tarjeta Principal de Cocina */}
      <div className="custom-card rounded-4 shadow-sm mb-4 border-0" style={{ padding: '16px' }}>
        
        {/* Banner de introducción */}
        <div className="badge bg-gold text-dark mb-3 px-3 py-1.5 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
          <i className="bi bi-cup-hot-fill me-1"></i> ¡Todo lo necesario para preparar sus platos favoritos!
        </div>

        <p className="text-muted mb-3" style={{ fontSize: '13px', lineHeight: '1.4' }}>
          {currentText.introText}
        </p>

        {/* ======================================================== */}
        {/* SUB-ACORDEÓN DEL HORNO ELÉCTRICO (Oculto por defecto)     */}
        {/* ======================================================== */}
        <div className="custom-card rounded-4 shadow-sm border mb-4 overflow-hidden" style={{ borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#e9ecef' }}>
          
          {/* Cabecera del acordeón del horno */}
          <div 
            onClick={() => setOpenOven(!openOven)}
            className="d-flex flex-column transition cursor-pointer"
            style={{ 
              cursor: 'pointer', 
              padding: '14px 16px',
              backgroundColor: openOven 
                ? (darkMode ? 'rgba(212, 160, 23, 0.12)' : 'rgba(212, 160, 23, 0.08)') 
                : 'transparent' 
            }}
          >
            <div className="d-flex align-items-start gap-3">
              <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark mt-0.5" style={{ width: '36px', height: '36px', minWidth: '36px' }}>
                <i className="bi bi-fire fs-5"></i>
              </div>
              <div className="flex-grow-1">
                <span className={`fw-bold d-block ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '13.5px', lineHeight: '1.3' }}>
                  {currentText.ovenAccordion.title}
                </span>
                {!openOven && (
                  <span className="text-muted d-block mt-1" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>
                    {currentText.ovenAccordion.subtitle}
                  </span>
                )}
              </div>
            </div>

            {/* Botón desplegar/ocultar interno */}
            <div className="d-flex justify-content-end mt-2">
              <span className="badge bg-gold text-dark px-2.5 py-1 rounded-pill fw-semibold d-inline-flex align-items-center gap-1 shadow-sm" style={{ fontSize: '11px' }}>
                {openOven ? (
                  <><span>{currentText.ovenAccordion.badgeOpen}</span> <i className="bi bi-chevron-up"></i></>
                ) : (
                  <><span>{currentText.ovenAccordion.badgeClose}</span> <i className="bi bi-chevron-down"></i></>
                )}
              </span>
            </div>
          </div>

          {/* Contenido desplegable del Horno */}
          {openOven && (
            <div style={{ padding: '0 16px 16px 16px', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(248, 249, 250, 0.6)' }}>
              
              <ol className="text-muted mb-3 pt-2 ps-3" style={{ fontSize: '12.5px', lineHeight: '1.5' }}>
                <li className="mb-2">{currentText.ovenAccordion.step1}</li>
                <li>{currentText.ovenAccordion.step2}</li>
              </ol>

              {/* Imagen del Horno / Conexión */}
              <div className="mb-3 text-center">
                <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                  <img src={hornoCableImg} alt="Conexión de horno eléctrico" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                </div>
                <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.ovenAccordion.imageCaption}</span>
              </div>

              {/* Video de YouTube integrado */}
              <p className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>
                <i className="bi bi-play-circle-fill text-gold me-1"></i> {currentText.ovenAccordion.videoTitle}
              </p>
              
              <div className="rounded-3 overflow-hidden shadow-sm border mb-3 ratio ratio-16x9 bg-dark">
                <iframe 
                  src="https://www.youtube.com/embed/zanPeHvgkz0" 
                  title="Tutorial Horno" 
                  allowfullscreen
                  style={{ border: 0 }}
                ></iframe>
              </div>

              {/* Nota final del horno */}
              <div 
                className="rounded-3 border text-center fst-italic"
                style={{ 
                  padding: '10px 14px',
                  fontSize: '11.5px', 
                  backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                  borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                  color: darkMode ? '#e0e0e0' : '#495057'
                }}
              >
                {currentText.ovenAccordion.footer}
              </div>

            </div>
          )}
        </div>

        {/* Lista general limpia del resto de elementos de la cocina */}
        <div className="d-flex flex-column gap-2">
          {currentText.items.map((item, idx) => (
            <div key={idx} className="d-flex align-items-start gap-2 text-muted" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              <i className="bi bi-check2-circle text-gold fs-6 mt-0.5 flex-shrink-0"></i>
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}