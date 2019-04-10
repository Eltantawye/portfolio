import React ,{Component} from 'react';
import {NavLink , withRouter} from 'react-router-dom';
class Navbar extends Component {
  render() {

  return (
      <nav>
    <div className=" header-color" >

      <ul  className="main-nav">
        <li><NavLink className="nav-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-link" to="/projects">Projects </NavLink></li>
        <li><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      </ul>
    </div>
  </nav>
  );
}
}
export default withRouter(Navbar);
