import React from 'react';

// компонент для объяснения state
export type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: PropsType) => {
    console.log('onOff rendering')

    const onStyle = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '14px',
        color: props.on ? 'white' : 'black',
        backgroundColor: props.on ? 'green' : 'white',
        // если on ровняется true, то прими стиль зеленный, если false, то красный
    }
    const offStyle = {
        display: 'inline-block',
        border: '1px solid black',
        marginLeft: '10px',
        padding: '14px',
        color: props.on ? 'black' : 'white',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        display: 'inline-block',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        border: '1px solid black',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red',
    }

    const onClicked = () => {
        props.onChange(true)
    }

    const offClicked = () => {
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={onClicked}>On</button>
            <button style={offStyle} onClick={offClicked}>Off</button>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;