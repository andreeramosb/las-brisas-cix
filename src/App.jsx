import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import WelcomeDetail from './pages/WelcomeDetail';
import InternetDetail from './pages/InternetDetail';
import RulesDetail from './pages/RulesDetail';
import ContactDetail from './pages/ContactDetail';
import GoodbyeDetail from './pages/GoodbyeDetail';
import ApartmentDetail from './pages/ApartmentDetail';
import AccessDetail from './pages/AccessDetail';
import TravelDetail from './pages/TravelDetail'; // Asegúrate de que la ruta sea correcta

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('ES');
  const [currentView, setCurrentView] = useState('home');

  const handleCardSelect = (cardId) => {
    if (cardId === 'welcome') {
      setCurrentView('welcome');
    } else if (cardId === 'wifi') {
      setCurrentView('internet');
    } else if (cardId === 'access') {
      setCurrentView('access'); // <--- 2. Enlazado con la vista de ingreso
    } else if (cardId === 'rules') {
      setCurrentView('rules');
    } else if (cardId === 'contact') {
      setCurrentView('contact');
    } else if (cardId === 'goodbye') {
      setCurrentView('goodbye');
    } else if (cardId === 'apartment' || cardId === 'dept') {
      setCurrentView('apartment');
    } else if (cardId === 'places') {
      setCurrentView('travel'); // <--- AQUÍ ESTABA EL DETALLE: Conectamos 'places' con TravelDetail

    } else {
      alert(lang === 'ES' ? `Sección ${cardId} en desarrollo...` : `Section ${cardId} under development...`);
    }
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <div className="container py-3" style={{ maxWidth: '440px' }}>

        {/* Navbar Global */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          lang={lang}
          setLang={setLang}
        />

        {/* Vistas de la aplicación */}
        {currentView === 'home' && (
          <Home
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onEnter={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'menu' && (
          <Menu
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('home')}
            onSelectCard={handleCardSelect}
          />
        )}

        {currentView === 'welcome' && (
          <WelcomeDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'internet' && (
          <InternetDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {/* 3. Renderizado de la vista de Acceso / Ingreso */}
        {currentView === 'access' && (
          <AccessDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'rules' && (
          <RulesDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'contact' && (
          <ContactDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'goodbye' && (
          <GoodbyeDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

        {currentView === 'apartment' && (
          <ApartmentDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}
        {currentView === 'travel' && (
          <TravelDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            lang={lang}
            setLang={setLang}
            onBack={() => setCurrentView('menu')}
          />
        )}

      </div>
    </div>
  );
}