import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/astrologa1.png" alt="" />
              </div>
              <span className="icon">
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
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre mim</h6>
              <div className="text">
                <h4 className="mb-30">
                  Orientação espiritual{' '}
                  <span className="fw-200">
                    com verdade, acolhimento e direção
                  </span>{' '}
                </h4>
                <p>
                  <strong>
                    Você não está aqui por acaso.
                  </strong>
                  <br />
                  Trabalho com orientação espiritual personalizada para quem sente que algo precisa mudar, mas ainda não sabe por onde começar. Cada consulta é um espaço seguro de escuta, clareza e direcionamento, respeitando seu momento, sua história e suas escolhas.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+de 10 ANOS</h3>
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
                    <i className="fab fa-whatsapp" style={{ fontSize: '20px', marginLeft: '5px' }}></i>
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
