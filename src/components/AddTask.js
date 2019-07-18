import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        taskValue: ''
    }

    handlerChange = (event) => {
        this.setState({ taskValue: event.target.value });
    }

    handlerSaveTask = () => {
        const { taskValue } = this.state;
        const { saveTask } = this.props;
        saveTask(taskValue);
    }

    render() {
        const { taskValue } = this.state;
        return (
            <div>
                <input type="text" value={taskValue} onChange={(event) => this.handlerChange(event)}/>
                <button onClick={this.handlerSaveTask}>ADD</button>
            </div>
        )
    }
}
