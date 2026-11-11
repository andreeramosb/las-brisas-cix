import React, { useState } from 'react';

export default function InternetDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  // Estado para controlar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Estados independientes para el mensaje de "¡Copiado!" de cada botón
  const [copiedNet, setCopiedNet] = useState(false);
  const [copiedPass, setCopiedPass] = useState(false);

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Wi-Fi / Internet',
      headerSubtitle: 'Detalles de red para sus dispositivos',
      cardTitle: 'Red de Internet',
      introText: 'Para su comodidad, le ofrecemos acceso a internet via Wi-Fi. A continuación, encontrará los detalles para conectarse:',
      netNameLabel: 'Nombre de la red:',
      netNameValue: 'RAMOS REP',
      passLabel: 'Contraseña:',
      passValue: '12345678+',
      showBtn: 'Ver contraseña',
      hideBtn: 'Ocultar contraseña',
      copyBtn: 'Copiar',
      copiedBtn: '¡Copiado!',
      footerText: 'Estamos aquí para ayudarle. ¡Disfrute de su estancia!'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Wi-Fi / Internet',
      headerSubtitle: 'Network details for your devices',
      cardTitle: 'Wi-Fi Network',
      introText: 'For your convenience, we offer Wi-Fi internet access. Below you will find the details to connect:',
      netNameLabel: 'Network name:',
      netNameValue: 'RAMOS REP',
      passLabel: 'Password:',
      passValue: '12345678+',
      showBtn: 'Show password',
      hideBtn: 'Hide password',
      copyBtn: 'Copy',
      copiedBtn: 'Copied!',
      footerText: 'We are here to help. Enjoy your stay!'
    }
  };

  const currentText = t[lang];

  // Función infalible de copiado para celulares (funciona por HTTP, IP local y HTTPS)
  const handleCopy = (text, type) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        triggerFeedback(type);
      }).catch(() => {
        fallbackCopyText(text, type);
      });
    } else {
      fallbackCopyText(text, type);
    }
  };

  // Método alternativo compatible con todos los móviles antiguos o redes locales
  const fallbackCopyText = (text, type) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";  // Evita desplazamiento en la pantalla
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      triggerFeedback(type);
    } catch (err) {
      console.error('Error al copiar', err);
    }
    document.body.removeChild(textArea);
  };

  // Activa el cambio de texto del botón a "¡Copiado!" por 2 segundos
  const triggerFeedback = (type) => {
    if (type === 'net') {
      setCopiedNet(true);
      setTimeout(() => setCopiedNet(false), 2000);
    } else {
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

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
        <h2 className={`fw-bold fs-4 mb-1 ${darkMode ? 'text-white' : 'text-dark'}`}>
          {currentText.headerTitle}
        </h2>
        <p className="text-muted" style={{ fontSize: '13px' }}>
          {currentText.headerSubtitle}
        </p>
      </div>

      {/* Tarjeta de Contenido de Wi-Fi */}
      <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
        
        {/* Icono grande y Título */}
        <div className="text-center mb-4">
          <div className="rounded-circle bg-gold text-dark d-inline-flex align-items-center justify-content-center shadow-sm mb-2" style={{ width: '60px', height: '60px' }}>
            <i className="bi bi-wifi fs-3"></i>
          </div>
          <h5 className={`fw-bold fs-6 mb-0 ${darkMode ? 'text-white' : 'text-dark'}`}>{currentText.cardTitle}</h5>
        </div>

        <p className="text-muted mb-4" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
          {currentText.introText}
        </p>

        {/* Caja con los datos de red */}
        <div 
          className="rounded-3 border mb-4"
          style={{ 
            padding: '18px 20px',
            fontSize: '13.5px', 
            lineHeight: '1.6',
            backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
            borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
            color: darkMode ? '#e0e0e0' : '#495057'
          }}
        >
          {/* Fila Nombre de Red */}
          <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom" style={{ borderColor: darkMode ? 'rgba(212, 160, 23, 0.2)' : '#ffe082 !important' }}>
            <div className="pe-2">
              <span className="fw-bold text-gold d-block mb-0.5" style={{ fontSize: '12px' }}>{currentText.netNameLabel}</span>
              <span className="fw-semibold font-monospace" style={{ fontSize: '15px' }}>{currentText.netNameValue}</span>
            </div>
            <button 
              onClick={() => handleCopy(currentText.netNameValue, 'net')}
              className={`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold d-inline-flex align-items-center gap-1.5 shadow-sm transition flex-shrink-0 ${copiedNet ? 'btn-success text-white' : 'bg-gold text-dark border-0'}`}
              style={{ fontSize: '12px' }}
            >
              <i className={`bi ${copiedNet ? 'bi-check-lg' : 'bi-clipboard'}`}></i>
              <span>{copiedNet ? currentText.copiedBtn : currentText.copyBtn}</span>
            </button>
          </div>
          
          {/* Fila Contraseña */}
          <div className="d-flex flex-column pt-1">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="pe-2">
                <span className="fw-bold text-gold d-block mb-0.5" style={{ fontSize: '12px' }}>{currentText.passLabel}</span>
                <span className="fw-semibold font-monospace" style={{ fontSize: '15.5px' }}>
                  {showPassword ? currentText.passValue : '••••••••'}
                </span>
              </div>
              <button 
                onClick={() => handleCopy(currentText.passValue, 'pass')}
                className={`btn btn-sm rounded-pill px-3 py-1.5 fw-semibold d-inline-flex align-items-center gap-1.5 shadow-sm transition flex-shrink-0 ${copiedPass ? 'btn-success text-white' : 'bg-gold text-dark border-0'}`}
                style={{ fontSize: '12px' }}
              >
                <i className={`bi ${copiedPass ? 'bi-check-lg' : 'bi-clipboard'}`}></i>
                <span>{copiedPass ? currentText.copiedBtn : currentText.copyBtn}</span>
              </button>
            </div>

            {/* Botón para Ver/Ocultar contraseña */}
            <div className="mt-1">
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-sm p-0 bg-transparent text-muted text-decoration-underline d-inline-flex align-items-center gap-1"
                style={{ fontSize: '12px', border: 'none' }}
              >
                <i className={`bi ${showPassword ? 'bi-lock-fill' : 'bi-unlock-fill'}`}></i>
                <span>{showPassword ? currentText.hideBtn : currentText.showBtn}</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-muted mb-0 fst-italic" style={{ fontSize: '12.5px' }}>
          {currentText.footerText}
        </p>

      </div>
    </div>
  );
}