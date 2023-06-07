import {ChangeEvent, useRef, useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
  title: 'input',
  // component: Input,
}

// не контролируемые сценарии с инпутом необходимо избегать, мы должна его контролировать

// неконтролируемый инпут
export const UncontrolledInput = () => <input />

// контролируемый инпут, значение достаем и сетаем
export const TrackValueOfUncontrolledInput = () => {

    const [value, setValue] = useState('')

    return (
        <>
            <input onChange={(e) => {
                const actualValue = e.currentTarget.value;
                setValue(actualValue)
            }}
            /> {value}
        </>
    )
}

export const GetValueOfUncontrolledInputByButtonPress = () => {

    {/*здесь мы не можем использовать onChange у инпута, что б взять value, так как событие привязывается к инпуту, поэтому воспользуемся другим вариантом */}

    const [value, setValue] = useState('')

    // Сoздаем ссылку, для того что б взять значение у инпута
    const inputRef = useRef<HTMLInputElement>(null)

    // через ссылку получаем значение из инпута и сетаем, но использовать метод ссылки, тоже вариант плохой, хоть и работающий
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef  } />
            <button onClick={save}>save</button> - actual value: {value}
        </>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value // получаем значение
        setParentValue(value) // сетаем его
    }

    return (
        <input value={parentValue} onChange={inputChange}/>
    )
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


// Почему плохая практика использовать useRef на input? Если компонент перерисовывается и повторно монтирует элемент input, useRef может сохранять старую ссылку на input, вместо того, чтобы создать новую ссылку на новый элемент input. Это может привести к непредсказуемому поведению компонента, например, к тому, что изменения в input не будут отображаться на экране.

// Вместо useRef для работы с input в React следует использовать управляемые компоненты (controlled components). Управляемые компоненты - это компоненты, значения которых контролируются React, а не DOM. Для создания управляемого компонента input, следует использовать состояние (useState) для хранения значения input. При изменении значения input, React будет обновлять состояние, что приведет к перерисовке компонента с новым значением в input. А useRef используется для доступа к элементам DOM