import React, {Component} from 'react';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import classes from "./DropdownStep.css";

class dropdown extends Component {
  


  onSelectHandler = event => {
    // this.setState({valueField: event})
    // console.log(event)
    this.props.setCategory(event)
  }

  onSelectLevel = (event) => {
    this.props.setLevel(event);
  }

  onSelectGenderFemale = (event) => {
    this.props.setGenderFemale(event);
  }

  onSelectGenderMale = (event) => {
    this.props.setGenderMale(event);
  }
  
  onSelectOptionOfWorness = (event) => {
    this.props.setOptionofworness(event);
  } 

render(){

  const options = [
    'one', 'two', 'three'
  ];

  const wornLevel = [
    'new', 'worn', 'other mentions'
  ];

  let newDescription;

  if(this.props.level.value === 'other mentions') {
    newDescription = <textarea 
                      type="text"
                      className="dropdown2textarea" 
                      placeholder="e.g. spots etc" 
                      onChange={this.onSelectOptionOfWorness}
                      value={this.props.optionofworness}
                      />
  }

return(
    <div>
      <br />
      <br />
      <h2>Select your category: </h2>
      <Dropdown 
      options={options} 
      onChange={this.onSelectHandler} 
      value={this.props.category} 
      placeholder="Select an option" />
      {this.props.category.label}
      <br />
      
      <br />
      <form>
      <div>
        <input 
        type="radio" 
        id="female" 
        name="gender"
        onChange={this.onSelectGenderFemale}
        value={this.props.female} 
        />
        <label for="female">Female</label>
      <br />
        <input 
        type="radio" 
        id="male" 
        name="gender"
        onChange={this.onSelectGenderMale}
        value={this.props.male} 
        />
        
        <label for="male">Male</label>
      </div>
      </form>

      <br />
      <Dropdown
      options={wornLevel}
      onChange={this.onSelectLevel}
      value={this.props.level}
      />
      {this.props.level.label}
      {newDescription}

    </div>
  )
  }
}


export default dropdown;