import React, {useState, KeyboardEvent} from 'react';
import {ListsType} from "../../App";
import  s from "./Select.module.css"

type Select2Type = {
    value?: string
    onChange: (value: string) => void
    lists: ListsType[]
}

const Select2 = (props: Select2Type) => {
    const [active, setActive] = useState(false)
    const [hoverElementValue, setHoverElementValue] = useState(props.value)

    const selectItems = props.lists.find(i => i.id === props.value)

    console.log(selectItems)

    const hoverItem = props.lists.find(i => i.id === hoverElementValue)

    const toggleItems = () => setActive(!active)

    const onClickHandler = (id: string) => {
        props.onChange(id);
        toggleItems();
    }

    // const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
    //     for(let i = 0; i < props.lists.length; i++) {
    //         if(props.lists[i].id === hoverElementValue) {
    //             if(props.lists[i+1]) {
    //                 props.onChange(props.lists[i + 1].id)
    //                 break
    //             }
    //         }
    //     }
    // }

    // onKeyUp - событие, которое возникает, когда пользователь отпускает клавишу на клавиатуре после того, как она была нажата.

    return (
        // <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
        <div className={s.select}>
            <span className={s.title} onClick={toggleItems}>{selectItems && selectItems.title}</span>
            {active &&
                <div className={s.items}>
                    {props.lists.map(i =>
                        <div className={s.item + ' ' + (hoverItem === i ? s.selected : '')}
                             onMouseEnter={() => setHoverElementValue(i.id)}
                             key={i.id}
                             onClick={() => onClickHandler(i.id)}
                        >{i.title}</div>
                    )}
                </div>
            }
        </div>
    );
};

export default Select2;