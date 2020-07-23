import React from 'react';

const authContext = React.createContext({
    authenticated:false,
    login:()=>{}
}); 
// globally available array,string,object,component or anything

export default authContext;