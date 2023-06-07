import {ChangeEvent, useState} from "react";

export default {
  title: 'Select',
  // component: Select,
}

export const ControlledSelect = () => {
    const [parentSelect, setParentSelect] = useState<string | undefined>(undefined)

    const selectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const valueSelect = e.currentTarget.value
        setParentSelect(valueSelect)
    }

    return (
        <select value={parentSelect} onChange={selectChange}>
            <option>none</option>
            <option value={'1'} >Minsk</option>
            <option value={'2'}>Orenburg</option>
            <option value={'3'}>Samara</option>
        </select>
    )
}