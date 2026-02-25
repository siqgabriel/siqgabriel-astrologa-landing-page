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
                  <span className="fw-200">Comandando pela Ju,</span>
                  {' '}45 Médium Kardecist.
                </h4>
                <h5 className="mb-10 pt-10">
                  Formação:
                </h5>
                <ul className='text'>
                  <li>
                    9 anos FUCESP
                  </li>
                  <li>
                    2019 e 2025 CRISTALOTERAPIA em NY
                  </li>
                  <li>
                    2024 Tecnica Zazen e REIKI 3b no Japão
                  </li>
                </ul>

                <div className="numbers mt-20">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">+20 ANOS</h3>
                          <h6 className="p-color sub-title">
                            15 mil atendimentos
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
                    href="https://www.instagram.com/ju.luz.amor/"
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
