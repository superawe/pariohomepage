import React from "react";
import Header from "../../components/Header";
import Section from "../../components/Section";
import InViewVideo from "../../components/InViewVideo";
import InViewContactForm from "../../components/InViewContactForm";
//import { NavHashLink as Link } from "react-router-hash-link";
import * as Scroll from "react-scroll";

function StartPage() {
  return (
    <div id="home">
      <Header
        title="PARIO"
        text={
          <span>
            Vi bygger smart mjukvara på nätet. Stabilitet, skalbarhet och enkel
            drift är ledord.
          </span>
        }
        buttonLabel="Läs mer"
      ></Header>

      <Section
        name="about"
        classList="text-center"
        html={
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-white mb-4">Smart mjukvara på nätet</h2>
                <p className="text-white-50">
                  Pario är ett konsultbolag i Stockholm som består av mig, Arvid
                  Sahlin, som ni ser på bilden ovan. Jag har lång erfarenhet av
                  mjukvaruutveckling och har jobbat både som konsult och med
                  egna produkter. Inom produktutveckling jobbar jag både med
                  idé, planering och genomförande och jag tycker om att jobba i
                  team med smarta människor.
                  <br />
                  På tekniksidan är jag just nu mest intresserad av Serverless,
                  Azure cloud solutions, API-design, c# och prisvärd skalbarhet.
                  Till vardags är det mest konsulting inom systemutveckling som
                  gäller. Scrolla vidare för att läsa om olika{" "}
                  <Scroll.Link
                    className="textlink"
                    smooth={true}
                    duration={500}
                    to="projects"
                  >
                    projekt
                  </Scroll.Link>{" "}
                  som jag varit delaktig i, eller gå till{" "}
                  <Scroll.Link
                    smooth={true}
                    duration={500}
                    to="contact"
                    className="textlink"
                  >
                    kontakt
                  </Scroll.Link>{" "}
                  om du vill få tag i mig.
                </p>
              </div>
            </div>
            <img
              src="assets/img/ipad_white.png"
              className="img-fluid"
              alt=""
            ></img>
          </div>
        }
      ></Section>

      <Section
        name="projects"
        classList="bg-light"
        html={
          <div className="container">
            {/* Featured Project Row */}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src="assets/img/wnsoftware.jpg"
                  alt=""
                ></img>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="featured-text text-center text-lg-left">
                  <h4>Wide narrow</h4>
                  <p className="text-black-50 mb-0">
                    Wide narrow SaaS mjukvara, ett molnbaserat system för ökad
                    produktivitet för intelligence teams. Ett urval av använda
                    tekniker; React, .Net c# api, SQL-server, Machine learning,
                    indexsök. Wide narrow är ett långt konsultuppdrag där jag
                    jobbat som CTO och systemutvecklare med idéer och
                    genomförande. Läs mer om produkten på{" "}
                    <a
                      href="https://www.widenarrow.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      widenarrow.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Project Row */}
            <div className="row align-items-center no-gutters mb-4 mb-lg-5">
              <div className="col-xl-8 col-lg-7">
                <img
                  className="img-fluid mb-3 mb-lg-0"
                  src="assets/img/bodhiapp2.jpg"
                  alt=""
                ></img>
              </div>

              <div className="col-xl-4 col-lg-5 order-lg-first">
                <div className="featured-text-right text-center text-lg-left">
                  <h4>Bodhi</h4>
                  <p className="text-black-50 mb-0">
                    Mjukvara och process för att ta tillvara på ditt teams idéer
                    och innovationskraft. Ett urval av använda tekniker; React,
                    Serverless c# api, Table storage, köhantering och triggers.
                    Minimala driftkostnader med maximal skalbarhet. Bodhi är en
                    egen startup där jag är delgrundare och utvecklare. Läs mer
                    om produkten på{" "}
                    <a
                      href="https://bodhiapp.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      bodhiapp.io
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Project One Row */}
            <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/img/softrunning.jpg"
                  alt=""
                ></img>
              </div>
              <div className="col-lg-6">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-left">
                      <h4 className="text-white">Soft running</h4>
                      <p className="mb-0 text-white-50">
                        En experimentell iOs-app baserad på antagandet att din
                        löpning kan förbättras genom direkt feedback på
                        analyserad rörelse. Eget hobbyprojekt med idé, design
                        och utveckling. Testa produkten på
                      </p>
                      <p></p>
                      <p className="mb-0 text-white-50">
                        <a
                          href="https://apps.apple.com/se/app/soft-running/id1254400136"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="assets/img/appstore_blk.svg" alt=""></img>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Two Row */}
            <div className="row justify-content-center no-gutters">
              <div className="col-lg-6">
                <div className="img-overlay"></div>
                <InViewVideo></InViewVideo>
              </div>
              <div className="col-lg-6 order-lg-first">
                <div className="bg-black text-center h-100 project">
                  <div className="d-flex h-100">
                    <div className="project-text w-100 my-auto text-center text-lg-right">
                      <h4 className="text-white">3D Head puppets</h4>
                      <p className="mb-0 text-white-50">
                        Ett kul litet hobbyprojekt för att utforska
                        möjligheterna med iPhones true depth-kamera. Tekniker
                        använda är iOs swift, ArKit, Blender face rigging.
                        <br />
                        Testa produkten på:
                      </p>
                      <p></p>
                      <p className="mb-0 text-white-50">
                        <a
                          href="https://apps.apple.com/se/app/3d-head-puppets/id1316497889"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src="assets/img/appstore_blk.svg" alt=""></img>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      ></Section>
      <InViewContactForm></InViewContactForm>
      <Section
        name="contact"
        classList="bg-black"
        html={
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-map text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Adress</h4>
                    <hr className="my-4"></hr>
                    <div className="small text-black-50">Pario AB</div>{" "}
                    <div className="small text-black-50">
                      Box 7391, 103 91 Stockholm
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-envelope text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">E-post</h4>
                    <hr className="my-4"></hr>
                    <div className="small text-black-50">
                      <a href="mailto:">arvid@pario.se</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <div className="card py-4 h-100">
                  <div className="card-body text-center">
                    <i className="fa fa-phone text-primary mb-2"></i>
                    <h4 className="text-uppercase m-0">Telefon</h4>
                    <hr className="my-4"></hr>
                    <div className="small text-black-50">+46 73 600 13 70</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="social d-flex justify-content-center">
              <a
                href="https://github.com/superawe"
                className="mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        }
      ></Section>
    </div>
  );
}

export default StartPage;
