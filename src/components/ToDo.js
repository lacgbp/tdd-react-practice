import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskFrm from './TaskFrm';
import Task from './Task';

export class ToDo extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div>
                <TaskFrm />
                { tasks.map( (task, index) => <Task taskName={task} taskId={index} key={`${index}-${task}`} />) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.toDoReducer.tasks,
    }
}


export default connect(mapStateToProps)(ToDo);