//USING USEFFECT IN FUNCTIONAL COMPONENTS TO MANAGE STATES IN FUNCTIONAL COMPONENTS
import React,{useEffect} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(()=>{
        console.log('[Cockpit.js] useEffect'); //It will be there in chrome dev tools for every render cycle
        // HTTP request.....
        //componentDidMount+componentDidUpdate

        setTimeout(()=>{
            alert('Saved data to cloud');
        },1000)

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
                className={btnClass}
                onClick = {props.clicked}>Toggle Persons
            </button>
        </div>
    );
};

export default React.memo(cockpit);