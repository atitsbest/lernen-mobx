import * as React from 'react';
import * as ReactDOM from 'react-dom';

import TodoList from './components/TodoList'; 

class App extends React.Component<undefined, undefined> {
    constructor() {
        super();
    }

    render() {
        return(
            <div>
                <h1>It work's as an app</h1>
                <TodoList />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

console.info('WORKS');

