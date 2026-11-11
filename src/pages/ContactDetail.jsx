import React, { useState } from 'react';export default function ContactDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Contactos y Emergencias',
      headerSubtitle: 'Información de asistencia y números de ayuda',
      topics: [
        {
          id: 'host',
          title: 'Contacto con el Anfitrión',
          subtitle: 'Manuel y Jackeline',
          icon: 'bi-headset',
          content: {
            title: 'Asistencia del Anfitrión',
            intro: 'Estamos aquí para asegurar que su estancia en "Las Brisas de Cix" sea lo más agradable posible. Si necesita asistencia o tiene alguna pregunta, no dude en contactarnos a través de los siguientes medios:',
            contacts: [
              { name: 'Manuel', phone: '+51 943042322' },
              { name: 'Jackeline', phone: '+51 951435942' }
            ],
            footer: 'Su comodidad y satisfacción son nuestra prioridad.'
          }
        },
        {
          id: 'emergency',
          title: 'Contacto para Emergencias',
          subtitle: 'Policía, bomberos, hospitales y SAMU',
          icon: 'bi-shield-exclamation',
          content: {
            title: 'Números de Emergencia',
            intro: 'En caso de una emergencia, por favor contacte a las autoridades competentes a través de los siguientes números:',
            chiclayoTitle: 'Chiclayo',
            chiclayoList: [
              { name: 'Comisaría PNP Del Norte - Chiclayo', numbers: '074 229697, 074 274004' },
              { name: 'Comisaría PNP José Leonardo Ortiz', numbers: '074 254836' },
              { name: 'Comisaría PNP La Victoria', numbers: '074 215922' },
              { name: 'Comisaría PNP Campodónico', numbers: '074 227351' },
              { name: 'Comisaría PNP El Porvenir', numbers: '074 228030' },
              { name: 'Comisaría PNP Atusparias', numbers: '074 257099' },
              { name: 'Seguridad Ciudadana', numbers: '074 229696' },
              { name: 'Comisaría PNP El Aeropuerto', numbers: '074 228042, 074 209207' },
              { name: 'Bomberos "Salvadora Chiclayo"', numbers: '074 452997' },
              { name: 'Hospital "Luis Heysen Incháustegui"', numbers: '074 208035' },
              { name: 'Servicio de Atención Médica de Urgencia (SAMU)', numbers: '979176400, 949603321' }
            ],
            outTitle: 'Fuera de Chiclayo',
            outList: [
              { name: 'Comisaría PNP Ferreñafe', numbers: '074 286720' },
              { name: 'Comisaría PNP Pomalca', numbers: '074 416318' },
              { name: 'Comisaría PNP Tumán', numbers: '074 417163' },
              { name: 'Comisaría PNP Pucalá', numbers: '074 800066' },
              { name: 'Comisaría PNP Reque', numbers: '074 451207' },
              { name: 'Comisaría PNP Ciudad Eten', numbers: '074 414211' },
              { name: 'Comisaría PNP Puerto Eten', numbers: '074 414111' },
              { name: 'Comisaría PNP Monsefú', numbers: '074 411184' },
              { name: 'Comisaría PNP Santa Rosa', numbers: '074 418283' },
              { name: 'Comisaría PNP Pimentel', numbers: '074 452013' },
              { name: 'Comisaría PNP Zaña', numbers: '074 431077' },
              { name: 'Comisaría PNP Cayaltí', numbers: '074 421074' },
              { name: 'Comisaría PNP Oyotún', numbers: '074 200219' },
              { name: 'Comisaría PNP Mocupe', numbers: '074 800203' },
              { name: 'Comisaría PNP Pátapo', numbers: '074 428077' },
              { name: 'Escuadrón Verde', numbers: '074 325916' },
              { name: 'Policía Ecológica', numbers: '074 282184' },
              { name: 'Tránsito', numbers: '074 229721' },
              { name: 'Comisaría PNP Lambayeque', numbers: '074 282119' },
              { name: 'Comisaría PNP Cruz del Médano', numbers: '074 800060' },
              { name: 'Comisaría PNP Jayanca', numbers: '074 423052' },
              { name: 'Comisaría PNP Motupe', numbers: '074 426006' },
              { name: 'Comisaría PNP Olmos', numbers: '074 427003' },
              { name: 'Comisaría PNP Pampagrande', numbers: '074 800012' },
              { name: 'Comisaría PNP Túcume', numbers: '074 422664' },
              { name: 'Comisaría PNP Mochumí', numbers: '074 424381' }
            ],
            footer: 'Para cualquier situación que requiera asistencia de emergencia, estos números estarán disponibles para ayudarle.'
          }
        }
      ],
      detailBackBtn: 'Volver a la lista'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Contacts & Emergencies',
      headerSubtitle: 'Assistance information and helpline numbers',
      topics: [
        {
          id: 'host',
          title: 'Host Contact',
          subtitle: 'Manuel and Jackeline',
          icon: 'bi-headset',
          content: {
            title: 'Host Assistance',
            intro: 'We are here to ensure your stay at "Las Brisas de Cix" is as pleasant as possible. If you need assistance or have any questions, please do not hesitate to contact us through the following means:',
            contacts: [
              { name: 'Manuel', phone: '+51 943042322' },
              { name: 'Jackeline', phone: '+51 951435942' }
            ],
            footer: 'Your comfort and satisfaction are our priority.'
          }
        },
        {
          id: 'emergency',
          title: 'Emergency Contacts',
          subtitle: 'Police, fire department, hospitals & SAMU',
          icon: 'bi-shield-exclamation',
          content: {
            title: 'Emergency Numbers',
            intro: 'In case of an emergency, please contact the competent authorities through the following numbers:',
            chiclayoTitle: 'Chiclayo',
            chiclayoList: [
              { name: 'PNP Police Station Del Norte - Chiclayo', numbers: '074 229697, 074 274004' },
              { name: 'PNP Police Station José Leonardo Ortiz', numbers: '074 254836' },
              { name: 'PNP Police Station La Victoria', numbers: '074 215922' },
              { name: 'PNP Police Station Campodónico', numbers: '074 227351' },
              { name: 'PNP Police Station El Porvenir', numbers: '074 228030' },
              { name: 'PNP Police Station Atusparias', numbers: '074 257099' },
              { name: 'Citizen Security', numbers: '074 229696' },
              { name: 'PNP Police Station El Aeropuerto', numbers: '074 228042, 074 209207' },
              { name: 'Fire Department "Salvadora Chiclayo"', numbers: '074 452997' },
              { name: 'Hospital "Luis Heysen Incháustegui"', numbers: '074 208035' },
              { name: 'Medical Emergency Care Service (SAMU)', numbers: '979176400, 949603321' }
            ],
            outTitle: 'Outside Chiclayo',
            outList: [
              { name: 'PNP Police Station Ferreñafe', numbers: '074 286720' },
              { name: 'PNP Police Station Pomalca', numbers: '074 416318' },
              { name: 'PNP Police Station Tumán', numbers: '074 417163' },
              { name: 'PNP Police Station Pucalá', numbers: '074 800066' },
              { name: 'PNP Police Station Reque', numbers: '074 451207' },
              { name: 'PNP Police Station Ciudad Eten', numbers: '074 414211' },
              { name: 'PNP Police Station Puerto Eten', numbers: '074 414111' },
              { name: 'PNP Police Station Monsefú', numbers: '074 411184' },
              { name: 'PNP Police Station Santa Rosa', numbers: '074 418283' },
              { name: 'PNP Police Station Pimentel', numbers: '074 452013' },
              { name: 'PNP Police Station Zaña', numbers: '074 431077' },
              { name: 'PNP Police Station Cayaltí', numbers: '074 421074' },
              { name: 'PNP Police Station Oyotún', numbers: '074 200219' },
              { name: 'PNP Police Station Mocupe', numbers: '074 800203' },
              { name: 'PNP Police Station Pátapo', numbers: '074 428077' },
              { name: 'Green Squadron', numbers: '074 325916' },
              { name: 'Ecological Police', numbers: '074 282184' },
              { name: 'Traffic Police', numbers: '074 229721' },
              { name: 'PNP Police Station Lambayeque', numbers: '074 282119' },
              { name: 'PNP Police Station Cruz del Médano', numbers: '074 800060' },
              { name: 'PNP Police Station Jayanca', numbers: '074 423052' },
              { name: 'PNP Police Station Motupe', numbers: '074 426006' },
              { name: 'PNP Police Station Olmos', numbers: '074 427003' },
              { name: 'PNP Police Station Pampagrande', numbers: '074 800012' },
              { name: 'PNP Police Station Túcume', numbers: '074 422664' },
              { name: 'PNP Police Station Mochumí', numbers: '074 424381' }
            ],
            footer: 'For any situation requiring emergency assistance, these numbers will be available to help you.'
          }
        }
      ],
      detailBackBtn: 'Back to list'
    }
  };

  const currentText = t[lang];
  const selectedTopic = currentText.topics.find(topic => topic.id === selectedTopicId);

  return (
    <div>
      {!selectedTopicId ? (
        <>
          <div className="mb-3">
            <button 
              onClick={onBack}
              className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <i className="bi bi-arrow-left"></i> {currentText.backBtn}
            </button>
          </div>

          <div className="mb-4">
            <h2 className="fw-bold fs-4 mb-1">
              {currentText.headerTitle}
            </h2>
            <p className="text-muted" style={{ fontSize: '13px' }}>
              {currentText.headerSubtitle}
            </p>
          </div>

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
        <>
          <div className="mb-3">
            <button 
              onClick={() => setSelectedTopicId(null)}
              className="btn btn-sm badge-pill-custom rounded-pill px-3 py-1.5 d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <i className="bi bi-arrow-left"></i> {currentText.detailBackBtn}
            </button>
          </div>

          <div className="custom-card rounded-4 p-4 shadow-sm mb-4 border-0">
            {selectedTopic && selectedTopicId === 'host' && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-headset text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  {selectedTopic.content.intro}
                </p>

                <div className="d-flex flex-column gap-2 mb-4">
                  {selectedTopic.content.contacts.map((c, idx) => (
                    <div key={idx} className="p-3 rounded-3 border d-flex justify-content-between align-items-center" style={{ fontSize: '13.5px', borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082', backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.05)' : '#fffdf5' }}>
                      <span className="fw-bold text-gold">{c.name}</span>
                      <a href={`tel:${c.phone}`} className="fw-semibold text-decoration-none font-monospace" style={{ color: darkMode ? '#e0e0e0' : '#333' }}>
                        <i className="bi bi-telephone-fill me-1 text-gold"></i> {c.phone}
                      </a>
                    </div>
                  ))}
                </div>

                <div 
                  className="p-3 rounded-3 border text-center fst-italic"
                  style={{ 
                    fontSize: '12.5px', 
                    backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                    borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                    color: darkMode ? '#e0e0e0' : '#495057'
                  }}
                >
                  {selectedTopic.content.footer}
                </div>
              </div>
            )}

            {selectedTopic && selectedTopicId === 'emergency' && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-shield-exclamation text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13px', lineHeight: '1.4' }}>
                  {selectedTopic.content.intro}
                </p>

                <h6 className="fw-bold text-gold fs-6 mt-3 mb-2">{selectedTopic.content.chiclayoTitle}</h6>
                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: '12.5px' }}>
                  {selectedTopic.content.chiclayoList.map((item, idx) => (
                    <div key={idx} className="p-2 rounded border d-flex flex-column" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.1)' : '#dee2e6' }}>
                      <span className="fw-bold">{item.name}</span>
                      <span className="text-muted font-monospace mt-1"><i className="bi bi-telephone me-1 text-gold"></i>{item.numbers}</span>
                    </div>
                  ))}
                </div>

                <h6 className="fw-bold text-gold fs-6 mt-4 mb-2">{selectedTopic.content.outTitle}</h6>
                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: '12.5px' }}>
                  {selectedTopic.content.outList.map((item, idx) => (
                    <div key={idx} className="p-2 rounded border d-flex flex-column" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.1)' : '#dee2e6' }}>
                      <span className="fw-bold">{item.name}</span>
                      <span className="text-muted font-monospace mt-1"><i className="bi bi-telephone me-1 text-gold"></i>{item.numbers}</span>
                    </div>
                  ))}
                </div>

                <div 
                  className="p-3 rounded-3 border text-center fst-italic"
                  style={{ 
                    fontSize: '12px', 
                    backgroundColor: darkMode ? 'rgba(212, 160, 23, 0.1)' : '#fff8e1',
                    borderColor: darkMode ? 'rgba(212, 160, 23, 0.3)' : '#ffe082',
                    color: darkMode ? '#e0e0e0' : '#495057'
                  }}
                >
                  {selectedTopic.content.footer}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}