import React, { useEffect, useState } from 'react';
import './App.css';
import './Fonts.css';
import './AMedia-queries.css';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showMirrorImage, setShowMirrorImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.scroll-content');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        const activationPoint = window.innerHeight * 0.5; // Ajustez la fraction selon vos besoins
  
        if (elementPosition.top <= activationPoint && !showContent) {
          setShowContent(true);
        }
  
        // Check if the user has scrolled down after 'description-text' is displayed.
        if (showContent && window.scrollY > elementPosition.bottom) {
          setShowMirrorImage(true);
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showContent]);

  return (
    <div className="background">
      <nav className="container-nav">
        <div className="logo">Your Logo</div>
        <button className="preorder-button">Preorder Now</button>
      </nav>
      <div className="content">
        <h1 className="main-title">
          NOUS SOMMES YOLO <br />
          UNE AGENCE DIGITALE QUI <br />
          RÉVOLUTIONNE L'EXCEPTIONNEL
        </h1>

        {/* Scroll buttons */}
        <div className={`scroll-content ${showContent && 'show'}`}>
          <p className='description-text'>
            À l'ère du numérique, nous façonnons la confiance avec l'excellence.
          </p>

          <div className='all-buttons'>
            <div className="buttons">
              <button className="preorder-button">SITES WEB</button>
              <button className="preorder-button">DESIGN</button>
            </div>
            <div className="buttons">
              <button className="preorder-button">RÉFÉRENCEMENT</button>
              <button className="preorder-button">SÉCURITÉ</button>
            </div>
          </div>

          <div className="description">
            YOLO is a company that offers the latest research when it comes to carbon
            fiber composites. We use the best technology in the world, and our products
            are designed to provide the most strength, durability, and comfort possible.
          </div>
        </div>

        {/* Mirror Image */}
        {showMirrorImage && (
        <div className={`scroll-content show`}>
          <div className={`mirror-image ${showMirrorImage ? 'show' : ''}`}>
            <div className="description-transition">
              <p className='description-text lh'>
                Notre Expertise Web <br /> au service de Couleur de Son
              </p>

              <p className='description-text-small'>
              Le site web Couleur de Son est bien plus qu'une simple vitrine. <br /><br />
              Il est le reflet de son image, de leur engagement auprès des clients. <br /><br />
              Notre expertise web a permis de mettre en avant la qualité des services proposés, <br /><br />
              de faciliter la navigation des visiteurs et d'améliorer la visibilité en ligne.
              </p>
            </div>
            <div className='image-w'>
              <div className={`image-transition ${showMirrorImage ? 'show' : ''}`}></div>
            </div>

          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default App;