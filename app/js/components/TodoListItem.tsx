import * as React from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';
import TodoModel from '../models/ToDoModel';

export interface TodoListItemProps {
    model: TodoModel
}

@observer
export class TodoListItem extends React.Component<TodoListItemProps, {}> {

    render() {
        return(
            <li className="todo-list-item">
                <input type="checkbox" checked={this.props.model.doneDate !== null} 
                       onChange={e => this.updateDoneState(e)} />
                <strong className="name">{this.props.model.name}</strong>            
            </li>
        )
    }

    updateDoneState = (e:any) => {
        if (e.target.checked) {
            this.props.model.setDone();
        }
        else {
            this.props.model.clearDone();
        }
    }
}