import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : ""
    }
  }
  changeName = () =>{
    
      this.setState({
        names: this.state.name ="name"
      })
      return<h3>{(window.alert(this.state.name))}</h3>
    
  }
  render(){
    return(
      <React.Fragment>
        <button type='button' onClick={this.changeName}>დააკლიკე</button>
      </React.Fragment> 
    )
  }
}

export default App;
