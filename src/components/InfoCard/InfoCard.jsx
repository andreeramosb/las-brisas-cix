import React from 'react';

export default function InfoCard({ iconClass, iconBg, title, subtitle, bgImage, onClick }) {
  return (
    <div 
      className={`custom-card rounded-4 p-3 mb-3 shadow-sm text-decoration-none d-block cursor-pointer transition position-relative overflow-hidden ${bgImage ? 'text-white border-0' : ''}`}
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        ...(bgImage ? { 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${bgImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          minHeight: '130px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        } : {})
      }}
    >
      <div className="d-flex align-items-center justify-content-between position-relative z-1">
        <div className="d-flex align-items-center gap-3">
          {iconClass && (
            <div 
              className={`rounded-3 d-flex align-items-center justify-content-center ${iconBg}`} 
              style={{ width: '48px', height: '48px', minWidth: '48px' }}
            >
              <i className={`bi ${iconClass} fs-5 text-dark`}></i>
            </div>
          )}
          <div>
            <span className="d-block fw-bold fs-5" style={{ textShadow: bgImage ? '0 2px 4px rgba(0,0,0,0.6)' : 'none' }}>
              {title}
            </span>
            <span className={bgImage ? 'text-light opacity-90' : 'text-muted'} style={{ fontSize: '13px', textShadow: bgImage ? '0 1px 2px rgba(0,0,0,0.6)' : 'none' }}>
              {subtitle}
            </span>
          </div>
        </div>
        <div className={`fs-5 ${bgImage ? 'text-white' : 'text-muted'}`}>
          <i className="bi bi-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}