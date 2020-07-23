//USING USEFFECT IN FUNCTIONAL COMPONENTS TO MANAGE STATES IN FUNCTIONAL COMPONENTS
import React,{useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    // useEffect(()=>{
    //     console.log('[Cockpit.js] useEffect'); //It will be there in chrome dev tools for every render cycle
    //     // HTTP request.....
    //     //componentDidMount+componentDidUpdate

    //     //What will we do if want to get this state only in the first http request
    //     setTimeout(()=>{
    //         alert('Saved data to cloud');
    //     },1000)
    // },[props.persons]); //It will only get the alert call when we change the persons on
    // our screen and if we toggle persons it will not show anything as we are using an 
    // array which says that it will only change whwn person changes

    //What will we do if want to get this state only in the first http request
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect'); //It will be there in chrome dev tools for every render cycle
        // HTTP request.....
        //componentDidMount+componentDidUpdate

        //What will we do if want to get this state only in the first http request
        setTimeout(()=>{
            alert('Saved data to cloud');
        },1000)

        //  CleanUp work
        return ()=>{
            console.log('[Cockpit.js] componentWillUnmount');
        }// To be more precise it runs before the main useEffect function runs but after the (first) render cycle
        
        //But it will not be seen in our work because we are not cleaning our persons
        // anywhere in our app
        //To see these effects we can add a new state and a new button in app.js
        // to remove cockpit and then we can see it

    },[]); //this will render only once as in the next time it does not have any dependancies

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] 2nd componentWillUnmount');
            //This will be seen as we are not destructing our persons objects or providing
            // any extra array as a parameter
        }
    })

    const assignedClasses = [];
    let btnClass = '';
    if(props.showPersons){
        btnClass=classes.Red;
    }
    if(props.persons.length <= 2){
        assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1){
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really Working</p>
            <button
                className={btnClass}
                onClick = {props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;