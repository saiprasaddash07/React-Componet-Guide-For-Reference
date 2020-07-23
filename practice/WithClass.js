import React from 'react';

const withClass = props => (
    <div className={props.classes}>{props.children}</div>
);

export default withClass;

import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons' ;
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass'

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor'); 
  }

  state = {
    persons : [
      {id: 'asdf1' ,name: 'Sai Prasad' ,age : 18},
      {id: '56789' ,name: 'Ujwal' , age :18},
      {id: 'bnvm' ,name: 'Maximillian' ,age:29}
    ],
    otherState : 'Some other value which can be anything',
    showPersons:false,
    doesCockpitShow:true
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps' , props);
    return state; // here we generally return updated state but here we are only returning original state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');    //it is generally used in http requests
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate'); 
  }

  nameChangedHandler = (event,id) => {

      const personIndex = this.state.persons.findIndex(p =>{
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value; 

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons:persons} );
  }
  
  togglePersonsHandler = ()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex)=>{
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  render() {

    console.log('[App.js] render');

    let persons = null;
    
    if(this.state.showPersons){
      persons = <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed={this.nameChangedHandler} />    
    }
    return (
        // <div className={classes.App}>
        //   <button onClick={()=> {
        //     this.setState({doesCockpitShow:false});
        //   }} >Remove Cockpit</button>
        //   { this.state.doesCockpitShow ?
        //    <Cockpit 
        //       title={this.props.titleName}
        //       showPersons={this.state.showPersons}
        //       personsLength={this.state.persons.length}
        //       clicked={this.togglePersonsHandler} />
        //     : null
        //   }
        //      {persons}
        // </div>
        <WithClass classes={classes.App}>
          <button onClick={()=> {
            this.setState({doesCockpitShow:false});
          }} >Remove Cockpit</button>
          { this.state.doesCockpitShow ?
           <Cockpit 
              title={this.props.titleName}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler} />
            : null
          }
             {persons}
        </WithClass>
    );
  }
}

export default App;