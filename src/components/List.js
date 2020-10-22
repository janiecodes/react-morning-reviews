import React, {Component} from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'
import Form from './Form'

class List extends Component{
    constructor(){
        super()
        this.state = {
            movies: movies
        }
    }

    render(){
        //console.log("MOVIES: " ,movies)
        let moviesMap = this.state.movies.map((element) => {
            return <ListItem key={element.id} movie={element}/>
        })
        return(
            <div className="List">List
                <Form/>
                {moviesMap}
            </div>
        )
    }
}

export default List