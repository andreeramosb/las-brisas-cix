import React, { useState } from 'react';

export default function GoodbyeDetail({ darkMode, setDarkMode, lang, setLang, onBack }) {
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const t = {
    ES: {
      backBtn: 'Volver al menú',
      headerTitle: 'Regrese Pronto',
      headerSubtitle: 'Gracias por su visita y detalles finales de salida',
      
      topics: [
        {
          id: 'thanks',
          title: 'Gracias por su Visita',
          subtitle: 'Mensaje de despedida y reseñas',
          icon: 'bi-heart-fill',
          content: {
            title: '¡Gracias por elegirnos!',
            highlight: 'Ha sido un verdadero placer recibirlos',
            intro: 'Esperamos que hayan disfrutado de su estancia tanto como nosotros disfrutamos de su visita. Cada visita es especial para nosotros, y nos alegraría mucho poder darles la bienvenida nuevamente en el futuro.',
            reviewText: 'Valoramos mucho las opiniones de nuestros huéspedes. Airbnb les enviará una solicitud para dejar un comentario sobre su experiencia. Si pueden compartir cómo les fue, se lo agradeceremos muchísimo.',
            privateText: 'Si sienten que no hemos alcanzado las 5 estrellas, por favor no duden en contactarnos directamente por WhatsApp o dejar un comentario privado en la web de Airbnb. Esto nos ayudará a seguir mejorando.',
            footer: 'Gracias de nuevo por confiar en nosotros. ¡Esperamos verlos pronto en "Las Brisas de Cix"!'
          }
        },
        {
          id: 'checkout-time',
          title: 'Información sobre la Hora de Salida',
          subtitle: 'Horario y extensión de tiempo',
          icon: 'bi-clock-fill',
          content: {
            title: 'Información sobre la hora de salida',
            highlight: 'Check-out: 10:00 de la mañana',
            description: 'La hora de salida es a las 10:00 de la mañana. Si necesita salir más tarde, por favor comuníquese con nosotros para verificar la posibilidad de ofrecerle un tiempo extra. Revisaremos si hay alguna reserva inmediata posterior a la suya.',
            noteLabel: 'EQUIPAJE Y EXTENSIÓN:',
            noteText: 'En caso de que haya una reserva inmediata, podrá dejarnos sus maletas y regresar a recogerlas sin ningún problema. Si no hay reservas posteriores, con mucho gusto le permitiremos salir unas horas más tarde, ya sea dejando sus maletas con nosotros o, si es posible, permaneciendo en el apartamento.'
          }
        },
        {
          id: 'checkout-steps',
          title: 'Instrucciones para la Salida',
          subtitle: 'Detalles finales al dejar el apartamento',
          icon: 'bi-box-arrow-right',
          content: {
            title: 'Recomendaciones al dejar el apartamento',
            highlight: 'Unos pequeños detalles para su partida',
            intro: 'Para que su salida sea sumamente cómoda y ágil, le agradeceremos nos apoye con estos sencillos detalles al momento de dejar el apartamento:',
            steps: [
              'No se preocupe por hacer la cama, por favor déjela tal cual está.',
              'Coloque las toallas usadas en la ducha, colgadas en la puerta de la ducha.',
              'Si tuviera alguna bolsa con residuos, le agradeceremos mucho dejarla en el depósito de basura ubicado al costado de la escalera en el primer piso.',
              'Para la entrega del juego de llaves, puede entregarlas en el primer piso o dejarlas puestas en la chapa de la puerta; para ello, le pedimos amablemente consultarlo mediante WhatsApp para coordinarlo.'
            ],
            footer: 'Esperamos que haya disfrutado al máximo su estancia y le deseamos un excelente y seguro viaje de retorno a casa. ¡Muchas gracias por todo!'
          }
        }
      ],
      detailBackBtn: 'Volver a la lista'
    },
    EN: {
      backBtn: 'Back to menu',
      headerTitle: 'Safe Travels',
      headerSubtitle: 'Thank you for your visit and check-out details',
      
      topics: [
        {
          id: 'thanks',
          title: 'Thank You for Your Visit',
          subtitle: 'Farewell message & reviews',
          icon: 'bi-heart-fill',
          content: {
            title: 'Thank you for choosing us!',
            highlight: 'It has been a true pleasure hosting you',
            intro: 'We hope you enjoyed your stay as much as we enjoyed your visit. Every guest is special to us, and we would be thrilled to welcome you back in the future.',
            reviewText: 'We greatly value our guests feedback. Airbnb will send you a request to leave a review about your experience. If you can share how it went, we would appreciate it immensely.',
            privateText: 'If you feel we have not achieved 5 stars, please do not hesitate to contact us directly via WhatsApp or leave a private comment on the Airbnb website. This will help us keep improving.',
            footer: 'Thank you again for trusting us. We hope to see you soon at "Las Brisas de Cix"!'
          }
        },
        {
          id: 'checkout-time',
          title: 'Check-out Time Information',
          subtitle: 'Schedule and extra time',
          icon: 'bi-clock-fill',
          content: {
            title: 'Check-out Time Information',
            highlight: 'Check-out: 10:00 in the morning',
            description: 'Check-out time is at 10:00 in the morning. If you need a later check-out, please contact us to check if we can offer you extra time. We will check if there is an immediate reservation following yours.',
            noteLabel: 'LUGGAGE & EXTENSION:',
            noteText: 'In case there is an immediate booking, you can leave your luggage with us and return to pick it up without any problem. If there are no subsequent bookings, we will gladly allow you to leave a few hours later, either by leaving your bags with us or, if possible, staying in the apartment.'
          }
        },
        {
          id: 'checkout-steps',
          title: 'Departure Instructions',
          subtitle: 'Final details when leaving the apartment',
          icon: 'bi-box-arrow-right',
          content: {
            title: 'Departure Recommendations',
            highlight: 'A few simple details upon leaving',
            intro: 'To make your check-out as smooth and comfortable as possible, we would greatly appreciate your kind assistance with these few details when leaving the apartment:',
            steps: [
              'Please do not worry about making the bed; kindly leave it as it is.',
              'Place used towels in the shower, hung on the shower door.',
              'If you have any remaining waste bags, we would deeply appreciate it if you could leave them in the garbage bin located next to the stairs on the first floor.',
              'Regarding the keys, you may drop them off on the first floor or leave them on the door lock; please feel free to consult and coordinate this with us via WhatsApp.'
            ],
            footer: 'We hope you thoroughly enjoyed your stay and we wish you a safe and pleasant trip back home. Thank you very much!'
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
            {selectedTopic && selectedTopicId === 'thanks' && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-heart-fill text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <div className="badge bg-gold text-dark mb-3 px-3 py-2 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
                  <i className="bi bi-stars me-1"></i> {selectedTopic.content.highlight}
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  {selectedTopic.content.intro}
                </p>

                <p className="text-muted mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {selectedTopic.content.reviewText}
                </p>

                <p className="text-muted mb-3" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {selectedTopic.content.privateText}
                </p>

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

            {selectedTopic && selectedTopicId === 'checkout-time' && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-clock-fill text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <div className="badge bg-gold text-dark mb-3 px-3 py-2 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
                  <i className="bi bi-hourglass-split me-1"></i> {selectedTopic.content.highlight}
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  {selectedTopic.content.description}
                </p>

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

            {selectedTopic && selectedTopicId === 'checkout-steps' && (
              <div>
                <div className="d-flex align-items-center gap-2 mb-3 pb-2 border-bottom">
                  <i className="bi bi-box-arrow-right text-gold fs-5"></i>
                  <h5 className="fw-bold fs-6 mb-0">{selectedTopic.content.title}</h5>
                </div>

                <div className="badge bg-gold text-dark mb-3 px-3 py-2 rounded-pill fw-semibold w-100 text-center" style={{ fontSize: '12px' }}>
                  <i className="bi bi-check2-circle me-1"></i> {selectedTopic.content.highlight}
                </div>

                <p className="text-muted mb-3" style={{ fontSize: '13.5px', lineHeight: '1.5' }}>
                  {selectedTopic.content.intro}
                </p>

                <ul className="d-flex flex-column gap-2 mb-4 ps-3 text-muted" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                  {selectedTopic.content.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>

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
          </div>
        </>
      )}
    </div>
  );
}