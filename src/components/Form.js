import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            year: '',
            posterImg: ''
        }
        //this.handleChange = this,handleChange.bind(this) if handleChange wasnt an arrow function
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleAdd = (event) => {
        const {title, year, posterImg} = this.state
        event.preventDefault();
        this.props.addMovie(title, year, posterImg)
    }

    render(){
        return(
            <form className="Form" onSubmit={this.handleAdd}>
                <input 
                name="title" 
                placeholder="Title" 
                onChange={event => this.handleChange(event)}
                />
                <input 
                name="year" 
                placeholder="Year" 
                onChange={event => this.handleChange(event)}
                />
                <input 
                name="posterImg" 
                placeholder="Poster URL" 
                onChange={event => this.handleChange(event)}
                />
                <button type="submit">Add Movie</button>
            </form>
        )
    }
}

export default Form