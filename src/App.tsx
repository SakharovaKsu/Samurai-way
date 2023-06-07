import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating, {RatingValueType} from './components/Rating/Rating';
import UncontrollableOnOff from "./components/UncontrollableOnOff/UncontrollableOnOff";
import SelfControllingAccordion from "./components/SelfControllingAccordion/SelfControllingAccordion";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App(props: any) {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className="App">
            <div className={'box'}>
                <PageTitle title={ "This is APP Component" }/>

                {/* контролируемый рейтинг, так как данные мы передаем здесь */}
                <Accordion titleValue={ "Menu" } collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} items={[]}/>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <PageTitle title={ "My friends" }/>
                <Accordion titleValue={ "User" } collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}} items={[]}/>

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
