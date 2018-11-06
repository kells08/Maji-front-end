import React, { Component } from 'react';

class Projects extends Component {

  state = {
    projects: []
  }

  // componentDidMount() {
  //   const token = localStorage.token
  //   fetch('http://localhost:3001/projects/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${token}`
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => 
  //       this.setState({
  //         projects: data
  //       })
  //     )
  // }

  render() {
    console.log("projects", this.state.projects)
    return (
      <div style={{border:"2px solid green", clear:"both"}}>
        <h3>Contribute to our projects!</h3>
        <p>{this.state.projects[0]}</p>
      </div>
    );
  }
}

export default Projects;