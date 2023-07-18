import React from 'react'
import Frontfooter from './Frontfooter'
import Frontheader from './Frontheader'

const Front = () => {
  return (
    <div>
      <div className="page-wrapper">
  {/* start preloader */}
  <div className="preloader">
    <div className="sk-folding-cube">
      <div className="sk-cube1 sk-cube" />
      <div className="sk-cube2 sk-cube" />
      <div className="sk-cube4 sk-cube" />
      <div className="sk-cube3 sk-cube" />
    </div>
  </div>
  {/* end preloader */}
  <Frontheader/>
  {/* start of hero */}
  <section className="hero hero-style-1">
    <div className="hero-slider">
      <div className="slide">
        <div className="container">
          <img
            src="msjid/images/slider/slide-1.jpg"
            alt=""
            className="slider-bg"
          />
          <div className="row">
            <div className="col col-md-8 col-md-offset-2 slide-caption">
              <div className="slide-top">
                <span>Let’s Know Islam</span>
              </div>
              <div className="slide-title">
                <h2>Read! In the Name of your Lord, Who has created</h2>
              </div>
              <div className="btns">
                <a href="#" className="theme-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="container">
          <img
            src="msjid/images/slider/slide-2.jpg"
            alt=""
            className="slider-bg"
          />
          <div className="row">
            <div className="col col-md-8 col-md-offset-2 slide-caption">
              <div className="slide-top">
                <span>Let’s Know Islam</span>
              </div>
              <div className="slide-title">
                <h2>Read! In the Name of your Lord, Who has created</h2>
              </div>
              <div className="btns">
                <a href="#" className="theme-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide">
        <div className="container">
          <img
            src="msjid/images/slider/slide-3.jpg"
            alt=""
            className="slider-bg"
          />
          <div className="row">
            <div className="col col-md-8 col-md-offset-2 slide-caption">
              <div className="slide-top">
                <span>Let’s Know Islam</span>
              </div>
              <div className="slide-title">
                <h2>Read! In the Name of your Lord, Who has created</h2>
              </div>
              <div className="btns">
                <a href="#" className="theme-btn">
                  Discover More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of hero slider */}
  {/* wpo-about-area start */}
  <div className="wpo-about-area-2 section-padding">
    <div className="container">
      <div className="wpo-about-wrap">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="wpo-about-img-3">
              <img src="msjid/images/about.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="wpo-about-text">
              <div className="wpo-section-title">
                <span>About Us</span>
                <h2>Seeking of knowledge is a duty of every Muslim</h2>
              </div>
              <p>
                The rise of Muslims to the zenith of civilization in a period of
                four decades was based on lslam's emphasis on learning. This is
                obvious when one takes a look at the Qur'an and the traditions
                of Prophet Muhammad which are filled with references to
                learning, education, observation.
              </p>
              <div className="btns">
                <a href="about.html" className="theme-btn" tabIndex={0}>
                  Discover More
                </a>
                <ul>
                  <li className="video-holder">
                    <a
                      href="https://www.youtube.com/embed/LTqRm53QjI0"
                      className="video-btn"
                      data-type="iframe"
                      tabIndex={0}
                    />
                  </li>
                  <li className="video-text">
                    <a
                      href="https://www.youtube.com/embed/LTqRm53QjI0"
                      className="video-btn"
                      data-type="iframe"
                      tabIndex={0}
                    >
                      Watch Our Video
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="timer-section">
        <div className="row">
          <div className="col-md-5">
            <div className="timer-text">
              <h2>Prayer Times</h2>
              <p>Prayer times in United Arab Emirates</p>
              <span>Mon 15 Jan, 2020</span>
            </div>
          </div>
          <div className="col-md-5 col-md-offset-1">
            <div className="timer-num">
              <ul>
                <li>
                  Fajr<span>05:47</span>
                </li>
                <li>
                  Sunrize<span>07:05</span>
                </li>
                <li>
                  Dhuhr<span>12:34</span>
                </li>
                <li>
                  Asr<span>15:35</span>
                </li>
                <li>
                  Maghrib<span>17:58</span>
                </li>
                <li>
                  Isha'a<span>19:15</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="timer-shape1">
          <img src="msjid/images/prayer-shape/2.png" alt="" />
        </div>
        <div className="timer-shape2">
          <img src="msjid/images/prayer-shape/1.png" alt="" />
        </div>
        <div className="timer-shape3">
          <img src="msjid/images/prayer-shape/3.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* wpo-about-area end */}
  {/* service-area-start */}
  <div className="service-area-2">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wpo-section-title">
            <span>What We Offer</span>
            <h2>Our Populer Services</h2>
          </div>
        </div>
      </div>
      <div className="service-wrap">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-3.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Quran Memorization</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-4.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Special Child Care</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-5.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Mosque Development</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-6.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Matrimonial</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-7.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Funerals</a>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 custom-grid col-12">
            <div className="service-single-item">
              <div className="service-single-img">
                <img src="msjid/images/service/img-8.png" alt="" />
              </div>
              <div className="service-text">
                <h2>
                  <a href="service-single.html">Help Poor</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* service-area-end */}
  {/* payment-section start*/}
  <div className="payment-section section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="payment-text">
            <span>Donate Now</span>
            <h2>Donate Some Money &amp; Save The Muslim Ummah.</h2>
            <p>
              How can we reject the faith in Allah? seeing that ye were without
              life, and He gave you life; then will He cause you to die, and
              will again bring you to life; and again to Him will ye return.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="wpo-donations-form">
            <h2>Payment Information</h2>
            <div className="row">
              <form>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    id="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Phone"
                    id="Phone"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group clearfix">
                  <input
                    type="text"
                    className="form-control"
                    name="Adress"
                    id="Adress"
                    placeholder="Adress"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Card"
                    id="Card"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Expire"
                    id="Expire"
                    placeholder="Expire Date"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="CVC"
                    id="CVC"
                    placeholder="CVC"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Amount"
                    id="Amount"
                    placeholder="Amount"
                  />
                </div>
                <div className="col-lg-12 col-12 form-group">
                  <button className="theme-btn" type="submit">
                    Donate Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* payment-section end*/}
 
  {/* support-area start */}
  <div className="support-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="support-text">
            <span>Support Us</span>
            <h2>We Need Your Help</h2>
            <p>
              The Weekend School of the Islamic Center of Allah is committed to
              providing quality Islamic Education according to the Quran.
            </p>
            <div className="btns">
              <a href="donate.html" className="theme-btn-s3">
                Donate Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="progress-area">
            <div className="row">
              <div className="col-lg-4 col-sm-4 custom-grid">
                <div className="progress-wrap">
                  <div className="progressbar" data-animate="false">
                    <div className="circle" data-percent={56}>
                      <div />
                    </div>
                  </div>
                  <span>Mosque</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 custom-grid">
                <div className="progress-wrap">
                  <div className="progressbar2" data-animate="false">
                    <div className="circle" data-percent={45}>
                      <div />
                    </div>
                  </div>
                  <span>Expenses</span>
                </div>
              </div>
              <div className="col-lg-4 col-sm-4 custom-grid">
                <div className="progress-wrap">
                  <div className="progressbar3" data-animate="false">
                    <div className="circle" data-percent={74}>
                      <div />
                    </div>
                  </div>
                  <span>Feed Hungry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* support-area start */}
 
  {/* footer-area start */}
  <div className="wpo-ne-footer">
    {/* start wpo-news-letter-section */}
    <section className="wpo-news-letter-section">
      <div className="container">
        <div className="wpo-news-letter-wrap">
          <div className="row">
            <div className="col col-md-10 col-md-offset-1 col-sm-8 col-sm-offset-2">
              <div className="wpo-newsletter">
                <h3>Follow us For ferther information</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas.
                </p>
                <div className="wpo-newsletter-form">
                  <form>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter Your Email"
                        className="form-control"
                      />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end container */}
    </section>
    {/* end wpo-news-letter-section */}
    {/* start wpo-site-footer */}
   <Frontfooter/>
    {/* end wpo-site-footer */}
  </div>
</div>

    </div>
  )
}

export default Front
