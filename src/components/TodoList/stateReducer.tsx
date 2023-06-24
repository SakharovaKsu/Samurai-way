import {v1} from "uuid";
import {TaskType} from './TodoList';

export const tasksReducer = (state: TaskType[], action: TsarType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state.filter(t => t.id !== action.payload.id)
        }
        case "ADD_TASK": {
            const newState = {id: v1(), title: action.payload.title, isDone: false};
            return [newState, ...state]
        }
        case "CHANGE-STATUS": {
            const task = state.find(t => t.id === action.payload.taskId);
            if (task) {
                task.isDone = action.payload.isDone;
            }
            return [...state]
        }
        default: return state
    }
}

// Функция, которая принимает 2 аргумента.
// Action это функция, которая возвращает объект.
// Switch принимает объект со свойством type.
// Каждый case будет возвращать измененный state.
// Обязательно типизируем то, что ruducer возвращает! (добавляем перед стрелкой)

type TsarType = RemoveTaskACType | AddTasksACType | ChangeStatusACType
// когда нужно соедить несколько типизаций, проще всего соедить в одну общую типизацию, чем писать это в самой функции (сильно может раздуться)

// ReturnType<typeof removeTaskAC> типизация того, что вернет функция
// Почему типизировать так лучше? Если мы пишем по старому (прописывая там name: string, age: number), то дописав какой-то одно значение, нужно бегать по всему проекту и дописывать его. А так мы типизируем сразу все, что функция возвращает и дописав объект, дописывать в типизации ничего не надо.
type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string) => {
    // возвращаем объект
    return {
        type: 'REMOVE-TASK', // обязательное поле-ключ для switch, не зависимо в каком размере он получается
        // данные, которые к нам приходят, заворачиваем в payload
        payload: {id}
    } as const
    // Всегда не забываем дописывать as const, иначе пойдут ошибки, в которых разобраться будет крайне сложно
    // 'REMOVE-TASK' - это не стринга. Это 'REMOVE-TASK'! Это константа
}

type AddTasksACType = ReturnType<typeof addTasksAC>
export const addTasksAC = (title: string) => {
    return {
        type: 'ADD_TASK',
        payload: {title}
    } as const
}

type ChangeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (taskId: string, isDone: boolean) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {taskId, isDone}
    } as const
}