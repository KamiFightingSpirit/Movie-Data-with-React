import React from 'react';

/*functional components are called "functional" as they
are JS functions which return a React element
Syntax convention is capitalized components
Lowercase would be considered as HTML by the system
*/
/*
If we want our component to render something different 
then that's where properies comes into play
Think of them as function arguments to our components
We went from directly typing something within our <p> tags 
to defining a property within the App.js <Intro>
and passing that property in via the props object as an argument
calling it with props.message
*/
const Intro = (props) => (
    <p className="App-link">
      {props.message}
    </p>
)

export default Intro;