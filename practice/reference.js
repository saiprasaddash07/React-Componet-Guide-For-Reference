import React,{useEffect,useRef} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // const toggleBtnRef = React.createRef(); WRONG
    const toggleBtnRef = useRef(null);
    // toggleBtnRef.current.click(); WRONG

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect'); //It will be there in chrome dev tools for every render cycle
        // HTTP request.....
        //componentDidMount+componentDidUpdate

        // setTimeout(()=>{
        //     alert('Saved data to cloud');
        // },1000)
        toggleBtnRef.current.click();

        //  CleanUp work
        return ()=>{
            console.log('[Cockpit.js] componentWillUnmount');
        }

    },[]);

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] 2nd componentWillUnmount');
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if(props.personsLength <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.personsLength <= 1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really Working</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick = {props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);










//COMPONENT LIFE CYCLE UPDATE PROPS
import React,{Component} from 'react' ;
import PopTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass2';

class Person extends Component {
   constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
   }

   componentDidMount(){
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
   }

   render(){
      console.log('[Person.js] rendering.......')
      //ANOTHER WAY
      return(
         <Aux>
            <p onClick={this.props.click}>
            I am {this.props.name} and i am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
               // ref={(inputEl)=>{this.inputElement = inputEl}}
               ref={this.inputElementRef}
               type="text"
               onChange={this.props.changed}
               value={this.props.name}
            />
         </Aux>
      );
   }
}

Person.propTypes = {
   //key:value
   //propnames:PropTypes value or function
   click:PopTypes.func,
   name:PopTypes.string,
   age:PopTypes.number,
   changed:PopTypes.func
};

export default withClass(Person,classes.Person) ;