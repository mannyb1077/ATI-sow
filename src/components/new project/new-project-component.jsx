import React from "react";
import { Link } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import SubmitButton from "../submit-button/submit-button.component"

import "../new project/new-project.styles.scss";

class addEditProject extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        AddNewProject: "",
        EditExistingProject: ""
      };
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const { add, edit } = this.state;

  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
  
    render() {
      return (
        <div className='add/edit-project'>
  
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name='add'
              type='add'
              handleChange={this.handleChange}
              value={this.state.add}
              label='add' 
            />
            <FormInput
              name='search'
              type='search'
              handleChange={this.handleChange}
              value={this.state.search}
              label="search" 
            />
            <div className='buttons'>
              <SubmitButton type='submit'>Add Project</SubmitButton>
            </div>
          </form>
        </div>
      );
    }
  }
};  
  
  export default addEditProject;
