import {FilterValuesType} from "./AppTodoList";

export const filterReducer = (state: FilterValuesType, action: ChangeFilterType): FilterValuesType => {
    switch (action.type) {
        case 'CHANGE-FILTER': {
            return action.payload.value
        }
        default: return state
    }
}

export type ChangeFilterType = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value: FilterValuesType) => {
    return{
        type: 'CHANGE-FILTER',
        payload: {value}
    } as const
}