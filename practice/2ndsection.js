import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js' ;
import person from './Person/Person.js';

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

    // const person = this.state.persons[personIndex]; do not try to mutate the state of the actual react object

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // this.setState({
    //   persons : [
    //     {name: 'Sai Prasad' ,age : 18},
    //     {name: event.target.value , age :18},
    //     {name: 'Maximillian' ,age:29}
    //   ]
    // })

    this.setState( {persons:persons} );
  }
  
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
  }

  deletePersonHandler = (personIndex)=>{
    /*
      const persons = this.state.persons;
      persons.splice(personIndex,1); //this is a js method to delete an element from the array
      //But there is a flaw with this method as it is changing the orginal react object state 
      //To avoid this we can make a copy of that object or state and then try to manipulate in that state
      this.setState({persons:persons});
    */
      
      //const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }

  render() {

    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {/* This will create list of persons */}
            
            {this.state.persons.map((person,index)=>{
                return <Person 
                    click={()=>this.deletePersonHandler(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id} 
                    changed={(event)=>this.nameChangedHandler(event,person.id)}/>
            })}

            {/*  <Person
              name = {this.state.persons[0].name} 
              age = {this.state.persons[0].age} />
              <Person 
              name = {this.state.persons[1].name}
              age = {this.state.persons[1].age}
              click = {this.switchNameHandler.bind(this,'Maxi')}
              changed = {this.nameChangedHandler}>My hobbies : Racing</Person>
              <Person
              name = {this.state.persons[2].name}
              age = {this.state.persons[2].age} />
            */}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working</p>

        <button 
          style={style}
          onClick = {this.togglePersonsHandler}>Toggle Persons</button>

        {/* To check wheter showperson is true or false we have to use if statement
            but if we use if(true) then it will give error so to avoid this we use ternery operations*/}

        {/* 
        {
          this.state.showPersons === true ? 
            <div>
                <Person
                name = {this.state.persons[0].name} 
                age = {this.state.persons[0].age} />
                <Person 
                name = {this.state.persons[1].name}
                age = {this.state.persons[1].age}
                click = {this.switchNameHandler.bind(this,'Maxi')}
                changed = {this.nameChangedHandler}>My hobbies : Racing</Person>
                <Person
                name = {this.state.persons[2].name}
                age = {this.state.persons[2].age} />
            </div> : null 
        } 
        
        THIS THING WILL NOT COME IN HANDY IF WE TRY TO EXEXCUTE IN CASE OF NESTED COMPONENTS
        but we know that when react dom is trying to show something to the screen it will execute render function*/}  

          {persons}

      </div>
    );
  }
}

export default App;

/*
        import React from 'react' ;
        import './Person.css'

        const person = (props) => {
            
        return(
            <div className="Person">
                <p onClick={props.click}>I am {props.name} and i am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
        );

        }






        

        export default person ;

        .Person{
            width: 60%;
            margin: 16px auto ;
            border: 1px solid #ccc;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
        }

*/