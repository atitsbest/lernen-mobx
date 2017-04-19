import * as React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import * as moment from 'moment';
import TodoModel from '../models/ToDoModel';

export interface TodoListItemProps {
    model: TodoModel
    onDelete?: (todo:TodoModel) => any;
}

@observer
export class TodoListItem extends React.Component<TodoListItemProps, {}> {

    render() {
        return (
            <li className="todo-list-item">
                <input type="checkbox" 
                       checked={this.props.model.doneDate !== null}
                       onChange={this.handleDoneChange} />
                <strong className="name">{this.props.model.name}</strong>
                {this.renderDoneDate()}
                {this.renderDelete()}
            </li>
        )
    }

    renderDoneDate() {
        return this.props.model.doneDate
            ? <small className="done-date">{moment(this.props.model.doneDate).fromNow()}</small>
            : null;
    }

    renderDelete() {
        return this.props.onDelete
            ? <a href="#" 
                 className="delete" 
                 onClick={e => this.props.onDelete(this.props.model)}><small>Delete</small></a>
            : null;
    }

    handleDoneChange = (e: any) => {
        if (e.target.checked) {
            this.props.model.setDone();
        }
        else {
            this.props.model.clearDone();
        }
    }
}