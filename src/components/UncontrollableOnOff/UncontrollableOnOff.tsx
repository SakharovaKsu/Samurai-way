import React, {useState} from 'react';



// небольшое пояснение
// в on получаем даннне в виде массива как правило, а onSet - это функция, которая меняет значение в on и заставляет перерисовывать реакт компонент
// при каждом изменении state происходит перерисовка

// если отрисовываем компонент несколько раз в App, то у каждого компонента будет свой state со своим значение, не смотря на то, что мы продублировали компонент

const UncontrollableOnOff = (props: any) => {
    console.log('onOff rendering')

    const [on, setOn] = useState(false)

    const onStyle = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '14px',
        color: on ? 'white' : 'black',
        backgroundColor: on ? 'green' : 'white',
        // если on ровняется true, то прими стиль зеленный, если false, то красный
    }
    const offStyle = {
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '14px',
        color: on ? 'black' : 'white',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red',
    }

    return (
        <div>
            <button style={onStyle} onClick={() => { setOn(true) }}>On</button>
            <button style={offStyle} onClick={() => { setOn(false) }}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default UncontrollableOnOff;