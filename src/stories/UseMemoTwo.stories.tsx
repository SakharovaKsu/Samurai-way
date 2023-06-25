import React, {useMemo, useState} from 'react';
import {UsersProps} from './React.memo.stories';

export default {
    title: 'React.memo two demo'
}

const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: UsersProps) => {
    console.log('USERS')

    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsTiReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUser] = useState(['Dima', 'Valera', 'Nina', 'Oly'])

    // const newUsers = user.filter(u => u.toLowerCase().indexOf('a') > -1)
    // в фильтре - покажи тех users, у которых есть 'a'

    // Так как фильтр иммутабельный, будет происходить лишняя пересовка, которая нам по идеи не нужна. Что делать?
    // Добавляем в функцию useMemo, как бы закешируем
    const newUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    // При добавлении нового user, происходит уже перерисовка, запускается newUsers
    const addUser = () => {
        // добавляем иммутабельно
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUser(newUsers)
    }

    // Когда мы используем просто map^ filter, сортировку -> создается новый массив, происходит перерисовка, даже когда никаких действий не было, поэтому добавляем подобные вещи в useMemo, что б уйти от лишней перерисовки

    // При клике на counter, когда мы увеличиваем счетчик, пользователи не перерисовываются
    // Если мы newUsers добавим в [users, counter] -> будет происходить перерисовка уже всего, так как мы меняем счетчик

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        {counter}
        <Users users={newUsers} />

    </div>
}
// Вторая причина использования useMemo, что бы реакт memo работал корректно. Так они друг друга дополняют. useMemo помогает реакт мемо не ошибиться.