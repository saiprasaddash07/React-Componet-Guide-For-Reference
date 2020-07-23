import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js' ;

class App extends Component {
  state = {
    persons : [
      {name: 'Sai Prasad' ,age : 18},
      {name: 'Ujwal' , age :18},
      {name: 'Maximillian' ,age:29}
    ],
    otherState : 'Some other value which can be anything'
  }

  switchNameHandler = (newName) => {
    //console.log('hi');
    // NEVER DO THIS BCOZ REACT WILL NOT RECOGNIZE THIS : this.state.persons[2].name = 'Maxi';
    this.setState({
      persons : [
        {name: 'Sai Prasad' ,age : 18},
        {name: 'Ujwal' , age :17},
        {name: newName ,age:29}
      ]
      //React will not touch otherSate in the state property it will only change persons and merge with another property
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name: 'Sai Prasad' ,age : 18},
        {name: event.target.value , age :18},
        {name: 'Maximillian' ,age:29}
      ]
    })
  }

  render() {

    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>This is really Working</p>

      {/* <button onclick = {this.switchNameHandler}>Switch Name</button>  wrong bcoz onclick can not be used like js it has to be used like jsx
          <button onClick = {this.switchNameHandler()}>Switch Name</button> It is also wrong we should never use () after a function */}
        <button 
          style={style}
          onClick = {this.switchNameHandler.bind(this,'Max!')}>Switch Name</button>

      {/* Bind method used to change property acc to argument passed in that function
          another way of doing this is  <button onClick = {()=> this.switchNameHandler('Max!)}>Switch Name</button> */}

        {/*
          <Person />
          we can use multiple times <Person /> to add this component multiple no of times
          <Person name = "X" age = "27" />
          <Person name = "X" age = "26">My hobbies : Racing</Person>  WE WANT TO GENERATE THIS TYPE OF OUTPUT
          <Person name = "X" age = "29">My hobbies : Racing</Person>
        */}

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

      </div>
    );

    /* This is how the jsx is internally compiled
       We do not use this style bcoz in case of nested elements it will be cumbersome to do so

        //return React.createElement('div',null,'h1','This is some text'); // This will show as h1This is some text which is not expected

        //return React.createElement('div',null,React.createElement('h1',null,'This is some text')); // This will work fine and will show This is some text
        //It also is not showing our css style because we have not assign the class values yet

        //To assign class values we use the following
        return React.createElement('div',{className:'App'},React.createElement('h1',null,'This is some text'));

    */

  }
}




/*
    //USING HOOKS FOR STATE MANIPULATION
    import React, { useState } from 'react';
    const app = props => {
      //The function useState always returns two states/arrays one is what we have given as argument and the other one is to change the given state
        const [personState,setPersonsState] = useState({
              persons : [
                {name: 'Sai Prasad' ,age : 18},
                {name: 'Ujwal' , age :18},
                {name: 'Maximillian' ,age:29}
              ],
              otherState : 'Some other value which can be anything'
        })

        //const [otherState,setOtherState] = useState('Some other value which can be anything')  we can get rid of below error by doing this globally also

        const switchNameHandler = () => {
              setPersonsState({
                persons : [
                  {name: 'Sai Prasad' ,age : 18},
                  {name: 'Ujwal' , age :17},
                  {name: 'Maxi' ,age:29}
                ],
                otherState : 'Some other value which can be anything'
                //In this case unlike class components hook replaces the property hence we need to mention otherState manually
              })
        }
        return (
          <div className="App">
            <h1>Hello React</h1>
            <p>This is really Working</p>

            <button onClick = {switchNameHandler}>Switch Name</button>

            <Person name = "X" age = "27" />
            <Person name = "X" age = "29">My hobbies : Racing</Person>

            <Person name = {personState.persons[0].name} age = {personState.persons[0].age} />
            <Person name = {personState.persons[1].name} age = {personState.persons[1].age} />
            <Person name = {personState.persons[2].name} age = {personState.persons[2].age} />
          </div>
        );

    }

    export default app;

*/



export default App;





//Person.js and Person.css file are in the given src dir

/*

PERSON.JS


import React from 'react' ;
import './Person.css'

const person = (props) => {
    
        //return <p>I am a person and i am Math.floor(Math.random()*30) years old!</p>  It will show nothing but write math.......
        //return <p>I am a person and i am {Math.floor(Math.random()*30)} years old!</p>

        //return <p>I am {props.name} and i am {props.age} years old!</p>
        //When using class based components it is {this.props.something}
    

   return(
    <div className="Person">
        <p onClick={props.click}>I am {props.name} and i am {props.age} years old!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        {/* If we do not provide onChange property then input will not allow us to change anything
        Similarly if we provide value property then it will be filled with that name as we are passing as an argument and will not allow us to change the name of other things that are not listening to the event
    </div>
  );

}

export default person ;

PERSON.CSS


.Person{
    width: 60%;
    margin: 16px auto ;
    border: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
}
*/