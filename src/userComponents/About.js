import React from 'react'
import Frontfooter from './Frontfooter'
import Frontheader from './Frontheader'

const About = () => {
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
  {/* Start header */}
  <header id="header" className="wpo-site-header wpo-header-style-3">
    <nav className="navigation navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="open-btn">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">
            {/* Logo icon */}
            <b>
             
            {/* <img
                src="../msjid/images/logoicon.png"
                alt="homepage"
                className="dark-logo"
              /> */}
              {/* Light Logo icon */}
              <img
                src="../assets/images/logoicon.png"
                alt="homepage"
                className="light-logo"
              />
             
            </b>
            {/*End Logo icon */}
            {/* Logo text */}
            <span>
              <h5 className='logo1'> Linkup-Community</h5>
             
             
            </span>{" "}
          </a>
        </div>
        <div
          id="navbar"
          className="navbar-collapse collapse navbar-right navigation-holder"
        >
          <button className="close-navbar">
            <i className="ti-close" />
          </button>
          <ul className="nav navbar-nav">
            <li className="menu-item-has-children">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="user/about">About</a>
            </li>
            <li className="menu-item-has-children">
              <a href="user/quranepak">Quran</a>
            </li>
            <li>
              <a href="donate.html">Qibla direction</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Prayer timing</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Calender</a>
            
            </li>
          </ul>
        </div>
        {/* end of nav-collapse */}
      </div>
      {/* end of container */}
    </nav>
  </header>
  {/* end of header */}
  {/* .wpo-breadcumb-area start */}
  <div className="wpo-breadcumb-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wpo-breadcumb-wrap">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>About</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* .wpo-breadcumb-area end */}
  {/* wpo-about-area start */}
  <div className="wpo-about-area-3 section-padding">
    <div className="container">
      <div className="wpo-about-wrap">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="wpo-about-img-3">
              <img src="msjid/images/about3.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 colsm-12">
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
    </div>
  </div>
  {/* wpo-about-area end */}
  {/* courses-area start */}
  {/* footer-area start */}
  <div className="wpo-ne-footer-2">
    {/* start wpo-site-footer */}
    <Frontfooter/>
    {/* end wpo-site-footer */}
  </div>
</div>

    </div>
  )
}

export default About
