import { tasksReducer, removeTaskAC, addTasksAC, changeStatusAC } from './stateReducer';

test('should remove a task from the list', () => {
    const initialState = [
        { id: '1', title: 'Task 1', isDone: false },
        { id: '2', title: 'Task 2', isDone: false },
        { id: '3', title: 'Task 3', isDone: false },
    ];

    const action = removeTaskAC('2');

    const newState = tasksReducer(initialState, action);

    expect(newState).toEqual([
        { id: '1', title: 'Task 1', isDone: false },
        { id: '3', title: 'Task 3', isDone: false },
    ]);
})

// Первый тест проверяет, что функция tasksReducer правильно удаляет задачу из списка, когда действие REMOVE-TASK передается в качестве аргумента. Создаем начальное состояние initialState, вызываем removeTaskAC с идентификатором задачи, которую нужно удалить, и вызываем tasksReducer с начальным состоянием и созданным действием. Затем мы сравниваем полученное новое состояние newState с ожидаемым результатом.

test('should add a new task to the list', () => {
    const initialState = [
        { id: '1', title: 'Task 1', isDone: false },
        { id: '2', title: 'Task 2', isDone: false },
    ];

    const action = addTasksAC('Task 3');

    const newState = tasksReducer(initialState, action);

    expect(newState).toEqual([
        { id: expect.any(String), title: 'Task 3', isDone: false },
        { id: '1', title: 'Task 1', isDone: false },
        { id: '2', title: 'Task 2', isDone: false },
    ]);
})

// 2ой тест проверяет, что функция tasksReducer правильно добавляет новую задачу в список, когда действие ADD_TASK передается в качестве аргумента. Создаем начальное состояние initialState, вызываем addTasksAC с названием новой задачи, и вызываем tasksReducer с начальным состоянием и созданным действием. Затем мы сравниваем полученное новое состояние newState с ожидаемым результатом, который содержит новую задачу в начале списка.

test('should change the status of a task in the list', ()=> {
    const initialState = [
        { id: '1', title: 'Task 1', isDone: false },
        { id: '2', title: 'Task 2', isDone: false },
    ];

    const action = changeStatusAC('2', true);

    const newState = tasksReducer(initialState, action);

    expect(newState).toEqual([
        { id: '1', title: 'Task 1', isDone: false },
        { id: '2', title: 'Task 2', isDone: true },
    ]);
})

// 3ий тест проверяет, что функция tasksReducer правильно изменяет статус задачи в списке, когда действие CHANGE-STATUS передается в качестве аргумента. Создаем начальное состояние initialState, вызываем changeStatusAC с идентификатором задачи и новым статусом, который нужно установить, и вызываем tasksReducer с начальным состоянием и созданным действием. Затем мы сравниваем полученное новое состояние newState с ожидаемым результатом, в котором статус задачи был изменен на новое значение.

// test('should return the initial state for an unknown action', () => {
//     const initialState = [
//         { id: '1', title: 'Task 1', isDone: false },
//         { id: '2', title: 'Task 2', isDone: false },
//     ];
//
//     const action = { type: 'UNKNOWN_ACTION' };
//
//     // @ts-ignore
//     const newState = tasksReducer(initialState, action);
//
//     expect(newState).toEqual(initialState);
// })

// 4ый тест проверяет, что функция tasksReducer правильно возвращает начальное состояние, когда передается неизвестное действие. Создаем начальное состояние initialState, создаем неизвестное действие action, и вызываем tasksReducer с начальным состоянием и созданным действием. Затем мы сравниваем полученное новое состояние newState с начальным состоянием initialState.
