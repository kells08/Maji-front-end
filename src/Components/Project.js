import React, { Component } from 'react';

class Project extends Component {

  state = {
    projects: [],
    amount: ""
  }

  onChange = (e) => {
    console.log("project amount", e.target.value)
    this.setState({
      amount: e.target.value
    })
  }

  render() {
    console.log("projects", this.props)
    const item = this.props.item
    return (
      <div>
				<div className="box">
          <div className="content">	
            <div className="image fit">
              <img src={item.image_url} alt=":(" />
            </div>
            <hr/>
            <header className="align-center">
              <h3>{item.title}</h3>  
              <input onChange={this.onChange} placeholder="amount to contribute" ></input>
            </header>
            <h4>{item.description}</h4>
            <p>{item.details}</p>
            <button onClick={e => this.props.addCartItem(item, this.state.amount)} value={item.price} className="button special scrolly">Buy</button>
          </div>
        </div>
			</div>
      // <div style={{border:"2px solid green", clear:"both"}}>
      //   <h3>Contribute to our projects!</h3>
      //   <p>{this.state.projects[0]}</p>
      // </div>
    );
  }
}

export default Project;