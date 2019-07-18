import React, { Component } from 'react';
import TaskFrm from './TaskFrm';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks : [],
        };
    }
    render() {
        return (
            <div>
                <TaskFrm />
            </div>
        )
    }
}
