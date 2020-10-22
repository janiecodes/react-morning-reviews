import React, {Component} from 'react'

class Form extends Component {
    constructor(){
        super()
        this.state ={
            title: '',
            year: '',
            posterImg: ''
        }
    }


    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render(){
        return(
            <form className="Form">
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