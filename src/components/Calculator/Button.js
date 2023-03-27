import React, { useContext } from 'react'
import { CalcContext } from './CalcContext'

export default function Button({ value, theme }) {

    const style = {
        '=': `${theme.text} opacity-50 font-light`,
        'C': 'text-orange-500 font-semibold',
        '+-': `${theme.text} opacity-50 font-light`,
        '%': `${theme.text} opacity-50 font-light`,
        '/': `${theme.text} opacity-50 font-light`,
        '*': `${theme.text} opacity-50 font-light`,
        '-': `${theme.text} opacity-50 font-light`,
        '+': `${theme.text} opacity-50 font-light`,
        '.': `${theme.text} opacity-50 font-light`,
        '1': `${theme.text} font-light`,
        '2': `${theme.text} font-light`,
        '3': `${theme.text} font-light`,
        '4': `${theme.text} font-light`,
        '5': `${theme.text} font-light`,
        '6': `${theme.text} font-light`,
        '7': `${theme.text} font-light`,
        '8': `${theme.text} font-light`,
        '9': `${theme.text} font-light`,
        '0': `${theme.text} font-light`
    }

    const { calc, setCalc } = useContext(CalcContext)

    //comma
    const commaClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        })
    }

    //C
    const resetClick = () => {
        setCalc({
            sign: '',
            num: 0,
            res: 0
        })
    }

    //Any number
    const handleClickNumber = () => {
        const numString = value.toString();

        let numValue;
        if (numString === '0' && calc.num === 0) {
            numValue = '0'
        } else {
            numValue = Number(calc.num + numString)
        }

        setCalc({
            ...calc,
            num: numValue
        })
    }

    const calculate = (a, b, op) => {
        if (op === '+') return a + b;
        if (op === '-') return a - b;
        if (op === '*') return a * b;
        if (op === '/') return a / b;
        return a
    }

    //Any operation
    const signClick = () => {
        setCalc({
            sign: value,
            res: (!calc.res && calc.num) ? (calc.num) : (calculate(calc.res, calc.num, calc.sign)),
            num: 0
        })
    }

    //=
    const equalsClick = () => {
        if (calc.res && calc.num) {
            setCalc({
                res: calculate(calc.res, calc.num, calc.sign),
                sign: '=',
                num: 0
            })
        }
    }

    //%
    const percentClick = () => {
        setCalc({
            res: (calc.num / 100),
            sign: '',
            num: (calc.num / 100)
        })
    }

    //+-
    const invertClick = () => {
        setCalc({
            ...calc,
            num: calc.num ? calc.num * -1 : 0
        })
    }
    

    const handleBtnClick = () => {
        const results = {
            '.': commaClick,
            'C': resetClick,
            '/': signClick,
            '*': signClick,
            '-': signClick,
            '+': signClick,
            '=': equalsClick,
            '%': percentClick,
            '+-': invertClick
        }

        if (results[value]) {
            return results[value]()
        } else {
            return handleClickNumber()
        }
    };

    return (
        <div
            className={`cursor-pointer select-none text-3xl py-6 px-12 hover:bg-gray-500/5 active:bg-gray-500/10 rounded text-center ${value === '=' && 'col-span-2'}`}
            onClick={handleBtnClick}
        >
            <span className={`${style[value]}`}>{value}</span>
        </div>
    )
}
