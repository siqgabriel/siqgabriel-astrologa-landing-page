'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/astrologa.png"
      data-overlay-dark="2"
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-15 col-lg-8">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30">
                  <img src="/assets/imgs/header/star.png" alt="" />
                </span>{' '}
                Terapias Energéticas e Espirituais
              </h6>
              <h1 className="fw-700 mb-10">
                Luz Amor é
                <br />
                um espaço{' '}dedicado ao{' '}
                <span className="main-color">{'  '}cuidado energético</span>
              </h1>
              <h3>
                espiritual e emocional, com 20 anos de atuação
              </h3>
              <div className="row">
                <div style={{ width: "100%" }}>
                  {/* <div className="text mt-30">
                    <p className='p1'>
                      Quando tudo parece confuso, emoções, relacionamentos, decisões ou caminhos, a orientação certa traz clareza, direção e alívio.{' '}
                      <strong>
                        Atendimento espiritual individual para entender o seu momento e seguir com mais segurança.
                      </strong>
                    </p>
                  </div> */}
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="https://wa.me/5511981884999?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta." target='_blank'
                      className="butn butn-md butn-bord radius-30"
                    >
                      Falar agora no WhatsApp {" "}
                      <i className="fab fa-whatsapp" style={{ fontSize: '20px', marginLeft: '10px' }}></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">contato@juluzamor.com.br</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Telefone :</h6>
            <span className="p-color">(11) 9000-0000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
