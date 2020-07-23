const aux = props => props.children;
export default aux;

// import React from 'react' ;
// import classes from './Person.css';

// const person = (props) => {
//    console.log('[Person.js] rendering.......')
//    return(
//     <div className={classes.Person}>
//            <p onClick={props.click}>I am {props.name} and i am {props.age} years old!</p>
//            <p>{props.children}</p>
//            <input type="text" onChange={props.changed} value={props.name}/>
//     </div>
//    );

// }

// export default person ;

//COMPONENT LIFE CYCLE UPDATE PROPS
import React,{Component} from 'react' ;
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
   render(){
      console.log('[Person.js] rendering.......')
      
      // USE ARRAY OF ELEMENTS IN JSX
      // return([
      //          <p key='i1' onClick={this.props.click}>
      //          I am {this.props.name} and i am {this.props.age} years old!</p>,
      //          <p key='i2'>{this.props.children}</p>,
      //          <input
      //             key='i3'
      //             type="text"
      //             onChange={this.props.changed}
      //             value={this.props.name}
      //          />
      // ]
      // );

      //ANOTHER WAY
      return(
         <Aux>
            <p onClick={this.props.click}>
            I am {this.props.name} and i am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input
               type="text"
               onChange={this.props.changed}
               value={this.props.name}
            />
         </Aux>
      );

      // return(
      //    <React.Fragment>
      //       <p onClick={this.props.click}>
      //       I am {this.props.name} and i am {this.props.age} years old!</p>
      //       <p>{this.props.children}</p>
      //       <input
      //          type="text"
      //          onChange={this.props.changed}
      //          value={this.props.name}
      //       />
      //    </React.Fragment>
      // );
   }
}

export default Person ;