import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useStrict } from 'mobx'
// import { Provider } from 'mobx-react'
// import { STORE_TODO } from './const/stores';
// import TodoStore from './stores/TodoStore';

import App from './components/App'; 

// useStrict(true);

// const stores = {
    // [STORE_TODO]: new TodoStore()
// }

ReactDOM.render(
        <App />,
    document.getElementById('app')
);

