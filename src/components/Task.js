import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../redux/actions/toDo';

export class Task extends Component {
    render() {
        const { taskName, deleteTask, taskId } = this.props;
        return (
            <div>
                <span>{taskName}</span>
                <button onClick={() => deleteTask(taskId)}>X</button>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTask,
};

export default connect(null, mapDispatchToProps)(Task);