import * as React from "react";
import { mount, shallow } from 'enzyme';
import App from "./App";
import { TodoStore } from '../stores/TodoStore';


QUnit.test('<App> renders correctly', assert => {
    const app = mount(<App todos={new TodoStore()} />);

    assert.equal(app.find('h1').text(), "It work's as an app ");
    assert.equal(app.find('.todo-list-item').length, 4);
});

// QUnit.test('<App> renders correctly (only completed))', assert => {
//     const app = mount(<App todos={new TodoStore()} />);
//     (app as any).filter = 'completed';

//     assert.equal(app.find('h1').text(), "It work's as an app completed");
//     assert.equal(app.find('.todo-list-item').length, 0);
// });