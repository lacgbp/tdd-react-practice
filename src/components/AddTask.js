import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        taskValue: ''
    }

    handlerChange = (event) => {
        this.setState({ taskValue: event.target.value });
    }

    render() {
        const { taskValue } = this.state;
        const { saveTask } = this.props;
        return (
            <div>
                <input type="text" value={taskValue} onChange={(event) => this.handlerChange(event)}/>
                <button onClick={() => saveTask(taskValue)}>ADD</button>
            </div>
        )
    }
}
