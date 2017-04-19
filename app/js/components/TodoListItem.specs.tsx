import * as React from "react";
import { mount, shallow } from 'enzyme';
import { TodoListItem } from "./TodoListItem";
import TodoModel from '../models/TodoModel';


QUnit.module("<TodoListItem>");

QUnit.test('renders name', assert => {
    const model = new TodoModel('NAME');
    const app = shallow(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const name = li.find('.name').text();
    const checkbox = li.find({type: 'checkbox'});
    assert.ok(li);
    assert.equal(name, "NAME");
});

QUnit.test('renders completed with doneDate', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    const app = shallow(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');
});

QUnit.test('sets doneDate when checkbox is checked', assert => {
    const model = new TodoModel('NAME');
    const app = mount(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, false, 'Checkbox sollte nicht angehakt sein!');

    checkbox.simulate('change', {target: {checked: true}});
    assert.ok(model.doneDate, 'Datum sollte gesetzt sein.');
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');
});

QUnit.test('clears doneDate when checkbox is unchecked', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    const app = mount(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');
    const checkbox = li.find({type: 'checkbox'});
    assert.equal(checkbox.props().checked, true, 'Checkbox sollte angehakt sein!');

    checkbox.simulate('change', {target: {checked: false}});
    assert.notOk(model.doneDate, 'Datum sollte nicht gesetzt sein.');
    assert.equal(checkbox.props().checked, false, 'Checkbox sollte nicht angehakt sein!');
});

QUnit.test('shows doneDate when completed', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    const app = mount(<TodoListItem model={model} />);

    const li = app.find('.todo-list-item');

    assert.equal(li.find('.done-date').length, 1);
});

QUnit.test('can be removed', assert => {
    const model = new TodoModel('NAME');
    model.setDone();
    let deleted = false;
    const deleteFn = (todo:TodoModel) => deleted = true;
    const app = mount(<TodoListItem model={model} onDelete={deleteFn} />);

    const del = app.find('.todo-list-item > .delete');

    del.simulate('click');
    assert.ok(deleted, 'Wurde nicht gelöscht.');
});

QUnit.test('has no "delete" link if onDelete not provided', assert => {
    const model = new TodoModel('NAME');
    const app = mount(<TodoListItem model={model} />);

    const del = app.find('.todo-list-item > .delete');

    assert.equal(del.length, 0, 'Es sollte kein "Löschen" Link sichtbar sein.');
});