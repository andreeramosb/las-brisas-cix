import React, { useState } from 'react';
// Importamos ambas imágenes en su lugar correcto
import chapaExternaImg from '../assets/img/chapa_interna.png';
import botonInternoImg from '../assets/img/boton_chapa_interna.png';

export default function AccessDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Ingreso al Apartamento',
      headerSubtitle: 'Instrucciones paso a paso para acceder a la propiedad y al departamento',
      
      gateTitle: '1. Ingreso a la Reja Principal (Calle)',
      gateIntro: 'Al llegar a la propiedad, le invitamos a seguir estos pasos para abrir la reja exterior:',
      stepsGate: [
        { title: 'Encienda el teclado:', desc: 'Presione el botón del medio (el cual cuenta con el ícono de una tarjeta 🪪) para que el panel táctil se ilumine y muestre los números.' },
        { title: 'Ingrese su clave:', desc: 'Digite cuidadosamente su código de acceso personal en el teclado numérico.' },
        { title: 'Confirme:', desc: 'Presione el botón del check (✓). Escuchará que la chapa se libera y podrá empujar la reja para ingresar.' },
        { title: 'Salida hacia la calle (Interior):', desc: 'Si se encuentra dentro de la propiedad y desea salir hacia la calle, le pedimos presionar el botón físico de la chapa interior (como se observa en la fotografía).' },
        { title: 'Cierre automático:', desc: 'Junte la reja despacio al entrar o salir; el sistema se cerrará de forma automática.' }
      ],

      gateSecurityTitle: 'Notas de seguridad para la reja:',
      gateSecurity1: 'Si va saliendo (hacia la calle): Le solicitamos amablemente empujar ligeramente la reja para confirmar que haya quedado correctamente cerrada.',
      gateSecurity2: 'Si va ingresando (hacia el interior): Le solicitamos amablemente jalar la reja para verificar que no se abra y comprobar que esté bien asegurada.',

      aptTitle: '2. Acceso al Apartamento (Tercer Piso)',
      aptSteps: [
        { title: 'Suba al tercer piso:', desc: 'Una vez dentro de la reja principal, le invitamos a subir por las escaleras ubicadas a la izquierda, las cuales lo llevarán directamente al tercer piso.' },
        { title: 'Iluminación automática:', desc: 'No se preocupe por la iluminación durante la noche; los focos cuentan con sensores que se activan automáticamente para iluminar su camino y se apagan solos después de unos minutos.' },
        { title: 'Puerta de madera:', desc: 'Al llegar al tercer piso, encontrará la puerta de madera del apartamento. La llave estará colgada en la chapa para que pueda ingresar con total comodidad.' },
        { title: 'Al salir del departamento:', desc: 'Al retirarse, le pedimos asegurarse de cerrar la puerta con la llave convencional para dejar el apartamento seguro.' }
      ],

      importantTitle: 'Recomendaciones Finales',
      important1: 'Le sugerimos verificar siempre que tanto la reja de la calle como la puerta del tercer piso queden debidamente cerradas al salir o ingresar.',
      important2: 'Por su seguridad, le recomendamos conservar las llaves del apartamento en un lugar seguro durante su estancia.',
      footerText: 'Quedamos a su entera disposición ante cualquier duda o consulta con el acceso. ¡Que disfrute mucho su estancia!'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Apartment Access',
      headerSubtitle: 'Step-by-step instructions to access the property and apartment',
      
      gateTitle: '1. Main Gate Access (Street)',
      gateIntro: 'Upon arrival, please follow these steps to open the outer gate:',
      stepsGate: [
        { title: 'Activate the keypad:', desc: 'Press the middle button (featuring the card icon 🪪) to light up the touch panel and display the numbers.' },
        { title: 'Enter your code:', desc: 'Carefully type your personal access code on the numeric keypad.' },
        { title: 'Confirm:', desc: 'Press the checkmark button (✓). You will hear the latch release and you can push the gate open.' },
        { title: 'Exit to the street (Inside):', desc: 'If you are inside the property and wish to head out to the street, please press the physical button on the inner latch (as shown in the photo).' },
        { title: 'Automatic closing:', desc: 'Gently pull the gate closed when entering or leaving; the system will lock automatically.' }
      ],

      gateSecurityTitle: 'Gate Security Notes:',
      gateSecurity1: 'When heading out (to the street): Please push the gate slightly to confirm it is properly closed.',
      gateSecurity2: 'When coming in (to the interior): Gently pull the gate to verify it is locked and secure.',

      aptTitle: '2. Apartment Access (3rd Floor)',
      aptSteps: [
        { title: 'Head to the 3rd floor:', desc: 'Once inside the main gate, please take the stairs on the left up to the third floor.' },
        { title: 'Automatic lighting:', desc: 'Do not worry about nighttime lighting; the lights feature motion sensors that turn on automatically and switch off after a few minutes.' },
        { title: 'Wooden door:', desc: 'Upon reaching the 3rd floor, you will find the wooden apartment door. The key will be hanging on the lock for easy entry.' },
        { title: 'Leaving the apartment:', desc: 'When leaving, please make sure to lock the door with the conventional key to keep the apartment secure.' }
      ],

      importantTitle: 'Final Recommendations',
      important1: 'Please always verify that both the street gate and the 3rd-floor apartment door are securely closed when leaving or entering.',
      important2: 'We kindly advise keeping the apartment keys in a safe place during your stay.',
      footerText: 'We remain at your disposal should you need any assistance with access. Enjoy your stay!'
    }
  };

  const currentText = t[lang];

  return (
    <div>
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
      <div className="mb-4">
        <h2 className={`fw-bold fs-4 mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.headerTitle}
        </h2>
        <p className="text-muted" style={{ fontSize: '13px' }}>
          {currentText.headerSubtitle}
        </p>
      </div>

      {/* Tarjeta 1: Ingreso a la Reja */}
      <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="rounded-circle bg-gold text-dark d-inline-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
            <i className="bi bi-shield-lock-fill fs-5"></i>
          </div>
          <h5 className={`fw-bold fs-6 mb-0 ${darkMode ? 'text-white' : 'text-dark'}`}>
            {currentText.gateTitle}
          </h5>
        </div>

        <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
          {currentText.gateIntro}
        </p>

        {/* Imagen 1: Chapa Externa (Teclado y tarjeta) */}
        <div className="text-center mb-4">
          <img 
            src={chapaExternaImg} 
            alt="Panel de la reja exterior" 
            className="img-fluid rounded-3 shadow-sm border"
            style={{ maxHeight: '240px', objectFit: 'cover' }}
          />
        </div>

        <div className="d-flex flex-column gap-3 mb-4">
          {currentText.stepsGate.map((step, index) => (
            <div key={index} className="d-flex align-items-start gap-3 p-2 rounded-3" style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)' }}>
              <span className="badge bg-gold text-dark rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '24px', height: '24px', minWidth: '24px', fontSize: '11.5px' }}>
                {index + 1}
              </span>
              <div className={darkMode ? 'text-light' : 'text-dark'} style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                <span className="fw-bold">{step.title}</span> {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Imagen de la chapa interna (el botón para salir hacia la calle) */}
        <div className="text-center mb-4">
          <img 
            src={botonInternoImg} 
            alt="Botón interior para salir de la reja" 
            className="img-fluid rounded-3 shadow-sm border"
            style={{ maxHeight: '220px', objectFit: 'cover' }}
          />
          <span className="text-muted d-block mt-2" style={{ fontSize: '12px' }}>
            {lang === 'ES' ? 'Botón interior en la reja para salir hacia la calle' : 'Inner button on the gate to exit to the street'}
          </span>
        </div>

        {/* Nota de seguridad reja */}
        <div 
          className="p-3 rounded-3 border"
          style={{ 
            fontSize: '13px', 
            lineHeight: '1.5',
            backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.08)' : '#fffdf3',
            borderColor: darkMode ? 'rgba(212, 160, 23, 0.25)' : '#ffe082',
            color: darkMode ? '#e0e0e0' : '#555'
          }}
        >
          <span className="fw-bold text-gold d-block mb-1">
            <i className="bi bi-exclamation-triangle-fill me-1"></i> {currentText.gateSecurityTitle}
          </span>
          <ul className="mb-0 ps-3">
            <li className="mb-1">{currentText.gateSecurity1}</li>
            <li>{currentText.gateSecurity2}</li>
          </ul>
        </div>
      </div>

      {/* Tarjeta 2: Acceso al Apartamento (Tercer Piso) */}
      <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="rounded-circle bg-gold text-dark d-inline-flex align-items-center justify-content-center shadow-sm" style={{ width: '45px', height: '45px', minWidth: '45px' }}>
            <i className="bi bi-house-door-fill fs-5"></i>
          </div>
          <h5 className={`fw-bold fs-6 mb-0 ${darkMode ? 'text-white' : 'text-dark'}`}>
            {currentText.aptTitle}
          </h5>
        </div>

        <div className="d-flex flex-column gap-3 mb-3">
          {currentText.aptSteps.map((step, index) => (
            <div key={index} className="d-flex align-items-start gap-3 p-2 rounded-3" style={{ backgroundColor: darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)' }}>
              <div className="rounded-circle bg-gold text-dark d-flex align-items-center justify-content-center shadow-sm mt-0.5" style={{ width: '22px', height: '22px', minWidth: '22px' }}>
                <i className="bi bi-check" style={{ fontSize: '14px', strokeWidth: '2px' }}></i>
              </div>
              <div className={darkMode ? 'text-light' : 'text-dark'} style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                <span className="fw-bold">{step.title}</span> {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Avisos importantes */}
        <div 
          className="p-3 rounded-3 border mb-3 mt-3"
          style={{ 
            fontSize: '13px', 
            lineHeight: '1.5',
            backgroundColor: darkMode ? 'rgba(13, 110, 253, 0.08)' : '#e7f1ff',
            borderColor: darkMode ? 'rgba(13, 110, 253, 0.25)' : '#b6d4fe',
            color: darkMode ? '#e0e0e0' : '#084298'
          }}
        >
          <span className="fw-bold d-block mb-1">
            <i className="bi bi-info-circle-fill me-1"></i> {currentText.importantTitle}
          </span>
          <p className="mb-1">{currentText.important1}</p>
          <p className="mb-0">{currentText.important2}</p>
        </div>

        <p className="text-center text-muted mb-0 fst-italic" style={{ fontSize: '12.5px' }}>
          {currentText.footerText}
        </p>
      </div>

    </div>
  );
}