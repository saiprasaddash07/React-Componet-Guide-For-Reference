//COMPONENT LIFE CYCLE UPDATE PROPS
import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        // The issue we facing =>
        // When this function is called even though our persons component did not 
        // change but our main function rerenders everything and all the functions
        // in persons.js are re rendered
        // WHAT SHOULD WE DO TO PREVENT THIS
        if(nextProps.persons !== this.props.persons) {
            return true;
        } else{
            return false;
        }
    }

    //IF WE ARE CHECKING ALL THE PROPS ELEMENT THEN WE SHOULD ADD PURECOMPONENT

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        //return null;
        return {message:'Snapshot!'};
    }

    // componentDidUpdate(){
    //     console.log('[Persons.js] componentDidUpdate');
    // }

    componentDidUpdate(prevProps,prevState,Snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    //CleanUp work
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] is rendering......');
        return this.props.persons.map((person,index)=>{
            return (
                <Person 
                click={ () => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={ (event) => this.props.changed(event,person.id)}/>
            );
        });
    }
};

export default Persons;







//COMPONENT LIFE CYCLE UPDATE PROPS
import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     // The issue we facing =>
    //     // When this function is called even though our persons component did not 
    //     // change but our main function rerenders everything and all the functions
    //     // in persons.js are re rendered
    //     // WHAT SHOULD WE DO TO PREVENT THIS
    //     if(nextProps.persons !== this.props.persons ||
    //        nextProps.changed !== this.props.changed ||
    //        nextProps.clicked !== this.props.clicked
    //     ) {
    //         return true;
    //     } else{
    //         return false;
    //     }
    // }

    //IF WE ARE CHECKING ALL THE PROPS ELEMENT THEN WE SHOULD ADD PURECOMPONENT

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        //return null;
        return {message:'Snapshot!'};
    }

    // componentDidUpdate(){
    //     console.log('[Persons.js] componentDidUpdate');
    // }

    componentDidUpdate(prevProps,prevState,Snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(Snapshot);
    }

    //CleanUp work
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount');
    }

    render(){
        console.log('[Persons.js] is rendering......');
        return this.props.persons.map((person,index)=>{
            return (
                <Person 
                click={ () => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={ (event) => this.props.changed(event,person.id)}/>
            );
        });
    }
};

export default Persons;
