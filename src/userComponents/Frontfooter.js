import React from 'react'

const Frontfooter = () => {
  return (
    <div>
       <footer className="wpo-site-footer">
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row">
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  {/* <img src="msjid/images/logo.png" alt="blog" /> */}
              <img
                src="../assets/images/logoicon.png"
                alt="homepage"
                className="light-logo"
              />
             
            
        
            <span>
              <h5 className='logo1'> Linkup-Community</h5>
             
             
            </span>{" "}
          
                </div>
                <p>
                  Build and Earn with your online store with lots of cool and
                  exclusive wpo-features{" "}
                </p>
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
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-md-3 col-sm-6">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Service</h3>
                </div>
                <ul>
                  <li>
                    <a href="service-single.html">Islamic School</a>
                  </li>
                  <li>
                    <a href="service-single.html">Our Causes</a>
                  </li>
                  <li>
                    <a href="#">Our Mission</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="event.html">Our Event</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2 col-md-3 col-sm-6">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="service-single.html">Services</a>
                  </li>
                  <li>
                    <a href="event.html">Semester</a>
                  </li>
                  <li>
                    <a href="index-2.html">Prayer Times</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3 col-lg-offset-1 col-md-3 col-sm-6">
              <div className="widget market-widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <p>online store with lots of cool and exclusive wpo-features</p>
                <div className="contact-ft">
                  <ul>
                    <li>
                      <i className="fi ti-location-pin" />
                      28 Street, New York City, USA
                    </li>
                    <li>
                      <i className="fi flaticon-call" />
                      +000123456789
                    </li>
                    <li>
                      <i className="fi flaticon-envelope" />
                      ummah@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* end container */}
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">© 2020 Linkup. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Frontfooter
