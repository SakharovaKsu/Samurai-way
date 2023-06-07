import {ChangeEvent, useState} from "react";

export default {
  title: 'Checkbox',
  // component: Checkbox,
}


export const ControlledCheckbox = () => {
    const [parentCheckbox, setParentCheckbox] = useState(false)

    const checkboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        const valueCheckbox = e.currentTarget.checked
        setParentCheckbox(valueCheckbox)
    }

    return (
        <input type={"checkbox"} checked={parentCheckbox} onChange={checkboxChange}/>
    )
}
