import React from 'react';
import {PublicationCard} from './PublicationCard';

import './Home.css';


export class Home extends React.Component{

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

        <div>
          
          {posts.map((post)=>
            <PublicationCard  key={post.id} title={post.title} body={post.body} creado={post.created_at}></PublicationCard>)}
        </div>

          );
  }

}