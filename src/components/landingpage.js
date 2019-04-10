import React from 'react'
import PP from '../imgs/pp.jpg'
const Landingpage = () => {
  return (
    <div className="landing">
        <div className="img-cont">
          <img className="avatar-img" src={PP} alt="avatar" />
        </div>
        <div className="banner-cont">
         <div className="banner">
          <h1>Front-End Developer</h1>
          <hr />
          <p>HTML5 / CSS3 / JavaScript / jQuery / Bootstrap / React.JS / Redux.JS  </p>
          <div className="social-links">

              <a href="https://www.linkedin.com/in/mohamed-el-tantawy/" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>

              <a href="https://github.com/Eltantawye" target="_blank">
                <i className="fab fa-github"></i>
              </a>
          </div>
         </div>
        </div>
    </div>
  );
}
export default Landingpage;
