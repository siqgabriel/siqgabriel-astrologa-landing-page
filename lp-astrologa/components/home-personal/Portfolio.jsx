'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title mb-5">Meus serviços</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Serviços <span className="fw-200">personalizados.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="icon-img-100 mb-40">
                      <img src="/assets/imgs/serv-icons/1.png" alt="" />
                    </div>
                    <h4>Consultas de Tarot e Búzios</h4>
                  </div>
                  <div>
                    <p>
                      Leituras profundas para compreender situações, sentimentos e caminhos possíveis.
                    </p>
                    <a href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Agende uma consulta <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="icon-img-100 mb-40">
                      <img src="/assets/imgs/serv-icons/2.png" alt="" />
                    </div>
                    <h4>Orientação Amorosa</h4>
                  </div>
                  <div>
                    <p>
                      Clareza sobre vínculos, sentimentos, reconciliações e decisões no amor.
                    </p>
                    <a href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Agende uma consulta <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="icon-img-100 mb-40">
                      <img src="/assets/imgs/serv-icons/3.png" alt="" />
                    </div>
                    <h4>Abertura de Caminhos</h4>
                  </div>
                  <div>
                    <p>
                      Direcionamento espiritual quando tudo parece travado ou sem avanço.
                    </p>
                    <a href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Agende uma consulta <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="icon-img-100 mb-40">
                      <img src="/assets/imgs/serv-icons/4.png" alt="" />
                    </div>
                    <h4>Limpeza e Equilíbrio Energético</h4>
                  </div>
                  <div>
                    <p>
                      Indicado para cansaço constante, peso emocional e sensação de estagnação.
                    </p>
                    <a href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }}>
                      <span className="text sub-title">
                        Agende uma consulta <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg-card1">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="icon-img-100 mb-40">
                      <img src="/assets/imgs/serv-icons/5.png" alt="" />
                    </div>
                    <h4>Consultoria Espiritual Personalizada</h4>
                  </div>
                  <div>
                    <p>
                      Atendimento focado na sua história, desafios e momento de vida.
                    </p>
                    <a href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                      target='_blank'
                      className="mt-15" style={{ backgroundColor: '#ffffff', padding: '10px', borderRadius: '50px' }} >
                      <span className="text sub-title">
                        Agende uma consulta <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-bottom mt-100 mb-100">
        <div className="main-bg-card1 d-flex align-items-center">
          <h6 className="fz-20 fw-400">
            Atendimentos <span className="fw-600"> presenciais e online,</span>
            sempre com horário agendado
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
