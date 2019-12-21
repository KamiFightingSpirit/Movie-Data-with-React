import React from 'react'; //without this we can't create React elements
import ReactDOM from 'react-dom'; //acts as glue between React elements and the DOM. Usually used to render App.
import './index.css'; //the css file
import App from './components/App'; //component that is currently being rendered
import * as serviceWorker from './serviceWorker'; //helps the server load faster on subsequent visits to production.
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>, 
    document.getElementById('root')
);
serviceWorker.register();

//Notes: 
//const greeting =  React.createElement("h1", {}, "Hello World");
/*Takes up to 3 elements:
    First - Tag that we want to use, here "h1"
    Second - The props that you want to use (empty object here)
    Third -  The string that you want the tags to hold.
 */

//Recreating the above using JSX 
// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }
// const greeting = <h1>Hello World! <br /> Today's date is  {getCurrentDate()}</h1>;



/*takes up to 3 elements. 
    First - React element that we want to render "<App />"
    Second - The DOM container where we want to render our React element
    Third  - (Optional) Callback function in order to store additional logic.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA    
*/

