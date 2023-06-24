import React, {useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

export const Exemple = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    // useMemo производит вычисления, которое потом запоминает, до тех пор пока а не поменяется. (работает как при кэшировании)
    resultA = useMemo(() => {
        let tempResultA = 1 // временная переменная, с которой будет работать

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            } // специально написан такой расчет, что б реакт завис из-за долго вычисления
            tempResultA *= i
        }

        return tempResultA
    }, [a])



    for(let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr />
        <div>Result for a: {resultA}</div>
        <div>Result for b: {resultB}</div>
    </div>
}

// useMemo позволяет разгружать когда реакт начинает тормозить при вычислении или каком-либо выполнении действий
// это еще позволяет меньше воздействовать на батареи пользователя (телефона, например) и не разрешать ее быстро