import React from 'react'
import Frontfooter from './Frontfooter'

const Prayer = () => {
  return (
    <div>
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
              <a href="user/prayer">Prayer timing</a>
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
            <h2>Prayer Timing</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <span>Prayers</span>
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
      <Frontfooter/>
    </div>
  )
}

export default Prayer
