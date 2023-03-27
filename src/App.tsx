import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./Todolist";

function App() {
    const todoListTitle_1: string = "What to learn"
    const todoListTitle_2: string = "What to buy"

    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 4, title: "BREAD", isDone: true},
        {id: 5, title: "WATER", isDone: false},
        {id: 6, title: "SALT", isDone: false},
    ]
    return (
        <div className="App">
            <Todolist
                title={todoListTitle_1}
                tasks={tasks_1}
            />
            <Todolist
                tasks={tasks_2}
                title={todoListTitle_2}/>

        </div>
    );
}

export default App;
