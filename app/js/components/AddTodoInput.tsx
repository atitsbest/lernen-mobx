import * as React from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import { TodoListItem } from './TodoListItem';
import TodoModel from '../models/TodoModel';

export interface AddTodoInputProps {
    placeholder: string;
    onCreate: (name: string) => any;
}

@observer
export class AddTodoInput extends React.Component<AddTodoInputProps, undefined> {
    @observable name = '';

    constructor() {
        super();
    }

    render() {
        return (
            <input type="text"
                   placeholder={this.props.placeholder}
                   value={this.name}
                   onKeyDown={this.handleSubmit}
                   onChange={this.handleChange}
                   /> 
        )
    }

    @action
    handleSubmit = (e:any) => {
        const text = e.target.value.trim();
        if (e.which === 13) {
            this.props.onCreate(text);
            this.name = '';
        }
        return true;
    }

    @action
    handleChange = (e:any) => {
        this.name = e.target.value;
    }
}