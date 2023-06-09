import React from 'react';
import {DropdownStateType, ListsType} from "../../App";

export type SelectType = {
    lists: ListsType[]
    buttonOnClickHandler: () => void
    dropdownState: DropdownStateType
    value: string
}

const Select = (props: SelectType) => {
    const selectItems = props.lists.find(i=> i.id === props.value)

    return (
        <div>
            <button type="button" value={props.value}
                    onClick={props.buttonOnClickHandler}>
                {selectItems && selectItems.title}
            </button>
            { props.dropdownState.open && <SelectBody onClick={props.buttonOnClickHandler} lists={props.lists}/> }
            {/*отображать открытое меню в том случае, если «dropdownState» имеет значение {open: true}.*/}
        </div>
    );
};

type SelectBodyType = {
    onClick: () => void
    lists: ListsType[]
}

const SelectBody = (props: SelectBodyType) => {
    return (
        <ul>
            {props.lists.map(i => <li key={i.id}>{i.title}</li>)}
        </ul>
    )
}

export default Select;