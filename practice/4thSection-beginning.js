import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons' ;
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      {id: 'asdf1' ,name: 'Sai Prasad' ,age : 18},
      {id: '56789' ,name: 'Ujwal' , age :18},
      {id: 'bnvm' ,name: 'Maximillian' ,age:29}
    ],
    otherState : 'Some other value which can be anything',
    showPersons:false
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

    let persons = null;
    // let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
        <div>
            <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed={this.nameChangedHandler} />

              { /* {this.state.persons.map((person,index)=>{
                return <Person 
                    click={()=>this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event)=>this.nameChangedHandler(event,person.id)}/>
              })} */ } 
        </div> 
      );
      
      // btnClass.push(classes.Red);
    }

      // const assignedClasses = [];
      // if(this.state.persons.length <= 2){
      //   assignedClasses.push(classes.red);
      // }
      // if(this.state.persons.length <= 1){
      //   assignedClasses.push(classes.bold);
      // }

    return (
        <div className={classes.App}>
          {/* <h1>Hello React</h1>
          <p className={assignedClasses.join(' ')}>This is really Working</p>

          <button
              className={btnClass.join(' ')}
              onClick = {this.togglePersonsHandler}>Toggle Persons
          </button> */}

          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />

          {persons}

        </div>
    );
  }
}

export default App;