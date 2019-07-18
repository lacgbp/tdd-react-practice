import React, { Component } from 'react';

export default class AddTask extends Component {
    state = {
        taskValue: ''
    }

    render() {
        const { taskValue } = this.state;
        const { saveTask } = this.props;
        return (
            <div>
                <input onChange={(event) => this.setState({ taskValue: event.target.value })}/>
                <button onClick={() => saveTask(taskValue)}>ADD</button>
            </div>
        )
    }
}
