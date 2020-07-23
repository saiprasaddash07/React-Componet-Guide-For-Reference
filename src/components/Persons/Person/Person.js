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
import PopTypes from 'prop-types';

import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/WithClass2';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
   constructor(props){
      super(props);
      this.inputElementRef = React.createRef();
   }

   static contextType =  AuthContext;

   componentDidMount(){
      // this.inputElement.focus();
      this.inputElementRef.current.focus();
      console.log(this.context.authenticated);
   }

   render(){
      console.log('[Person.js] rendering.......')
      //ANOTHER WAY
      return(
         <Aux>
            {/* <AuthContext.Consumer>
               {(context)=> context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}
            </AuthContext.Consumer> */}


            {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login</p>}

            {/* {this.props.isAuth ? <p>Authenticated!</p> : <p>Please login</p>} */}
            {/* here we receive the above authentication from app.js
                via persons.js which is not good
                but in such a case where we have to add a handler in
                stage A and we want to use in state D where B & C in between
                we can use context api which is introduced by react */}

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