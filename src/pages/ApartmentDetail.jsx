import React, { useState } from 'react';

// Importamos las imágenes desde tu carpeta de assets
import controlTvImg from '../assets/img/control_tv.jpg';
import controlAndroidImg from '../assets/img/control_android.jpg';
import tvAppsImg from '../assets/img/tv_apps.jpeg';
import androidInterfazImg from '../assets/img/android_interfaz.jpeg';
import hornoCableImg from '../assets/img/horno.jpeg';

export default function ApartmentDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  const [selectedSection, setSelectedSection] = useState(null);
  
  // Acordeones de Entretenimiento (comienzan cerrados por defecto)
  const [openAccordion, setOpenAccordion] = useState(null);
  
  // Sub-acordeón del horno dentro de Cocina (comienza cerrado por defecto)
  const [openOven, setOpenOven] = useState(false);

  // Sub-acordeón de la lavadora dentro de Lavandería (comienza cerrado por defecto)
  const [openWasher, setOpenWasher] = useState(false);

  const t = {
    ES: {
      backMenu: 'Volver al menú',
      headerTitle: 'El Departamento',
      headerSubtitle: 'Conozca las instalaciones y comodidades de nuestro espacio',
      readMore: 'Ver guía completa',
      readLess: 'Ocultar guía',
      
      sections: [
        {
          id: 'entertainment',
          title: 'Sala de Entretenimiento',
          subtitle: 'Televisor, sistema Android y guías de uso',
          icon: 'bi-tv-fill'
        },
        {
          id: 'kitchen',
          title: 'Cocina',
          subtitle: 'Electrodomésticos, menaje y uso general',
          icon: 'bi-cup-hot-fill'
        },
        {
          id: 'laundry',
          title: 'Lavandería',
          subtitle: 'Uso de lavadora y área de tendido',
          icon: 'bi-water'
        },
        {
          id: 'bedrooms',
          title: 'Dormitorios',
          subtitle: 'Distribución de camas y descanso',
          icon: 'bi-door-open-fill'
        }
      ],

      // Contenido de Entretenimiento
      entertainmentContent: {
        introHighlight: '¡Relájate, disfruta de tus películas y conéctate!',
        introText: 'Diseñada especialmente para su descanso, nuestra sala de entretenimiento cuenta con todo lo necesario para que disfrute al máximo su estancia.',
        
        tv: {
          title: 'Televisor, Apps y Canales en Vivo',
          subtitle: 'Netflix, YouTube, Spotify y TV en vivo (con el control grande).',
          icon: 'bi-tv-fill',
          desc: 'Para encender o apagar el televisor, utilice el botón superior del control remoto grande.',
          homeButtonText: 'Para abrir el menú principal de aplicaciones, presione el botón con el ícono de la casita 🏠 en el control grande.',
          appsDetail: 'En el menú desplegado encontrará diversas opciones: aplicaciones como Netflix, Prime Video y Disney+ (donde puede ingresar con su propia cuenta personal de pago), y Spotify (que puede usar con su cuenta o en versión gratuita). Asimismo, cuenta con YouTube (puede entrar con su cuenta Gmail o como invitado), además de "Mi Fibra" y "TV 360", las cuales sobresaltan principalmente por sus canales de televisión nacionales e internacionales en vivo, siendo más limitadas en cuanto a películas y series.',
          image: controlTvImg,
          imageCaption: 'Control remoto grande de la televisión',
          secondImage: tvAppsImg,
          secondImageCaption: 'Menú principal al presionar el botón de la casita (aquí también elegirá HDMI 3 con este mismo control)',
          footer: 'Recuerde que para explorar una variedad mayor de películas y series, desde este mismo menú puede seleccionar HDMI 3 para entrar al sistema Android.'
        },

        android: {
          title: 'Películas y Series',
          subtitle: 'Entra a HDMI 3 para ver contenido variado en Xuper TV (con el control pequeño).',
          icon: 'bi-film',
          desc: 'Primero, usando el control grande de la TV, seleccione la opción HDMI 3 en el menú principal para ingresar al sistema Android.',
          menuCaption: 'Seleccione la opción HDMI 3 en el menú de la TV usando el control grande',
          menuImage: tvAppsImg,
          detail: 'Once inside HDMI 3, use the small remote control to browse the Android interface and open the "Xuper TV" app, where you will find a huge variety of movies and series across all genres, plus live channels.',
          controlImage: controlAndroidImg,
          controlCaption: 'Control remoto pequeño (Solo para navegar dentro de Android)',
          interfazImage: androidInterfazImg,
          interfazCaption: 'Interfaz del sistema Android y Xuper TV',
          footer: 'Puede alternar entre ambas opciones de manera sencilla para encontrar el contenido que más le guste durante su estancia.'
        }
      },

      // Contenido de Cocina
      kitchenContent: {
        introHighlight: '¡Todo lo necesario para preparar sus platos favoritos!',
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
          title: 'Cocina con Horno Eléctrico',
          subtitle: 'Instrucciones para conectar y encender el horno',
          badgeOpen: 'Ocultar guía del horno',
          badgeClose: 'Ver cómo usar el horno',
          step1: 'Ubique el cable del horno en el compartimento del gabinete, situado en el lado izquierdo e inferior de la cocina.',
          step2: 'Conecte el cable al enchufe correspondiente para encender el horno.',
          imageCaption: 'Ubicación del enchufe y cable del horno en el gabinete inferior izquierdo',
          videoTitle: 'Video tutorial de uso:',
          footer: 'Para una correcta utilización, asegúrese de desconectar el horno al terminar de usarlo.'
        }
      },

      // Contenido de Lavandería
      laundryContent: {
        introHighlight: 'Área de lavado, planchado y tendido',
        introText: 'En la lavandería encontrará todo lo necesario para el cuidado de sus prendas:',
        
        items: [
          'Tendedero para secar la ropa.',
          'Escoba y recogedor.',
          'Planchador y plancha de ropa.'
        ],

        washerAccordion: {
          title: 'Lavadora Automática',
          subtitle: 'Información importante sobre el inicio del ciclo',
          badgeOpen: 'Ocultar guía de la lavadora',
          badgeClose: 'Ver guía de la lavadora',
          detail: 'Después de programar la lavadora y presionar el botón de inicio, ésta comenzará su ciclo inicial sin llenar agua de inmediato. Esto es normal, ya que realiza ajustes y comprobaciones previas antes de añadir agua.'
        }
      },

      // Contenido de Dormitorios
      bedroomsContent: {
        introHighlight: 'Espacios diseñados para su descanso',
        introText: 'Para asegurar un descanso cómodo, se dispone de los siguientes dormitorios:',
        
        items: [
          'Una habitación con cama de plaza y media, ropero y mesa de estudio.',
          'Una habitación con cama de dos plazas y ropero.'
        ]
      },

      // Texto general de desenlace abajo en el menú principal
      generalFooterText: 'Además, se cuenta con un ventilador portátil para su comodidad. En la cocina, encontrará botellas de agua como cortesía.\n\nEsperamos que disfrute de su estancia y se sienta como en casa.'
    },
    EN: {
      backMenu: 'Back to menu',
      headerTitle: 'The Apartment',
      headerSubtitle: 'Discover the facilities and amenities of our space',
      readMore: 'View full guide',
      readLess: 'Hide guide',
      
      sections: [
        {
          id: 'entertainment',
          title: 'Entertainment Room',
          subtitle: 'TV, Android system and usage guides',
          icon: 'bi-tv-fill'
        },
        {
          id: 'kitchen',
          title: 'Kitchen',
          subtitle: 'Appliances, cookware and general use',
          icon: 'bi-cup-hot-fill'
        },
        {
          id: 'laundry',
          title: 'Laundry',
          subtitle: 'Washing machine and drying area guide',
          icon: 'bi-water'
        },
        {
          id: 'bedrooms',
          title: 'Bedrooms',
          subtitle: 'Bed layout and resting spaces',
          icon: 'bi-door-open-fill'
        }
      ],

      entertainmentContent: {
        introHighlight: 'Time to unwind, enjoy movies, and disconnect!',
        introText: 'Designed especially for your comfort, our entertainment room features everything you need to make your stay unforgettable.',
        
        tv: {
          title: 'TV, Apps & Live Channels',
          subtitle: 'Netflix, YouTube, Spotify & Live TV (using the large remote).',
          icon: 'bi-tv-fill',
          desc: 'Use the top power button on the large remote to turn the TV on or off completely.',
          homeButtonText: 'To open the main apps menu, press the Home button (🏠 house icon) on the large remote control.',
          appsDetail: 'From this menu, you can access streaming services like Netflix, Prime Video, and Disney+ (where guests can sign in using their own personal paid accounts), and Spotify (which can be used with an account or free version). You can also enjoy YouTube (signing in with a Gmail account or as a guest), as well as "Mi Fibra" and "TV 360", which stand out mainly for their national and international live TV channels, though their selection of movies and series is more limited.',
          image: controlTvImg,
          imageCaption: 'Large TV remote control',
          secondImage: tvAppsImg,
          secondImageCaption: 'Main menu screen when pressing Home (you also select HDMI 3 here using this remote)',
          footer: 'Remember that for a wider variety of movies and series, you can select HDMI 3 from this same menu to enter our Android system.'
        },

        android: {
          title: 'Movies & Series',
          subtitle: 'Switch to HDMI 3 for varied content on Xuper TV (using the small remote).',
          icon: 'bi-film',
          desc: 'First, using the large TV remote, select the HDMI 3 option in the main TV menu to enter the Android system.',
          menuCaption: 'Select the HDMI 3 option in the TV menu using the large remote',
          menuImage: tvAppsImg,
          detail: 'Once inside HDMI 3, use the small remote control to browse the Android interface and open the "Xuper TV" app, where you will find a huge variety of movies and series across all genres, plus live channels.',
          controlImage: controlAndroidImg,
          controlCaption: 'Small remote control (Only used inside Android)',
          interfazImage: androidInterfazImg,
          interfazCaption: 'Android home screen & Xuper TV app',
          footer: 'You can easily switch between both options to find whatever content you prefer during your stay.'
        }
      },

      kitchenContent: {
        introHighlight: 'Everything you need to prepare your favorite meals!',
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
          title: 'Electric Oven Guide',
          subtitle: 'Instructions to plug in and turn on the oven',
          badgeOpen: 'Hide oven guide',
          badgeClose: 'View oven guide',
          step1: 'Locate the oven cable in the cabinet compartment, located on the lower left side of the kitchen.',
          step2: 'Plug the cable into the corresponding outlet to power on the oven.',
          imageCaption: 'Location of the oven plug and cable in the lower left cabinet',
          videoTitle: 'Video tutorial:',
          footer: 'For proper use, make sure to unplug the oven after you finish cooking.'
        }
      },

      laundryContent: {
        introHighlight: 'Washing, ironing and drying area',
        introText: 'In the laundry area you will find everything you need for garment care:',
        
        items: [
          'Clothesline for drying clothes.',
          'Broom and dustpan.',
          'Ironing board and clothes iron.'
        ],

        washerAccordion: {
          title: 'Washing Machine Guide',
          subtitle: 'Important information about the wash cycle start',
          badgeOpen: 'Hide washer guide',
          badgeClose: 'View washer guide',
          detail: 'After programming the washing machine and pressing start, it will begin its initial cycle without filling with water immediately. This is normal as it performs preliminary checks and adjustments before adding water.'
        }
      },

      bedroomsContent: {
        introHighlight: 'Spaces designed for your comfort',
        introText: 'To ensure a comfortable rest, the following bedrooms are available:',
        
        items: [
          'One bedroom with a twin-size bed, wardrobe, and study desk.',
          'One bedroom with a queen-size bed and wardrobe.'
        ]
      },

      generalFooterText: 'Additionally, a portable fan is provided for your convenience. In the kitchen, you will find bottles of water as a courtesy.\n\nWe hope you enjoy your stay and feel at home.'
    }
  };

  const currentText = t[lang];

  return (
    <div>
      {/* Botón de retroceso dinámico */}
      <div className="mb-3">
        <button 
          onClick={() => selectedSection ? setSelectedSection(null) : onBack()}
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

      {/* NIVEL 1: Selector de Áreas Principales */}
      {!selectedSection && (
        <div>
          <div className="d-flex flex-column gap-3 mb-4">
            {currentText.sections.map((sec) => (
              <div 
                key={sec.id}
                onClick={() => setSelectedSection(sec.id)}
                className="custom-card rounded-4 shadow-sm d-flex align-items-center justify-content-between transition cursor-pointer"
                style={{ cursor: 'pointer', padding: '16px' }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark" style={{ width: '42px', height: '42px', minWidth: '42px' }}>
                    <i className={`bi ${sec.icon} fs-5`}></i>
                  </div>
                  <div>
                    <span className={`fw-bold d-block text-truncate ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14.5px', lineHeight: '1.2' }}>
                      {sec.title}
                    </span>
                    <span className="text-muted d-block mt-1" style={{ fontSize: '12px', lineHeight: '1.3' }}>
                      {sec.subtitle}
                    </span>
                  </div>
                </div>
                <i className="bi bi-chevron-right text-muted opacity-75"></i>
              </div>
            ))}
          </div>

          {/* Mensaje de desenlace / cortesía general abajo en el menú principal */}
          <div 
            className="rounded-3 border text-center fst-italic shadow-sm mb-4"
            style={{ 
              padding: '14px 16px',
              fontSize: '12.5px', 
              lineHeight: '1.5',
              backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
              borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
              color: darkMode ? '#e0e0e0' : '#495057',
              whiteSpace: 'pre-line'
            }}
          >
            {currentText.generalFooterText}
          </div>
        </div>
      )}

      {/* SECCIÓN: DORMITORIOS */}
      {selectedSection === 'bedrooms' && (
        <div>
          <div className="custom-card rounded-4 shadow-sm mb-4 border-0" style={{ padding: '16px' }}>
            
            <div className="badge bg-gold text-dark mb-2 px-3 py-1.5 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
              <i className="bi bi-door-open-fill me-1"></i> {currentText.bedroomsContent.introHighlight}
            </div>

            <p className="text-muted mb-3 pt-1" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              {currentText.bedroomsContent.introText}
            </p>

            <div className="d-flex flex-column gap-2.5">
              {currentText.bedroomsContent.items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 text-muted" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  <i className="bi bi-check2-circle text-gold fs-6 mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* SECCIÓN: LAVANDERÍA */}
      {selectedSection === 'laundry' && (
        <div>
          <div className="custom-card rounded-4 shadow-sm mb-4 border-0" style={{ padding: '16px' }}>
            
            <div className="badge bg-gold text-dark mb-2 px-3 py-1.5 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
              <i className="bi bi-water me-1"></i> {currentText.laundryContent.introHighlight}
            </div>

            <p className="text-muted mb-3 pt-1" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              {currentText.laundryContent.introText}
            </p>

            {/* Sub-acordeón de la Lavadora */}
            <div className="custom-card rounded-4 shadow-sm border mb-4 overflow-hidden" style={{ borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#e9ecef' }}>
              <div 
                onClick={() => setOpenWasher(!openWasher)}
                className="d-flex flex-column transition cursor-pointer"
                style={{ 
                  cursor: 'pointer', 
                  padding: '16px',
                  backgroundColor: openWasher 
                    ? (darkMode ? 'rgba(212, 160, 23, 0.12)' : 'rgba(212, 160, 23, 0.08)') 
                    : 'transparent' 
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark mt-0.5" style={{ width: '38px', height: '38px', minWidth: '38px' }}>
                    <i className="bi bi-water fs-5"></i>
                  </div>
                  <div className="flex-grow-1">
                    <span className={`fw-bold d-block ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14px', lineHeight: '1.3' }}>
                      {currentText.laundryContent.washerAccordion.title}
                    </span>
                    {!openWasher && (
                      <span className="text-muted d-block mt-1" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>
                        {currentText.laundryContent.washerAccordion.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-2.5">
                  <span className="badge bg-gold text-dark px-2.5 py-1 rounded-pill fw-semibold d-inline-flex align-items-center gap-1 shadow-sm" style={{ fontSize: '11px' }}>
                    {openWasher ? (
                      <><span>{currentText.laundryContent.washerAccordion.badgeOpen}</span> <i className="bi bi-chevron-up"></i></>
                    ) : (
                      <><span>{currentText.laundryContent.washerAccordion.badgeClose}</span> <i className="bi bi-chevron-down"></i></>
                    )}
                  </span>
                </div>
              </div>

              {openWasher && (
                <div style={{ padding: '0 16px 16px 16px', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(248, 249, 250, 0.6)' }}>
                  <p className="text-muted mb-2 pt-2" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    {currentText.laundryContent.washerAccordion.detail}
                  </p>
                </div>
              )}
            </div>

            {/* Lista general limpia de elementos de la lavandería */}
            <div className="d-flex flex-column gap-2.5">
              {currentText.laundryContent.items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 text-muted" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  <i className="bi bi-check2-circle text-gold fs-6 mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* SECCIÓN: COCINA */}
      {selectedSection === 'kitchen' && (
        <div>
          <div className="custom-card rounded-4 shadow-sm mb-4 border-0" style={{ padding: '16px' }}>
            <div className="badge bg-gold text-dark mb-2 px-3 py-1.5 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
              <i className="bi bi-cup-hot-fill me-1"></i> {currentText.kitchenContent.introHighlight}
            </div>
            <p className="text-muted mb-3 pt-1" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              {currentText.kitchenContent.introText}
            </p>

            <div className="custom-card rounded-4 shadow-sm border mb-4 overflow-hidden" style={{ borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#e9ecef' }}>
              <div 
                onClick={() => setOpenOven(!openOven)}
                className="d-flex flex-column transition cursor-pointer"
                style={{ 
                  cursor: 'pointer', 
                  padding: '16px',
                  backgroundColor: openOven 
                    ? (darkMode ? 'rgba(212, 160, 23, 0.12)' : 'rgba(212, 160, 23, 0.08)') 
                    : 'transparent' 
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark mt-0.5" style={{ width: '38px', height: '38px', minWidth: '38px' }}>
                    <i className="bi bi-fire fs-5"></i>
                  </div>
                  <div className="flex-grow-1">
                    <span className={`fw-bold d-block ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14px', lineHeight: '1.3' }}>
                      {currentText.kitchenContent.ovenAccordion.title}
                    </span>
                    {!openOven && (
                      <span className="text-muted d-block mt-1" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>
                        {currentText.kitchenContent.ovenAccordion.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-2.5">
                  <span className="badge bg-gold text-dark px-2.5 py-1 rounded-pill fw-semibold d-inline-flex align-items-center gap-1 shadow-sm" style={{ fontSize: '11px' }}>
                    {openOven ? (
                      <><span>{currentText.kitchenContent.ovenAccordion.badgeOpen}</span> <i className="bi bi-chevron-up"></i></>
                    ) : (
                      <><span>{currentText.kitchenContent.ovenAccordion.badgeClose}</span> <i className="bi bi-chevron-down"></i></>
                    )}
                  </span>
                </div>
              </div>

              {openOven && (
                <div style={{ padding: '0 16px 16px 16px', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(248, 249, 250, 0.6)' }}>
                  <ol className="text-muted mb-2.5 pt-2 ps-3" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    <li className="mb-2">{currentText.kitchenContent.ovenAccordion.step1}</li>
                    <li>{currentText.kitchenContent.ovenAccordion.step2}</li>
                  </ol>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={hornoCableImg} alt="Conexión de horno eléctrico" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.kitchenContent.ovenAccordion.imageCaption}</span>
                  </div>

                  <p className="text-muted fw-semibold mb-2" style={{ fontSize: '12px' }}>
                    <i className="bi bi-play-circle-fill text-gold me-1"></i> {currentText.kitchenContent.ovenAccordion.videoTitle}
                  </p>
                  
                  <div className="rounded-3 overflow-hidden shadow-sm border mb-2.5 ratio ratio-16x9 bg-dark">
                    <iframe 
                      src="https://www.youtube.com/embed/zanPeHvgkz0" 
                      title="Tutorial Horno" 
                      allowFullScreen
                      style={{ border: 0 }}
                    ></iframe>
                  </div>

                  <div 
                    className="rounded-3 border text-center fst-italic mt-2.5"
                    style={{ 
                      padding: '10px 14px',
                      fontSize: '11.5px', 
                      backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                      borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                      color: darkMode ? '#e0e0e0' : '#495057'
                    }}
                  >
                    {currentText.kitchenContent.ovenAccordion.footer}
                  </div>
                </div>
              )}
            </div>

            <div className="d-flex flex-column gap-2.5">
              {currentText.kitchenContent.items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-start gap-2 text-muted" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  <i className="bi bi-check2-circle text-gold fs-6 mt-0.5 flex-shrink-0"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* SECCIÓN: SALA DE ENTRETENIMIENTO */}
      {selectedSection === 'entertainment' && (
        <div>
          <div className="custom-card rounded-4 shadow-sm mb-4 border-0" style={{ padding: '16px' }}>
            <div className="badge bg-gold text-dark mb-2 px-3 py-1.5 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
              <i className="bi bi-stars me-1"></i> {currentText.entertainmentContent.introHighlight}
            </div>
            <p className="text-muted mb-0" style={{ fontSize: '13px', lineHeight: '1.4' }}>
              {currentText.entertainmentContent.introText}
            </p>
          </div>

          <div className="d-flex flex-column gap-3 mb-4">
            
            {/* Acordeón 1: TV */}
            <div className="custom-card rounded-4 shadow-sm border-0 overflow-hidden">
              <div 
                onClick={() => setOpenAccordion(openAccordion === 'tv-main' ? null : 'tv-main')}
                className="d-flex flex-column transition cursor-pointer"
                style={{ 
                  cursor: 'pointer', 
                  padding: '16px',
                  backgroundColor: openAccordion === 'tv-main' 
                    ? (darkMode ? 'rgba(212, 160, 23, 0.12)' : 'rgba(212, 160, 23, 0.08)') 
                    : 'transparent' 
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark mt-0.5" style={{ width: '38px', height: '38px', minWidth: '38px' }}>
                    <i className={`bi ${currentText.entertainmentContent.tv.icon} fs-5`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <span className={`fw-bold d-block ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14px', lineHeight: '1.3' }}>
                      {currentText.entertainmentContent.tv.title}
                    </span>
                    {openAccordion !== 'tv-main' && (
                      <span className="text-muted d-block mt-1" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>
                        {currentText.entertainmentContent.tv.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-2.5">
                  <span className="badge bg-gold text-dark px-2.5 py-1 rounded-pill fw-semibold d-inline-flex align-items-center gap-1 shadow-sm" style={{ fontSize: '11px' }}>
                    {openAccordion === 'tv-main' ? (
                      <><span>{currentText.readLess}</span> <i className="bi bi-chevron-up"></i></>
                    ) : (
                      <><span>{currentText.readMore}</span> <i className="bi bi-chevron-down"></i></>
                    )}
                  </span>
                </div>
              </div>

              {openAccordion === 'tv-main' && (
                <div style={{ padding: '0 16px 16px 16px', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(248, 249, 250, 0.6)' }}>
                  <p className="text-muted mb-2.5 pt-2" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    {currentText.entertainmentContent.tv.desc}
                  </p>

                  <div 
                    className="rounded-3 mb-2.5 d-flex align-items-center gap-2 border"
                    style={{ 
                      padding: '10px 14px',
                      fontSize: '12px', 
                      lineHeight: '1.35',
                      backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.15)' : '#fff3cd',
                      borderColor: darkMode ? 'rgba(212, 160, 23, 0.4)' : '#ffebaa',
                      color: darkMode ? '#ffffff' : '#856404'
                    }}
                  >
                    <i className="bi bi-house-door-fill fs-5 text-gold me-0.5"></i>
                    <span>{currentText.entertainmentContent.tv.homeButtonText}</span>
                  </div>

                  <p className="text-muted mb-2.5" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    {currentText.entertainmentContent.tv.appsDetail}
                  </p>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={currentText.entertainmentContent.tv.image} alt="Control TV" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.entertainmentContent.tv.imageCaption}</span>
                  </div>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={currentText.entertainmentContent.tv.secondImage} alt="Apps TV" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.entertainmentContent.tv.secondImageCaption}</span>
                  </div>

                  <div 
                    className="rounded-3 border text-center fst-italic mt-2.5"
                    style={{ 
                      padding: '10px 14px',
                      fontSize: '11.5px', 
                      backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                      borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                      color: darkMode ? '#e0e0e0' : '#495057'
                    }}
                  >
                    {currentText.entertainmentContent.tv.footer}
                  </div>
                </div>
              )}
            </div>

            {/* Acordeón 2: Películas y Series */}
            <div className="custom-card rounded-4 shadow-sm border-0 overflow-hidden">
              <div 
                onClick={() => setOpenAccordion(openAccordion === 'android-tv' ? null : 'android-tv')}
                className="d-flex flex-column transition cursor-pointer"
                style={{ 
                  cursor: 'pointer', 
                  padding: '16px',
                  backgroundColor: openAccordion === 'android-tv' 
                    ? (darkMode ? 'rgba(212, 160, 23, 0.12)' : 'rgba(212, 160, 23, 0.08)') 
                    : 'transparent' 
                }}
              >
                <div className="d-flex align-items-start gap-3">
                  <div className="rounded-3 d-flex align-items-center justify-content-center bg-gold text-dark mt-0.5" style={{ width: '38px', height: '38px', minWidth: '38px' }}>
                    <i className={`bi ${currentText.entertainmentContent.android.icon} fs-5`}></i>
                  </div>
                  <div className="flex-grow-1">
                    <span className={`fw-bold d-block ${darkMode ? 'text-white' : 'text-dark'}`} style={{ fontSize: '14px', lineHeight: '1.3' }}>
                      {currentText.entertainmentContent.android.title}
                    </span>
                    {openAccordion !== 'android-tv' && (
                      <span className="text-muted d-block mt-1" style={{ fontSize: '11.5px', lineHeight: '1.3' }}>
                        {currentText.entertainmentContent.android.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-end mt-2.5">
                  <span className="badge bg-gold text-dark px-2.5 py-1 rounded-pill fw-semibold d-inline-flex align-items-center gap-1 shadow-sm" style={{ fontSize: '11px' }}>
                    {openAccordion === 'android-tv' ? (
                      <><span>{currentText.readLess}</span> <i className="bi bi-chevron-up"></i></>
                    ) : (
                      <><span>{currentText.readMore}</span> <i className="bi bi-chevron-down"></i></>
                    )}
                  </span>
                </div>
              </div>

              {openAccordion === 'android-tv' && (
                <div style={{ padding: '0 16px 16px 16px', backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.15)' : 'rgba(248, 249, 250, 0.6)' }}>
                  <p className="text-muted mb-2.5 pt-2" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    {currentText.entertainmentContent.android.desc}
                  </p>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={currentText.entertainmentContent.android.menuImage} alt="Menu TV HDMI 3" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.entertainmentContent.android.menuCaption}</span>
                  </div>

                  <p className="text-muted mb-2.5" style={{ fontSize: '12.5px', lineHeight: '1.4' }}>
                    {currentText.entertainmentContent.android.detail}
                  </p>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={currentText.entertainmentContent.android.controlImage} alt="Control Android" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.entertainmentContent.android.controlCaption}</span>
                  </div>

                  <div className="mb-2.5 text-center">
                    <div className="rounded-3 overflow-hidden shadow-sm border mb-1 bg-white">
                      <img src={currentText.entertainmentContent.android.interfazImage} alt="Android Interfaz" className="w-100 object-fit-cover" style={{ maxHeight: '180px' }} />
                    </div>
                    <span className="text-muted fst-italic" style={{ fontSize: '10.5px' }}>{currentText.entertainmentContent.android.interfazCaption}</span>
                  </div>

                  <div 
                    className="rounded-3 border text-center fst-italic mt-2.5"
                    style={{ 
                      padding: '10px 14px',
                      fontSize: '11.5px', 
                      backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                      borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                      color: darkMode ? '#e0e0e0' : '#495057'
                    }}
                  >
                    {currentText.entertainmentContent.android.footer}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}