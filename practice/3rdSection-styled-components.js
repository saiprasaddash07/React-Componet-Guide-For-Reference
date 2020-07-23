import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js' ;
import styled from 'styled-components';

const StyledButton = styled.button` 
     background-color: ${props => props.alt ? 'red':'green'};
     color:white;
     font:inherit;
     border:1px solid blue;
     padding:8px;
     cursor:pointer;

     &:hover{
       background-color: ${props => props.alt ? 'salmon':'lightgreen'};
       color:black;
     }
    ` ;

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
    }

    //let classes = ['red','bold'].join(' '); "red bold" //this is used for dynamically adding classname to a paragraph 
      const classes = [];
      if(this.state.persons.length <= 2){
        classes.push('red');
      }
      if(this.state.persons.length <= 1){
        classes.push('bold');
      }

    return (
        <div className="App">
          <h1>Hello React</h1>
          <p className={classes.join(' ')}>This is really Working</p>

          <StyledButton  
              alt={this.state.showPersons}
              onClick = {this.togglePersonsHandler}>Toggle Persons
          </StyledButton>

          {/* <button
              onClick = {this.togglePersonsHandler}>Toggle Persons
          </button> */}

          {persons}

        </div>
    );
  }
}

export default App;




/*
    person.js
    // import React from 'react' ;
    // import styled from 'styled-components';

    // const StyledDiv = styled.div`
    //         width: 60%;
    //         margin: 16px auto ;
    //         border: 1px solid #ccc;
    //         box-shadow: 0 2px 3px #ccc;
    //         padding: 16px;
    //         text-align: center;

    //         @media (min-width:500px){
    //             width: 450px;
    //         }`;

    // const person = (props) => { 
    //    return(
    //     //    styled.div`
    //     //       width: 60%;
    //     //       margin: 16px auto ;
    //     //       border: 1px solid #ccc;
    //     //       box-shadow: 0 2px 3px #ccc;
    //     //       padding: 16px;
    //     //       text-align: center;

    //     //       @media (min-width:500px){
    //     //           width: 450px;
    //     //     }`
    //     <StyledDiv>
    //            <p onClick={props.click}>I am {props.name} and i am {props.age} years old!</p>
    //            <p>{props.children}</p>
    //            <input type="text" onChange={props.changed} value={props.name}/>
    //     </StyledDiv>
    //    );

    // }

    // export default person ;

    No person.css file and app.css file is below
    .App {
    text-align: center;
    }

    .red{
    color: red;
    }

    .bold{
    font-weight: bold;
    }
*/