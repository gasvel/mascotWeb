import React, { Component } from 'react';
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
    fetch("http://localhost:3000/posts/list").then(response => response.json() ).then(data => {console.log(data);this.setState({posts: data})});

  }

  render(props) {
    const {posts} = this.state;

    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <div>
          {posts.map((post)=>
            <PublicationCard key={post.id} title={post.title} body={post.body} creado={post.created_at}></PublicationCard>)}
        </div>

      </div>
          );
  }


}

export default App;
