import React, { useState, useEffect, useCallback } from "react"
import './App.css';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

function App() {
  const names = [
    `I'm React Developer`, 'Web Developer', 'Next JS Developer'
  ]

  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle])

  return (
    <>
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>

      <header id="header">
        <div className="d-flex flex-column">

          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a>Pawan G. Sharma</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/PK9998?t=6vYufp5Fjry10cRh4cD6rg&s=09" className="twitter" target="_blank"><i className="bx bxl-twitter"></i></a>
              <a href="https://join.skype.com/invite/ymyAr79PMckH" className="google-plus" target="_blank"><i className="bx bxl-skype"></i></a>
              <a href="https://www.linkedin.com/in/pawan-sharma-3565a2163" className="linkedin" target="_blank"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href="#works" className="nav-link scrollto"><i className="bi bi-brush"></i> <span>Works</span></a></li>
              <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>Pawan G. Sharma</h1>
          <p>{newName} <span className="typed" data-typed-items="Designer, Developer, Freelancer"></span></p>
        </div>
      </section>

      <main id="main">

        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">A</span>bout</h2>
              <p>I'm React Developer, passionate about creating and developing web interfaces, websites using React-JS and Next JS.
                My main focus is to make the user interfaces more responsive and user friendly using Bootstrap and css.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="/assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>React Developer.</h3>
                <p className="fst-italic">
                  I am passionate React Developer with 1+ years of experience working in the field of Web Development. I
                  have a Master’s Degree in Computer Science from the Gujarat Technological University.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>21 October 1995</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>8200977141</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Surat</span></li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>pawansharma9998@gmail.com</span></li>
                      <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="facts" className="facts">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">F</span>un Facts</h2>
            </div>

            <div className="row no-gutters">

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                <div className="count-box">
                  <i className="bi bi-music-note-beamed"></i>
                  <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Music</strong> Listening</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="count-box">
                  <i className="bi bi-car-front-fill"></i>
                  <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Travelling</strong></p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" className="purecounter"></span>
                  <p><strong>Reading </strong> Book</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="resume" className="resume">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">R</span>esume</h2>
            </div>

            <div className="row">
              <div className="col-lg-6" data-aos="fade-up">
                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>Master of Computer Application</h4>
                  <h5>2019 - 2021</h5>
                  <p><em>Vidyabharti Trust college of MCA &amp; MBA</em></p>
                </div>
                <div className="resume-item">
                  <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                  <h5>2016 - 2019</h5>
                  <p><em>Vimal Tormal Poddar BCA &amp; Commerce College</em></p>
                </div>
                <div className="resume-item">
                  <h4>HSC(Science)</h4>
                  <h5>2014</h5>
                  <p><em>Shree Gurukrupa Vidhya Sankul</em></p>
                </div>
                <div className="resume-item">
                  <h4>SSC</h4>
                  <h5>2011</h5>
                  <p><em>Gyanbharti School Of Science And Commerce</em></p>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>React Developer</h4>
                  <h5>07 Dec 2021 - Present</h5>
                  <p><em>Rain Infotech Pvt. Ltd. </em></p>
                  <ul>
                    <li>Meeting with the development team to discuss user interface ideas and applications.</li>
                    <li>Reviewing application requirements and interface designs.</li>
                    <li>Identifying web-based user interactions.</li>
                    <li>Developing and implementing highly responsive user interface components using react concepts.</li>
                    <li>Writing application interface codes using JavaScript following react.js workflows.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="skills" className="skills section-bg">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">S</span>kills</h2>
            </div>

            <div className="row skills-content">

              <div className="col-lg-12" data-aos="fade-up">

                <div className="container text-center">
                  <div className="row">
                    <div className="col border bg-success text-white">HTML</div>
                    <div className="col border bg-success text-white">CSS/CSS3</div>
                    <div className="col border bg-success text-white">JavaScript</div>
                    <div className="col border bg-success text-white">Bootstrap</div>
                    <div className="col border bg-success text-white">jQuery</div>
                    <div className="col border bg-success text-white">Bootstrap</div>
                    <div className="col border bg-success text-white">Material CSS</div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        <section id="works" className="services">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">R</span>ecent Works</h2>
              <p><i className="bi bi-globe-americas me-2"></i><strong>MOBILE &amp; WEB LAYOUT</strong></p></div>

            <div className="row">
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                <div className="icon"><i className="bi bi-building"></i></div>
                <h4 className="title"><a href="">SOP</a></h4>
                <p className="description">SOP stands for Standard Operating Procedure. Company internal management system like department, company's rules list.</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><i className="bi bi-receipt"></i></div>
                <h4 className="title"><a href="">Bill With Us</a></h4>
                <p className="description">In this there is admin doctor and patient model doctor will treat patient which patient will be booked.</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="bi bi-rainbow"></i></div>
                <h4 className="title"><a href="">Company UI</a></h4>
                <p className="description">Changed the entire UI of the company's website in the next JS language with multiple languages.</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon"><i className="bi bi-coin"></i></div>
                <h4 className="title"><a href="">Crome</a></h4>
                <p className="description">
                  Through this project, you can create your own crypto currency and this project was in the Next JS.</p>
              </div>
              <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon"><i className="bi bi-currency-bitcoin"></i></div>
                <h4 className="title"><a href="">MNROI</a></h4>
                <p className="description">Admin can manage bitcoin and have full details of client side blocks. Client can transaction. </p>
              </div>
            </div>

          </div>
        </section>

        <section id="testimonials" className="testimonials section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Testimonials</h2>
            </div>

            <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
              <div className="swiper-wrapper">
                <MDBCarousel showControls showIndicators>
                  <MDBCarouselItem
                    className='w-100 d-block '
                    itemId={1}
                    src='/assets/img/testimonials-1.jpg'
                    alt='...'
                  >
                    <h1><p className="text-danger fw-bold"> Mr. Mihir Nasit</p></h1>
                    <p className="bg-success text-white">1 year of experience in web application development in Node JS and React JS environment. My task is to Developing REST apis.</p>
                    <p className="bg-success text-white">I have expertise and experience in a variety programming languages. Strong knowledge of web technologies such as HTML, CSS, Bootstrap, JavaScript, Node JS, Socket.io, React JS and others. Database skills like Mongodb, MySQL,</p>
                  </MDBCarouselItem>
                  <MDBCarouselItem
                    className='w-100 d-block'
                    itemId={2}
                    src='/assets/img/testimonials-2.jpg'
                    alt='...'
                  >
                    <h1><p className="text-danger fw-bold">Mr. Prayag Kothiya</p></h1>
                    <p className="bg-success text-white">1 year of experience in web application development in React JS environment.
                      Strong knowledge of web technologies such as HTML, CSS, Bootstrap, and others.
                    </p>
                    <p className="bg-success text-white">In-depth knowledge of JavaScript, React JS, jQuery, and other languages </p>
                  </MDBCarouselItem>
                </MDBCarousel>

              </div>
              <div className="swiper-pagination"></div>
            </div>

          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">

            <div className="section-title">
              <h2><span className="text-first">Get</span> in Touch</h2>
            </div>

            <div className="row" data-aos="fade-in">

              <div className="col-lg-12 d-flex align-items-stretch">
                <div className="info">
                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Phone:</h4>
                    <p><a href="tel:8200977141">+91 8200 977 141</a></p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>pawansharma9998@gmail</p>
                  </div>

                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Address:</h4>
                    <p>66, Biliya Nagar-1, navagam dindoli road, udhna, surat - 394210.</p>
                  </div>

                </div>

              </div>

              {/* <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" className="form-control" id="name" required />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="name">Your Email</label>
                      <input type="email" className="form-control" name="email" id="email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Subject</label>
                    <input type="text" className="form-control" name="subject" id="subject" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Message</label>
                    <textarea className="form-control" name="message" rows="10" required></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">Your message has been sent. Thank you!</div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div> */}

            </div>

          </div>
        </section>
      </main>



      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default App;
