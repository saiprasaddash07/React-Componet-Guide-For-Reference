import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person.js' ;

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
    let btnClass = [classes.Button];

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person,index)=>{
                return <Person 
                    click={()=>this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id} 
                    changed={(event)=>this.nameChangedHandler(event,person.id)}/>
            })}
          </div>
      );
      
      btnClass.push(classes.Red);
    }

      const assignedClasses = [];
      if(this.state.persons.length <= 2){
        assignedClasses.push(classes.red);
      }
      if(this.state.persons.length <= 1){
        assignedClasses.push(classes.bold);
      }

    return (
        <div className={classes.App}>
          <h1>Hello React</h1>
          <p className={assignedClasses.join(' ')}>This is really Working</p>

          <button
              className={btnClass.join(' ')}
              onClick = {this.togglePersonsHandler}>Toggle Persons
          </button>

          {persons}

        </div>
    );
  }
}

export default App;

/*
Person.js

import React from 'react' ;
import classes from './Person.css';

const person = (props) => {
 
   return(
    <div className={classes.Person}>
           <p onClick={props.click}>I am {props.name} and i am {props.age} years old!</p>
           <p>{props.children}</p>
           <input type="text" onChange={props.changed} value={props.name}/>
    </div>
   );

}

export default person ;

app.css

.App {
  text-align: center;
}

.red{
  color: red;
}

.bold{
  font-weight: bold;
}

.Button{
  background-color: green;
  color:white;
  font:inherit;
  border:1px solid blue;
  padding:8px;
  cursor:pointer;
}
.Button:hover{
  background-color: lightgreen;
  color:black;
}

.Button.Red{
  background-color: red;
}

.Button.Red:hover{
  background-color:salmon;
}


person.css
.Person{
    width: 60%;
    margin: 16px auto ;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
 
@media (min-width:500px){
    .Person{
        width: 450px;
    }
}
*/