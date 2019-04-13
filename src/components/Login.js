import React from 'react';
import TextField from '@material-ui/core/TextField';



export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mail: '',password:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.mail + this.state.password);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <TextField label="Email" value={this.state.mail} onChange={this.handleChange("mail")}/>
            <TextField label="Password" type="password" value={this.state.password} onChange={this.handleChange("password")}/>

            <input type="submit" value="Submit" />
          </form>
        );
      }
}