import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }
    // // } WE HAVE COMMENTED THIS OUT 
    // //BECAUSE WE DO NOT HAVE AN INITIAL STATE BUT WE ARE RETURNING STATE

    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

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
