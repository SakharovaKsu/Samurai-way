import { tasksReducer, removeTaskAC } from './stateReducer';

describe('tasksReducer', () => {
    it('should remove a task from the list', () => {
        const initialState = [
            { id: '1', title: 'Task 1', isDone: true },
            { id: '2', title: 'Task 2', isDone: true },
            { id: '3', title: 'Task 3', isDone: true },
        ];
        const action = removeTaskAC('2');
        const newState = tasksReducer(initialState, action);
        expect(newState).toEqual([
            { id: '1', title: 'Task 1', isDone: true },
            { id: '3', title: 'Task 3', isDone: true },
        ]);
    });

    // it('should return the initial state for an unknown action', () => {
    //     const initialState = [
    //         { id: '1', title: 'Task 1', isDone: true },
    //         { id: '2', title: 'Task 2', isDone: true },
    //         { id: '3', title: 'Task 3', isDone: true },
    //     ];
    //     const action = { type: 'UNKNOWN_ACTION' };
    //     const newState = tasksReducer(initialState, action);
    //     expect(newState).toEqual(initialState);
    // });
});