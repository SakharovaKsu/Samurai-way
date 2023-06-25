import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

export type UsersProps = {
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
// В User добавляем компонент UsersSecret и теперь она не будет перерисовываться когда меняется counter.
//  Memo повышает производительность React-приложения

export const Exemple = () => {
    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState(['Dima', 'Valera', 'Nina'])

    const addUsers = () => {
        // если мы добавляем мутабельно, то перерисовки не будет
        // user.push('Sveta ' + new Date().getTime())

        // добавляем иммутабельно
        const newUsers = [...user, 'Sveta ' + new Date().getTime()]
        setUser(newUsers)
    }

    return <div>
        <NewMessageCounter count={counter} />
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUsers}>Add user</button>
        <Users users={user} />
    </div>
}

// Как работает реакт без memo? При клике на кнопку, будут перерисовываться все компоненты находящие в Exemple, даже те, у которых изменений не было (Почему перерисовываются то все? Так как изменения же вносятся в счетчике.

// Memo используется для оптимизации производительности компонентов, с целью предотвращения ненужных повторных рендеров.

// Частота использования memo зависит от конкретной ситуации и требований к производительности приложения. Если компонент имеет сложную логику и его рендеринг занимает много времени, то использование memo может значительно повысить производительность приложения, уменьшив количество повторных рендеров. Однако, если компонент простой и его рендеринг занимает небольшое количество времени, то использование memo может быть не столь критичным.

// Также, использование memo может быть полезным в случаях, когда компонент получает большое количество пропсов, которые не используются в его рендеринге. В этом случае использование memo позволяет избежать повторного рендеринга компонента при обновлении этих пропсов.
