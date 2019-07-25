import React, { Component } from 'react';
import TaskFrm from './TaskFrm';
import Task from './Task';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
        };
    }

    addNewTask = (task) => {
        const { tasks } =  this.state;
        this.setState({ tasks: [ ...tasks, task ] });
    }

    deleteTask = (pos) => {
        const { tasks } =  this.state;
        this.setState({ tasks: [ ...tasks.slice(0, pos), ...tasks.slice(pos + 1)] });
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <TaskFrm 
                    onAdd={this.addNewTask}
                />
                { tasks.map( (task, index) => <Task taskName={task} taskId={index} key={`${index}-${task}`} onDelete={this.deleteTask} />) }
            </div>
        )
    }
}
