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
        this.addMovie = this.addMovie.bind(this)
    }

    addMovie(title, year, posterImg){
        const {movies} = this.state
        const id = movies[movies.length-1].id + 1
        const newMovie = {
            id, 
            title,
            year, 
            posterImg
        } //shorthand only works if the variable name is the same as the key to be called
        const newArr = [...movies, newMovie]
        this.setState({
            movies: newArr
        })

    }

    deleteMovie = (id) => {
        const {movies} = this.state
        const index = movies.findIndex(movie =>  movie.id === id)
        const newArr = [...movies]
        newArr.splice(index, 1)
        this.setState({
            movies: newArr
        })
    }

    render(){
        //console.log("MOVIES: " ,movies)
        let moviesMap = this.state.movies.map((element) => {
            return <ListItem deleteMovie={this.deleteMovie} key={element.id} movie={element}/>
        })
        return(
            <div className="List">List
                <Form addMovie={this.addMovie}/>
                {moviesMap}
            </div>
        )
    }
}

export default List