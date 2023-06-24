import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrollableOnOff from "./components/UncontrollableOnOff/UncontrollableOnOff";
import SelfControllingAccordion from "./components/SelfControllingAccordion/SelfControllingAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";
import {items} from "./components/Accordion/Accordion.stories";
import Select from "./components/Select/Select";
import Select2 from "./components/Select/Select-2";
import AppTodoList from "./components/TodoList/AppTodoList";

export type DropdownStateType = {
    open: boolean
}

export type ListsType = {
    id: string
    title: string
}

function App(props: any) {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [dropdownState, setDropdownState] = useState<DropdownStateType>({ open: false })
    const [value, setValue] = useState('1')

    const lists: ListsType[] = [
        {id: '1', title: 'Sort'},
        {id: '2', title: 'Popular'},
        {id: '3', title: 'By rating'},
        {id: '4', title: 'Minimum price'},
        {id: '5', title: 'Maximum price'}
    ]

    const buttonOnClickHandler = () => {
        setDropdownState({open: !dropdownState.open })
    }

    const onClickAccordion = (id: void) => {
        alert(`user with ID ${id} should be happy`)
    }
    return (
        <div className={'App'}>
            <div className={'box'}>
                <PageTitle title={ "This is APP Component" }/>

                {/* контролируемый рейтинг, так как данные мы передаем здесь */}
                <Accordion titleValue={ "Menu" }
                           collapsed={accordionCollapsed}
                           onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                           items={items}
                           onClick={onClickAccordion}/>

                <Rating value={ratingValue} onClick={setRatingValue}/>

                <PageTitle title={ "My friends" }/>

                {/* on={switchOn} по умолчанию выключен*/}
                {/* Здесь в onChange передается булево значение от ребенка к родителю */}
                <OnOff on={switchOn} onChange={(on) => setSwitchOn(on)}/>
            </div>

            {/* неконтролируемые */}
            {/* такие компоненты не используются, так как не контролируем данные */}
            <div className={'box'}>
                <UncontrollableOnOff/>
                <UncontrollableOnOff/>
            </div>

            <div className={'box'}>
                {/* неконтролируемый рейтинг и аккордион, так как данные передаем через стайт и меняем по клику */}
                <SelfControllingAccordion titleValue={'Profile'}/>
                <UncontrolledRating />
            </div>


            <Select value={'1'} buttonOnClickHandler={buttonOnClickHandler} lists={lists} dropdownState={dropdownState}/>
            <Select2 onChange={setValue} lists={lists} value={value}/>

            <AppTodoList />
    </div>
  );
}


// Типизируем, что должно попасть в пропс
type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('AppTitle rendering');

  return <h1>{ props.title }</h1>
}

export default App;
