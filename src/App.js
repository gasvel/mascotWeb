import React, { Component } from 'react';
import ButtonAppBar from './components/AppNav';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';

function Section(props){
  const sectionN = props.section;
  console.log(sectionN);
  if(sectionN === "home"){
    return <Home/>;
  }
  else{
    return <Login/>;
  }
}

class App extends Component {

  constructor(props){
    super(props);
    this.handler = this.handler.bind(this)

    this.state = {
      section: "home",
    };
  }

  handler(sectionN){
    this.setState({section: sectionN})
  }

  

  render(props) {
    const {section} = this.state;

    return (
      <div className="App">
        <ButtonAppBar handler={this.handler}></ButtonAppBar>
        <Section section= {this.state.section}/>

      </div>
          );
  }


}

export default App;
