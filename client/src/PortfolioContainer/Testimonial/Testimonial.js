import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import Footer from "../../PortfolioContainer/Footer/Footer";
import jason from "../../../src/img/Testimonial/jason.png";
import alex from "../../../src/img/Testimonial/alex.png";
import myles from "../../../src/img/Testimonial/myles.png";
import pedro from "../../../src/img/Testimonial/pedro.png";
import shape from "../../../src/img/Testimonial/shape-bg.png";

import './Testimonial.css'

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return
    Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscrtipion =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
        items: 1,
        },
        768: {
        items: 1,
        },
        1000: {
        items: 3,
        },
    },
};

  return (
    <div>
      <ScreenHeading
        title={'Testimonial'}
        subHeading={'What People Say About Me'}
      />
      <section className='testimonial-section fade-in' id={props.id || ""}>
        <div className='container'>
          <div className='row'>
            <OwlCarousel className='owl-carousel' id='testimonial-carousel' {...options}>
              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      &nbsp; Luca is always keen to learn and knowledgeable about working effectively in a team. &nbsp;
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      {/* <li>
                        <i className='fa fa-star-half' />
                      </li> */}
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src={jason}
                      alt='no internet connection'
                    ></img>
                    <h5>Jason Yip</h5>
                    <p>Sr. Agile Coach, Spotify</p>
                  </div>
                </div>
              </div>,

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      &nbsp; Luca is thoughtful and thorough and always takes the extra steps necessary to ensure the work he is doing will have an impact. &nbsp;
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      {/* <li>
                        <i className='fa fa-star-half' />
                      </li> */}
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src={alex}
                      alt='no internet connection'
                    ></img>
                    <h5>Alex Simonoff</h5>
                    <p>Sr. Data Scientist, Spotify</p>
                  </div>
                </div>
              </div>,


              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      &nbsp; Luca is one of those people that you meet and it feels like you've known them your whole life. He has a way of making people feel comfortable and is honestly one of the best people I've worked with regardless of the role. I didn't even know what agile thinking was but, he explained it to me in terms I could understand. He is a force and an asset to any team. Luca is a great leader, mentor, coach, AND a great developer.
                      &nbsp;
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      {/* <li>
                        <i className='fa fa-star-half' />
                      </li> */}
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src={pedro}
                      alt='no internet connection'
                    ></img>
                    <h5>Pedro Delgadillo</h5>
                    <p>Full Stack Developer, US Army Veteran</p>
                  </div>
                </div>
              </div>,

              <div className='col-lg-12'>
                <div className='testi-item'>
                  <div className='testi-comment'>
                    <p>
                      <i className='fa fa-quote-left' />
                      &nbsp; First things first Luca is a fountain of knowledge. His experience in the tech industry has been very insightful for someone that is just getting into this field. He broke down agile methodology to myself and other students to an easier understanding on how it works and why it's so successful in production. I had the pleasure with working him directly over several projects while at devCodeCamp. Luca is very easy going, has go getting attitude and is transparent with his communication. I'd love to collaborate with him in the future if our paths cross again. &nbsp;
                      <i className='fa fa-quote-right' />
                    </p>
                    <ul className='stars list-unstyled'>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      <li>
                        <i className='fa fa-star' />
                      </li>
                      {/* <li>
                        <i className='fa fa-star-half' />
                      </li> */}
                      <li>
                        <i className='fa fa-star' />
                      </li>
                    </ul>
                  </div>
                  <div className='client-info'>
                    <img
                      src={myles}
                      alt='no internet connection'
                    ></img>
                    <h5>Myels Lister</h5>
                    <p>Full Stack Developer, USMC Veteran</p>
                  </div>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
        <Footer />
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  )
}
