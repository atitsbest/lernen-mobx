import * as React from 'react';
import {observable} from 'mobx';
import {inject, observer} from 'mobx-react';

import { TodoStore } from '../stores/TodoStore';
import { STORE_TODO } from '../const/stores';
import { TodoList } from './TodoList';

export interface AppProps {
}

@inject(STORE_TODO)
@observer
export default class App extends React.Component<AppProps, {}> {
    constructor() {
        super();
    }

    getTodos() {
        const store = (this.props as any)[STORE_TODO] as TodoStore;
        return store.getAllTodos();
    }

    render() {
        const todos = this.getTodos();

        return(
            <div>
                <h1>It work's as an app</h1>
                <TodoList todos={todos} />
            </div>
        );
    }
}
