import React from 'react';
import {ListsType} from "../../App";
import  s from "./Select.module.css"

type Select2Type = {
    value?: any
    onChange: (value: any) => void
    lists: ListsType[]
}

const Select2 = (props: Select2Type) => {
    const selectItems = props.lists.find(i => i.id === props.value)

    return (
        <div>
            <h3 className={s.select}>{selectItems && selectItems.title}</h3>
            <div>
                {props.lists.map(i => <div>{i.title}</div>)}
            </div>
        </div>
    );
};

export default Select2;