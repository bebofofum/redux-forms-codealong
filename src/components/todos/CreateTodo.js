import React, { Component } from 'react'
import { connect } from "react-redux";

class CreateTodo extends Component {

    state = {
      text: ''
    }



  handleClick = event => {
    this.setState({
        text: event.target.value
    });

  }

  handleSubmit = event => {
    event.preventDefault();
    // when this is called, whatever is in this.state is sent off to our reducer via dispatch
    console.log('State', this.state)
    // we say this.props.addTodo because addToDo is declared as a prop below in the maptodispatch function below
    // if we didn't declare addtodo as a prop below we could write this as this.props.dispatch({type: 'ADD_TODO', payload: formData})
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        
          <form onSubmit={event => this.handleSubmit(event) }>
            <p>
              <label>add todo</label>
              <input 
                type='text' 
                placeholder='monkeys' 
                value={this.state.text} 
                onChange={this.handleClick} />
            </p>
            <input 
                type="submit" 
                value="Add Todo"  />
          </form>
          state now = {this.state.text}

      </div>
    )
  }
}

// mapDispatchToProps should be declared like a function expression
const mapDispatchToProps = (dispatch) => {
  return {
    // addTodo with below code becomes a prop
    addTodo: formData => dispatch(
      { 
        type: 'ADD_TODO', 
        payload: formData })
  }

}

export default connect(null, mapDispatchToProps)(CreateTodo);
