import React, {useMemo, useState} from 'react';

export default {
    title: 'React.memo two demo'
}

type CityType = {
    id: number
    city: string
}

type CityArrayType =  CityType[]

type FilterType = 'all' | 'id' | 'd'

const cityArray: CityArrayType = [
    {id: 1, city: 'Moscow'},
    {id: 2, city: 'Krasnodar'},
    {id: 3, city: 'Istanbul'},
    {id: 4, city: 'Madrid'},
    {id: 5, city: 'Rome'},
]

export const CitiesArray = (props: any) => {
    console.log('render cities')
    return <ul>
        {props.city.map((c: any) => <li key={c.id}>{c.city}</li>)}
    </ul>
}

const Cities = React.memo(CitiesArray)

export const CityFiltered = () => {
    const [city, setCity] = useState<CityArrayType>(cityArray)

    // // фильтрация если есть в название "d"
    // const NewCities = useMemo(() => {
    //     console.log('render city "d"')
    //     return city.filter(c => c.city.toLowerCase().indexOf('d') > -1)
    // },[city])
    //
    // const CitiesHandler = () => {
    //     setCity(NewCities)
    // }
    //
    // // фильтрация если id четное
    // const CitiesId = useMemo(() => {
    //     console.log('render id')
    //     return city.filter(c => c.id % 2 === 1)
    // },[city])
    //
    // const CitiesIdHandler = () => {
    //     setCity(CitiesId)
    // }
    //
    // const CitiesAllHandler = () => {
    //     setCity(cityArray)
    // }

    // return <div>
    //     <Cities city={city}/>
    //     <button onClick={CitiesAllHandler}>All</button>
    //     <button onClick={CitiesHandler}>Where is the letter 'd'</button>
    //     <button onClick={CitiesIdHandler}>where are even id</button>
    // </div>

    const [filter, setFilter]= React.useState<FilterType>('all')

    const filterCities = () => {
        if(filter === 'id') {
            city.filter(c => c.id % 2 === 1)
        }

        if(filter === 'd') {
            city.filter(c => c.city.toLowerCase().indexOf('d') > -1)
        }
        return city
    }



    const onClickHandler = (nameButton: FilterType ) => {
        setFilter(nameButton)
    }

    return <div>
        <Cities city={city}/>
        <button onClick={() => onClickHandler('all')}>All</button>
        <button onClick={() => onClickHandler('d')}>Where is the letter 'd'</button>
        <button onClick={() => onClickHandler('id')}>where are even id</button>
    </div>
}

// почему появляются оба рендера из функций?
// как сделать фильтр по всему списку, а не фильтр на фильтре?