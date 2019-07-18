import React, { Component } from 'react';

export default class Task extends Component {
    render() {
        const { taskName, onDelete, taskId } = this.props;
        return (
            <div>
                <span>{taskName}</span>
                <button onClick={() => onDelete(taskId)}>X</button>
            </div>
        );
    }
}
