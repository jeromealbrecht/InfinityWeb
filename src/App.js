import React, { useEffect, useState } from 'react';
import './App.css';
import './Fonts.css';
import './AMedia-queries.css';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.scroll-content');
      if (element) {
        const elementPosition = element.getBoundingClientRect();
        if (elementPosition.top <= window.innerHeight && !showContent) {
          setShowContent(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showContent]);
console.log(showContent);
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
        <div className={`scroll-content ${showContent && 'show'}`}>
          <p className='description-text'>
          À l'ère du numérique, nous façonnons la confiance avec l'excellence.
          </p>
          {/* <div className="buttons">
            <button className="preorder-button">SITES WEB</button>
            <button className="preorder-button">DESIGN</button>
            <button className="preorder-button">RÉFÉRENCEMENT</button>
            <button className="preorder-button">SÉCURITÉ</button>
          </div> */}

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
      </div>
    </div>
  );
};

export default App;