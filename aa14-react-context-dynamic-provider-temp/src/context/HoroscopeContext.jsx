import { createContext, useState } from 'react';
import * as horoscopesObj from '../data/horoscopes.js'

export const HoroscopeProvider = props => {
    const [currentSign, setCurrentSign] = useState('Capricorn')
    const sign = horoscopesObj[currentSign]
    return (
        <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
            {props.children}
        </HoroscopeContext.Provider>
    )
}

export const HoroscopeContext = createContext();
