import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 

        */
       this.state  = 
        {name:null,
           URL:null,}
       
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({[event.target.name]: event.target.value});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.handleSubmit(this.state);
       this.setState({name:'', URL:''});

    }

    render() {

        return(
            <form onSubmit ={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>
                    Name:
                <input type ="text" name ="name" value ={this.state.name} onChange = {this.handleChange}/>
                </label>
                <label>
                    URL:
                <input type ="text" name="URL" value ={this.state.URL} onChange = {this.handleChange}/>
                </label>
                <input type ="submit" value ="submit"/>
            </form>
        )
    
    }
}

export default Form;
