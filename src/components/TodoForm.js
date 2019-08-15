import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoForm extends Component {
    state = {
        inputText: ''
    }

handleSubmit = e => {
    e.preventDefault ()
    // console.log(this.state.inputText)
    this.props.addItem(this.state.inputText)
    this.setState({
        inputText: '',
    });
}

handleTyping = e => {
    this.setState({
        inputText: e.target.value
    })
}



    render() {
        const { inputText } = this.state
        return (
            <div className="m-3">
            <h1>To-do List</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            placeholder="Task"
                            value={inputText}
                            onChange={this.handleTyping}
                            type="text"
                            name="message"
                        />
                        <button disabled={inputText.length < 4} type="submit"> Add Task </button>
                        {
                            inputText.length < 4 && inputText.length >= 1 &&
                            <p className="text-danger">Must be more than 3 characters</p>
                        }

                        <ul>
                            {
                                this.props.items.map((item, index) => {
                                    return (
                                        <TodoItem id={index} key={index} handleDelete={this.props.handleDelete} handleComplete={this.props.handleComplete} item={item}/>
                                    )
                                })
                            }
                        </ul>   
                       
                        
                    </form>
                </div>
        )
    }
}
export default TodoForm