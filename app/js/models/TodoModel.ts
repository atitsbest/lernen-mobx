import { observable, action } from 'mobx';

let _id = 0;

export default class TodoModel {
    id = ++_id; // Für react;

    @observable name = '';
    @observable doneDate: Date = null;

    constructor(name:string) {
        this.name = name;
    }

    @action setDone = () => {
        this.doneDate = new Date();
    }

    @action clearDone = () => {
        this.doneDate = null;
    }
}