import React from 'react'

const Frontheader = () => {
  return (
    <div>
       <header id="header" className="wpo-site-header wpo-header-style-2">
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col col-md-6 col-sm-7 col-12">
            <div className="contact-intro">
              <ul>
                <li>
                  <i className="fi ti-location-pin" />
                  28 Street, Sargodha, Pakistan
                </li>
                <li>
                  <i className="fi flaticon-envelope" /> adnanbravo000@gmail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-md-6 col-sm-5 col-12">
            <div className="contact-info">
              <ul>
                <li>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-google" />
                  </a>
                </li>
                <li>
                  <a className="theme-btn-s2" href="user/register">
                    Become a Donor{" "}
                  </a>
                </li>
                <li>
                  <a className="theme-btn-s2" href="#">
                    Login{" "}
                  </a>
                </li>

               
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>{" "}
    {/* end topbar */}
    <div className="site-header header-style-1">
      <nav className="navigation navbar navbar-default original">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="open-btn">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            {/* <a className="navbar-brand" href="index.html">
              <img src="msjid/images/logo-2.png" alt="" />
            </a> */}
             <a className="navbar-brand" href="index.html">
            {/* Logo icon */}
            <b>
             
            {/* <img
                src="../assets/images/logoicon.png"
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
              <h5 className='logo'> Linkup-Community</h5>
             
             
            </span>{" "}
          </a>
          </div>
          <div
            id="navbar"
            className="navbar-collapse collapse navigation-holder"
          >
            <button className="close-navbar">
              <i className="ti-close" />
            </button>
            <ul className="nav navbar-nav">
              <li className="menu-item-has-children">
                <a href="/">Home</a>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="index.html">Home style 1</a>
                  </li>
                  <li>
                    <a href="index-2.html">Home style 2</a>
                  </li>
                  <li>
                    <a href="index-3.html">Home style 3</a>
                  </li>
                  <li>
                    <a href="index-4.html">Home style 4</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="user/about">About</a>
              </li>
              <li className="menu-item-has-children">
                <a href="user/quranepak">Quran</a>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="service.html">Service</a>
                  </li>
                  <li>
                    <a href="service-single.html">Service Single</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="user/qibla">Qibla Direction</a>
              </li>
              <li className="menu-item-has-children">
                <a href="user/prayer">Prayer timing</a>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="event.html">Event</a>
                  </li>
                  <li>
                    <a href="event-single.html">Event Single</a>
                  </li>
                </ul> */}
              </li>
              <li className="menu-item-has-children">
                <a href="user/hijricalender">Calender</a>
                {/* <ul className="sub-menu">
                  <li>
                    <a href="blog.html">Blog right sidebar</a>
                  </li>
                  <li>
                    <a href="blog-left.html">Blog left sidebar</a>
                  </li>
                  <li>
                    <a href="blog-fulwidth.html">Blog fullwidth</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog details</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="blog-single.html">
                          Blog details right sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-left.html">
                          Blog details left sidebar
                        </a>
                      </li>
                      <li>
                        <a href="blog-single-fluid.html">
                          Blog details fullwidth
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>
          {/* end of nav-collapse */}
         
        </div>
        {/* end of container */}
      </nav>
    </div>
  </header>
    </div>
  )
}

export default Frontheader
