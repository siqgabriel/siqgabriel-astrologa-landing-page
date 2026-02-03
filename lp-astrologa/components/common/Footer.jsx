import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container ontop">
        <div className="row justify-content-center align-items-center" style={{height:'100px'}}>

          <div className="logo lg-mb80" style={{ width: '300px' }}>
            <a className="logo text-center" href="#" style={{ width: '100%', padding: '10px 0', fontSize: '30px', color: 'white' }}>
              JU LUZ AMOR
            </a>
          </div>

        </div>
        <div className="pt-30 pb-30 bord-thin-top">
          <div className="text-center">
            <p className="fz-14" style={{ color: '#ffffff' }}>
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
