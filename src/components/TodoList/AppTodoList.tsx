import React, {useReducer, useState} from 'react';
import {Todolist} from './TodoList';
import {v1} from 'uuid';
import {addTasksAC, changeStatusAC, removeTaskAC, tasksReducer} from "./stateReducer";
import {changeFilterAC, filterReducer} from "./filterReducer";

export type FilterValuesType = "all" | "active" | "completed";

function AppTodoList() {

    let [tasks, dispatchTasks] = useReducer(tasksReducer, [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "Rest API", isDone: false},
        {id: v1(), title: "GraphQL", isDone: false},
    ]);
    let [filter, dispatchFilter] = useReducer(filterReducer, "all");


    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        dispatchTasks(removeTaskAC(id))
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        dispatchTasks(addTasksAC(title))
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks]);
        dispatchTasks(changeStatusAC(taskId, isDone))
    }

    let tasksForTodolist = tasks;

    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    function changeFilter(value: FilterValuesType) {
        dispatchFilter(changeFilterAC(value))
        // setFilter(value);
    }


    return (
        <div>
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeStatus}
                      filter={filter}
            />
        </div>
    );
}

export default AppTodoList;
