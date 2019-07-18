import React, { Component } from 'react';

export default class TaskFrm extends Component {
    state = {
        taskValue: '',
    };

    handlerOnChangeText = (event) => {
        this.setState({ taskValue: event.target.value });
    }

    handlerAddTask = () => {
        const { addTask } = this.props;
        const { taskValue } = this.state;
        addTask(taskValue);
    }

    render() {
        
        return (
            <div>
                <label>Task name:</label>
                <input 
                    type="text"
                    placeholder="Write your task"
                    onChange={(event) => this.handlerOnChangeText(event)}
                    />
                <button onClick={this.handlerAddTask}>ADD</button>
            </div>
        )
    }
}
