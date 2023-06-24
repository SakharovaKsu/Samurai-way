import { filterReducer, changeFilterAC } from './filterReducer';

test('should set the new filter value', () => {
    const initialState = 'all';

    const newValue = 'completed';

    const action = changeFilterAC(newValue);

    const newState = filterReducer(initialState, action);

    expect(newState).toEqual(newValue);
});

// Первый тест проверяет, что наш reducer корректно обрабатывает экшен CHANGE-FILTER и устанавливает новое значение фильтра в соответствии с переданным значением payload.

// test('should return the initial state if an unknown action type is provided', () => {
//     const initialState = 'all';
//
//     const action = { type: 'UNKNOWN-ACTION-TYPE' };
//
//     // @ts-ignore
//     const newState = filterReducer(initialState, action);
//
//     expect(newState).toEqual(initialState);
// });

// Второй тест проверяет, что если нам приходит неизвестный экшен, то мы возвращаем начальное состояние (state).