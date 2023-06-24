import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

type UsersProps = {
    users: Array<any>
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
// В User добавляем компонент UsersSecret и теперь она не будет перерисовываться когда меняется counter

export const Exemple = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['Dima', 'Valera', 'Nina'])

    return <div>
        <NewMessageCounter count={counter} />
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <Users users={user} />
    </div>
}

// Как работает реакт без memo? При клике на кнопку, будут перерисовываться все компоненты находящие в Exemple, даже те, у которых изменений не было (Почему перерисовываются то все? Так как изменения же вносятся в счетчике.