import React,{Component} from 'react';

//connect projects to redux State
import {connect} from 'react-redux';


class Projects extends Component {
  render () {
    console.log(this.props);
    const {projects} = this.props;
    const projectsList= projects ? (
          projects.map((project) => {
            return(
          <div className="project-card"  key={project.id}>
              <div>
                <div className="card" >
                  <div className="card-image" >
                    <img src={require(`../imgs/${project.img}.png`)} alt="project"/>
                    <span className="card-title project-title">{project.title}</span>
                  </div>
                  <div className="card-content">
                    <p>{project.desc}</p>
                  </div>
                  <div className="card-action">
                    <a className="git-repo" href={project.link} target="_blank">Github repo</a>
                  </div>
                </div>
              </div>
            </div>
          );
    })) : (<div><h1>LOADING ...</h1></div>);
    return (
      <div className="projects-container">
        {projectsList}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    projects :state.projects
  }
}

export default connect(mapStateToProps)(Projects);
