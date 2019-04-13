import React, { Component } from 'react';
import AppNav from './components/AppNav';
import './App.css';
import { Home } from './components/Home';
import { Login } from './components/Login';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemLink from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

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

  handler=(sectionN)=>{
    this.setState({section: sectionN})
  }

  sidebarHandler=(e)=>{
    let sidebar = document.getElementById('#sidebar');
    let section = document.getElementById('#section');
    if(sidebar.style.display=='none'){
      sidebar.style.display='block';
      section.style.marginLeft='20%'
    }else{
      sidebar.style.display='none';
      section.style.marginLeft='0%'
    }
  }

  

  render(props) {
    const {section} = this.state;

    return (
      <div className="App">
        <AppNav handler={this.handler} sidebarHandler={this.sidebarHandler}/>
        <div className="sidebar" id='#sidebar'>
          <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItem>
      </List>
      <Divider />
      <List component="nav">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
          </div>
          <div id='#section'>
        <Section  section= {this.state.section}/>
        </div>
      </div>
          );
  }


}

export default App;
