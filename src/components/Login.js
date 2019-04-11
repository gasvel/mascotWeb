import React from 'react';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail: '',password:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({mail: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.mail);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Mail:
              <input type="text" value={this.state.mail} onChange={this.handleChange} />
            </label>

            <input type="submit" value="Submit" />
          </form>
        );
      }
}