//React is a javascript library 
//The components are great for reusability and organization
//Class base components and Functional components
//It runs top down unidirectionally - like a component tree
//Virtual DOM is Reactland where it doesn't refresh the whole thing (grocery list analogy or storage room analogy)
//Never put a function inside the render - put all functions outside the render

//FUNCTIONAL COMPONENT EXAMPLE
// import React from "react";
// import './App.css';

// function App() {
// } similar to below

// const App = () => {
//     return(
//         <div className='App'>
//             <h1 The className="movie-list-title">The Most Amazing Movie List</h1>
//         </div>
//     )
// }

// export default App
//since this is a functional component it does not need a render
//only one parent element is allowed so only one outer containing JSX tag EX: <div></div>
//if you wanted more you do it within the parent <div></div> tag

//CLASS COMPONENT EXAMPLE
//Class components will always have a constructor and render methods
// import React, {Component} from 'react'
// import './App.css'

// class App extends Component {
//     constructor(){
//         super()

        //state would go here as well this.state = {data you want}
//     }

//     render(){
//         return(
//             <div className='App'>
//                 <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
//             </div>
//         )
//     }
// }

// export default App

//Wrting it one more time as a function
import React, {Component} from 'react'
import List from './components/List'
import './App.css'

function App(){
    return(
        <div className='App'>
            <h1 className='movie-list-title'>The Most Amazing Movie List</h1>
            <List/>
         </div>
    )
}

export default App