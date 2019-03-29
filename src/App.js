import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      posts: null,
    };
  }

  componentDidMount(){
    fetch("http://localhost:3000/posts").then(response => response.json() ).then(data => this.setState({posts: data}));

  }

  render() {
    const {posts} = this.state;
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">

        <a className="navbar-brand" href="#">Navbar</a>
          <ul className="nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="https://google.com">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" >Disabled</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <div>
          <ul>{posts.map((post)=>
            <li key={post.id}><h3>{post.title}</h3></li>)}</ul>
        </div>

      </div>
          );
  }


}

export default App;
