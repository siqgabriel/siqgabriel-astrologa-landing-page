import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/insta.png" alt="" />
              </div>
              {/* <span className="icon">
                <img src="/assets/imgs/resume/2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/4.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/1.png" alt="" />
              </span> */}
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre mim</h6>
              <div className="text">
                <h4 className="mb-30">
                  Comandando pela Ju, 45 Médium Kardecista,{' '}
                  <span className="fw-200">
                    com especialização de 9 anos pela FUCESP, com espiritualidade consciente
                  </span>{' '}
                </h4>
                <p>
                  É também Reikiana nível 3B, com especialização no Japão (2024) com a técnica Zazen para atendimento à Distância

                  Como Cristaloterapeuta, possui formação internacional com especializações em Nova York (2019 e 2025), integrando o uso dos cristais ao campo energético, emocional e espiritual
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+de 20 ANOS</h3>
                          <h6 className="p-color sub-title">
                            de atendimentos espirituais
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+1.000</h3>
                          <h6 className="p-color sub-title">
                            consultas realizadas
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center mt-60">
                  <a
                    href="https://wa.me/5511959997498?text=Ol%C3%A1!%20Gostaria%20de%20realizar%20uma%20consulta."
                    target='_blank'
                    className="butn butn-md butn-bord1 radius-30"
                    style={{ textAlign: 'center' }}
                  >
                    Se você sente que precisa de respostas, este é o momento de buscar orientação.
                    <i className="fab fa-instagram" style={{ fontSize: '20px', marginLeft: '5px' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
