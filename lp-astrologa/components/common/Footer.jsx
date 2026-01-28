import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-center">

          <div className="logo md-mb80" style={{ width: '300px' }}>
            <img src="/assets/imgs/astrologa-png-logo.webp" alt="" />
          </div>

        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14" style={{color:'#ffffff'}}>
              Copyright Astróloga da Energia | Todos os direitos reservados. © 2026 Powered by{' '}
              <span className="underline main-color">
                <a href="https://operion.com.br" target="_blank">
                  OPERION
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
