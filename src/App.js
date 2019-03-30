import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonAppBar from './AppNav';
import PublicationCard from './PublicationCard';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: [],
    };
  }



  componentDidMount(){
    fetch("http://localhost:3000/posts").then(response => response.json() ).then(data => {console.log(data);this.setState({posts: data})});

  }

  render(props) {
    const {posts} = this.state;

    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <div>
          {posts.map((post)=>
            <PublicationCard key={post.id} title={post.title} body={post.body} user={post.user.name}></PublicationCard>)}
        </div>

      </div>
          );
  }


}

export default App;
